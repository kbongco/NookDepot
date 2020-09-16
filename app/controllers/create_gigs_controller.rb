class CreateGigsController < ApplicationController
  before_action :set_create_gig, only: [:show, :update, :destroy]

  # GET /create_gigs
  def index
    @create_gigs = CreateGig.all

    render json: @create_gigs
  end

  # GET /create_gigs/1
  def show
    render json: @create_gig
  end

  # POST /create_gigs
  def create
    @create_gig = CreateGig.new(create_gig_params)

    if @create_gig.save
      render json: @create_gig, status: :created, location: @create_gig
    else
      render json: @create_gig.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /create_gigs/1
  def update
    if @create_gig.update(create_gig_params)
      render json: @create_gig
    else
      render json: @create_gig.errors, status: :unprocessable_entity
    end
  end



  private
    # Use callbacks to share common setup or constraints between actions.
    def set_create_gig
      @create_gig = CreateGig.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def create_gig_params
      params.require(:create_gig).permit(:name, :hemisphere, :season, :fee, :imgURL)
    end
end
