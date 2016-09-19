import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { Insta } from '/imports/api/instagram/instagramCollection.js';


Meteor.publish('insta', function(tag) {
  if(tag != "undefined"){
    console.log("Hi I am here from the instagram publication");
    console.log("title without the spaces", tag);
    var hashTag = "#" + tag;
    console.log("hashtag", hashTag);  
  }




//{"access_token": "52511929.d4c9967.f9c106ae0abd4794af7752196df83195", "user": {"username": "yuyenla", "bio": "LA", "website": "", "profile_picture": "https://scontent.cdninstagram.com/t51.2885-19/11906329_960233084022564_1448528159_a.jpg", "full_name": "", "id": "52511929"}}

//  {"access_token": "52511929.d4c9967.f9c106ae0abd4794af7752196df83195", "user": {"username": "yuyenla", "bio": "LA", "website": "", "profile_picture": "https://scontent.cdninstagram.com/t51.2885-19/11906329_960233084022564_1448528159_a.jpg", "full_name": "", "id": "52511929"}}

//https://api.instagram.com/v1/users/52511929/media/recent/?access_token=52511929.d4c9967.f9c106ae0abd4794af7752196df83195 this works to grab my in
//var response = HTTP.get('https://api.instagram.com/v1/users/52511929/media/recent/?access_token=52511929.d4c9967.f9c106ae0abd4794af7752196df83195', { this works for grabbing the content i posted!
//HTTP.get('https://api.instagram.com/v1/tags/search?q=snowy&access_token=52511929.d4c9967.f9c106ae0abd4794af7752196df83195', { this works for grabbing snowy from search

// https://api.instagram.com/v1/tags/try/media/recent?access_token=52511929.d4c9967.f9c106ae0abd4794af7752196df83195 use this to grab all pictures that i tag with: try
// https://api.instagram.com/v1/tags/starwarsrebels/media/recent?access_token=3947388902.f0bd8a7.1c842ad33b0f469aa3bb42d0857592df
  try {

    var response = HTTP.get('https://api.instagram.com/v1/tags/' + tag + '/media/recent?access_token=3947388902.f0bd8a7.1c842ad33b0f469aa3bb42d0857592df', {
    });

    //console.log("INSTAGRAM RESPONSE", response.data.data[0]);


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
  return Insta.find({caption:hashTag});
});
