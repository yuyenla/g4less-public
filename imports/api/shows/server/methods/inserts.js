import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';


import { Shows } from '/imports/api/shows/shows.js';

Meteor.methods({
  'shows.insert'(info) {
    check(info, Object);

    // Make sure the user is logged in before inserting a task
    if (! this.userId) {
      throw new Meteor.Error('not-authorized');
    }

    Shows.insert({
      title: info.title,
      season: info.season,
      episode : info.episode,
      createdAt: new Date(),
      owner: this.userId,
      username: Meteor.users.findOne(this.userId).user_name,
    });
    return true;
  },
});
