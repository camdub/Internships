require 'test_helper'

class AcademicFocusControllerTest < ActionController::TestCase
  setup do
    @academic_focu = academic_focus(:one)
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

  test "should create academic_focu" do
    assert_difference('AcademicFocu.count') do
      post :create, :academic_focu => @academic_focu.attributes
    end

    assert_redirected_to academic_focu_path(assigns(:academic_focu))
  end

  test "should show academic_focu" do
    get :show, :id => @academic_focu.to_param
    assert_response :success
  end

  test "should get edit" do
    get :edit, :id => @academic_focu.to_param
    assert_response :success
  end

  test "should update academic_focu" do
    put :update, :id => @academic_focu.to_param, :academic_focu => @academic_focu.attributes
    assert_redirected_to academic_focu_path(assigns(:academic_focu))
  end

  test "should destroy academic_focu" do
    assert_difference('AcademicFocu.count', -1) do
      delete :destroy, :id => @academic_focu.to_param
    end

    assert_redirected_to academic_focus_path
  end
end
