import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { ReactiveDict } from 'meteor/reactive-dict';

import { Insta } from '/imports/api/instagram/instagramCollection.js';
import './insta.html';


Tracker.autorun(function() {
  Meteor.subscribe('insta');
});

Template.instagram.helpers({
  post: function() {
    return Insta.find();
  }
});
