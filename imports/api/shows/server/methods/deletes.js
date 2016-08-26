import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

import {Shows} from '/imports/api/shows/shows.js';

Meteor.methods({
  'shows.remove'(showId) {
    check(showId, String);



    if (! this.userId) {
      throw new Meteor.Error('not-authorized');
    }

    //checks to see if that show exists and belongs to you
    const show = Shows.findOne({_id:showId, owner: this.userId});
    if (!show) {
      throw new Meteor.Error('not-authorized 2');
      console.log("false");
    }
    Shows.remove(showId);
    return true;
  },

});
