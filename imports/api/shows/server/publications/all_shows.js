import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import {Shows} from '/imports/api/shows/shows.js';



  // This code only runs on the server
  // here is where you decide what gets published.
  // only finding documents that are currently owned by the user
  Meteor.publish('shows', function() {
    var currentUserId = this.userId;
    return Shows.find({owner: currentUserId});

   });
