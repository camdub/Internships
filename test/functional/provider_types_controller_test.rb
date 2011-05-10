require 'test_helper'

class ProviderTypesControllerTest < ActionController::TestCase
  setup do
    @provider_type = provider_types(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:provider_types)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create provider_type" do
    assert_difference('ProviderType.count') do
      post :create, :provider_type => @provider_type.attributes
    end

    assert_redirected_to provider_type_path(assigns(:provider_type))
  end

  test "should show provider_type" do
    get :show, :id => @provider_type.to_param
    assert_response :success
  end

  test "should get edit" do
    get :edit, :id => @provider_type.to_param
    assert_response :success
  end

  test "should update provider_type" do
    put :update, :id => @provider_type.to_param, :provider_type => @provider_type.attributes
    assert_redirected_to provider_type_path(assigns(:provider_type))
  end

  test "should destroy provider_type" do
    assert_difference('ProviderType.count', -1) do
      delete :destroy, :id => @provider_type.to_param
    end

    assert_redirected_to provider_types_path
  end
end
