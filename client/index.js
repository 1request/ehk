Meteor.startup(function () {
  AccountsEntry.config({
    homeRoute: '/',
    dashboardRoute: '/profile',
    passwordSignupFields: 'EMAIL_ONLY',
    showOtherLoginServices: true,
  });
});
