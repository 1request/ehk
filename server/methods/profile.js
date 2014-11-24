Meteor.methods({
  saveProfile: function(profile, userId){

    var user = Meteor.user();
    var now = new Date();
    var profileId;

    var username = slugify(profile.name);

    var existingProfile = Profiles.findOne({userId: userId});

    if (!user){
      console.log('Please login to save profile');
    }

    if (!profile.name){
      console.log('please fill in profile name');
    }

    if (!profile.pitch1){
      console.log('please fill in elevator pitch');
    }

    var extendedProfile = _.extend(_.pick(profile, 'name', 'pitch1', 'pitch2', 'pitch3', 'image', 'linkedIn', 'firstTag', 'secondTag', 'thirdTag'), {
      userId: userId,
      username: username,
      createdAt: now
    });

    if (existingProfile){
      Profiles.update(existingProfile._id, {$set: extendedProfile}, function(error){
        if (error){
          console.log(error);
        } else {
          profileId = existingProfile._id;
        }
      });
    } else {
      profileId = Profiles.insert(extendedProfile);
    }

    Meteor.users.update(userId, {$set: {profile: profile}}, function(error) {
      if (error) {
        console.log(error);
      }
    });

    return profileId;
  }
});
