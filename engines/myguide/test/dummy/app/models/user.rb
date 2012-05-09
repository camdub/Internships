class User < ActiveRecord::Base
  
  has_and_belongs_to_many :roles
  has_and_belongs_to_many :tasks
  
  has_many :internships
  has_many :short_term_goals
  has_many :long_term_goals
  
  attr_accessible :net_id, :roles
  
  def has_role roles
    roles = roles.map{|role_name| Role.find_by_name(role_name)}
    not (roles & self.roles).empty?
  end
  
  def display_name
      if not self.firstname.blank?
        self.firstname << " " << self.lastname
      else
        self.net_id
      end
  end
end
