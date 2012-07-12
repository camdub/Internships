module Internships
  class PhoneValidator < ActiveModel::EachValidator
      def validate_each(record, attribute, value)
          record.errors[attribute] << (options[:message] || "is not a phone number") unless
              value =~ /^[+\/\-() 0-9]+$|^/
      end
  end
end