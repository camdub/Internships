// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults
/*
 * Adminica UI
 *
 * Copyright (c) 2010 Tricycle Interactive
 *
 * http://www.tricycle.ie
 *
 * This file configures all the different jQuery scripts used in the Adminica Admin template. 
 * Links to the scripts can be found at the beginning of each function
 *
 */
 
 
 $(function() {
		
	// ICON CHANGING JQUERY ================================================
	var current_path = window.location.pathname;
	$('#nav_top').children('ul').children('li').each(function(){
		var iscurrent = false;
		$(this).find('a').each(function(){
			if ($(this).attr('href') == current_path){
				iscurrent = true;
			}
		});
		if(iscurrent){
			$(this).addClass('current');
			//$(this).chlidren('img').attr('src')
			$(this).find('img').attr('src', $(this).find('img').attr('src').replace('grey','white'));
		}
	});
	
	// AUTO-SUGGEST TEXT FIELDS ==============================================
	$("#internship_field_tokens").tokenInput("/fields.json", {
		crossDomain: false
	});
	$("#internship_language_tokens").tokenInput("/languages.json", {
		crossDomain: false
	});
	$("#internship_academic_focus_tokens").tokenInput("/academic_focuses.json", {
		crossDomain: false
	});
	$("#internship_location_tokens").tokenInput("/locations.json", {
		crossDomain: false
	});
	$("#internship_semester_tokens").tokenInput("/semesters.json", {
		crossDomain: false
	});
	$("#internship_financial_assistance_option_tokens").tokenInput("/financial_assistance_options.json", {
		crossDomain: false
	});
	
	// DATATABLES =============================================================
	// DataTables Config (more info can be found at http://www.datatables.net/)
		var oTable = $('.datatable').dataTable( {
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
					} );
					
		$(window).bind('resize', function () {
				oTable.fnAdjustColumnSizing();
			} );
			
			var tiny_params = {
			width:500,
			height:175,
			mode: 'textareas',
			cssclass:'te',
			controlclass:'tecontrol',
			rowclass:'teheader',
			dividerclass:'tedivider',
			controls:['bold','italic','underline','strikethrough','|','subscript','superscript','|',
					  'orderedlist','unorderedlist','|','outdent','indent','|','leftalign',
					  'centeralign','rightalign','blockjustify','|','unformat','|','undo','redo','n',
					  'font','size','style','|','image','hr','link','unlink','|','cut','copy','paste','print'],
			footer:false,
			fonts:['Verdana','Arial','Georgia','Trebuchet MS'],
			xhtml:true,
			cssfile:'/javascripts/tinyeditor/style.css',
			
			footerclass:'tefooter',
			toggle:{text:'source',activetext:'wysiwyg',cssclass:'toggler'},
			resize:{cssclass:'resize'}
		};
		tinyMCE.init(tiny_params);
		
		// prettify stuff
		/*$('.tiny_editor').each(function(index) {
			tiny_params.id = 'tiny-' + index;
			tiny_params.bodyid = 'editor-' + index;
			$(this).attr('id', tiny_params.id);
			if(index > 0)
				return;
			tiny_params.id = $(this).attr('name');
			$(this).attr('id', tiny_params.id);
			tiny_params.bodyid = 'editor-' + index;
	
			//new TINY.editor.edit('editor' + index, tiny_params);
			
			iframeId = $(this).attr('name')+"_ifr";
			$("#"+iframeId).ready(function () { //The function below executes once the iframe has finished loading
			        //$('some selector', frames['nameOfMyIframe'].document).doStuff();
					alert("Im in the iframe");
					alert($("#"+iframeId).contents().find('body').click(function(){alert($("#"+iframeId).contents().find('body').html())}));
			    });
			$('#editor-'+index).focusout(function(){alert('car')});
			
		});*/
		
		// Sidenav Accordion Config
			$( "ul#accordion" ).accordion({
				collapsible: true,
				active:false,
				header: 'li a.top_level',
				autoHeight:false,
				icons:false
			});

		// Top Nav Dropdown Accordion Config				
			$( "ul.dropdown" ).accordion({
				collapsible: true,
				active:false,
				header: 'li a.has_slide', // this is the element that will be clicked to activate the accordion 
				autoHeight:false,
				event: 'mousedown',
				icons:false
			});

	 	// Content Box Toggle Config 
			$("a.toggle").click(function(){
				$(this).toggleClass("toggle_closed").next().slideToggle("slow");
				return false; //Prevent the browser jump to the link anchor
			});
			
			// Set default to closed
			$(".toggle_closed").next().css("display","none");

	 	// Content Box Tabs Config
				$( ".tabs" ).tabs({ 
					fx: {opacity: 'toggle', duration: 'slow'} 
				});

				$( ".side_tabs" ).tabs({ 
					fx: {opacity: 'toggle', duration: 'slow', height:'auto'} 
				});


		// Content Box Accordion Config		
			$( ".content_accordion" ).accordion({
				collapsible: true,
				active:false,
				header: 'h3.bar', // this is the element that will be clicked to activate the accordion 
				autoHeight:false,
				event: 'mousedown',
				icons:false,
				animated: true
			});

		// Sortable Content Boxes Config				
			$( ".main_container" ).sortable({
				handle:'.grabber',  // the element which is used to 'grab' the item
				items:'div.box', // the item to be sorted when grabbed!
				opacity:0.8,
				revert:true,
				tolerance:'pointer',
				helper:'original',
				forceHelperSize:true,
				placeholder: 'dashed_placeholder',		
				forcePlaceholderSize:true
			});

		// Sortable Accordion Items Config			
			$( ".content_accordion" ).sortable({
				handle:'a.handle',
				axis: 'y', // the items can only be sorted along the y axis
				revert:true,
				tolerance:'pointer',
				forcePlaceholderSize:true
			});

		// Input Datepicker Config
			$( ".datepicker" ).datepicker({ dateFormat: 'd M yy' });; // the time format which will be input to the datepicker field upon selection. more info on formatting here: http://docs.jquery.com/UI/Datepicker/formatDate

		// input Slider	Config
			$( ".slider" ).slider(); // creates a simple slider with default settings


		// input Range Slider Config	
			$( ".slider_range" ).slider({
				range: true, // creates a range slider
				min: 0,
				max: 500,
				values: [ 75, 300 ],
				slide: function( event, ui ) {
					$( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
				}
			});

			$( "#amount" ).val( "$" + $( "#slider_range" ).slider( "values", 0 ) +
				" - $" + $( "#slider_range" ).slider( "values", 1 ) );

		// Dialog Config
			$( "#dialog" ).dialog({
				autoOpen: false, 
				show: "fade",
				hide: "fade",
				modal: true 
			});

			$( "#opener" ).click(function() {
				$( "#dialog" ).dialog( "open" ); // the #dialog element activates the modal box specified above
				return false;
			});

		//Progress Bar Config
			$( "#progressbar" ).progressbar({
				value: 25
			});

		// Dismiss alert box
			$(".alert").click(function(){
				$(this).fadeOut('slow');
			});

		// target nav items with a dropdown for styling.
		$('ul.dropdown').parent().addClass('has_dropdown');

		// wizard

		$('.wizard_steps ul li a').click(function(){
			$('.wizard_steps ul li').removeClass('current');
			$(this).parent('li').addClass('current');

			var step = $(this).attr('href');
			var step_num = $(this).attr('href').replace('#step_','');

			var prog_val = (step_num*25);

			$( "#progressbar").progressbar({ value: prog_val });

			$('.wizard_content').children().hide();
			$('.wizard_content').children(step).fadeIn();

			return false;
		});

		$('button.next_step').click(function(){

			var step = $(this).attr('id');
			var hash_step = ('#'+step);


			var step_num = $(this).attr('id').replace('step_','');
			var prog_val = (step_num*25);

			$( "#progressbar").progressbar({ value: prog_val });

			$('.wizard_steps ul li').removeClass('current');
			$('a[href='+ hash_step +']').parent().addClass('current');

			$('.wizard_content').children().hide();
			$('.wizard_content').children(hash_step).fadeIn();

			return false;
		});


	// Other Scripts

		// Uniform Config (more info can found at http://pixelmatrixdesign.com/uniform/)
	        $( "select, input:checkbox, input:radio, input:file").uniform();

	    // Tipsy Top Config (more info found at http://onehackoranother.com/projects/jquery/tipsy/)
			$('[title]').tipsy({
				fade: true,     // fade tooltips in/out?
				fallback: '',    // fallback text to use when no tooltip text
				gravity: 's',    // gravity
				opacity: 1,    // opacity of tooltip
				title: 'title',  // attribute/callback containing tooltip text
				trigger: 'hover' // how tooltip is triggered - hover | focus | manual    	
			});  

		// Tipsy Side Config
			$('input[title]').tipsy({
				trigger: 'focus',  
				offset:'5',
				gravity: 'w'
			});

		// focus on first field in form
		//$("input[type='text']:first", document.forms[0]).focus();


		// iOS Device Touch Config (more info can be found at http://old.nabble.com/jQuery-UI-Support-on-the-iPhone-td22011162s27240.html)

			$('.main_container').sortable();
			$('.grabber').addTouch();
			$('ul.content_accordion').sortable();
			$('a.handle').addTouch();
			$('.ui-slider-handle').addTouch();
			
			// static tables alternating rows
				$('table.static tr:even').addClass("even")


			// FileTree Config (more info can be found at http://abeautifulsite.net/blog/2008/03/jquery-file-tree/)
				$('#file_tree').fileTree({ 
							root: '/var/www/vhosts/tricycle.ie/httpdocs/adminica/file_tree/', 
							script: '../../../js/jqueryFileTree/jqueryFileTree.php', 
							loadMessage:'Loading...'  }, function(file) {
							alert(file);
							});

			//FancyBox Config (more info can be found at http://www.fancybox.net/)
				$(".gallery ul li a").fancybox({
		        'overlayColor':'#000' 

				});
				$("a img.fancy").fancybox();

			//This configures the iPhone style Contacts display)	  
		 		$('#slider_list').sliderNav({height:'500'});



			//Slide to top link
				$().UItoTop({ easingType: 'easeOutQuart' });


			//Fullcalendar		

			    $('#calendar').fullCalendar({
			    		firstDay:'1',
			    		weekMode:'liquid',
			    		aspectRatio: '1.5',
						theme:true,
						selectable:true,
						editable:true,
						draggable:true,
						droppable:true,
						timeFormat:'H:mm',
				    	axisFormat:'H:mm',
				    	columnFormat:{
						    month: 'ddd',    // Mon
						    week: 'ddd dS', // Mon 9/7
						    day: 'dddd dS MMMM'  // Monday 9/7
						},
						titleFormat:{
						    month: 'MMMM yyyy',                             // September 2009
						    week: "MMM d[ yyyy]{ 'to'[ MMM] d, yyyy}", // Sep 7 - 13 2009
						    day: 'ddd, MMMM d, yyyy'                  // Tuesday, Sep 8, 2009
						},
				    	allDayText:'All Day',
						header:{
						    left:   'prev title next, today',
						    center: '',
						    right:  'agendaWeek,agendaDay,month'
							},

						eventSources: [

						        // your event source
						        {
						            events: [ // put the array in the `events` property
						                {
						                    title  : 'Company AGM',
						                    start  : '2011-04-03',
										    className:'calendar_green'
						                },
						                {
						                    title  : 'Business Trip',
						                    start  : '2011-04-15',
						                    end    : '2011-04-20',
										    className:'calendar_blue'
						                },
						                {
						                    title  : 'Day off',
						                    start  : '2011-04-08 12:30:00',
										    className:'calendar_red'
						                }
						            ]
						        },
						        {
								    url: 'https://www.google.com/calendar/feeds/nueoipsjhgm857gpojq5563cfo@group.calendar.google.com/public/basic',
								    className:'calendar_magenta'
								},
								{
									url: 'http://www.google.com/calendar/feeds/usa__en%40holiday.calendar.google.com/public/basic',
									className: 'calendar_navy'
								}


						    ],

						drop: function(date, allDay) { // this function is called when something is dropped

						// retrieve the dropped element's stored Event Object
						var originalEventObject = $(this).data('eventObject');

						// we need to copy it, so that multiple events don't have a reference to the same object
						var copiedEventObject = $.extend({}, originalEventObject);

						// assign it the date that was reported
						copiedEventObject.start = date;
						copiedEventObject.allDay = allDay;

						// render the event on the calendar
						// the last `true` argument determines if the event "sticks" (http://arshaw.com/fullcalendar/docs/event_rendering/renderEvent/)
						$('#calendar').fullCalendar('renderEvent', copiedEventObject, true);

						// is the "remove after drop" checkbox checked?
						if ($('#drop-remove').is(':checked')) {
							// if so, remove the element from the "Draggable Events" list
							$(this).remove();
						}

					}

				    });

				$('ul#calendar_drag_list li a').each(function() {

					// create an Event Object (http://arshaw.com/fullcalendar/docs/event_data/Event_Object/)
					// it doesn't need to have a start or end
					var eventObject = {
						title: $.trim($(this).text()), // use the element's text as the event title
						className: 'calendar_black'
					};

					// store the Event Object in the DOM element so we can get to it later
					$(this).data('eventObject', eventObject);

					// make the event draggable using jQuery UI
					$(this).draggable({
						zIndex: 999,
						revert: true,      // will cause the event to go back to its
						revertDuration: 5  //  original position after the drag
					});

				});

				// Graphs and Charts - Flot jQuery

				var line_data = [];
			    for (var i = 0; i < 14; i += 0.2)
			        line_data.push([i, Math.sin(i)+8]);

			    var bar_data = [[0, 5], [2, 7], [4, 11], [6, 1], [8, 8], [10, 7], [12, 9], [14, 3]];
				var bar_data_2 = [[1, 3], [3, 8], [5, 5], [7, 13], [9, 8], [11, 5], [13, 8], [15, 5]];

			    // a null signifies separate line segments
			    var point_data = [[0, 12], [7, 12], [8, 2.5], [12, 2.5], [15, 7]];

				var extra_data_1 = [];
			    for (var i = -20; i < 20; i += 0.4)
			        extra_data_1.push([i, Math.tan(i)+(i*5)]);

				var extra_data_2 = [[1988, 483994], [1989, 479060], [1991, 401949], [1993, 402375], [1994, 377867], [1996, 337946], [1997, 336185], [1998, 328611], [2000, 342172], [2001, 344932], [2003, 440813], [2004, 480451], [2006, 528692]];

				var pie_data = [];
				var series = Math.floor(Math.random()*5)+1;
				for( var i = 0; i<series; i++)
				{
					pie_data[i] = { label: "Series"+(i+1), data: Math.floor(Math.random()*100)+1 }
				}

				var pie_data_2 = [
						{ label: "Slice 1",  data: [[1,117]], color: '#122b45'},
						{ label: "Slice 2",  data: [[1,30]], color: '#064792'},
						{ label: "Slice 3",  data: [[1,44]], color: '#4C5766'},
						{ label: "Slice 4",  data: [[1,90]], color: '#9e253b'},
						{ label: "Slice 5",  data: [[1,70]], color: '#8d579a'},
						{ label: "Slice 6",  data: [[1,80]], color: '#2b4356'}
					];

			    var adminica_grad_black = { colors: ["#4C5766 ", "#313841 "] };
			    var adminica_grad_blue = { colors: ["#1C5EA0 ", "#064792 "] };
			    var adminica_grad_navy = { colors: ["#2b4356 ", "#122b45 "] };
			    var adminica_grad_red = { colors: ["#9e253b ", "#7C1F30 "] };
			    var adminica_grad_green = { colors: ["#3d8336 ", "#277423 "] };
			    var adminica_grad_magenta = { colors: ["#9b6ca6 ", "#8d579a "] };
			    var adminica_grad_brown = { colors: ["#53453e ", "#3b2e28 "] };
			    var adminica_grad_grey = { colors: ["#D0D6DA", "#4C5766"] };

			    var adminica_black = "#4C5766 ";
			    var adminica_blue = "#1C5EA0 ";
			    var adminica_navy = "#2b4356 ";
			    var adminica_red = "#9e253b ";
			    var adminica_green = "#3d8336";
			    var adminica_magenta = "#9b6ca6";
			    var adminica_brown = "#53453e";

				$.plot($("#flot_pie"), pie_data_2,
				{
				        series: {
				            pie: {
				                show: true
				            },
					        grid: {
					            hoverable: true,
					            clickable: true
					        }
				        }
				});

				$.plot($("#flot_pie_2"), pie_data_2,
				{
				        series: {
				            pie: {
			                	innerRadius: 0.75,
				                show: true
				            }		,
					        grid: {
					            hoverable: true,
					            clickable: true
					        }
				        }
				});

			    $.plot($("#flot_bar"), 
			    [
			        {	

						shadowSize: 25,
			        	label:'Bar Chart 1',
						color:adminica_magenta,
			            data: bar_data,
			            bars: { 
			            	show: true,
				            fill: true,
		      				fillColor: adminica_grad_magenta,
							lineWidth: 0,
							border:false
			            	}
			        },		
			        {	

						shadowSize: 25,
			        	label:'Bar Chart 2',
						color:'#4C5766',
			            data: bar_data_2,
			            bars: { 
			            	show: true,
				            fill: true,
		      				fillColor: adminica_grad_black,
							lineWidth: 0,
							border:false
			            	}
			        }
			    ],  
				    {
				        grid:{
						    show: true,
		    				aboveData: false,
							backgroundColor: { colors: ["#fff", "#eee"] },
						    labelMargin:15,
							//axisMargin: number
						    //markings: array of markings or (fn: axes -> array of markings)
						    borderWidth: 1,
							borderColor: '#cccccc',
						    //minBorderMargin: number or null
						    clickable: true,
						    hoverable: true,
						    autoHighlight: true,
						    mouseActiveRadius: 10
				        	},
				        legend: {
						    show: true,
						    //labelFormatter: null or (fn: string, series object -> string)
						    labelBoxBorderColor: '#fff',
						    noColumns: 5,
						    //position: "ne" or "nw" or "se" or "sw"
							margin: 10,
							backgroundColor: '#fff'
						    //backgroundOpacity: number between 0 and 1
						    //container: "#legend_holder"
						  }
				    }
			    );

				$.plot($("#flot_line"), 
			    [
			        {	
						shadowSize: 10,
			        	label:'Line Chart 1',
						color:adminica_blue,
			            data: line_data,
			            lines: { 
			            	show: true,
				            fill: true,
		      				fillColor: adminica_grad_grey,
							lineWidth: 4
			            	}
			        },
			        {	
						shadowSize: 10,
			        	label:'Line Chart 2',
						color:adminica_red,
			            data: bar_data,
			            lines: { 
			            	show: true,
				            fill: false,
							lineWidth: 4
			            	},
				        points: { 
			            	show: true,
				            fill: false,
							lineWidth: 2
			            	}
			        }
			    ],  
				    {
				        grid:{
						    show: true,
		    				aboveData: false,
							backgroundColor: { colors: ["#fff", "#eee"] },
						    labelMargin:15,
							//axisMargin: number
						    //markings: array of markings or (fn: axes -> array of markings)
						    borderWidth: 1,
							borderColor: '#cccccc',
						    //minBorderMargin: number or null
						    clickable: true,
						    hoverable: true,
						    autoHighlight: true,
						    mouseActiveRadius: 10
				        	},
				        legend: {
						    show: true,
						    //labelFormatter: null or (fn: string, series object -> string)
						    labelBoxBorderColor: '#fff',
						    noColumns: 5,
						    //position: "ne" or "nw" or "se" or "sw"
							margin: 10,
							backgroundColor: '#fff'
						    //backgroundOpacity: number between 0 and 1
						    //container: "#legend_holder"
						  }
				    }
			    );

				$.plot($("#flot_points"), 
			    [
			        {	
						shadowSize: 10,
			        	label:'Points Chart',
						color:adminica_blue,
			            data: extra_data_2,
			            points: { 
			            	show: true,
				            fill: true,
							fillColor: '#ffffff',
							lineWidth: 3
			            	},
			            lines: { 
			            	show: true,
				            fill: true,
		      				fillColor: adminica_grad_black,
							lineWidth: 5
			            	}
			        }
			    ],  
				    {
				        grid:{
						    show: true,
		    				aboveData: false,
							backgroundColor: { colors: ["#fff", "#eee"] },
						    labelMargin:15,
							//axisMargin: number
						    //markings: array of markings or (fn: axes -> array of markings)
						    borderWidth: 1,
							borderColor: '#cccccc',
						    //minBorderMargin: number or null
						    clickable: true,
						    hoverable: true,
						    autoHighlight: true,
						    mouseActiveRadius: 10
				        	},
				        legend: {
						    show: true,
						    //labelFormatter: null or (fn: string, series object -> string)
						    labelBoxBorderColor: '#fff',
						    noColumns: 5,
						    //position: "ne" or "nw" or "se" or "sw"
							margin: 10,
							backgroundColor: '#fff'
						    //backgroundOpacity: number between 0 and 1
						    //container: "#legend_holder"
						  }
				    }
			    );

				// resize the charts when the window resizes
		    	$(window).resize(function() {
			  		$('#flot_bar').resize();
				  	$('#flot_line').resize();
			  		$('#flot_points').resize();
			  		$('#flot_pie').resize();
		  		});

});