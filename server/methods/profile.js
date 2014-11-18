Meteor.methods({
  saveProfile: function(profile, userId){

    var user = Meteor.user();
    var now = new Date();
    var profileId;

    var existingProfile = Profiles.findOne({userId: userId});

    if (!user){
      console.log('Please login to save profile');
    }

    if (!profile.name){
      console.log('please fill in profile name');
    }

    if (!profile.pitch){
      console.log('please fill in elevator pitch');
    }

    var extendedProfile = _.extend(_.pick(profile, 'name', 'pitch', 'image', 'linkedIn'), {
      userId: userId,
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

    return profileId;
  }
});
