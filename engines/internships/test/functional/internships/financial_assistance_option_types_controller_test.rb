require 'test_helper'

class FinancialAssistanceOptionTypesControllerTest < ActionController::TestCase
  setup do
    @financial_assistance_option_type = financial_assistance_option_types(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:financial_assistance_option_types)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create financial_assistance_option_type" do
    assert_difference('FinancialAssistanceOptionType.count') do
      post :create, :financial_assistance_option_type => @financial_assistance_option_type.attributes
    end

    assert_redirected_to financial_assistance_option_type_path(assigns(:financial_assistance_option_type))
  end

  test "should show financial_assistance_option_type" do
    get :show, :id => @financial_assistance_option_type.to_param
    assert_response :success
  end

  test "should get edit" do
    get :edit, :id => @financial_assistance_option_type.to_param
    assert_response :success
  end

  test "should update financial_assistance_option_type" do
    put :update, :id => @financial_assistance_option_type.to_param, :financial_assistance_option_type => @financial_assistance_option_type.attributes
    assert_redirected_to financial_assistance_option_type_path(assigns(:financial_assistance_option_type))
  end

  test "should destroy financial_assistance_option_type" do
    assert_difference('FinancialAssistanceOptionType.count', -1) do
      delete :destroy, :id => @financial_assistance_option_type.to_param
    end

    assert_redirected_to financial_assistance_option_types_path
  end
end
