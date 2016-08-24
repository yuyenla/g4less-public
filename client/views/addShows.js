import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { ReactiveDict } from 'meteor/reactive-dict';



import './addShows.html';

Template.body.onCreated(function bodyOnCreated() {
  this.state = new ReactiveDict();
  Meteor.subscribe('shows');
});


Template.addShows.events({
  'submit .form-horizontal'(event) {
    // Prevent default browser form submit
    event.preventDefault();

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


  },
});
