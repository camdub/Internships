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
			id:'tiny-1', // put the id for each text area with js
			width:584,
			height:175,
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
			bodyid:'editor-1', // generate this as well
			footerclass:'tefooter',
			toggle:{text:'source',activetext:'wysiwyg',cssclass:'toggler'},
			resize:{cssclass:'resize'}
		};
		
		$('.tiny_editor').each(function(index) {
			tiny_params.id = 'tiny-' + index;
			tiny_params.bodyid = 'editor-' + index;
			$(this).attr('id', tiny_params.id);			
			new TINY.editor.edit('editor' + index, tiny_params);
		});

});