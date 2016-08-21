class AddTitleAndNotesToOutfits < ActiveRecord::Migration
  def change
    add_column :outfits, :title, :string, null: false, default: "#OOTD"
    add_column :outfits, :notes, :text
  end
end
