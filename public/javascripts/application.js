// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults
/*
 * Adminica UI
 *
 * Copyright (c) 2010 Tricycle Interactive
 *
 * http://www.tricycle.ie
 *
 * This file configures all the different jQuery scripts used in the Adminica Admin template. Links to the scripts can be found at the beginning of each function
 *
 */
 
 
 $(function() {
		
	// Set current tab to current class
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

});