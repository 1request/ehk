Template.Home.helpers({
  profiles: function(){
    var tag = Session.get('query');

    var selector = {};

    if (tag){
      var firstTagMatch = Profiles.find({firstTag: tag}).count();
      var secondTagMatch = Profiles.find({secondTag: tag}).count();
      var thirdTagMatch = Profiles.find({thirdTag: tag}).count();

      if (firstTagMatch){
        selector = {firstTag: tag};
      }

      if (secondTagMatch){
        selector = {secondTag: tag};
      }

      if (thirdTagMatch){
        selector = {thirdTag: tag};
      }
    }

    return Profiles.find(selector, {sort: {createdAt: -1}} );
  }
});
