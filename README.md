# Student Advisement Portal (SAP) [![Code Climate](https://codeclimate.com/badge.png)](https://codeclimate.com/github/camdub/Internships)

If you are a user (i.e. NOT a developer) visit the [user guide](http://camdub.github.com/Internships/userguide.html).

SAP is a suite of apps designed specifically for the BYU Humanaties Advisement Center. SAP is meant to be an all-in-one solution for college advisement centers. SAP is made up of the following applications. Following Sections contain information about each.

- Internships
- MyGuide
- Scheduling
- Admin
- (TODO) Reports

## Engines

To make this app more moular we have broken up each piece into separate Rails engines. Our approach was based on a few blog posts from Pivotal Labs:

- [Post1]()
- [Post2]()

For more information about how to work with engines, the Edge Rails [docs]() have great information about how to manage migrations, etc.

### Admin

The admin section of the app is generated with the [rails_admin]() gem. This is not in its own engine per se but is in the parent app. See their documentation if any changes need to be made. It should automatically detect new models even those in other engines.

#### Admin Gems Used

The following gems are used in conjunction with rails_admin to add features to the user system.

- [Devise CAS]() - To authenticate with BYU web services
- [CanCan]() - Authorization gem. Doesn't include how roles are set up
- [Rolify]() - Handles roles for CanCan

Notes: There are two ability files in the parent engine. One is explicitly for roles related to working with the rails_admin interface, and the other is for all other role logic.
Devise is already included with rails_admin. The User model is the model used for all users.

## Internships

Info about the Internships app

### Important Libraries

- Backbone.js??

### SVG Map Information

- [Map used](Wikipedia.org)

## MyGuide

Info MyGuide

## Tests

We used Test::Unit (built in)
