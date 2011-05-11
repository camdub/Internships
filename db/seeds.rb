# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ :name => 'Chicago' }, { :name => 'Copenhagen' }])
#   Mayor.create(:name => 'Daley', :city => cities.first)

#State.create({:name=>'Alaska'},{:name=>'Alabama'})

#State.create(:name=>'Alaska')
#State.create(:name=>'Alabama')

State.create([
  {:name=>'Alaska'},
  {:name=>'Alabama'}
])

Country.create(:name=>'United States of America', :un_code=>'USA')

Industry.create(:name=>'Medical')
medical = Industry.where(:name=>'Medical').first
Field.create([
  {:name=>'Chiropractic', :industry => medical},
  {:name=>'Chiropractic', :industry => medical},
  {:name=>'Chiropractic', :industry => medical},
  {:name=>'Chiropractic', :industry => medical}
])



list = AcademicFocusType.create([{:name=>'Major'},{:name=>'Minor'}])
major = list.first
minor = list.last

Semester.create([{:name=>'Fall'},{:name=>'Winter'},{:name=>'Spring/Summer'}])






