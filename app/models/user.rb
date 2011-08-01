class User < ActiveRecord::Base
  
  has_and_belongs_to_many :roles
  
  def has_role roles
    roles = roles.map{|role_name| Role.find_by_name(role_name)}
    not (roles & self.roles).empty?
  end
end
