var map;
var internship_data = {
	//the UN code is the key with an array or internship objects as the value
	'countries':{
		'South_Africa':[
			{
				"id": 1,
				"name": "The Hungry Children",
				"location": "South Coast",
				"info": "This internships is the best one in the world"
			}
			
		],
		'Libya':[
			{
				"id": 2,
				"name": "Only the good die Young",
				"location": "North Country",
				"info": "This internships will make your head spin"
			},
			{
				"id": 6,
				"name": "Feed and Cloth, oh and stop the dyrants",
				"location": "Symbia",
				"info": "This internships is dangerous!!"
			}
		],
		'United_States':[
			{
				"id": 3,
				"name": "US Senatorship",
				"location": "Washington D.C., British Columbia",
				"info": "This internships is for the weak"
			},
			{
				"id": 4,
				"name": "Food Growing",
				"location": "Madison, Wisconsin",
				"info": "Work the land or perish"
			},
			{
				"id": 5,
				"name": "Gator Killin",
				"location": "Hammond, Louisiana",
				"info": "Kill or Be Killed"
			}
		],
	},
	'regions':{}
};

$(function() {		
	$("#loading").css('display','block');
	$.ajax({
	  //url: 'http://localhost:3000/intnerships.json',
	  url: '/map/js/initial_data.json',
	  dataType: 'json',
	  success: function(data){
		internship_data.countries = data;
	  }
	});
	
	$("#svg").svg({loadURL: 'map.svg', onLoad: postSetup});	
});


function postSetup(){
	$("#loading").css('display','none');
	setupDialogBoxes();
	$( ".internship_details" ).dialog({height: 500, width:500 , modal: true, autoOpen: false });
	map = $('#svg').svg('get');
	//do an initial window zoom
	map.configure({id:'map'}, false);
	$("#map").animate({svgViewBox: '0, 0, 1264, 900'}, 1000);				
	
	//add the zoom out glass
	//var glass = map.svg($('#map'), 1200, 600, 25, 25);
	//map.change(glass, {id: 'zoomout'});
	//map.circle(glass, 11, 11, 10, {stroke: 'red', strokeWidth: 1});
	//map.rect(glass, 5, 10, 12, 2, 0, 0,  {fill: 'white'});
	
	$("#zoomout").click(function(){
		resetMap();
		map.change(map.getElementById("Country_names_Lines"), {display: 'none'});
		$("#map").animate({svgViewBox: '0, 0, 1264, 900'}, 1000);
		//map.change(glass, {x: 1200, y: 600 });
	});
	$("#map").children('g').each(function(){
		var id = $(this).attr('id');
		if(id == 'Country_names_Lines'){
			return true;
		}
		if(id == 'internships'){
			return true;
		}
		//The region - as defined as the label name on the map (with underscores for spaces) is the key with an array of UN Codes as the value
		internship_data.regions[id] = new Array();
		$(this).children('g').each(function(){
			internship_data.regions[id].push($(this).attr('id'));
		});
		
		map.change(map.getElementById($(this).attr('id')), {class: 'clickable'});
		$(this).click(function(){
		
		/*
			alert($(window).width());
			alert($(window).height());
			
			alert(boundingBox.width);
			alert(boundingBox.height);
			alert(boundingBox.x);
			alert(boundingBox.y);
			*/
			boundingBox = map.getElementById($(this).attr('id')).getBBox();
			
			var view = '0, 0, 1264, 900';
			var newX = 0;
			var newY = 0;
			
			switch ($(this).attr('id')){
				case "North_American_countries": 
					view = '200, 25, 100, 360';
					
					//map.change(glass, {x: 450, y: 350 });
					newX = 450;
					newY = 350;
					break;
				case "South_American_Countries":  
					view = '325, 360, 100, 260';
					showBoundingBox(map.getElementById("South_American_Countries"));
					//map.change(glass, {x: 500, y: 575 });
					newX = 500;
					newY = 575;
					break;
				case "European_Countries": 
					view = '475, 50, 400, 240';
					showBoundingBox(map.getElementById("European_Countries"));
					//map.change(glass, {x: 825, y: 275 });
					newX = 825;
					newY = 275;
					break;
				case "Asian_Countries": 
					view = '650, 150, 550, 200';
					showBoundingBox(map.getElementById("Asian_Countries"));
					//map.change(glass, {x: 1150, y: 375 });
					newX = 1150;
					newY = 375;
					break;
				case "Australia_Countries":
					view = '900, 400, 350, 200';
					showBoundingBox(map.getElementById("Australia_Countries"));
					//map.change(glass, {x: 1200, y: 575 });
					newX = 1200;
					newY = 575;
					break;
				case "African_Countries":
					view = '600, 260, 100, 270';
					showBoundingBox(map.getElementById("African_Countries"));
					//map.change(glass, {x: 775, y: 475 });
					newX = 775;
					newY = 475;
					break;
				default: 
					
					break;
			}
			
			view = parseInt(boundingBox.x) + ', ' + parseInt(boundingBox.y) + ', ' + parseInt(boundingBox.width) + ', ' + parseInt(boundingBox.height);
			//viewBox numbers => <min-x>, <min-y>, <width> and <height>
			$("#map").animate({svgViewBox: view}, 1000);
			//map.change(glass, {x: newX, y: newY });
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
//this is to be called when the map load and also when the zoom out is clicked
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
	if(internship_data.regions[id]){
		jQuery.each(internship_data.regions[id], function(index){
			count += getCountryCount(internship_data.regions[id][index]);
		});					
	} else {
		count = getCountryCount(id);
	}
	if(count <= 0) {
		return;
	}
	if (typeof element.getBBox == 'undefined') {
		return;
	}
	var boundingBox = element.getBBox();
	var midPointX = boundingBox.x + ( boundingBox.width / 2 );
	var midPointY = boundingBox.y + ( boundingBox.height / 2 );
	var radiusOfCircle = 10;
	if(count < 10){
		count = "0" + count;
	}
	map.circle(parent, midPointX, midPointY, radiusOfCircle, {stroke: 'red', strokeWidth: 1, fill: 'white', id: "clickable_circle_"+id});
	map.text(parent, midPointX -(radiusOfCircle/2), midPointY + (radiusOfCircle/2), ''+count+'', {fontSize: 10, fill: 'black', id: "clickable_number_"+id});
	
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
					'<li id="click-'+internship.id+'">' + internship.name + " (" + internship.location + ") </li>"
				);
				$('#click-'+internship.id).click(function(){
					$('#dialog-'+internship.id).dialog( "open" );
				})
			});
			//$('#dropdown').css('left', midPointX + radiusOfCircle + 'px');
			//$('#dropdown').attr('left', 645);
			//$('#dropdown').css('top', midPointY + 'px');
			//$('#dropdown').attr('top', 314);
			
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
	return;
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