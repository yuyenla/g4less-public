import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import {Shows} from '/imports/api/shows/shows.js';


Meteor.publish('insta', function() {
  console.log("Hi I am here from the instagram publication");


  try {
    var response = HTTP.get('https://api.instagram.com/v1/tags/search?q=snowy&access_token=52511929.1677ed0.7e65acea189d4a81aa274ea822840317', {
    });


    console.log("INSTAGRAM RESPONSE", response);


    _.each(response.data.results, function(item) {
      var doc = {
        thumb: item.poster_path,
        title: item.name,
        show_id: item.id,
        //link: item.id + encodeURI(query),
        snippet: item.overview
      };


        Shows.upsert({
          show_id: doc.show_id},
          {
            $setOnInsert: {
            thumb: doc.thumb,
            title: doc.title,
            show_id: doc.show_id,
            //link: doc.id + encodeURI(title),
            snippet: doc.snippet
          },
      });
    });


    self.ready();

  } catch(error) {
    console.log(error);
  }
  //return Shows.find();
});
