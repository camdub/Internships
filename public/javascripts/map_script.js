//defines map and oTable as global variables that will be used in various places
var map, oTable;
//initiates an empty object to store the data for internships
var internship_data = {'countries':{},'regions':{}};
//initiates the internship_locations object which stores the x,y coordinates for the map for both countries and regions
var internship_locations = {
	'countries':{
		'USA':{'x':115.006, 'y':232.267},
		'CAN':{'x':90.429, 'y':255.198},
		'GRL':{'x':187.325, 'y':283.302},
		'NIC':{'x':136.643, 'y':193.814},
		'PRI':{'x':156.398, 'y':200.047},
		'VGB':{'x':159.162, 'y':201.364},
		'CUB':{'x':141.052, 'y':204.221},
		'BHS':{'x':147.696, 'y':207.867},
		'TCA':{'x':155.399, 'y':203.868},
		'DOM':{'x':152.576, 'y':198.577},
		'JAM':{'x':143.522, 'y':189.4003},
		'HTI':{'x':148.696, 'y':200.399},
		'TTO':{'x':166.982, 'y':189.992},
		'KNA':{'x':158.691, 'y':197.048},
		'BRB':{'x':168.393, 'y':192.873},
		'GRD':{'x':165.572, 'y':191.580},
		'VCT':{'x':16.220, 'y':194.226},
		'DMA':{'x':165.688, 'y':195.872},
		'HND':{'x':132.821, 'y':194.108},
		'MEX':{'x':116.769, 'y':202.340},
		'CRI':{'x':136.525, 'y':189.228},
		'BLZ':{'x':134.291, 'y':197.577},
		'SLV':{'x':130.469, 'y':193.697},
		'GTM':{'x':128.117, 'y':194.873},
		'PAN':{'x':14.170, 'y':187.464},
		'BRA':{'x':176.801, 'y':161.947},
		'ARG':{'x':157.927, 'y':137.958},
		'VEN':{'x':158.691, 'y':184.054},
		'FLK':{'x':167.040, 'y':110.676},
		'GUY':{'x':165.688, 'y':181.173},
		'PER':{'x':147.344, 'y':163.769},
		'COL':{'x':148.813, 'y':179.292},
		'SUR':{'x':169.098, 'y':183.525},
		'GUF':{'x':172.273, 'y':182.055},
		'ECU':{'x':142.228, 'y':177.645},
		'BOL':{'x':159.103, 'y':157.125},
		'PRY':{'x':164.042, 'y':152.245},
		'URY':{'x':169.921, 'y':136.723},
		'GBR':{'x':231.716, 'y':247.672},
		'FIN':{'x':265.701, 'y':266.193},
		'SWE':{'x':253.530, 'y':264.017},
		'NOR':{'x':244.299, 'y':261.018},
		'SRB':{'x':257.998, 'y':233.678},
		'SVK':{'x':254.941, 'y':238.676},
		'HUN':{'x':255.117, 'y':236.030},
		'BGR':{'x':264.877, 'y':231.326},
		'RUS':{'x':280.223, 'y':248.671},
		'POL':{'x':256.176, 'y':245.437},
		'DNK':{'x':244.063, 'y':251.787},
		'MKD':{'x':258.762, 'y':228.386},
		'GRC':{'x':258.998, 'y':224.976},
		'NLD':{'x':239.654, 'y':245.614},
		'LUX':{'x':241.124, 'y':240.616},
		'BEL':{'x':238.889, 'y':242.615},
		'ESP':{'x':229.541, 'y':227.798},
		'PRT':{'x':224.425, 'y':227.446},
		'DEU':{'x':245.710, 'y':245.710},
		'TUR':{'x':273.285, 'y':227.328},
		'BIH':{'x':254.588, 'y':231.973},
		'SVN':{'x':251.589, 'y':235.795},
		'HRV':{'x':251.413, 'y':233.737},
		'MNE':{'x':255.587, 'y':227.269},
		'ALB':{'x':256.999, 'y':228.974},
		'CZE':{'x':250.649, 'y':241.322},
		'AUT':{'x':251.060, 'y':238.323},
		'MDA':{'x':267.112, 'y':236.971},
		'ROU':{'x':262.114, 'y':236.559},
		'FRA':{'x':235.891, 'y':234.972},
		'CHE':{'x':243.122, 'y':237.147},
		'UKR':{'x':270.286, 'y':238.911},
		'ITA':{'x':250.237, 'y':229.562},
		'MLT':{'x':251.413, 'y':220.861},
		'IRL':{'x':223.191, 'y':246.966},
		'ISL':{'x':214.253, 'y':267.721},
		'EST':{'x':264.818, 'y':254.139},
		'LTU':{'x':261.937, 'y':248.612},
		'LVA':{'x':263.054, 'y':252.552},
		'CYP':{'x':272.462, 'y':220.037},
		'BLR':{'x':266.935, 'y':247.672},
		'KOR':{'x':381.441, 'y':220.361},
		'AZE':{'x':290.072, 'y':228.386},
		'KAZ':{'x':317.147, 'y':241.616},
		'TKM':{'x':306.211, 'y':223.977},
		'IDN':{'x':367.859, 'y':174.764},
		'SGP':{'x':356.658, 'y':178.204},
		'TLS':{'x':381.529, 'y':167.973},
		'VNM':{'x':360.010, 'y':193.550},
		'TJK':{'x':318.558, 'y':224.065},
		'PRK':{'x':366.691, 'y':183.473},
		'MNG':{'x':352.954, 'y':238.705},
		'JPN':{'x':392.465, 'y':220.361},
		'MYS':{'x':353.042, 'y':181.467},
		'LAO':{'x':352.954, 'y':200.341},
		'KHM':{'x':355.247, 'y':193.550},
		'THA':{'x':350.661, 'y':194.961},
		'PAK':{'x':315.383, 'y':211.187},
		'BTN':{'x':338.667, 'y':211.100},
		'NPL':{'x':333.375, 'y':210.571},
		'IRN':{'x':298.274, 'y':219.038},
		'AFG':{'x':310.621, 'y':220.096},
		'KGZ':{'x':323.762, 'y':230.150},
		'UZB':{'x':308.769, 'y':228.034},
		'IRQ':{'x':284.427, 'y':218.597},
		'ARE':{'x':298.185, 'y':207.396},
		'GEO':{'x':282.663, 'y':230.944},
		'SYR':{'x':277.812, 'y':218.950},
		'OMN':{'x':299.067, 'y':200.605},
		'KWT':{'x':289.454, 'y':213.041},
		'JOR':{'x':276.578, 'y':215.422},
		'LBN':{'x':274.814, 'y':219.743},
		'ARM':{'x':285.985, 'y':227.240},
		'QAT':{'x':293.688, 'y':208.190},
		'CHN':{'x':357.717, 'y':218.773},
		'YEM':{'x':292.541, 'y':197.430},
		'BGD':{'x':338.578, 'y':205.720},
		'IND':{'x':324.997, 'y':202.634},
		'LKA':{'x':327.819, 'y':184.730},
		'PHL':{'x':376.767, 'y':192.403},
		'TWN':{'x':374.915, 'y':206.602},
		'SAU':{'x':285.044, 'y':207.573},
		'ISR':{'x':274.461, 'y':215.069},
		'NCL':{'x':427.655, 'y':152.539},
		'SLB':{'x':420.688, 'y':166.827},
		'MHL':{'x':433.211, 'y':187.023},
		'KIR':{'x':448.028, 'y':174.676},
		'FSM':{'x':412.926, 'y':187.905},
		'PLW':{'x':390.613, 'y':186.053},
		'TON':{'x':451.379, 'y':149.011},
		'FJI':{'x':442.119, 'y':157.919},
		'VUT':{'x':431.006, 'y':156.861},
		'TUV':{'x':443.706, 'y':168.679},
		'ASM':{'x':455.730, 'y':160.535},
		'WSM':{'x':451.908, 'y':161.182},
		'AUS':{'x':398.903, 'y':151.393},
		'NZL':{'x':438.418, 'y':130.138},
		'PNG':{'x':405.342, 'y':167.532},
		'PYF':{'x':66.264, 'y':160.183},
		'SHN':{'x':228.247, 'y':158.772},
		'TUN':{'x':245.181, 'y':220.508},
		'SLE':{'x':218.487, 'y':186.171},
		'GNB':{'x':216.488, 'y':191.698},
		'UGA':{'x':270.698, 'y':178.645},
		'KEN':{'x':279.400, 'y':175.940},
		'TZA':{'x':276.460, 'y':168.179},
		'RWA':{'x':268.581, 'y':175.235},
		'EGY':{'x':268.464, 'y':208.160},
		'SDN':{'x':268.464, 'y':197.930},
		'MOZ':{'x':274.344, 'y':155.949},
		'SOM':{'x':288.808, 'y':183.584},
		'COD':{'x':261.996, 'y':171.589},
		'MDG':{'x':287.867, 'y':153.833},
		'CMR':{'x':249.061, 'y':182.173},
		'NGA':{'x':242.946, 'y':187.347},
		'AGO':{'x':254.706, 'y':161.006},
		'GAB':{'x':246.004, 'y':175.235},
		'MRT':{'x':222.838, 'y':203.574},
		'GNQ':{'x':242.242, 'y':179.585},
		'GIN':{'x':223.543, 'y':188.640},
		'CAF':{'x':259.762, 'y':187.582},
		'TCD':{'x':255.529, 'y':197.107},
		'NAM':{'x':253.765, 'y':150.187},
		'ZWE':{'x':269.522, 'y':153.362},
		'MWI':{'x':273.756, 'y':163.475},
		'BWA':{'x':261.291, 'y':150.070},
		'ZMB':{'x':262.231, 'y':159.477},
		'SWZ':{'x':270.816, 'y':146.307},
		'BDI':{'x':268.699, 'y':173.471},
		'ETH':{'x':279.165, 'y':189.346},
		'CIV':{'x':227.542, 'y':184.760},
		'BFA':{'x':230.599, 'y':191.698},
		'NER':{'x':247.297, 'y':200.635},
		'COG':{'x':251.883, 'y':174.764},
		'LBR':{'x':223.543, 'y':184.054},
		'LSO':{'x':267.053, 'y':142.191},
		'SEN':{'x':216.370, 'y':196.048},
		'GHA':{'x':232.598, 'y':188.052},
		'MLI':{'x':231.069, 'y':200.870},
		'DZA':{'x':238.243, 'y':207.690},
		'MAR':{'x':227.307, 'y':217.333},
		'ESH':{'x':218.369, 'y':207.690},
		'LBY':{'x':255.999, 'y':207.925},
		'ZAF':{'x':257.881, 'y':138.075}
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
		
		midPointX = (midPointX - 29.986) * (2.834);
		midPointY = -1 * (midPointY - 310.103) * (2.9);
		
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
					$('#click-'+internship.id).click(function(){
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
							$('#click-'+internship.id).click(function(){
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