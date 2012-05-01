class UrlValidator < ActiveModel::EachValidator
    def validate_each(record, attribute, value)
        record.errors[attribute] << (options[:message] || "is not a valid url (do not enter 'http://')") unless
            value =~ /^[a-zA-Z0-9\-\.\\]+\.(com|org|net|mil|edu|COM|ORG|NET|MIL|EDU)$/
    end
end