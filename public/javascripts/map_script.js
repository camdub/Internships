var map;
var internship_data = {'countries':{},'regions':{}};

$(function() {		
	$('#svg').width($(window).width()-20);
	$('#svg').height($(window).height()-20);
	
	$('#svg').showLoading();
	$.ajax({
	  url: '/internships.json',
	  dataType: 'json',
	  success: function(data){
		internship_data.countries = data;
	  }
	});
	
	$("#svg").svg({loadURL: '/images/map.svg', onLoad: postSetup});
});


function postSetup(){
	$('#svg').hideLoading();
	
	map = $('#svg').svg('get');

	//do an initial window zoom
	map.configure({id:'map'}, false);	
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
					'<li id="click-'+internship.id+'">' + internship.name + ' (' + internship.city + ', ' + internship.country + ') </li>'
				);
				$('#click-'+internship.id).click(function(){
					if($('#dialog-'+internship.id).html() == null){
						$('#svg').showLoading();
						$.ajax({
							url: '/internships/' + internship.id + '.json',
						  	dataType: 'json',
						  	success: function(data){
								setupDialogBox(data);
								initDialog(internship.id);
								$('#svg').hideLoading();
							}
						});
					} else {
						initDialog(internship.id);
					}
				});
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
function setupDialogBox(data){
	var selected_internship = data;
	var languages_ul_lis = '', majors_ul_lis = '', minors_ul_lis = '', fields_ul_lis = '', locations_ul_lis = '', semesters_ul_lis = '', financial_assistance_options_ul_lis = '';
	
	//preprocess the deadline
	if(selected_internship.deadline == null){
		selected_internship.deadline = '<i>none</li>';
	}	
	if(selected_internship.stipend == null){
		selected_internship.stipend = '<i>none</li>';
	}
	if(selected_internship.academic_contact_name == null || selected_internship.academic_contact_name == 'unspecified'){
		selected_internship.academic_contact_name = '<i>none</li>';
	}
	if(selected_internship.provider_name == null || selected_internship.provider_name == 'unspecified'){
		selected_internship.provider_name = '<i>none</li>';
	}
	if(selected_internship.provider_contact_name == null || selected_internship.provider_contact_name == 'unspecified'){
		selected_internship.provider_contact_name = '<i>none</li>';
	}
	
	//Setup the list items for the languages
	$.each(selected_internship.languages, function(index){
		languages_ul_lis += '<li>' + selected_internship.languages[index].name + '</li>';
	});
	if(languages_ul_lis == ''){
		languages_ul_lis = '<li><i>none specified</li></li>';
	}
	//Setup the list items for the academic focuses
	$.each(selected_internship.academic_focuses, function(index){
		if(selected_internship.academic_focuses[index].type == 'Major'){
			majors_ul_lis += '<li>' + selected_internship.academic_focuses[index].name + '</li>';
		} else {
			minors_ul_lis += '<li>' + selected_internship.academic_focuses[index].name + '</li>';
		}
	});
	if(majors_ul_lis == ''){
		majors_ul_lis = '<li><i>none specified</li></li>';
	}
	if(minors_ul_lis == ''){
		minors_ul_lis = '<li><i>none specified</li></li>';
	}
	//Setup the list items for the fields
	$.each(selected_internship.fields, function(index){
		fields_ul_lis += '<li>' + selected_internship.fields[index].name + ' (' + selected_internship.fields[index].industry + ')</li>';
	});	
	if(fields_ul_lis == ''){
		fields_ul_lis = '<li><i>none specified</li></li>';
	}
	//Setup the list items for the locations
	$.each(selected_internship.locations, function(index){
		locations_ul_lis += '<li>' + selected_internship.locations[index].city + ', ' + selected_internship.locations[index].country + '</li>';
	});
	if(locations_ul_lis == ''){
		locations_ul_lis = '<li><i>none specified</li></li>';
	}
	//Setup the list items for the semesters
	$.each(selected_internship.semesters, function(index){
		semesters_ul_lis += '<li>' + selected_internship.semesters[index].name + '</li>';
	});
	if(semesters_ul_lis == ''){
		semesters_ul_lis = '<li><i>none specified</i></li>';
	}
	//Setup the list items for the financial assistance options
	$.each(selected_internship.financial_assistance_options, function(index){
		financial_assistance_options_ul_lis += 
			'<li>' 
				+ 'Name: ' + selected_internship.financial_assistance_options[index].name + '<br />'
				+ 'Qualifications: ' + selected_internship.financial_assistance_options[index].qualifications
	            + 'Option Type: ' + selected_internship.financial_assistance_options[index].type + '<br />'
	            + 'Website: <a href="' + selected_internship.financial_assistance_options[index].website + '" target="_new">' + selected_internship.financial_assistance_options[index].website + '</a>' + '<br />'
	            + 'Amount: ' + selected_internship.financial_assistance_options[index].how_much + '<br />'
				+ 'Source: ' +	selected_internship.financial_assistance_options[index].source
			'</li>';
	});
	if(financial_assistance_options_ul_lis == ''){
		financial_assistance_options_ul_lis = '<li><i>none specified</li></li>';
	}
	var html = '';
	html += '<div id="dialog-' + selected_internship.id + '" class="internship_details" title="' + selected_internship.name + '">';
	html += '<div id="tabs-' + selected_internship.id + '">'
			+ '<ul><li><a href="#tab-1">General Info</a></li><li><a href="#tab-2">Academics</a></li><li><a href="#tab-3">Careers</a></li><li><a href="#tab-4">Languages</a></li><li><a href="#tab-5">Qualifications</a></li><li><a href="#tab-6">Application Process</a></li><li><a href="#tab-7">Locations</a></li><li><a href="#tab-8">Financial Assistance</a></li></ul>'
			+ '<div id="tab-1">'
			+	'<p>' + selected_internship.description + '</p>'
			+	'<p>Deadline: ' + selected_internship.deadline + '</p>'
			+	'<p>Stipend: ' + selected_internship.stipend + '</p>'
			+	'<p><ul>'
						+ '<li>' + (selected_internship.is_paid ? 'Paid' : 'Not Paid') + '</li>'
						+ '<li>' + (selected_internship.requires_us_citizenship ? 'Requires US Citizenship' : 'Does Not Require US Citizenship') + '</li>'
						+ '<li>' + (selected_internship.is_part_time ? 'Part Time' : '') + ((selected_internship.is_part_time && selected_internship.is_full_time) ? ', ' : '') + (selected_internship.is_full_time ? 'Full Time' : '') + '</li>'
						+ '<li>' + (selected_internship.for_credit ? 'For Credit' : 'Not For Credit') + '</li>'
			+	'</ul></p></div>'
			+ '<div id="tab-2">'
			+ 	'<p>Academic Contact: ' + selected_internship.academic_contact_name + '</p>'
			+	'<p>Majors: <br /><ul>' + majors_ul_lis + '</ul> Minors: <br /><ul>' + minors_ul_lis + '</ul></p>'
			+	'<p>Semesters: <br /><ul>' + semesters_ul_lis + '</ul></p>'
			+ '</div>'
			+ '<div id="tab-3">'
			+ 	'<p>Provider: ' + selected_internship.provider_name + ' <br />Provider Contact: ' + selected_internship.provider_contact_name + '</p>'
			+	'<p>Fields:<br /><ul>' + fields_ul_lis + '</ul></p>'
			+ '</div>'
			+ '<div id="tab-4">'
			+ '<ul>' + languages_ul_lis + '</ul>'
			+ '</div>'
			+ '<div id="tab-5">'
			+	'<p>Qualifications: <br />' + selected_internship.qualifications + ' <br />Academic Qualifications: <br />' + selected_internship.qualifications_academic + '<br /></p>'
			+ '</div>'
			+ '<div id="tab-6">'
			+ 	selected_internship.application_process
			+ '</div>'
			+ '<div id="tab-7">'
			+ '<ul>' + locations_ul_lis + '</ul>'
			+ '</div>'
			+ '<div id="tab-8">'
			+ '<ul style="list-style: none;">' + financial_assistance_options_ul_lis + '</ul>'
			+ '</div>'
		+ '</div>';

	html += '</div>';
	$('#dialogs').append(html);
	$('#tabs-' + selected_internship.id).tabs();
}
function initDialog(id){
	$('#dialog-'+id).dialog({
		height: $(window).height()-($(window).height()*0.2), 
		width: $(window).width()-($(window).width()*0.2), 
		modal: true, 
		close: function() { $(this).dialog("destroy");  }
	});
}