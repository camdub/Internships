//defines map and oTable as global variables that will be used in various places
var map, oTable;
//initiates an empty object to store the data for internships
var internship_data = {'countries':{},'regions':{}};
//initiates the internship_locations object which stores the x,y coordinates for the map for both countries and regions
var internship_locations = {
	'countries':{
		'USA':{'x':245, 'y':260},
    'CAN':{'x':220, 'y':210},
		'GRL':{'x':442, 'y':68},
		'NIC':{'x':302, 'y':362},
		'PRI':{'x':360, 'y':343},
		'VGB':{'x':369, 'y':338},
		'CUB':{'x':314, 'y':329},
		'BHS':{'x':326, 'y':321},
		'TCA':{'x':348, 'y':332},
		'DOM':{'x':350, 'y':339},
		'JAM':{'x':323, 'y':345},
		'HTI':{'x':338, 'y':340},
		'TTO':{'x':377, 'y':370},
		'KNA':{'x':371, 'y':347},
		'BRB':{'x':383, 'y':361},
		'GRD':{'x':375, 'y':364},
		'VCT':{'x':371, 'y':359},
		'DMA':{'x':376, 'y':353},
		'HND':{'x':292, 'y':356},
		'MEX':{'x':243, 'y':318},
		'CRI':{'x':302, 'y':373},
		'BLZ':{'x':293, 'y':347},
		'SLV':{'x':284, 'y':362},
		'GTM':{'x':280, 'y':355},
		'PAN':{'x':317, 'y':376},
		'BRA':{'x':405, 'y':422},
		'ARG':{'x':366, 'y':517},
		'VEN':{'x':359, 'y':375},
		'FLK':{'x':383, 'y':592},
		'GUY':{'x':385, 'y':382},
		'PER':{'x':339, 'y':446},
		'COL':{'x':338, 'y':388},
		'SUR':{'x':394, 'y':396},
		'GUF':{'x':405, 'y':388},
		'ECU':{'x':317, 'y':405},
		'BOL':{'x':367, 'y':464},
		'PRY':{'x':381, 'y':476},
		'URY':{'x':397, 'y':524},
		'CHL':{'x':337, 'y':570},
		'GBR':{'x':575, 'y':207},
		'FIN':{'x':661, 'y':171},
		'SWE':{'x':638, 'y':152},
		'NOR':{'x':609, 'y':169},
		'SRB':{'x':646, 'y':248},
		'SVK':{'x':643, 'y':230},
		'HUN':{'x':642, 'y':237},
		'BGR':{'x':662, 'y':254},
		'RUS':{'x':730, 'y':164},
		'POL':{'x':643, 'y':212},
		'DNK':{'x':609, 'y':196},
		'MKD':{'x':650, 'y':259},
		'GRC':{'x':655, 'y':274},
		'NLD':{'x':594, 'y':213},
		'LUX':{'x':599, 'y':226},
		'BEL':{'x':673, 'y':204},
		'ESP':{'x':567, 'y':262},
		'PRT':{'x':551, 'y':274},
		'DEU':{'x':613, 'y':212},
		'TUR':{'x':682, 'y':269},
		'BIH':{'x':637, 'y':249},
		'SVN':{'x':627, 'y':241},
		'HRV':{'x':634, 'y':242},
		'MNE':{'x':642, 'y':254},
		'ALB':{'x':644, 'y':262},
		'CZE':{'x':629, 'y':226},
		'AUT':{'x':627, 'y':234},
		'MDA':{'x':675, 'y':238},
		'ROU':{'x':661, 'y':237},
		'FRA':{'x':587, 'y':231},
		'CHE':{'x':606, 'y':238},
		'UKR':{'x':691, 'y':230},
		'ITA':{'x':625, 'y':258},
		'MLT':{'x':629, 'y':285},
		'IRL':{'x':548, 'y':207},
		'ISL':{'x':518, 'y':148},
		'EST':{'x':664, 'y':184},
		'LTU':{'x':657, 'y':200},
		'LVA':{'x':661, 'y':193},
		'CYP':{'x':688, 'y':284},
		'BLR':{'x':673, 'y':205},
		'KOR':{'x':997, 'y':285},
		'AZE':{'x':740, 'y':260},
		'KAZ':{'x':802, 'y':226},
		'TKM':{'x':771, 'y':263},
		'IDN':{'x':954, 'y':413},
		'SGP':{'x':929, 'y':407},
		'TLS':{'x':999, 'y':430},
		'VNM':{'x':924, 'y':327},
		'TJK':{'x':818, 'y':273},
		'PRK':{'x':1003, 'y':260},
		'MNG':{'x':920, 'y':232},
		'JPN':{'x':1043, 'y':267},
		'MYS':{'x':948, 'y':397},
		'LAO':{'x':917, 'y':342},
		'KHM':{'x':925, 'y':359},
		'THA':{'x':910, 'y':356},
		'PAK':{'x':798, 'y':314},
		'BTN':{'x':876, 'y':311},
		'NPL':{'x':849, 'y':303},
		'IRN':{'x':761, 'y':290},
		'AFG':{'x':799, 'y':284},
		'KGZ':{'x':828, 'y':258},
		'UZB':{'x':792, 'y':262},
		'IRQ':{'x':720, 'y':289},
		'ARE':{'x':756, 'y':325},
		'GEO':{'x':723, 'y':255},
		'SYR':{'x':707, 'y':282},
		'OMN':{'x':762, 'y':342},
		'KWT':{'x':735, 'y':304},
		'JOR':{'x':704, 'y':295},
		'LBN':{'x':695, 'y':287},
		'ARM':{'x':726, 'y':263},
		'QAT':{'x':748, 'y':318},
		'CHN':{'x':904, 'y':276},
		'YEM':{'x':735, 'y':357},
		'BGD':{'x':875, 'y':327},
		'IND':{'x':839, 'y':332},
		'LKA':{'x':845, 'y':381},
		'PHL':{'x':978, 'y':348},
		'TWN':{'x':977, 'y':322},
		'SAU':{'x':726, 'y':320},
		'ISR':{'x':691, 'y':296},
		'NCL':{'x':1126, 'y':476},
		'SLB':{'x':1103, 'y':431},
		'MHL':{'x':1142, 'y':365},
		'KIR':{'x':1174, 'y':407},
		'FSM':{'x':1085, 'y':364},
		'PLW':{'x':1025, 'y':367},
		'TON':{'x':1195, 'y':473},
		'FJI':{'x':1169, 'y':450},
		'VUT':{'x':1133, 'y':464},
		'TUV':{'x':1172, 'y':420},
		'ASM':{'x':1195, 'y':458},
		'WSM':{'x':1196, 'y':437},
		'AUS':{'x':1024, 'y':484},
		'NZL':{'x':1144, 'y':555},
		'PNG':{'x':1054, 'y':417},
		'PYF':{'x':1235, 'y':463},
		'SHN':{'x':560, 'y':458},
		'TUN':{'x':610, 'y':283},
		'SLE':{'x':539, 'y':377},
		'GNB':{'x':525, 'y':366},
		'UGA':{'x':684, 'y':403},
		'KEN':{'x':706, 'y':398},
		'TZA':{'x':699, 'y':431},
		'RWA':{'x':677, 'y':410},
		'EGY':{'x':676, 'y':316},
		'SDN':{'x':677, 'y':351},
		'MOZ':{'x':703, 'y':447},
		'SOM':{'x':737, 'y':372},
		'COD':{'x':654, 'y':401},
		'MDG':{'x':732, 'y':471},
		'CMR':{'x':618, 'y':393},
		'NGA':{'x':602, 'y':377},
		'AGO':{'x':638, 'y':454},
		'GAB':{'x':613, 'y':411},
		'MRT':{'x':548, 'y':346},
		'GNQ':{'x':608, 'y':399},
		'GIN':{'x':543, 'y':368},
		'CAF':{'x':651, 'y':381},
		'TCD':{'x':639, 'y':352},
		'NAM':{'x':635, 'y':479},
		'ZWE':{'x':678, 'y':473},
		'MWI':{'x':691, 'y':447},
		'BWA':{'x':656, 'y':483},
		'ZMB':{'x':662, 'y':457},
		'SWZ':{'x':683, 'y':494},
		'BDI':{'x':678, 'y':416},
		'ETH':{'x':707, 'y':373},
		'CIV':{'x':560, 'y':384},
		'BFA':{'x':575, 'y':364},
		'NER':{'x':610, 'y':341},
		'COG':{'x':626, 'y':416},
		'LBR':{'x':547, 'y':385},
		'LSO':{'x':672, 'y':505},
		'SEN':{'x':529, 'y':354},
		'GHA':{'x':575, 'y':375},
		'MLI':{'x':572, 'y':339},
		'DZA':{'x':585, 'y':305},
		'MAR':{'x':558, 'y':293},
		'ESH':{'x':534, 'y':318},
		'LBY':{'x':636, 'y':317},
		'ZAF':{'x':653, 'y':516}
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
var models = ['languages','fields','industries','providers','academic_focuses'];
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
	
	//$('#dropdown').height($(window).height()-50);
	
	$("#dropdown").qvivoScroll();
	
	//Set the click listener for the View Map/View List Button
	$("#MapListToggle").click(function(){
		toggleMapListView();
	});
	//Set the click listener for the Filter Button
	$("#FilterToggle").click(function(){
		//$("#filters").fadeToggle(250);
		$("#filters").toggle();
		$("#FilterToggle span").toggleClass('triangle_down');
		$("#FilterToggle span").toggleClass('triangle_up');		
	});	
	$("#filters #close_button").click(function(){
		$("#FilterToggle").trigger("click");
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
	//animates the view change.
	
	/* The Animation Code
	$("#map").fadeOut(500,function(){
		$("#map").animate({svgViewBox: base_view}, 0, function(){
			$("#map").fadeIn(500);
		});
	});
	*/
	$("#map").animate({svgViewBox: base_view}, 0)
		
	//the zoom out icon sits at the bottom right of the page and a click on it shoud zoom out to the original zoom position
	$("#zoomout").click(function(){
		/*  The Animation Code
		$("#map").fadeOut(500,function(){
			resetMap();
			map.change(map.getElementById("Country_names_Lines"), {display: 'none'});
			$("#map").animate({svgViewBox: base_view}, 0, function(){
				$("#map").fadeIn(500);
			});
		});
		*/
		resetMap();
		map.change(map.getElementById("Country_names_Lines"), {display: 'none'});
		$("#map").animate({svgViewBox: base_view}, 0);
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
			$('#dropdown').hide( 'fade', {}, 0);
			boundingBox = map.getElementById($(this).attr('id')).getBBox();
			//viewBox numbers => <min-x>, <min-y>, <width> and <height>
			var view = parseInt(boundingBox.x) + ', ' + parseInt(boundingBox.y) + ', ' + parseInt(boundingBox.width) + ', ' + parseInt(boundingBox.height);
			//animates the view change.  Maybe we should just fade out, move, and fade back in
			/* The Animation stuff
			$("#map").fadeOut(500,function(){
				$("#map").animate({svgViewBox: view}, 0, function(){
					$("#map").fadeIn(500);
				});
			});
			*/
			$("#map").animate({svgViewBox: view}, 0);
			
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
	$('#dropdown').hide( 'fade', {}, 0);
	resetGroup('internships');
	$('#map').children('g').each(function(){
		displayInternships($(this).attr('id'), false);
	});
}
/***********************************************************************************

***********************************************************************************/
function displayInternships(id, country_level){
	$('#dropdown').css('height','auto');
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
		//Mutalate coordinates
		//midPointX = ( midPointX - 29.986 ) * ( 1425 / 440 );


		//midPointX = ( midPointX - 40	 ) * ( 1425 / 440 );
		//midPointY = ( ( midPointY - 320.103 ) * -1 ) * ( 671 / 222 );
		
		/*midPointX = (midPointX - 29.986) * (2.834);
		midPointY = -1 * (midPointY - 310.103) * (2.9);*/
		
		//alert(midPointX + ", " + midPointY);
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
	map.circle(parent, midPointX, midPointY, radiusOfCircle, {stroke: 'transparent', color: 'red',strokeWidth: 1, fill: 'transparent', id: "clickable_circle_"+id});
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
			$('#dropdown ul').append(
				'<li class="country_group_title">' + internship_data.countries[country_code][0].country + '</li>'
			);
			var included_internships = new Array();
			jQuery.each(internship_data.countries[country_code], function(index){
				var internship = internship_data.countries[country_code][index];
				if (included_internships.indexOf(internship.id) < 0){
					$('#dropdown ul').append(
						'<li id="click-'+internship.id+'">' + internship.name + ' (' + internship.provider_name + ') </li>'
					);
					$('#dropdown ul li:last').click(function(){
						setupDialogBox(internship.id);
					});
					included_internships.push(internship.id);
				}				
			});
		} else {
			$('#'+id).trigger('click');
			$.each(internship_data.regions[id], function(i){
				var country_code = internship_data.regions[id][i];
				if(internship_data.countries[country_code]){
					$('#dropdown ul').append(
						'<li class="country_group_title">' + internship_data.countries[country_code][0].country + '</li>'
					);
					var included_internships = new Array();
					$.each(internship_data.countries[country_code], function(index){
						var internship = internship_data.countries[country_code][index];
						if (included_internships.indexOf(internship.id) < 0){
							$('#dropdown ul').append(
								'<li id="click-'+internship.id+'">' + internship.name + ' (' + internship.provider_name + ') </li>'
							);
							$('#dropdown ul li:last').click(function(){
								setupDialogBox(internship.id);
							});
							included_internships.push(internship.id);							
						}
					});

				}
			});
		}
		
		$('#dropdown').show( 'fade', {}, 1000);
		if(($('#dropdown').height()) > ($(window).height()-150)){
			$('#dropdown').height($(window).height()-150);
		}
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
					stopLoadingIndicator();
			}
		});
	} else {
		initDialog(id);
		stopLoadingIndicator();
	}
	
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