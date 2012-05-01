module Internships
  module InternshipsHelper
  
    def full_part_time(ft, pt)
      if ft && pt
        result = "Full and Part Time"
      elsif pt
        result = "Part Time"
      else
        result = "Full Time"
      end    
    end  
  end
end