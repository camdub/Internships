class AddUserIdToInternships < ActiveRecord::Migration
  def change
    add_column :internships_internships, :user_id, :integer
  end
end
