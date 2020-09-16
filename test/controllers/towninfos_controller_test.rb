require 'test_helper'

class TowninfosControllerTest < ActionDispatch::IntegrationTest
  setup do
    @towninfo = towninfos(:one)
  end

  test "should get index" do
    get towninfos_url, as: :json
    assert_response :success
  end

  test "should create towninfo" do
    assert_difference('Towninfo.count') do
      post towninfos_url, params: { towninfo: { gamename: @towninfo.gamename, hemisphere: @towninfo.hemisphere, nativefruit: @towninfo.nativefruit, townname: @towninfo.townname, user_id: @towninfo.user_id } }, as: :json
    end

    assert_response 201
  end

  test "should show towninfo" do
    get towninfo_url(@towninfo), as: :json
    assert_response :success
  end

  test "should update towninfo" do
    patch towninfo_url(@towninfo), params: { towninfo: { gamename: @towninfo.gamename, hemisphere: @towninfo.hemisphere, nativefruit: @towninfo.nativefruit, townname: @towninfo.townname, user_id: @towninfo.user_id } }, as: :json
    assert_response 200
  end

  test "should destroy towninfo" do
    assert_difference('Towninfo.count', -1) do
      delete towninfo_url(@towninfo), as: :json
    end

    assert_response 204
  end
end
