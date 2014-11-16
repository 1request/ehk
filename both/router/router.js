Router.configure({
  layoutTemplate: 'ApplicationLayout',
  notFoundTemplate: 'NotFoundPage'
});

Router.route('/', function () {
  this.render('Home');
});

Router.route('/profile', function () {
  this.render('Profile');
});
