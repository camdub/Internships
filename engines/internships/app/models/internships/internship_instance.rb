module Internships
  class InternshipInstance < ActiveRecord::Base
    belongs_to :internship
    belongs_to :student
    belongs_to :semester
  
    validates_presence_of :rating
  
  end
end
# == Schema Information
#
# Table name: internship_instances
#
#  id            :integer         not null, primary key
#  internship_id :integer
#  student_id    :integer
#  comments      :text
#  rating        :decimal(, )
#  recommended   :boolean
#  semester_id   :integer
#  job_offered   :boolean
#  job_accepted  :boolean
#  can_contact   :boolean
#  created_at    :datetime
#  updated_at    :datetime
#

