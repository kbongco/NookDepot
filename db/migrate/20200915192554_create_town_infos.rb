class CreateTownInfos < ActiveRecord::Migration[6.0]
  def change
    create_table :town_infos do |t|
      t.string :InGameName
      t.string :TownName
      t.string :Hemisphere
      t.string :NativeFruit
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
