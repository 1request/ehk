if (Meteor.users.find().count() === 0){

  var profile = {};

  profile = {
    name: "Victor Leung",
    pitch: "I am a web developer"
  };

  Meteor.users.insert({
    profile: profile
  });

  profile = {
    name: "Harry Ng",
    pitch: "I am an instructor"
  };

  Meteor.users.insert({
    profile: profile
  });

  profile = {
    name: "Billy Yuan",
    pitch: "I am an entrepreneur"
  };

  Meteor.users.insert({
    profile: profile
  });
}
