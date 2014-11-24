Accounts.onCreateUser(function(options, user){
  if (options.profile){
    options.profile.name = '';
    options.profile.pitch1 = '';
    options.profile.pitch2 = '';
    options.profile.pitch3 = '';
    options.profile.image = '/images/default-profile.jpg';
    options.profile.linkedIn = '';
    options.profile.firstTag = '';
    options.profile.secondTag = '';
    options.profile.thirdTag = '';
    user.profile = options.profile;
  }

  return user;
});
