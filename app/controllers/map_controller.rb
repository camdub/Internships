class MapController < ApplicationController
  # GET /internships
  # GET /internships.xml
  def index
    respond_to do |format|
      format.html # index.html.erb
    end
  end
end
