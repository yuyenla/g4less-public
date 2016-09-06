/*
this file subscribes to the collection in order to be able to show
documents from the database
 */
import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { ReactiveDict } from 'meteor/reactive-dict';

import './my_shows.html';

import { Shows } from '/imports/api/shows/shows.js';


//you can only subscribe to what's being published.
//currently, the only thing being published is user specific shows!
Template.body.onCreated(function bodyOnCreated() {
  this.state = new ReactiveDict();
  Meteor.subscribe('shows');
});

Template.myShows.helpers({
  arrayOfShows: function(){
    return Shows.find({}).fetch();
  },
});

Template.myShows.events({
  'click .delete'() {
    Meteor.call('shows.remove', this._id, function(error, result) {
      if (result == true){
        $('.deleteMessage').show().delay(1000).hide(0);
      }
    });
  },
  'click .updateCheckBox'() {
    $('#' + this._id + "checkBox").hide();
    $('#' + this._id).css('display', 'block');
    event.preventDefault();
  },
  'click .undoUpdate'() {
    $('#' + this._id + "checkBox").show();
    $('#' + this._id).css('display', 'none');
    event.preventDefault();
  },
  'submit .form-horizontal'(event) {
    // Prevent default browser form submit
    event.preventDefault();

    // Get value from form element, you can use the jquery library for this
    const showName = $('#' + this._id + "title").val();
    const season=$('#' + this._id + "season").val();
    const episode=$('#' + this._id + "episode").val();


    var info = {'title' : showName,
                'season' : season,
                'episode' : episode,};

    Meteor.call('shows.update', info, this._id, function(error, result) {
      if(result)
      {
        $('#' + result + "message").show();
      }
      else if (error){
        $('#' + result + "error").show();
      }
    });

  },


});
