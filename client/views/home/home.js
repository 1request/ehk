Template.Home.helpers({
  profiles: function(){
    var tag = Session.get('query');

    var selector = {};

    if (tag){
      selector = {firstTag: tag};
    }

    console.log(selector);

    return Profiles.find(selector, {sort: {createdAt: -1}} );
  }
});
