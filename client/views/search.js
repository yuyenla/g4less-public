import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { ReactiveDict } from 'meteor/reactive-dict';

import { Walmart } from '/imports/api/walmart/walmartCollection.js';
import './search.html';

Session.setDefault('searching', false);

Tracker.autorun(function() {
 if (typeof(Session.get('query')) != "undefined") {
   var searchHandle = Meteor.subscribe('walmart', Session.get('query'));
   Session.set('searching', !searchHandle.ready());
 }
 if (typeof(Session.get('foodId')) != "undefined") {
   var searchHandle = Meteor.subscribe('walmartReturn', Session.get('foodId'));
   Session.set('searching', !searchHandle.ready());
 }
});

Template.search.onRendered(function(){
  $('.ui.dropdown').dropdown();
  $('.dropdown').dropdown();
  $('#search-select').dropdown();
});

Template.search.events({
  'click .item' : function(event, template) {
    id = $('.selected').attr('id');
    showTitle = $('.selected').attr('data-value');
    Session.set('title', showTitle);
    Session.set('foodId', id);
    console.log("i clicked on:", Session.get('foodId'));

  },
  //you need to pass in the event target! as long as it's keyup, then it can tell.
  'keydown .search' : function(event,template) {
    var query = $(event.target).val();
    console.log("keydown",query);
    if(query.length >= 3){
      setTimeout(function() {
        //console.log("query length", query.length);
        Session.set('query', query);
      }, 1000);

    }
  }
});

Template.search.helpers({
  food: function() {
    return Walmart.find();
  },
  searching: function() {
    return Session.get('searching');
  }
});

Template.foundFood.helpers({
  foodItem: function() {
    return Walmart.find({item_id: Session.get('foodId')});
  },
});
