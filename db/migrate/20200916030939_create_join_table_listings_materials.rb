class CreateJoinTableListingsMaterials < ActiveRecord::Migration[6.0]
  def change
    create_join_table :listings, :materials do |t|
      # t.index [:listing_id, :material_id]
      # t.index [:material_id, :listing_id]
    end
  end
end
