module ApplicationHelper
  
  def icon_path
    "#{ENV['RAILS_RELATIVE_URL_ROOT']}/images/icons/small/white"
  end
  def white_icon_path
    "#{ENV['RAILS_RELATIVE_URL_ROOT']}/images/icons/small/white"
  end
  def grey_icon_path
    "#{ENV['RAILS_RELATIVE_URL_ROOT']}/images/icons/small/grey"
  end
  
  def root_url
    "#{ENV['RAILS_RELATIVE_URL_ROOT']}"
  end
  
  def theme_box(grid, title, header = true, hidden = false, &block)
  	output = '<div class="box grid_' + grid.to_s + ' round_all">'
  	if header
  	  output << '<h2 class="box_head grad_colour">' + title + '</h2>'
  	  output << '<a class="grabber"></a>'
  	  if hidden
  	    output << '<a class="toggle toggle_closed"></a>'
  	  else
  	    output << '<a class="toggle"></a>'
  	  end
  	end
  	output << '<div class="block">' + capture(&block) + '</div></div>'
  	
  	raw output
  end
end
