class AddUserIdToShortTermGoals < ActiveRecord::Migration
  def self.up
    add_column :short_term_goals, :user_id, :integer
    dave = User.find_by_net_id('dlw34');
    ShortTermGoal.all.each { |f| f.update_attributes!(:user => dave) }
  end

  def self.down
    remove_column :short_term_goals, :user_id
  end
end
