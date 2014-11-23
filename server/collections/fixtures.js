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
      pitch1: "I'm a web developer",
      pitch2: "I'm a JavaScript expert",
      pitch3: "I love Meteor.js",
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
      pitch1: "I'm a lead instructor.",
      pitch2: "I am a Ruby on Rails expert.",
      pitch3: "I am a good teacher.",
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
      pitch1: "I'm a serial entrepreneur.",
      pitch2: "I contribute to the startup community.",
      pitch3: "I build school in Philiphine.",
      userId: userId,
      createdAt: now,
      linkedIn: 'https://hk.linkedin.com/pub/billy-yuen/18/426/771',
      firstTag: 'Product Management',
      secondTag: 'Agile Development',
      thirdTag: 'Marketing'
    });

  Profiles.insert(extendedProfile);
}

if (Meteor.users.find().count() === 0){
  Tags.insert({
    programming: ['machine learning', 'AI', 'Adobe Photoshop', 'Adobe Illustrator', 'C++', 'Java', 'Silicon Valley', 'Google'],
    finance: ['MBA', 'CFA', 'CPA', 'bookkeeping', 'accounting', 'Social media expert', 'Founded startups']
  });
}
