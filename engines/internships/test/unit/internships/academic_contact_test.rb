require 'test_helper'

class AcademicContactTest < ActiveSupport::TestCase
  def setup
    @academic_contact = FactoryGirl.create(:academic_contact)
  end
  #Attributes
  should validate_presence_of(:name)
  should validate_presence_of(:office_location)
  should validate_presence_of(:phone)
  should validate_presence_of(:email)
  #Associations
  should belong_to(:department)
  should have_many(:internships)
end