class CreateCreateGigs < ActiveRecord::Migration[6.0]
  def change
    create_table :create_gigs do |t|
      t.string :name
      t.string :hemisphere
      t.string :season
      t.string :fee
      t.string :imgURL

      t.timestamps
    end
  end
end
