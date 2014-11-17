Meteor.methods({
  saveProfile: function(profile, userId){

    var user = Meteor.user();
    var now = new Date();

    if (!user){
      console.log('Please login to save profile');
    }

    if (!profile.name){
      console.log('please fill in profile name');
    }

    if (!profile.pitch){
      console.log('please fill in elevator pitch');
    }

    var extendedProfile = _.extend(_.pick(profile, 'name', 'pitch', 'image'), {
      userId: userId,
      createdAt: now
    });

    var profileId = Profiles.insert(extendedProfile);

    return profileId;
  }
});
