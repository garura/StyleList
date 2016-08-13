class CreateOutfits < ActiveRecord::Migration
  def change
    create_table :outfits do |t|
      t.integer :user_id, null: false
      t.string :article_ids, array: true
      t.integer :temp_min, null: false, default: 1
      t.integer :temp_max, null: false, default: 5
      t.boolean :rain, null: false
      t.boolean :clouds, null: false
      t.boolean :snow, null: false
      t.boolean :wind, null: false
      t.integer :formality, null: false
      t.date :last_worn
      t.timestamps null: false
    end
    add_index :outfits, :user_id
  end
end
