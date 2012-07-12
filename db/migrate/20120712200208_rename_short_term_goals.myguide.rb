# This migration comes from myguide (originally 20110805010326)
class RenameShortTermGoals < ActiveRecord::Migration
  def change
    rename_table :short_term_goals, :myguide_short_term_goals
  end
end
