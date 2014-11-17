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
  pitch: {
    type: String,
    label: "Elevator Pitch",
    max: 200,
    optional: false,
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
  }
});

Profiles.attachSchema(ProfileSchema);
