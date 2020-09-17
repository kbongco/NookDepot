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
