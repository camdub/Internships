class CreateShortTermGoals < ActiveRecord::Migration
  def change
    rename_table :short_term_goals, :myguide_short_term_goals
  end
end
