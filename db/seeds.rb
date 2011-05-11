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

State.delete_all
Country.delete_all
Industry.delete_all
Field.delete_all
AcademicFocusType.delete_all
College.delete_all
Department.delete_all
AcademicFocus.delete_all
Semester.delete_all
Language.delete_all

State.create([
  {:name=>'Alaska'},
  {:name=>'Alabama'},
  {:name => 'Utah'}
])

Country.create(:name=>'United States of America', :un_code=>'USA')
Country.create(:name => 'France', :un_code => 'FRN')

Industry.create(:name=>'Medical')
medical = Industry.where(:name=>'Medical').first

Field.create([
  {:name=>'Chiropractic', :industry => medical},
  {:name=>'Pediatric', :industry => medical},
  {:name=>'OB/GYN', :industry => medical},
  {:name=>'Podiatric', :industry => medical}
])

list = AcademicFocusType.create([{:name=>'Major'},{:name=>'Minor'}])
major = list.first
minor = list.last


College.create(:name => 'Humanities')
Department.create([{:name => 'English', :college => College.all.first},{:name => 'Asian and Near Eastern Studies', :college => College.all.first}])

AcademicFocus.create([
  {:name => 'English', :academic_focus_type => major, :department => Department.all.first},
  {:name => 'Editing', :academic_focus_type => minor, :department => Department.all.first},
  {:name => 'Chinese', :academic_focus_type => major, :department => Department.all.last},
  {:name => 'Chinese Teaching', :academic_focus_type => minor, :department => Department.all.last}
])

Semester.create([{:name=>'Fall'},{:name=>'Winter'},{:name=>'Spring/Summer'}])

Language.create([
    { :name => 'English' },
    { :name => 'Spanish' },
    { :name => 'Portugese'},
    { :name => 'French'}
])





