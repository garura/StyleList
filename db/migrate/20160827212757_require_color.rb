class RequireColor < ActiveRecord::Migration
  def change
    change_column_null :articles, :color, true, "white"
  end
end
