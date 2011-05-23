require 'test_helper'

class AcademicFocusesControllerTest < ActionController::TestCase
  setup do
    @academic_focus = academic_focuses(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:academic_focus)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create academic_focus" do
    assert_difference('AcademicFocus.count') do
      post :create, :academic_focus => @academic_focus.attributes
    end

    assert_redirected_to academic_focus_path(assigns(:academic_focus))
  end

  test "should show academic_focus" do
    get :show, :id => @academic_focus.to_param
    assert_response :success
  end

  test "should get edit" do
    get :edit, :id => @academic_focus.to_param
    assert_response :success
  end

  test "should update academic_focus" do
    put :update, :id => @academic_focus.to_param, :academic_focus => @academic_focus.attributes
    assert_redirected_to academic_focus_path(assigns(:academic_focus))
  end

  test "should destroy academic_focus" do
    assert_difference('AcademicFocus.count', -1) do
      delete :destroy, :id => @academic_focus.to_param
    end

    assert_redirected_to academic_focuses_path
  end
end
