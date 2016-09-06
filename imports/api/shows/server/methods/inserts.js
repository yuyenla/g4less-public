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
      episode: info.episode,
      season: info.season,
      thumb: info.thumb,
      snippet: info.snippet,
      link: info.link,
      createdAt: new Date(),
      owner: this.userId,
      username: Meteor.users.findOne(this.userId).user_name,
    });
    return true;
  },

  'shows.insertTitle'(info){
    check(info, Object);

    // Make sure the user is logged in before inserting a task
    if (! this.userId) {
      throw new Meteor.Error('not-authorized');
    }

    Shows.insert({
      title: info.title,
      id: info.id,
      createdAt: new Date(),
      owner: this.userId,
      username: Meteor.users.findOne(this.userId).user_name,
    });
    return true;

  }
});
