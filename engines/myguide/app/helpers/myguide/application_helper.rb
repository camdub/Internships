module Myguide
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
    def system_messages(messages)
      html = ''
      #types of flashes to use: warning, error, message, notice
      messages.each do |key, msg|
        case key
        when :warning
          html << '<div class="alert alert_orange">' + '<img height="24" width="24" src="' + white_icon_path + '/Alert.png' + '">' + msg + '</div>'
        when :alert
          html << '<div class="alert alert_red">' + '<img height="24" width="24" src="' + white_icon_path + '/Acces Denied Sign.png' + '">' + msg + '</div>'
        when :error
          html << '<div class="alert alert_red">' + '<img height="24" width="24" src="' + white_icon_path + '/Acces Denied Sign.png' + '">' + msg + '</div>'
        when :notice 
          html << '<div class="alert alert_green">' + '<img height="24" width="24" src="' + white_icon_path + '/Alert 2.png' + '">' + msg + '</div>'
        else #message
          html << '<div class="alert alert_blue">' + '<img height="24" width="24" src="' + white_icon_path + '/Speech Bubble 2.png' + '">' + msg + '</div>'
        end
    	end
    	raw html
    end
  end
end
