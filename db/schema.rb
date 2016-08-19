# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20160819212527) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "articles", force: :cascade do |t|
    t.integer  "user_id",                  null: false
    t.string   "article_type",             null: false
    t.string   "title",                    null: false
    t.text     "description"
    t.string   "pic_url"
    t.string   "color"
    t.integer  "temp_min",     default: 1, null: false
    t.integer  "temp_max",     default: 5, null: false
    t.integer  "formality",                null: false
    t.date     "last_worn"
    t.string   "brand"
    t.boolean  "rain",                     null: false
    t.boolean  "clouds",                   null: false
    t.boolean  "snow",                     null: false
    t.boolean  "wind",                     null: false
    t.datetime "created_at",               null: false
    t.datetime "updated_at",               null: false
  end

  add_index "articles", ["user_id"], name: "index_articles_on_user_id", using: :btree

  create_table "compositions", force: :cascade do |t|
    t.integer  "outfit_id",  null: false
    t.integer  "article_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "outfits", force: :cascade do |t|
    t.integer  "user_id",                null: false
    t.integer  "temp_min",   default: 1, null: false
    t.integer  "temp_max",   default: 5, null: false
    t.boolean  "rain",                   null: false
    t.boolean  "clouds",                 null: false
    t.boolean  "snow",                   null: false
    t.boolean  "wind",                   null: false
    t.integer  "formality",              null: false
    t.date     "last_worn"
    t.datetime "created_at",             null: false
    t.datetime "updated_at",             null: false
  end

  add_index "outfits", ["user_id"], name: "index_outfits_on_user_id", using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "email",                       null: false
    t.string   "name",                        null: false
    t.integer  "temp_offset",     default: 0, null: false
    t.string   "zipcode",                     null: false
    t.string   "session_token",               null: false
    t.string   "password_digest",             null: false
    t.datetime "created_at",                  null: false
    t.datetime "updated_at",                  null: false
  end

  add_index "users", ["email"], name: "index_users_on_email", unique: true, using: :btree

end
