class RemoveArticleIdsFromOutfits < ActiveRecord::Migration
  def up
    remove_column :outfits, :article_ids
  end
end
