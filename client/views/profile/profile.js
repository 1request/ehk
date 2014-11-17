Template.Profile.events({
  'submit form': function(e){
    e.preventDefault();

    var userId = Meteor.userId();

    var user = Meteor.user();

    var userImage = user.profile.image;

    var profile = {
      name: $(e.target).find('[name=name]').val(),
      pitch: $(e.target).find('[name=pitch]').val(),
      image: userImage
    };

    Meteor.call('saveProfile', profile, userId, function (error, result) {
      if (error) {
        console.log(error);
      } else {
        Router.go('/');
      }
    });

  }
});
