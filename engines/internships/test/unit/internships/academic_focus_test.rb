require 'test_helper'

class AcademicFocusTest < ActiveSupport::TestCase
  def setup
    @academic_focus = FactoryGirl.create(:academic_focus)
  end
  #Attributes
  should validate_presence_of(:name)
  #Associations
  should belong_to(:academic_focus_type)
  should belong_to(:department)
end