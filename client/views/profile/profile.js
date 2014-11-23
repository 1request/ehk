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

    var tags = $('#tagsSelect').val().split(',');

    var profile = {
      name: $(e.target).find('[name=name]').val(),
      pitch1: $(e.target).find('[name=pitch1]').val(),
      pitch2: $(e.target).find('[name=pitch2]').val(),
      pitch3: $(e.target).find('[name=pitch3]').val(),
      linkedIn: $(e.target).find('[name=linkedIn]').val(),
      firstTag: tags[0],
      secondTag: tags[1],
      thirdTag: tags[2],
      image: userImage
    };

    var allTags = Tags.find().fetch();
    var allTagsName = _.pluck(allTags, 'name');

    var firstInputTagMatch = _.contains(allTagsName, tags[0]);
    var secondInputTagMatch = _.contains(allTagsName, tags[1]);
    var thirdInputTagMatch = _.contains(allTagsName, tags[2]);

    if (!firstInputTagMatch){
      Tags.insert({
        name: tags[0]
      });
    }

    if (!secondInputTagMatch){
      Tags.insert({
        name: tags[1]
      });
    }

    if (!thirdInputTagMatch){
      Tags.insert({
        name: tags[2]
      });
    }


    Meteor.call('saveProfile', profile, userId, function (error, result) {
      if (error) {
        console.log(error);
      } else {
        Router.go('/');
      }
    });

  },
});


Template.Profile.rendered = function(){

  var allTags = Tags.find().fetch();
  var allTagsName = _.pluck(allTags, 'name');

  $("#tagsSelect").select2({
    tags: allTagsName,
    maximumSelectionSize: 3,
    tokenSeparators: [",", " "]});
};
