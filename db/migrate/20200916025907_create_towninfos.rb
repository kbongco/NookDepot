class CreateTowninfos < ActiveRecord::Migration[6.0]
  def change
    create_table :towninfos do |t|
      t.string :gamename
      t.string :townname
      t.string :hemisphere
      t.string :nativefruit
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
