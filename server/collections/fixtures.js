if (Meteor.users.find().count() === 0){

  var userId;
  var profile = {};
  var extendedProfile = {};
  var now = new Date();

  profile = {
    name: "Victor Leung",
    image: '/images/victor.jpg'
  };

  userId = Meteor.users.insert(profile);

  extendedProfile =  _.extend(_.pick(profile, 'name', 'image'), {
      pitch: "I'm a web developer",
      userId: userId,
      createdAt: now,
      linkedIn: 'http://hk.linkedin.com/in/victorleungtw',
      firstTag: 'JavaScript',
      secondTag: 'MeteorJS',
      thirdTag: 'AngularJS'
    });

  Profiles.insert(extendedProfile);

  profile = {
    name: "Harry ng",
    image: '/images/harry.jpg'
  };

  userId = Meteor.users.insert(profile);

  extendedProfile =  _.extend(_.pick(profile, 'name', 'image'), {
      pitch: "I'm a lead instructor",
      userId: userId,
      createdAt: now,
      linkedIn: 'http://hk.linkedin.com/in/harryng',
      firstTag: 'Ruby',
      secondTag: 'Rails',
      thirdTag: 'D3'
    });

  Profiles.insert(extendedProfile);

  profile = {
    name: "Billy Yuen",
    image: '/images/billy.jpg'
  };

  userId = Meteor.users.insert(profile);

  extendedProfile =  _.extend(_.pick(profile, 'name', 'image'), {
      pitch: "I'm a serial entrepreneur",
      userId: userId,
      createdAt: now,
      linkedIn: 'https://hk.linkedin.com/pub/billy-yuen/18/426/771',
      firstTag: 'Product Management',
      secondTag: 'Agile Development',
      thirdTag: 'Marketing'
    });

  Profiles.insert(extendedProfile);
}
