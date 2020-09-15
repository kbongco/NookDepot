class CreateMaterials < ActiveRecord::Migration[6.0]
  def change
    create_table :materials do |t|
      t.string :name
      t.string :imgURL
      t.string :notes
      t.string :season
      t.references :listings, null: false, foreign_key: true

      t.timestamps
    end
  end
end
