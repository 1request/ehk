Accounts.onCreateUser(function(options, user){
  if (options.profile){
    options.profile.image = '/images/default-profile.jpg';
    user.profile = options.profile;
  }

  return user;
});
