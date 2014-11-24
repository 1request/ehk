Router.configure({
  layoutTemplate: 'ApplicationLayout',
  notFoundTemplate: 'NotFoundPage',
  loadingTemplate: 'Loading'
});

Router.route('/',{
  waitOn: function () {
    return [
      Meteor.subscribe('profiles'),
      Meteor.subscribe('tags'),
    ];
  },

  fastRender: true,

  action: function () {
    if (this.ready())
      this.render('Home');
    else
      this.render('Loading');
  }
});

Router.route('/profile',{
  waitOn: function () {
    return [
      Meteor.subscribe('images'),
      Meteor.subscribe('tags'),
     ];
  },

  data: function () {
    return Meteor.user();
  },

  fastRender: true,

  action: function () {
    if (this.ready())
      this.render('Profile');
    else
      this.render('Loading');
  }
});

Router.route('/profile/:username',{
  waitOn: function () {
    return [
      Meteor.subscribe('publicProfile', this.params.username),
      Meteor.subscribe('tags')
     ];
  },

  data: function () {
    return Profiles.findOne({username: this.params.username});
  },

  fastRender: true,

  action: function () {
    if (this.ready())
      this.render('PublicProfile');
    else
      this.render('Loading');
  }
});
