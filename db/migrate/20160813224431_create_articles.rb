class CreateArticles < ActiveRecord::Migration
  def change
    create_table :articles do |t|
      t.integer :user_id, null: false
      t.string :article_type, null: false
      t.string :title, null: false
      t.text :desciption
      t.string :pic_url
      t.string :color
      t.integer :temp_min, null: false, default: 1
      t.integer :temp_max, null: false, default: 5
      t.integer :formality, null: false
      t.date :last_worn
      t.string :brand
      t.boolean :rain, null: false
      t.boolean :clouds, null: false
      t.boolean :snow, null: false
      t.boolean :wind, null: false
      t.timestamps null: false
    end
    add_index :articles, :user_id
  end
end
