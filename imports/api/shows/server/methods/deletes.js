import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

import {Shows} from '/imports/api/shows/shows.js';

Meteor.methods({
  'shows.remove'(showId) {
    check(showId, String);


    const show = Shows.findOne(showId);
    if (! this.userId) {
      throw new Meteor.Error('not-authorized');
    }

    Shows.remove(showId);
  },

});
