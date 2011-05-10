class Department < ActiveRecord::Base
  belongs_to :college
  has_many :academic_focuses
end
