# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_09_16_030939) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "create_gigs", force: :cascade do |t|
    t.string "name"
    t.string "hemisphere"
    t.string "season"
    t.string "fee"
    t.string "imgURL"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "gigs_users", id: false, force: :cascade do |t|
    t.bigint "user_id", null: false
    t.bigint "gig_id", null: false
  end

  create_table "listings", force: :cascade do |t|
    t.string "name"
    t.string "links"
    t.bigint "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_listings_on_user_id"
  end

  create_table "listings_materials", id: false, force: :cascade do |t|
    t.bigint "listing_id", null: false
    t.bigint "material_id", null: false
  end

  create_table "materials", force: :cascade do |t|
    t.string "name"
    t.string "imgURL"
    t.string "notes"
    t.string "season"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "towninfos", force: :cascade do |t|
    t.string "gamename"
    t.string "townname"
    t.string "hemisphere"
    t.string "nativefruit"
    t.bigint "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_towninfos_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "email"
    t.string "password"
    t.string "discord"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "listings", "users"
  add_foreign_key "towninfos", "users"
end
