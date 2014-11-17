Meteor.startup(function () {
  AccountsEntry.config({
    homeRoute: '/',
    dashboardRoute: '/profile',
    passwordSignupFields: 'EMAIL_ONLY',
    showOtherLoginServices: true,
    extraSignUpFields: [{
      field: "name",
      label: "Profile Name",
      placeholder: "Please enter your name",
      type: "text",
      required: true
     },{
      field: "pitch",
      label: "Elevator Pitch",
      placeholder: "Please introduce yourself ",
      type: "text",
      required: true
     }]
  });
});
