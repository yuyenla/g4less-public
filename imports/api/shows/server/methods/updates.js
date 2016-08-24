import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

import {Shows} from '/imports/api/shows/shows.js';

Meteor.methods({
  'shows.update'(newInfo, showId) {
    check(newInfo, Object);

    //first checks if you've loged in
    if (!this.userId) {
      throw new Meteor.Error('not-authorized');
    }

    //checks to see if that show exists and belongs to you
    const show = Shows.findOne({_id:showId, owner: this.userId});
    if (!show) {
      throw new Meteor.Error('not-authorized 2');
      console.log("false");
    }

    console.log("new info:", newInfo); //need to be owner in order to update it
    Shows.update({_id: showId, owner: this.userId}, {$set: newInfo});
    return true;

  },

});
