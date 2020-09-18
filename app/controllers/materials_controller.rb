class MaterialsController < ApplicationController
  before_action :set_material, only: [:show, :update, :destroy]

  # GET /materials
  def index
    @materials = Material.all

    render json: @materials
  end

  # GET /materials/1
  def show
    render json: @material
  end



  private
    # Use callbacks to share common setup or constraints between actions.
    def set_material
      @material = Material.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def material_params
      params.require(:material).permit(:name, :imgURL, :notes, :season)
    end
end
