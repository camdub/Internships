class RenameLongTermGoalsShortTermGoalsJoinTable < ActiveRecord::Migration
  def change
    rename_table :long_term_goals_short_term_goals, :myguide_long_term_goals_short_term_goals
  end
end
