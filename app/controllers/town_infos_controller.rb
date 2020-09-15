class TownInfosController < ApplicationController
  before_action :set_town_info, only: [:show, :update, :destroy]

  # GET /town_infos
  def index
    @town_infos = TownInfo.all

    render json: @town_infos
  end

  # GET /town_infos/1
  def show
    render json: @town_info
  end

  # POST /town_infos
  def create
    @town_info = TownInfo.new(town_info_params)

    if @town_info.save
      render json: @town_info, status: :created, location: @town_info
    else
      render json: @town_info.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /town_infos/1
  def update
    if @town_info.update(town_info_params)
      render json: @town_info
    else
      render json: @town_info.errors, status: :unprocessable_entity
    end
  end

  # DELETE /town_infos/1
  def destroy
    @town_info.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_town_info
      @town_info = TownInfo.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def town_info_params
      params.require(:town_info).permit(:InGameName, :TownName, :Hemisphere, :NativeFruit, :user_id)
    end
end
