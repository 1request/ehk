Template.Home.helpers({
  users: function(){
    return Meteor.users.find();
  }
});
