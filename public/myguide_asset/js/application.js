var data;
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
	$.ajax({
		url: '/short_term_goals.json',
		dataType: 'json',
		success: function(new_data){
			data = new_data;
			setupGoals();
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
		$.each(this.tags,function(){
			progress['all']['year'+school_year].total += tasks;
			if(typeof progress[this] == 'undefined'){
				progress[this] = 
				{
					'year1': 	{'complete': 0,		'total':0},
					'year2': 	{'complete': 0,		'total':0},
					'year3': 	{'complete': 0,		'total':0},
					'year4': 	{'complete': 0,		'total':0}
				};
			}
			progress[this]['year'+school_year].total += tasks;
		});
	});
	$.each(data,function(){
		var html = '<div class="button stg ';
		$.each(this.tags,function(){
			html += this + ' ';
		});
		html += '"><img src="' + unchecked_icon + '" />' + this.name + '<div class="tasks hidden"><ul>';
		$.each(this.tasks,function(){
			html +='<li><input type="checkbox" name="task[name]" /><label>'+ this.name +'</label></li>';
		});
		html += '</ul></div></div>';
		$('#year'+this.school_year+'_col').append(html);
	});
	$(".stg").click(function(event){
		var target = $(event.target);
		if(target.is('li')){
			target = target.children('input');
			if(target.is(':checked')){
				target.removeAttr('checked');
			} else {
				target.attr('checked', 'checked')
			}
		} else if(target.is('label')){
			target = target.parent('li').children('input');
			if(target.is(':checked')){
				target.removeAttr('checked');
			} else {
				target.attr('checked', 'checked');
			}
		}
		if(target.attr('type') == 'checkbox'){
			//get the current year
			var id = $(this).parent('div').attr('id').split('_');
			var school_year = id[0];
			if(target.is(':checked')){
				//Put the code here for boxes that get checked
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