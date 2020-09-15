require 'test_helper'

class TownInfosControllerTest < ActionDispatch::IntegrationTest
  setup do
    @town_info = town_infos(:one)
  end

  test "should get index" do
    get town_infos_url, as: :json
    assert_response :success
  end

  test "should create town_info" do
    assert_difference('TownInfo.count') do
      post town_infos_url, params: { town_info: { Hemisphere: @town_info.Hemisphere, InGameName: @town_info.InGameName, NativeFruit: @town_info.NativeFruit, TownName: @town_info.TownName, user_id: @town_info.user_id } }, as: :json
    end

    assert_response 201
  end

  test "should show town_info" do
    get town_info_url(@town_info), as: :json
    assert_response :success
  end

  test "should update town_info" do
    patch town_info_url(@town_info), params: { town_info: { Hemisphere: @town_info.Hemisphere, InGameName: @town_info.InGameName, NativeFruit: @town_info.NativeFruit, TownName: @town_info.TownName, user_id: @town_info.user_id } }, as: :json
    assert_response 200
  end

  test "should destroy town_info" do
    assert_difference('TownInfo.count', -1) do
      delete town_info_url(@town_info), as: :json
    end

    assert_response 204
  end
end
