Accounts.onCreateUser(function(options, user){
  if (options.profile){
    options.profile.name = '';
    options.profile.pitch = '';
    options.profile.image = '/images/default-profile.jpg';
    options.profile.linkedIn = '';
    user.profile = options.profile;

  }

  return user;
});
