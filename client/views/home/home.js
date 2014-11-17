Template.Home.helpers({
  profiles: function(){
    return Profiles.find().fetch();
  }
});
