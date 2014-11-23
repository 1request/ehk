Template.Navbar.events({
  'click .entrySignUp': function(){
    Router.go('/sign-up');
  },
  'click .editProfile': function(){
    Router.go('/profile');
  }
});

Template.Navbar.helpers({
  tags: function(){
    return Tags.find().fetch().map(function(it){ return it.name; });
  }
});

Template.Navbar.rendered = function(){
  Meteor.typeahead.inject();
};
