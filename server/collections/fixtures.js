if (Meteor.users.find().count() === 0){

  var profile = {};

  profile = {
    name: "Victor Leung",
    pitch: "I am a web developer",
    image: '/images/victor.jpg'
  };

  Meteor.users.insert({
    profile: profile
  });

  Profiles.insert(profile);

  profile = {
    name: "Harry Ng",
    pitch: "I am an instructor",
    image: '/images/harry.jpg'
  };

  Profiles.insert(profile);

  Meteor.users.insert({
    profile: profile
  });

  profile = {
    name: "Billy Yuan",
    pitch: "I am an entrepreneur",
    image: '/images/billy.jpg'
  };

  Meteor.users.insert({
    profile: profile
  });

  Profiles.insert(profile);
}
