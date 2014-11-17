Router.configure({
  layoutTemplate: 'ApplicationLayout',
  notFoundTemplate: 'NotFoundPage'
});

Router.route('/',{
  waitOn: function () {
    return Meteor.subscribe('userData');
  },

  action: function () {
    if (this.ready())
      this.render('Home');
    else
      this.render('Loading');
  }
});

Router.route('/profile', function () {
  this.render('Profile');
});
