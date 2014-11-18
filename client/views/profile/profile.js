Template.Profile.events({
  'change .myFileInput': function(event, template) {
    FS.Utility.eachFile(event, function(file) {
      Images.insert(file, function (err, fileObj) {
        if (err){
          console.log(err);
        } else {
          var userId = Meteor.userId();
          var imagesURL = {
            "profile.image": "/cfs/files/images/" + fileObj._id
          };
          Meteor.users.update(userId, {$set: imagesURL});
          window.location.reload();
        }
      });
    });
  },
  'submit form': function(e){
    e.preventDefault();

    var userId = Meteor.userId();

    var user = Meteor.user();

    var userImage = user.profile.image;

    var profile = {
      name: $(e.target).find('[name=name]').val(),
      pitch: $(e.target).find('[name=pitch]').val(),
      linkedIn: $(e.target).find('[name=linkedIn]').val(),
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
