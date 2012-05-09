// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
//= require jquery
//= require jquery_ujs
//= require chosen-jquery


var data = {};
var user_data = {};
var progress = {
	'all': 
	{
		'year1': 	{'complete': 0,		'total':0},
		'year2': 	{'complete': 0,		'total':0},
		'year3': 	{'complete': 0,		'total':0},
		'year4': 	{'complete': 0,		'total':0}
	}
};
var checked_icon = 'http://humadvisement.byu.edu/sites/default/files/menu_icons/Check_64x64.png';
var unchecked_icon = 'http://humadvisement.byu.edu/sites/default/files/menu_icons/Delete_64x64.png';
var tag = 'all';

$(function(){
  //set the chosen dropdown
  $('select.chosen').chosen();
  //set the active user
  user_data.user_id = parseInt($('#myguide').attr('user_id'));
	$.ajax({
		url: '/short_term_goals.json',
		dataType: 'json',
		success: function(new_data){
			data = new_data;
			setupGoals();
			setupUserData(user_data.user_id);
		}
	});
});
function setupGoals(){
	//initialize the all class
	$('.year1.progressbar, .year2.progressbar, .year3.progressbar, .year4.progressbar').addClass('all');
	//initialize the progress object with the default data
	//iterate through short term goals
	$.each(data,function(){
		var tasks = this.tasks.length;
		var school_year = this.school_year;
		
		progress['all']['year'+school_year].total += tasks;
		if(typeof progress[this.tag] == 'undefined'){
			progress[this.tag] = 
			{
				'year1': 	{'complete': 0,		'total':0},
				'year2': 	{'complete': 0,		'total':0},
				'year3': 	{'complete': 0,		'total':0},
				'year4': 	{'complete': 0,		'total':0}
			};
		}
		progress[this.tag]['year'+school_year].total += tasks;
		
	});
	$.each(data,function(){
		var html = '<div class="button stg ' + this.tag;

		html += '" stg_id="'+ this.id +'"><img src="' + unchecked_icon + '" />' + this.name + '<div class="edit"><img class="edit_img" src="http://humadvisement.byu.edu/sites/default/files/menu_icons/Pencil_64x64.png"></div><div class="tasks hidden"><ul>';
		$.each(this.tasks,function(){
			html +='<li><input type="checkbox" name="task[name]" task_id="'+this.id+'" /><label>'+ this.name +'</label>';
			html +='<div class="description_dialog" task_id="'+this.id+'">' + this.description + '</div>'
			html +='</li>';
		});
		html += '</ul></div></div>';
		$('#year'+this.school_year+'_col').append(html);
	});
	$(".year img.add").click(function(event){
	  window.location.href = "/short_term_goals/new";
  });
  $('.description_dialog').dialog({ autoOpen: false, show: "fade", hide: "fade", modal: true });
	$(".stg").click(function(event){
		var target = $(event.target);
		if(target.is('li')){
			target = target.children('input');
			if(target.is(':checked')){
				target.removeAttr('checked');
			} else {
				target.attr('checked', 'checked')
			}
		} else if(target.is('label')) {
			target = target.parent('li').children('input');
			if(target.is(':checked')){
				target.removeAttr('checked');
			} else {
				//target.attr('checked', 'checked');
				$(".description_dialog[task_id="+target.attr("task_id")+"]").dialog('open');
			}
		} else if(target.is('.edit_img')) {
		  var stg_id = target.parents('.stg').attr('stg_id');
		  window.location.href = '/short_term_goals/'+ stg_id +'/edit';
		  exit();
		  
		}/* else if((target.is('input')) {
		  //check the box
		}*/
		//The code above is working and is a representation of what happens naturally but is here as a comment to add clarification
		if(target.attr('type') == 'checkbox'){
			//get the current year
			var id = $(this).parent('div').attr('id').split('_');
			var school_year = id[0];
			if(target.is(':checked')){
				//Put the code here for boxes that get checked
				//update the user's myguide data
  		  updateUserData(target.attr('task_id'), true);
				//update the prgress bar for the given tag and given year
				$.each(progress,function(key){
					if(target.parents("div.stg").hasClass(key)){
						progress[key][school_year].complete++;
						setProgressBar(key);
					}	
				});
				//update the porgress bar for the 'all' tag
				progress['all'][school_year].complete++;
				setProgressBar('all');
			} else {
				//Put the code here for boxes that get unchecked
				//update the user's myguide data
  		  updateUserData(target.attr('task_id'), false);
				//update the progress bar for the given tag and given year
				$.each(progress,function(key){
					if(target.parents("div.stg").hasClass(key)){
						progress[key][school_year].complete--;
						setProgressBar(key);
					}	
				});
				//update the porgress bar for the 'all' tag
				progress['all'][school_year].complete--;
				setProgressBar('all');
			}
			//check to see if all of the subtasks are complete
			var one_is_unchecked = false;
			target.parents('div.tasks').find('input').each(function(){
				if(!$(this).is(':checked')){
					one_is_unchecked = true;
				}
			});
			if(!one_is_unchecked){
				target.parents('div.stg').children('img').attr('src', checked_icon);
			} else {
				target.parents('div.stg').children('img').attr('src', unchecked_icon);
			}
		} else {
			$(this).children("div.tasks").slideToggle();
		}
	});
	$(".tag").click(function(){
		$('.year1.progressbar, .year2.progressbar, .year3.progressbar, .year4.progressbar').removeClass(tag);
		tag = $(this).attr('id');
		$('.year1.progressbar, .year2.progressbar, .year3.progressbar, .year4.progressbar').addClass(tag);
		setProgressBar(tag);
		$(".stg").each(function(){ 
			//$(this).fadeOut();
			$(this).addClass('hidden');
		});
		$(".stg").each(function(){
			if(tag == "all"){
				//$(this).fadeIn();
				$(this).removeClass('hidden');
			} else {
				if($(this).hasClass(tag)){
					//$(this).fadeIn();
					$(this).removeClass('hidden');
				}
			}
		});
	});
	$( ".progressbar" ).progressbar({value: 0});
}
function setProgressBar(key){
	//set the tag progress bars
	var key_complete = 0;
	var key_total = 0;
	//This return accounts for the case where the id for a tag button does not exist in any of the short term goals on the chart.  this should never happen but the fix is here in the case that it does
	if ( typeof progress[key] == "undefined"){
		return;
	}
	$.each(progress[key],function(){
		key_complete += this.complete;
		key_total += this.total;
	});
	$( ".progressbar."+key ).progressbar( "value",(key_complete/key_total) * 100);
	//set the year progress bars
	$.each(progress[tag],function(school_year){
		$( ".progressbar."+school_year ).progressbar( "value",(this.complete/this.total) * 100);		
	});	
}
function setupUserData(user_id){
  //set a json object to contain the checked tags
  $.ajax({
		url: '/users/' + user_id + '/tasks.json',
		dataType: 'json',
		success: function(new_data){
		  //add data to the data model
		  user_data.user_id = user_id;
			user_data.tasks = new_data;
			//trigger the click function on the approriate tasks
			$.each( user_data.tasks, function(index, value){
			  $('input[task_id='+value+']').siblings('label').trigger('click');
			});
		}
	});
}
function updateUserData(task_id, add){
  
  task_id = parseInt(task_id);  
  index_of_task_id = user_data.tasks.indexOf(task_id);
  is_change_to_sync = false;
  
  if(add){
    if(index_of_task_id < 0){
      user_data.tasks.push(task_id);
      is_change_to_sync = true;
    }
  } else {
    user_data.tasks.splice(index_of_task_id,1);
    is_change_to_sync = true;
  }
  if(is_change_to_sync){
    $.ajax({
  		url: '/users/' + user_data.user_id  + '/tasks.json',
  		data: user_data,
  		dataType: 'json',
  		success: function(){

  		},
  		error: function(){
  		  alert("Could not sync changes with the server, check your internet connection and try again.");
  		  //TO FIX: the user doesnt know how to 'try again'
  		}
  	});
  }
}