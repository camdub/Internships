module Internships
  class ApplicationController < ::ApplicationController
    before_filter :before

    def before
      puts "before filter"
      puts "+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++"
      puts current_user
    end
  end
end
