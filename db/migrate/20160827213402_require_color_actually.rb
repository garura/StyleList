class RequireColorActually < ActiveRecord::Migration
  def change
    change_column_null :articles, :color, false, "white"
  end
end
