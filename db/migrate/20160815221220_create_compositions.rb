class CreateCompositions < ActiveRecord::Migration
  def change
    create_table :compositions do |t|
      t.integer :outfit_id, null: false
      t.integer :article_id, null: false
      t.timestamps null: false
    end
  end
end
