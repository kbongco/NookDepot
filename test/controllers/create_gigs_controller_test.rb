require 'test_helper'

class CreateGigsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @create_gig = create_gigs(:one)
  end

  test "should get index" do
    get create_gigs_url, as: :json
    assert_response :success
  end

  test "should create create_gig" do
    assert_difference('CreateGig.count') do
      post create_gigs_url, params: { create_gig: { fee: @create_gig.fee, hemisphere: @create_gig.hemisphere, imgURL: @create_gig.imgURL, name: @create_gig.name, season: @create_gig.season } }, as: :json
    end

    assert_response 201
  end

  test "should show create_gig" do
    get create_gig_url(@create_gig), as: :json
    assert_response :success
  end

  test "should update create_gig" do
    patch create_gig_url(@create_gig), params: { create_gig: { fee: @create_gig.fee, hemisphere: @create_gig.hemisphere, imgURL: @create_gig.imgURL, name: @create_gig.name, season: @create_gig.season } }, as: :json
    assert_response 200
  end

  test "should destroy create_gig" do
    assert_difference('CreateGig.count', -1) do
      delete create_gig_url(@create_gig), as: :json
    end

    assert_response 204
  end
end
