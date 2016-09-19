import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { ReactiveDict } from 'meteor/reactive-dict';

import { Insta } from '/imports/api/instagram/instagramCollection.js';
import './insta.html';


Tracker.autorun(function() {
  //getting title entered from addShows and then we take out the spaces and make it lowercase
  //and then search for images with that tag.
  //we also need to make sure that hope is always defined, even if nothing has been searched otherwise the code breaks.
   var hope = Session.get('title');
   if(typeof(hope) == "undefined"){
     hope = '';
   }
   console.log("hope!", hope);
   var str = hope.replace(/ /g,'');
   console.log("hopefully this gets back the title searched?", str);
   var lowerCase = str.toLowerCase();
   console.log("lowercase", lowerCase);
   Meteor.subscribe('insta', lowerCase);
});

Template.instagram.helpers({
  post: function() {
    return Insta.find();
  }
});
