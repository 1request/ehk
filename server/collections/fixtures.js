if (Meteor.users.find().count() === 0){

  var profile = {};

  profile = {
    name: "Victor Leung",
    pitch: "I am a web developer",
    image: '/images/victor.jpg'
  };

  profileId = Profiles.insert(profile);

  profile = {
    name: "Harry Ng",
    pitch: "I am an instructor",
    image: '/images/harry.jpg'
  };

  Profiles.insert(profile);

  profile = {
    name: "Billy Yuan",
    pitch: "I am an entrepreneur",
    image: '/images/billy.jpg'
  };

  Profiles.insert(profile);
}
