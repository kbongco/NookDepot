require 'test_helper'

class CreateListingsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @create_listing = create_listings(:one)
  end

  test "should get index" do
    get create_listings_url, as: :json
    assert_response :success
  end

  test "should create create_listing" do
    assert_difference('CreateListing.count') do
      post create_listings_url, params: { create_listing: { links: @create_listing.links, name: @create_listing.name, user_id: @create_listing.user_id } }, as: :json
    end

    assert_response 201
  end

  test "should show create_listing" do
    get create_listing_url(@create_listing), as: :json
    assert_response :success
  end

  test "should update create_listing" do
    patch create_listing_url(@create_listing), params: { create_listing: { links: @create_listing.links, name: @create_listing.name, user_id: @create_listing.user_id } }, as: :json
    assert_response 200
  end

  test "should destroy create_listing" do
    assert_difference('CreateListing.count', -1) do
      delete create_listing_url(@create_listing), as: :json
    end

    assert_response 204
  end
end
