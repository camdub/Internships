class AddUserIdToShortTermGoals < ActiveRecord::Migration
  def change
    add_column :myguide_short_term_goals, :user_id, :integer
    dave = User.find_by_net_id('dlw34');
    ShortTermGoal.all.each { |f| f.update_attributes!(:user => dave) }
  end
end
