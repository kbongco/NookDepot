class CreateListingsController < ApplicationController
  before_action :set_create_listing, only: [:show, :update, :destroy]

  # GET /create_listings
  def index
    @create_listings = CreateListing.all

    render json: @create_listings
  end

  # GET /create_listings/1
  def show
    render json: @create_listing
  end

  # POST /create_listings
  def create
    @create_listing = CreateListing.new(create_listing_params)

    if @create_listing.save
      render json: @create_listing, status: :created, location: @create_listing
    else
      render json: @create_listing.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /create_listings/1
  def update
    if @create_listing.update(create_listing_params)
      render json: @create_listing
    else
      render json: @create_listing.errors, status: :unprocessable_entity
    end
  end

  # DELETE /create_listings/1
  def destroy
    @create_listing.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_create_listing
      @create_listing = CreateListing.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def create_listing_params
      params.require(:create_listing).permit(:name, :links, :user_id)
    end
end
