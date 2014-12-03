Template.Profile.events({
  'change .myFileInput': function(event, template) {
    FS.Utility.eachFile(event, function(file) {
      Images.insert(file, function (err, fileObj) {
        if (err){
          noty({text:err, type:'danger', timeout:2000});
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
      firstTag: tags[0] || 'Not selected',
      secondTag: tags[1] || 'Not selected',
      thirdTag: tags[2] || 'Not selected',
      image: userImage
    };

    var allTags = Tags.find().fetch();
    var allTagsName = _.pluck(allTags, 'name');

    var firstInputTagMatch = _.contains(allTagsName, tags[0]);
    var secondInputTagMatch = _.contains(allTagsName, tags[1]);
    var thirdInputTagMatch = _.contains(allTagsName, tags[2]);

    console.log('this is first tag', tags[0]);

    if (tags[0] && !firstInputTagMatch){
      Tags.insert({
        name: tags[0]
      });
    }

    console.log('this is second tag', tags[1]);

    if (tags[1] && !secondInputTagMatch){
      Tags.insert({
        name: tags[1]
      });
    }

    console.log('this is third tag', tags[2]);

    if (tags[2] && !thirdInputTagMatch){
      Tags.insert({
        name: tags[2]
      });
    }


    Meteor.call('saveProfile', profile, userId, function (error, result) {
      if (error) {
        noty({text:error, type:'danger', timeout:2000});
      } else {
        noty({text:'Profile saved', type:'success', timeout:2000});
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

  var pitch1 = document.getElementById("pitch1");
  var pitch2 = document.getElementById("pitch2");
  var pitch3 = document.getElementById("pitch3");

  var message1 = document.getElementById("message-count1");
  var message2 = document.getElementById("message-count2");
  var message3 = document.getElementById("message-count3");

  var maxLength = 140;
  var checkLength = function() {
    if(pitch1.value.length < maxLength) {
        message1.innerHTML = (maxLength-pitch1.value.length) + " characters remainging";
    }
    if(pitch2.value.length < maxLength) {
        message2.innerHTML = (maxLength-pitch2.value.length) + " characters remainging";
    }
    if(pitch3.value.length < maxLength) {
        message3.innerHTML = (maxLength-pitch3.value.length) + " characters remainging";
    }
  };
  setInterval(checkLength, 300);
};


