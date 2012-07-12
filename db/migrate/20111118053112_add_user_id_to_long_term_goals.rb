class AddUserIdToLongTermGoals < ActiveRecord::Migration
  def self.up
    add_column :long_term_goals, :user_id, :integer
    #dave = User.find_by_net_id('dlw34');
    #LongTermGoal.all.each { |f| f.update_attributes!(:user => dave) }
  end

  def self.down
    remove_column :long_term_goals, :user_id
  end
end
