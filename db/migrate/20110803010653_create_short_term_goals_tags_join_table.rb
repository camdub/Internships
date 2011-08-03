class CreateShortTermGoalsTagsJoinTable < ActiveRecord::Migration
  def self.up
    create_table :short_term_goals_tags, :id => false do |t|
      t.integer :short_term_goal_id
      t.integer :tag_id
    end
  end

  def self.down
    drop_table :short_term_goals_tags
  end
end
