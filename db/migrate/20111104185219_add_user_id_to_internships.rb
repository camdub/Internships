class AddUserIdToInternships < ActiveRecord::Migration
  def self.up
    add_column :internships, :user_id, :integer
    dave = User.find_by_net_id('dlw34');
    Internship.all.each { |f| f.update_attributes!(:user => dave) }
  end

  def self.down
    remove_column :internships, :user_id
  end
end
