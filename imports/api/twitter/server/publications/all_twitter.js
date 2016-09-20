import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { Insta } from '/imports/api/twitter/twitterCollection.js';


Meteor.publish('twitter', function() {





  try {

    var response = HTTP.get('https://api.instagram.com/v1/tags/' + tag + '/media/recent?access_token=3947388902.f0bd8a7.1c842ad33b0f469aa3bb42d0857592df', {
    });

    console.log("INSTAGRAM RESPONSE", response.data.data[0]);


    _.each(response.data.data, function(item) {
      var doc = {
        image: item.images.thumbnail.url,
        caption: item.caption.text,
        userName: item.user.username,
        user_id: item.user.id,
        image_id: item.id
      };

    //  console.log(doc);

      Insta.upsert({
        _id: doc.image_id},
        {
          $setOnInsert: {
            image: doc.image,
            caption: doc.caption,
            userName: doc.userName,
            user_id: doc.user_id,
            image_id: doc.image_id
          },
      });

    });


  } catch(error) {
    console.log(error);
  }
  return Twitter.find();
});
