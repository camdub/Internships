class CreateTags < ActiveRecord::Migration
  def change
    rename_table :tags, :myguide_tags
  end
end
