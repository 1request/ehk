Profiles = new Meteor.Collection('profiles');

ProfileSchema = new SimpleSchema({
  userId: {
    type: String,
    label: "User Id",
    max: 50,
    optional: false
  },
  name: {
    type: String,
    label: "Profile Name",
    max: 50,
    optional: false
  },
  username: {
    type: String,
    label: "Slug Name",
    max: 50,
    optional: true
  },
  pitch1: {
    type: String,
    label: "Elevator Pitch 1",
    max: 140,
    optional: false,
  },
  pitch2: {
    type: String,
    label: "Elevator Pitch 2",
    max: 140,
    optional: true,
  },
  pitch3: {
    type: String,
    label: "Elevator Pitch 3",
    max: 140,
    optional: true,
  },
  image: {
    type: String,
    label: "Address of profile image",
    optional: true
  },
  createdAt: {
    type: Date,
    label: "Created profile date",
    optional: true,
  },
  linkedIn: {
    type: String,
    label: "Link to linked profile",
    optional: true,
  },
  firstTag: {
    type: String,
    label: "First Tag",
    max: 50,
    optional: true
  },
  secondTag: {
    type: String,
    label: "Second Tag",
    max: 50,
    optional: true
  },
  thirdTag: {
    type: String,
    label: "Third Tag",
    max: 50,
    optional: true
  },

});

Profiles.attachSchema(ProfileSchema);

Profiles.allow({
  insert: function(){
    return true;
  },
  update: function(){
    return true;
  },
  remove: function(){
    return true;
  }
});
