class TowninfosController < ApplicationController
  before_action :set_towninfo, only: [:show, :update, :destroy]

  # GET /towninfos
  def index
    @towninfos = Towninfo.all

    render json: @towninfos
  end

  # GET /towninfos/1
  def show
    @towninfo = Towninfo.find(params[:id])
    render json: @towninfo
  end

  # POST /towninfos
  def create
    @towninfos = Towninfo.new(towninfo_params)

    if @towninfos.save
      render json: @towninfos,status: :created
    else
      render json: @towninfos.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /towninfos/1
  def update
    if @towninfos.update(towninfo_params)
      render json: @towninfos
    else
      render json: @towninfos.errors, status: :unprocessable_entity
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
