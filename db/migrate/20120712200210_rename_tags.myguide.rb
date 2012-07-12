# This migration comes from myguide (originally 20110805010406)
class RenameTags < ActiveRecord::Migration
  def change
    rename_table :tags, :myguide_tags
  end
end
