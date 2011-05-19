require 'test_helper'

class AcademicFocusTypesControllerTest < ActionController::TestCase
  setup do
    @academic_focus_type = academic_focus_types(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:academic_focus_types)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create academic_focus_type" do
    assert_difference('AcademicFocusType.count') do
      post :create, :academic_focus_type => @academic_focus_type.attributes
    end

    assert_redirected_to academic_focus_type_path(assigns(:academic_focus_type))
  end

  test "should show academic_focus_type" do
    get :show, :id => @academic_focus_type.to_param
    assert_response :success
  end

  test "should get edit" do
    get :edit, :id => @academic_focus_type.to_param
    assert_response :success
  end

  test "should update academic_focus_type" do
    put :update, :id => @academic_focus_type.to_param, :academic_focus_type => @academic_focus_type.attributes
    assert_redirected_to academic_focus_type_path(assigns(:academic_focus_type))
  end

  test "should destroy academic_focus_type" do
    assert_difference('AcademicFocusType.count', -1) do
      delete :destroy, :id => @academic_focus_type.to_param
    end

    assert_redirected_to academic_focus_types_path
  end
end
