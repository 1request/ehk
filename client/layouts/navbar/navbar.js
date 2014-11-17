Template.Navbar.events({
  'click .entrySignUp': function(){
    Router.go('/sign-up');
  },
  'click .editProfile': function(){
    Router.go('/profile');
  }
});
