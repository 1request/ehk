Meteor.startup(function () {

  Meteor.startup(function() {
    Uploader.finished = function(index, fileInfo, templateContext) {
      var userId = Meteor.userId();
      var imagesURL = {
        "profile.image": fileInfo.url
      };
      Meteor.users.update(userId, {$set: imagesURL});
    };
  });

  AccountsEntry.config({
    homeRoute: '/',
    dashboardRoute: '/profile',
    passwordSignupFields: 'EMAIL_ONLY',
    showOtherLoginServices: true,
  });
});
