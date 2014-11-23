Template.Navbar.events({
  'click .entrySignUp': function(){
    Router.go('/sign-up');
  },
  'click .editProfile': function(){
    Router.go('/profile');
  },
  'keydown input#search': function(e){
    var tag = $(e.target).find('[name=search]').val();
    Session.set('query', tag);
  },
  'submit form': function(e){
    e.preventDefault();
    var tag = $(e.target).find('[name=search]').val();
    Session.set('query', tag);
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
