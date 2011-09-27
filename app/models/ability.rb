class Ability
  include CanCan::Ability

  def initialize(user)
    puts user.net_id
    user ||= User.new # guest user (not logged in)
    if user.has_role ['admin']
      can :manage, :all

    elsif user.has_role ['advisor']
      can :index, :pages
      can :index, :map
      can :map, :pages
      
      can :dashboard, :internships
      #can :index, :internships
      can :manage, :internships
      can :manage, :academic_contacts
      can :manage, :fields
      can :manage, :financial_assistance_options
      can :manage, :financial_assistance_option_types
      can :manage, :industries
      can :manage, :internships
      can :manage, :locations
      can :manage, :providers
      can :manage, :provider_contacts
      #can :manage, LongTermGoal
      #can :manage, ShortTermGoal
      
    elsif user.has_role ['student']
      can :index, :pages
      can :index, :map
      can :map, :pages
      #can :myguide, :pages
      can :read, Internship
      can :read, LongTermGoal
      can :read, ShortTermGoal
      
    else
      cannot :read, :all
    end
    # Define abilities for the passed in user here. For example:
    #
    #   user ||= User.new # guest user (not logged in)
    #   if user.admin?
    #     can :manage, :all
    #   else
    #     can :read, :all
    #   end
    #
    # The first argument to `can` is the action you are giving the user permission to do.
    # If you pass :manage it will apply to every action. Other common actions here are
    # :read, :create, :update and :destroy.
    #
    # The second argument is the resource the user can perform the action on. If you pass
    # :all it will apply to every resource. Otherwise pass a Ruby class of the resource.
    #
    # The third argument is an optional hash of conditions to further filter the objects.
    # For example, here the user can only update published articles.
    #
    #   can :update, Article, :published => true
    #
    # See the wiki for details: https://github.com/ryanb/cancan/wiki/Defining-Abilities
  end
end
