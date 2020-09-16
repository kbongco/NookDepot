class CreateCreateListings < ActiveRecord::Migration[6.0]
  def change
    create_table :create_listings do |t|
      t.string :name
      t.string :links
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
