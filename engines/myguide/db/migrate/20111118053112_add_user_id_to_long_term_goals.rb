class AddUserIdToLongTermGoals < ActiveRecord::Migration
  def change
    add_column :myguide_long_term_goals, :user_id, :integer
    dave = User.find_by_net_id('dlw34');
    LongTermGoal.all.each { |f| f.update_attributes!(:user => dave) }
  end
end
