Template.registerHelper("timeAgo", function(timestamp){
  return moment(timestamp).fromNow();
});
