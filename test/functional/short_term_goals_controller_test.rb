require 'test_helper'

class ShortTermGoalsControllerTest < ActionController::TestCase
  setup do
    @short_term_goal = short_term_goals(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:short_term_goals)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create short_term_goal" do
    assert_difference('ShortTermGoal.count') do
      post :create, :short_term_goal => @short_term_goal.attributes
    end

    assert_redirected_to short_term_goal_path(assigns(:short_term_goal))
  end

  test "should show short_term_goal" do
    get :show, :id => @short_term_goal.to_param
    assert_response :success
  end

  test "should get edit" do
    get :edit, :id => @short_term_goal.to_param
    assert_response :success
  end

  test "should update short_term_goal" do
    put :update, :id => @short_term_goal.to_param, :short_term_goal => @short_term_goal.attributes
    assert_redirected_to short_term_goal_path(assigns(:short_term_goal))
  end

  test "should destroy short_term_goal" do
    assert_difference('ShortTermGoal.count', -1) do
      delete :destroy, :id => @short_term_goal.to_param
    end

    assert_redirected_to short_term_goals_path
  end
end
