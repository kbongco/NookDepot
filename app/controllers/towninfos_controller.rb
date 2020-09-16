class TowninfosController < ApplicationController
  before_action :set_towninfo, only: [:show, :update, :destroy]

  # GET /towninfos
  def index
    @towninfos = Towninfo.all

    render json: @towninfos
  end

  # GET /towninfos/1
  def show
    render json: @towninfo
  end

  # POST /towninfos
  def create
    @towninfo = Towninfo.new(towninfo_params)

    if @towninfo.save
      render json: @towninfo, status: :created, location: @towninfo
    else
      render json: @towninfo.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /towninfos/1
  def update
    if @towninfo.update(towninfo_params)
      render json: @towninfo
    else
      render json: @towninfo.errors, status: :unprocessable_entity
    end
  end


  private
    # Use callbacks to share common setup or constraints between actions.
    def set_towninfo
      @towninfo = Towninfo.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def towninfo_params
      params.require(:towninfo).permit(:gamename, :townname, :hemisphere, :nativefruit, :user_id)
    end
end
