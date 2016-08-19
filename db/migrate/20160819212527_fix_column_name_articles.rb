class FixColumnNameArticles < ActiveRecord::Migration
  def change
    rename_column :articles, :desciption, :description
  end
end
