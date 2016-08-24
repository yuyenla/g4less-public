import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import {Shows} from '/imports/api/shows/shows.js';



  // This code only runs on the server
  Meteor.publish('shows', function() {
    return Shows.find();

   });
