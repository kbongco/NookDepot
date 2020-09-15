class CreateServices < ActiveRecord::Migration[6.0]
  def change
    create_table :services do |t|
      t.string :name
      t.string :hemisphere
      t.string :season
      t.string :fee
      t.string :imgURL
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
