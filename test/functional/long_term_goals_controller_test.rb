require 'test_helper'

class LongTermGoalsControllerTest < ActionController::TestCase
  setup do
    @long_term_goal = long_term_goals(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:long_term_goals)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create long_term_goal" do
    assert_difference('LongTermGoal.count') do
      post :create, :long_term_goal => @long_term_goal.attributes
    end

    assert_redirected_to long_term_goal_path(assigns(:long_term_goal))
  end

  test "should show long_term_goal" do
    get :show, :id => @long_term_goal.to_param
    assert_response :success
  end

  test "should get edit" do
    get :edit, :id => @long_term_goal.to_param
    assert_response :success
  end

  test "should update long_term_goal" do
    put :update, :id => @long_term_goal.to_param, :long_term_goal => @long_term_goal.attributes
    assert_redirected_to long_term_goal_path(assigns(:long_term_goal))
  end

  test "should destroy long_term_goal" do
    assert_difference('LongTermGoal.count', -1) do
      delete :destroy, :id => @long_term_goal.to_param
    end

    assert_redirected_to long_term_goals_path
  end
end
