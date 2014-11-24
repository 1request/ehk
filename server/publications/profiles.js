Meteor.publish("profiles", function(){
  return Profiles.find();
});

Meteor.publish("publicProfile", function(username){
  return Profiles.find({username: username});
});
