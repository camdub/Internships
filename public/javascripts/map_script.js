//defines map and oTable as global variables that will be used in various places
var map, oTable;
//initiates an empty object to store the data for internships
var internship_data = {'countries':{},'regions':{}};
//initiates the internship_locations object which stores the x,y coordinates for the map for both countries and regions
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
//models and booleans are defined to make the code more dynamic.  they represent the filters and can be added to or taken from as filters change.
var models = ['languages','fields','industries','providers','locations','academic_focuses'];
var booleans = ['for_credit','part_time','full_time','us_citizenship','paid'];
//This object stores and keeps track of the filters so they can be sent via ajax to the server when filters are applied
var filters = {'filters': true, 'languages':null, 'fields':null, 'industries':null, 'providers':null, 'locations':null, 'academic_focuses':null, 'for_credit': null, 'full_time': null, 'part_time': null, 'us_citizenship': null, 'paid': null};
//These booleans default to false and help the WaitUntilTheMapAndDataAreLoaded function function properly according to its definition
var mapIsLoaded = false, dataIsLoaded = false;

/***********************************************************************************
	This function executes when the page is loaded and it does some basic setup
	like setting div sizes and sets some button and div click listeners
	and finally calls some functions to do get the default data for the map and 
	the internships.
***********************************************************************************/
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
	//Set the click listener for the Filter Button
	$("#FilterToggle").click(function(){
		$("#filters").toggle();
	});
	//Set the click listener for the svg and list divs to close the filter div if its open
	$("#svg, #list").click(function(){
		if($('#filters').is(':visible')){
			$('#FilterToggle').trigger('click');
		}
	});
	//load the initial data from the server (Asynchronously)
	getInternshipData();
	//Load the svg data from the server (Asynchronously)
	getMapData();
	//setup the filters
	initFilters();
	//calls a function that makes sure the Asynchronous calls are both done before continuing
	WaitUntilTheMapAndDataAreLoaded();
});
/***********************************************************************************
	This function sets up the svg details and is called after the svg data is loaded
	into the DOM.
***********************************************************************************/
function initMap(){
	//load the svg data into the svg-map div
	map = $('#svg-map').svg('get');
	//add the id to the svg map object
	map.configure({id:'map'}, false);
	//do an initial window zoom based on the width and height of the screen and the map deminsions
	var boundingBox = map.getElementById('map').getBBox();
	var base_view = parseInt(boundingBox.x) + ', ' + parseInt(boundingBox.y) + ', ' + parseInt(boundingBox.width) + ', ' + parseInt(boundingBox.height);
	//animates the view change.  Maybe we should just fade out, move, and fade back in  TODO: make it fade
	$("#map").animate({svgViewBox: base_view}, 1000);
	//the zoom out icon sits at the bottom right of the page and a click on it shoud zoom out to the original zoom position
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
			$('#dropdown').hide( 'fade', {}, 1000);
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
/***********************************************************************************
	This function removes the list of internships from the screen, resets the 
	internship group, and displays the internship numbers for each continent	
***********************************************************************************/
function resetMap(){
	$('#dropdown').hide( 'fade', {}, 1000);
	resetGroup('internships');
	$('#map').children('g').each(function(){
		displayInternships($(this).attr('id'), false);
	});
}
/***********************************************************************************

***********************************************************************************/
function displayInternships(id, country_level){
	
	var element = map.getElementById(id);
	var parent = map.getElementById('internships');
					
	//find the count for this id
	var count = 0;
	
	var midPointX, midPointY, radiusOfCircle;
	
	if(internship_data.regions[id]){
		jQuery.each(internship_data.regions[id], function(index){
			count += getCountryCount(internship_data.regions[id][index]);
		});
		midPointX = internship_locations.regions[id].x;
		midPointY = internship_locations.regions[id].y;
		radiusOfCircle = 40;
		
	} else if(internship_data.countries[id]) {
		count = getCountryCount(id);
		midPointX = internship_locations.countries[id].x;
		midPointY = internship_locations.countries[id].y;
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
	$("#clickable_circle_"+id).click(function(){
		$('#dropdown').hide( 'fade', {}, 1000);
		$('#dropdown ul').html('');
				
		if(country_level){
			var country_code = id;
			jQuery.each(internship_data.countries[country_code], function(index){
				var internship = internship_data.countries[country_code][index];
				$('#dropdown ul').append(
					'<li id="click-'+internship.id+'">' + internship.name + ' (' + internship.provider_name + ') </li>'
				);
				$('#click-'+internship.id).click(function(){
					setupDialogBox(internship.id);
				});
			});
		} else {
			$('#'+id).trigger('click');
			$.each(internship_data.regions[id], function(i){
				var country_code = internship_data.regions[id][i];
				if(internship_data.countries[country_code]){
					$.each(internship_data.countries[country_code], function(index){
						var internship = internship_data.countries[country_code][index];
						$('#dropdown ul').append(
							'<li id="click-'+internship.id+'">' + internship.name + ' (' + internship.provider_name + ') </li>'
						);
						$('#click-'+internship.id).click(function(){
							setupDialogBox(internship.id);
						});
					});
				}
			});
		}
		$('#dropdown').show( 'fade', {}, 1000);
	});
}
/***********************************************************************************
	This function returns the number of internships in the given country where the
	country_code is the id
***********************************************************************************/
function getCountryCount(id){
	if(typeof internship_data.countries[id] == 'undefined'){
		return 0;
	}
	return internship_data.countries[id].length;
}
/***********************************************************************************
	This function removes the group with the given id from the svg map object and
	sets the group class to clickable	
***********************************************************************************/
function resetGroup(id){
	map.remove(map.getElementById(id));
	map.group(null, id, {class: 'clickable'});
}
/***********************************************************************************
	This function pulls in the html for the dialog box from an ejs file and upon
	success the resutls are appended to the dialogs div where all of the dialogs
	are kept in the DOM for faster loaded if they are reopened during the same 
	session.  The jquery tabs are initialized with the 0 index selected.  The 
	dialog is then initiated.
***********************************************************************************/
function setupDialogBox(id){
	startLoadingIndicator();
	if($('#dialog-'+id).html() == null){
		$.ajax({
			url: '/internships/' + id + '.json',
		  	dataType: 'json',
		  	success: function(data){
					var html = new EJS({ url: 'javascripts/templates/modal_view.ejs'}).render(data);
					$('#dialogs').append(html);
					$('#tabs-' + id).tabs({ selected: 0});
					initDialog(id);
			}
		});
	} else {
		initDialog(id);
	}
	stopLoadingIndicator();
}
/***********************************************************************************
	This function sets up the view for the dialog popup for the given internship
	id as it is identified on the server.
***********************************************************************************/
function initDialog(id){
	$('#dialog-'+id).dialog({
		height: $(window).height()-($(window).height()*0.2), 
		width: $(window).width()-($(window).width()*0.2), 
		modal: true, 
		close: function() { $(this).dialog("destroy");  }
	});
}
/***********************************************************************************
	This function toggles the visible div between list and svg
***********************************************************************************/
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
/***********************************************************************************
	This function sets up the 'table view' view
***********************************************************************************/
function initList(){
	if(dataTableIsLoaded()){
		destoryDataTable();
	}
	var html = new EJS({url: 'javascripts/templates/list_view.ejs'}).render(internship_data);
	$("#list_view_body").html(html);
	initDataTable();
}
/***********************************************************************************
	This function configures the user interface functionality and interaction
	with the filters object.
***********************************************************************************/
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
/***********************************************************************************
	This calls functions that are called when the page is loaded
***********************************************************************************/
function filterInternshipData(){
	//This takes any action that is bound to clicking the filter button with intent to close it
	$('#FilterToggle').trigger('click');	
	getInternshipData();
	getMapData();
	WaitUntilTheMapAndDataAreLoaded();
}
/***********************************************************************************
	This function is a polling function that checks to see if both the internship
	data and the svg data are loaded before proceeding.  it then fires off functions
	that complete the setup process for the map and reset the booleans that determine
	whther or not the data has successfully loaded in both objects.  It also shows
	and hides a loading indicator for the user to let them know it is loading.
***********************************************************************************/
function WaitUntilTheMapAndDataAreLoaded(){
	startLoadingIndicator();
	
	if(mapIsLoaded && dataIsLoaded){
		//setup the list view
		initList();
		//setup the map view
		initMap();
		
		//reset the loading flags
		dataIsLoaded = false;
		mapIsLoaded = false;
		
		stopLoadingIndicator();
	
	} else {
		setTimeout("WaitUntilTheMapAndDataAreLoaded()",250);
	}
}
/***********************************************************************************
	This function is called to initiate the data table javascript plugin with 
	settings and window binidng.
***********************************************************************************/
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
/***********************************************************************************
	This function is called to destory an active and initiated data table as 
	defined in initDataTable()	
***********************************************************************************/
function destoryDataTable(){
	oTable.fnDestroy();		
	// destroy doesn't really work.  This next line removes extra html that gets inserted when the datatable
	// is initialized multiple times.
	$('#list table tr th').each(function(){
		$(this).html($(this).children('div').html());
	});	
}
/***********************************************************************************
	This function checks to see if the dataTabe is currently loaded and returns
	a boolean as a result.
***********************************************************************************/
function dataTableIsLoaded(){
	if($('#list .dataTables_wrapper').size() == 1){
		return true;
	}
	return false;
}
/***********************************************************************************
	This function queries the server for the initial internship data and loads it
	into the global internship_data object to be used thoughout the script.
***********************************************************************************/
function getInternshipData(){
	$.ajax({
		url: '/internships.json',
		data: filters,
		dataType: 'json',
		success: function(data){
			internship_data.countries = data;
			dataIsLoaded = true;
		}
	});
}
/***********************************************************************************
	This function queries the server for the svg data so the map can be drawn for
	the user.  it then loads that data into the div with id 'svg-map'
***********************************************************************************/
function getMapData(){
	$("#svg-map").svg('destroy');
	$("#svg-map").svg({
		loadURL: '/images/map.svg',
		onLoad: function(){
			mapIsLoaded = true;
		}
	});
}
/***********************************************************************************
	This function shows the loading indicator for the user
***********************************************************************************/
function startLoadingIndicator(){
	$('#svg').showLoading();
	$('#list').showLoading();
}
/***********************************************************************************
	This function hides the loading indicator for the user
***********************************************************************************/
function stopLoadingIndicator(){
	$('#svg').hideLoading();
	$('#list').hideLoading();
}