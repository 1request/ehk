Router.configure({
  layoutTemplate: 'ApplicationLayout',
  notFoundTemplate: 'NotFoundPage',
  loadingTemplate: 'Loading'
});

Router.route('/',{
  waitOn: function () {
    return Meteor.subscribe('profiles');
  },

  fastRender: true,

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
