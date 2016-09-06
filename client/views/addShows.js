import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { ReactiveDict } from 'meteor/reactive-dict';

import {Shows} from '/imports/api/shows/shows.js';
import './addShows.html';



Session.setDefault('searching', false);

Tracker.autorun(function() {
  //console.log("before if: ", Session.get('title'));
  if (typeof(Session.get('title')) != "undefined") {
    console.log("session.getTitle", Session.get('title'));
    var searchHandle = Meteor.subscribe('titles', Session.get('title'));
    Session.set('searching', !searchHandle.ready());
  }
  if (typeof(Session.get('query')) != "undefined") {
    console.log("session.getQuery", Session.get('query'));
    var searchHandle = Meteor.subscribe('showReturn', Session.get('query'));
    Session.set('searching', !searchHandle.ready());
  }
});

Template.addShows.events({
  'submit .form-horizontal': function(event, template) {
    event.preventDefault();
    //var query = template.$('input[type=text]').val();
    var e = $('#showid');
    //var strUser = e.options[e.selectedIndex].value;


    console.log("SHOW ID", e.val());
    //var shows = $("#selectedShow").val();

  //  var text = target.text.value;
  //  console.log("SHOWS", query);
  //  Meteor.call(shows.insertTitle, query);
  //  console.log("query", query);
    // if (query){
    //   Session.set('query', query);
    // }
  //  $('.showResult').show();
  },
  'keydown .form-control' : function(event,template) {
    var title = template.$('input[type=text]').val();
    if(title.length >= 3){
      setTimeout(function() {
        console.log("title length", title.length);
        Session.set('title', title);
      }, 1000);

    }
  },
});

Template.addShows.helpers({
  shows: function() {
  //  console.log("shows.find.fetch" , Shows.find().fetch());
    //return Shows.findOne({}, {snippet:1});
    //return Shows.find({'category':'show'});
    console.log("session get showId",Session.get('showId') )
    return Shows.find({_id:Session.get('showId')});
  },
  title: function() {
//    console.log("shows.find.fetch" , Shows.find().fetch());
    return Shows.find();
  },
  searching: function() {
    return Session.get('searching');
  }
});





/*
Template.addShows.events({
  'submit .form-horizontal'(event) {
    // Prevent default browser form submit
    event.preventDefault();
    var query = $('input[type=text]').val();
    console.log("getting the value of query on client side ", query)
    Meteor.call("getShowsAPI", query, function(error, result){
      if(error){
        console.log("error", error);
      }
      if(result){
        console.log("result", result);
      }
    });
  } */
/*
    // Get value from form element, you can use the jquery library for this
    const showName = $('#title').val();
    const season=$('#season').val();
    const episode=$('#episode').val();
    console.log("title: ", showName);
    console.log("season: ", season);
    console.log("episode: ", episode);
    var info = {'title' : showName,
                'season' : season,
                'episode' : episode,};
    Meteor.call('shows.insert', info, function(error, result) {
      console.log(result);
      if( result == true)
      {
        $('.message').show();
      }
    });
  },*/
//});
