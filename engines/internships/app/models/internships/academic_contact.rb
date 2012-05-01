module Internships
  class AcademicContact < ActiveRecord::Base
    has_many :internships
    belongs_to :department

    validates_presence_of :name
    validates_presence_of :office_location
    validates :email, :presence => true, :email => true
    validates :phone, :presence => true, :phone => true

  end
end
# == Schema Information
#
# Table name: academic_contacts
#
#  id              :integer         not null, primary key
#  name            :string(255)
#  office_location :string(255)
#  phone           :string(255)
#  email           :string(255)
#  department_id   :integer
#  created_at      :datetime
#  updated_at      :datetime
#