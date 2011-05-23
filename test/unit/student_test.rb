require 'test_helper'

class StudentTest < ActiveSupport::TestCase
  setup do
    @email = students(:bad_email)
    @gpa = students(:bad_gpa)
  end
  
  test "should reject invalid email" do
    student = Student.new(:name => @email.name, :email=> @email.email, :gpa => @email.gpa)
    assert !student.save
  end
  test "should reject invalid GPA" do
    post = Student.new(:name => @gpa.name, :email=> @gpa.email, :gpa => @gpa.gpa)
    assert !post.save
  end  
end
