var map, oTable;
var internship_data = {'countries':{},'regions':{}};
var internship_locations = {
	'countries':{
		'BRA':{'x':410, 'y':450},
		'USA':{'x':250, 'y':250}
	}, 
	'regions':{
		'African_Countries': {'x':635, 'y':350},
		'Australia_Countries': {'x':1010, 'y':490},
		'Asian_Countries': {'x':900, 'y':275},
		'European_Countries': {'x':625, 'y':225},
		'South_American_Countries': {'x':385, 'y':450},
		'North_American_countries': {'x':250, 'y':225},
		'Oceanian_Countries': {'x':0, 'y':0}
	}
};
var models = ['languages','fields','industries','providers','locations','academic_focuses'];
var booleans = ['for_credit','part_time','full_time','us_citizenship','paid'];
var filters = {'filters': true, 'languages':null, 'fields':null, 'industries':null, 'providers':null, 'locations':null, 'academic_focuses':null, 'for_credit': null, 'full_time': null, 'part_time': null, 'us_citizenship': null, 'paid': null};
var mapIsLoaded = false, dataIsLoaded = false;

$(function(){
	//Initial width and height set for main divs based on the size of the user screen
	$('#svg').width($(window).width());
	$('#svg').height($(window).height()-50);
	
	$('#list').width($(window).width());
	$('#list').height($(window).height()-50);
	
	//Set the click listener for the View Map/View List Button
	$("#MapListToggle").click(function(){
		toggleMapListView();
	});
	//Set the click listener for the Click Button
	$("#FilterToggle").click(function(){
		$("#filters").toggle();
	});
	//Set the click listener for the svg and list divs to close the filter div if its open
	$("#svg").click(function(){
		if($('#filters').is(':visible')){
			$('#FilterToggle').trigger('click');
		}
	});
	$("#list").click(function(){
		if($('#filters').is(':visible')){
			$('#FilterToggle').trigger('click');
		}
	});
	//Set the loading gif
	$('#svg').showLoading();
	//load the initial data from the server (Asynchronously)
	getInitialData();
	//Load the svg data from the server (Asynchronously)
	getMapData();
	//setup the filters
	initFilters();
	//calls a function that makes sure the Asynchronous calls are both done before continuing
	WaitUntilTheMapAndDataAreLoaded();
});
function initMap(){
	//load the svg data into the svg-map div
	map = $('#svg-map').svg('get');
	//add the id to the svg map object
	map.configure({id:'map'}, false);
	//do an initial window zoom
	var boundingBox = map.getElementById('map').getBBox();
	var base_view = parseInt(boundingBox.x) + ', ' + parseInt(boundingBox.y) + ', ' + parseInt(boundingBox.width) + ', ' + parseInt(boundingBox.height);
	//animates the view change.  Maybe we should just fade out, move, and fade back in
	$("#map").animate({svgViewBox: base_view}, 1000);
	$("#zoomout").click(function(){
		resetMap();
		map.change(map.getElementById("Country_names_Lines"), {display: 'none'});
		$("#map").animate({svgViewBox: base_view}, 1000);
	});
	$("#map").children('g').each(function(){
		var id = $(this).attr('id');
		if(id == 'Country_names_Lines'){
			return;
		}
		if(id == 'internships'){
			return;
		}
		//The region - as defined as the label name on the map (with underscores for spaces) is the key with an array of UN Codes as the value
		internship_data.regions[id] = new Array();
		$(this).children('g').each(function(){
			internship_data.regions[id].push($(this).attr('id'));
		});
		//Sets the class clickable as to show the pointer
		map.change(map.getElementById($(this).attr('id')), {class: 'clickable'});
		//sets up the action to take on click
		$(this).click(function(){
			boundingBox = map.getElementById($(this).attr('id')).getBBox();
			//viewBox numbers => <min-x>, <min-y>, <width> and <height>
			var view = parseInt(boundingBox.x) + ', ' + parseInt(boundingBox.y) + ', ' + parseInt(boundingBox.width) + ', ' + parseInt(boundingBox.height);
			//animates the view change.  Maybe we should just fade out, move, and fade back in
			$("#map").animate({svgViewBox: view}, 1000);
			
			//Shows the Country Names
			map.change(map.getElementById("Country_names_Lines"), {display: ''});
			
			resetGroup('internships');
			$('#'+$(this).attr('id')).children('g').each(function(){					
				displayInternships($(this).attr('id'), true);
			});
		});
	});
	//setup the group to handle interships
	map.group(null, 'internships');
	resetMap();
}
function resetMap(){
	$('#dropdown').hide( 'fade', {}, 1000);
	resetGroup('internships');
	$('#map').children('g').each(function(){
		displayInternships($(this).attr('id'), false);
	});
}
function displayInternships(id, include_list){
	
	var element = map.getElementById(id);
	var parent = map.getElementById('internships');
					
	//find the count for this id
	var count = 0;
	if (typeof element.getBBox == 'undefined') {
		return;
	}
	var boundingBox = element.getBBox();
	
	var midPointX = boundingBox.x + ( boundingBox.width / 2 );
	var midPointY = boundingBox.y + ( boundingBox.height / 2 );
	var radiusOfCircle = 0;
	if(internship_data.regions[id]){
		jQuery.each(internship_data.regions[id], function(index){
			count += getCountryCount(internship_data.regions[id][index]);
		});
		var midPointX = internship_locations.regions[id].x;
		var midPointY = internship_locations.regions[id].y;
		radiusOfCircle = 40;
		
	} else if(internship_data.countries[id]) {
		count = getCountryCount(id);
		var midPointX = internship_locations.countries[id].x;
		var midPointY = internship_locations.countries[id].y;
		radiusOfCircle = 10;
	} else {
		return;
	}
	if(count <= 0) {
		return;
	}
	var divisorXoffset = 0;
	if(count < 10) {
		divisorXoffset = 4;
	} else {
		divisorXoffset = 2;
	}
	map.circle(parent, midPointX, midPointY, radiusOfCircle, {stroke: 'transparent', color: 'red',strokeWidth: 1	, fill: 'transparent', id: "clickable_circle_"+id});
	map.text(parent, midPointX - (radiusOfCircle/divisorXoffset), midPointY + (radiusOfCircle/3), ''+count+'', {fontSize: radiusOfCircle, fill: 'black', id: "clickable_number_"+id});
	//this imitates a click on the circle
	$("#clickable_number_"+id).click(function(){
		$("#clickable_circle_"+id).trigger('click');
	});
					
	if(include_list == true){
		$("#clickable_circle_"+id).click(function(){
			$('#dropdown ul').html('');
			jQuery.each(internship_data.countries[id], function(index){
				var internship = internship_data.countries[id][index];
				$('#dropdown ul').append(
					'<li id="click-'+internship.id+'">' + internship.name + ' (' + internship.provider_name + ') </li>'
				);
				$('#click-'+internship.id).click(function(){
					setupDialogBox(internship.id);
				});
			});
			
			$('#dropdown').show( 'fade', {}, 1000);
		});
	
	} else {
		$("#clickable_circle_"+id).click(function(){
			$('#'+id).trigger('click');
		});
	}
}
function getCountryCount(id){
	if(typeof internship_data.countries[id] == 'undefined'){
		return 0;
	}
	return internship_data.countries[id].length;
}
function resetGroup(id){
	map.remove(map.getElementById(id));
	map.group(null, id, {class: 'clickable'});
}
function setupDialogBoxes(){
	$.each(internship_data.countries, function(id){
		$.each(internship_data.countries[id], function(index){
			var internship = internship_data.countries[id][index];
			$('#svg').append(
				'<div id="dialog-'+internship.id+'" class="internship_details" title="'+internship.name+'">' 
				+ '<p>' + internship.location + ': ' + internship.info + '</p>'
				+ '</div>'
			);
		});
	});
}
function showBoundingBox (element) {
	var boundingBox;
	if (typeof element.getBBox != 'undefined') {
		boundingBox = element.getBBox();
		var rect = element.ownerDocument.createElementNS('http://www.w3.org/2000/svg', 'rect');
		rect.setAttributeNS(null, 'x', boundingBox.x);
		rect.setAttributeNS(null, 'y', boundingBox.y);
		rect.setAttributeNS(null, 'width', boundingBox.width);
		rect.setAttributeNS(null, 'height', boundingBox.height);
		rect.setAttributeNS(null, 'fill', 'lightblue');
		element.parentNode.insertBefore(rect, element);
	}
}
function setupDialogBox(id){
	if($('#dialog-'+id).html() == null){
		$('#svg').showLoading();
		$.ajax({
			url: '/internships/' + id + '.json',
		  	dataType: 'json',
		  	success: function(data){
					var html = new EJS({ url: 'javascripts/templates/modal_view.ejs'}).render(data);
					$('#dialogs').append(html);
					$('#tabs-' + id).tabs({ selected: 0});
					initDialog(id);
					$('#svg').hideLoading();
			}
		});
	} else {
		initDialog(id);
	}
}
function initDialog(id){
	$('#dialog-'+id).dialog({
		height: $(window).height()-($(window).height()*0.2), 
		width: $(window).width()-($(window).width()*0.2), 
		modal: true, 
		close: function() { $(this).dialog("destroy");  }
	});
}
function toggleMapListView(){
	if($("#svg").css('z-index') == '1'){
		$("#list").css('z-index','1');
		$("#svg").css('z-index','0');
		$("#MapListToggle").html("View Map");
	} else {
		$("#list").css('z-index','0');
		$("#svg").css('z-index','1');
		$("#MapListToggle").html("View List");
	}
}
function initList(){
	if(dataTableIsLoaded()){
		destoryDataTable();
	}
	var html = new EJS({url: 'javascripts/templates/list_view.ejs'}).render(internship_data);
	$("#list_view_body").html(html);
	initDataTable();
}
function initFilters(){
	var settings = {
			"selectedValuesProp":"value",
			"searchObjProps":"name",
			"queryParam":"query",
			"neverSubmit":"true",
			"selectedItemProp":"name",
			"startText": "Begin Typing..."
		};
	$.each(models, function(index,model){
		settings.asHtmlID = model; 
		$('#autosuggest_' + model).autoSuggest('/' + model + '/autosuggest',settings);
	});	
	//Sets the operations to apply the current filters
	$("#apply_filters").click(function(){
		//Update the global filters object
		$.each(models, function(index,model){
			var values = $('#as-values-' + model).attr('value');
			var list = values.substring(0,values.length-1);
			var number_of_values = $('#as-selections-' + model + ' li a').length;
			var list_array = list.split(',');
			if(number_of_values < list_array.length){
				list_array.pop();
				list = list_array.join(',');
				$('#as-values-' + model).attr('value','');
			}
			if(list != ""){
				filters[model] = list;
			} else {
				filters[model] = null;
			}
		});
		
		$.each(booleans, function(index,bool){
			filters[bool] = $('input:radio[name='+bool+']:checked').val();
		});
		//send the filters to the server and update the page
		filterInternshipData();
	});
	//Sets the operations to reset and apply the current reset filters
	$("#reset_filters").click(function(){
		//reset the filters object to its default values
		filters = {'filters': true, 'languages':null, 'fields':null, 'industries':null, 'providers':null, 'locations':null, 'academic_focuses':null, 'for_credit': null, 'full_time': null, 'part_time': null, 'us_citizenship': null, 'paid': null};
		//reset all multi select fields to none
		$.each(models, function(index,model){
			$("#as-selections-" + model + " li a").trigger('click');
			$("#as-values-" + model).attr('value','');
		});
		//reset all boolean options to either
		$.each(booleans, function(index,bool){
			$('input:radio[name='+bool+'][value=null]').attr('checked','checked');
		});
		//send the filters to the server and update the page
		filterInternshipData();
	});
}
function filterInternshipData(){
	$('#FilterToggle').trigger('click');
	$('#svg').showLoading();
	$('#list').showLoading();
	getMapData();
	$.ajax({
		url: '/internships.json',
		data: filters,
		dataType: 'json',
		success: function(data){
			internship_data.countries = data;
			dataIsLoaded = true;
			WaitUntilTheMapAndDataAreLoaded();
		}		
	});
}
function WaitUntilTheMapAndDataAreLoaded(){
	if(mapIsLoaded && dataIsLoaded){
		//setup the list view
		initList();
		//setup the map view
		initMap();
		
		//reset the loading flags
		dataIsLoaded = false;
		mapIsLoaded = false;
		
		$('#svg').hideLoading();
		$('#list').hideLoading();
	
	} else {
		setTimeout("WaitUntilTheMapAndDataAreLoaded()",250);
	}
}
function initDataTable(){
	// DATATABLES =============================================================
	// DataTables Config (more info can be found at http://www.datatables.net/)
	oTable = $('.datatable').dataTable({
		"bJQueryUI": true,
		"sScrollX": "",
		"bSortClasses": false,
		"aaSorting": [[0,'asc']],
		"bAutoWidth": true,
		"bInfo": true,
		"sScrollY": "100%",	
		"sScrollX": "100%",
		"bScrollCollapse": true,
		"sPaginationType": "full_numbers",
		"bRetrieve": true
	});

	$(window).bind('resize', function(){
		oTable.fnAdjustColumnSizing();
	});
}
function destoryDataTable(){
	oTable.fnDestroy();		
	// destroy doesn't really work.  This next line removes extra html that gets inserted when the datatable
	// is initialized multiple times.
	$('#list table tr th').each(function(){
		$(this).html($(this).children('div').html());
	});	
}
function dataTableIsLoaded(){
	if($('#list .dataTables_wrapper').size() == 1){
		return true;
	}
	return false;
}
function getInitialData(){
	$.ajax({
	  url: '/internships.json',
	  dataType: 'json',
	  success: function(data){
		internship_data.countries = data;
		dataIsLoaded = true;
	  }
	});
}
function getMapData(){
	$("#svg-map").svg('destroy');
	$("#svg-map").svg({
		loadURL: '/images/map.svg',
		onLoad: function(){
			mapIsLoaded = true;
		}
	});
}