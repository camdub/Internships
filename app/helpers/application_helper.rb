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
end
