import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { Insta } from '/imports/api/instagram/instagramCollection.js';


Meteor.publish('insta', function() {
  console.log("Hi I am here from the instagram publication");

//  {"access_token": "52511929.d4c9967.f9c106ae0abd4794af7752196df83195", "user": {"username": "yuyenla", "bio": "LA", "website": "", "profile_picture": "https://scontent.cdninstagram.com/t51.2885-19/11906329_960233084022564_1448528159_a.jpg", "full_name": "", "id": "52511929"}}

// { [Error: failed [400] {"meta": {"error_type": "APINotFoundError", "code": 400, "error_message": "invalid media id"}}]
// I20160915-17:08:29.425(-7)?   response:
// I20160915-17:08:29.426(-7)?    { statusCode: 400,
// I20160915-17:08:29.426(-7)?      content: '{"meta": {"error_type": "APINotFoundError", "code": 400, "error_message": "invalid media id"}}',
// I20160915-17:08:29.426(-7)?      headers:
// I20160915-17:08:29.427(-7)?       { 'x-ratelimit-remaining': '497',
// I20160915-17:08:29.427(-7)?         'content-language': 'en',
// I20160915-17:08:29.427(-7)?         expires: 'Sat, 01 Jan 2000 00:00:00 GMT',
// I20160915-17:08:29.428(-7)?         vary: 'Cookie, Accept-Language',
// I20160915-17:08:29.428(-7)?         'x-ratelimit-limit': '500',
// I20160915-17:08:29.428(-7)?         pragma: 'no-cache',
// I20160915-17:08:29.429(-7)?         'cache-control': 'private, no-cache, no-store, must-revalidate',
// I20160915-17:08:29.429(-7)?         date: 'Fri, 16 Sep 2016 00:08:29 GMT',
// I20160915-17:08:29.429(-7)?         'content-type': 'application/json; charset=utf-8',
// I20160915-17:08:29.429(-7)?         'set-cookie': [Object],
// I20160915-17:08:29.430(-7)?         connection: 'close',
// I20160915-17:08:29.430(-7)?         'content-length': '94' },
// I20160915-17:08:29.430(-7)?      data: { meta: [Object] } } }
// I20160915-17:08:29.439(-7)? { [Error: failed [400] {"meta": {"error_type": "APINotFoundError", "code": 400, "error_message": "invalid media id"}}]
// I20160915-17:08:29.440(-7)?   response:
// I20160915-17:08:29.440(-7)?    { statusCode: 400,
// I20160915-17:08:29.440(-7)?      content: '{"meta": {"error_type": "APINotFoundError", "code": 400, "error_message": "invalid media id"}}',
// I20160915-17:08:29.441(-7)?      headers:
// I20160915-17:08:29.441(-7)?       { 'x-ratelimit-remaining': '496',
// I20160915-17:08:29.441(-7)?         'content-language': 'en',
// I20160915-17:08:29.441(-7)?         expires: 'Sat, 01 Jan 2000 00:00:00 GMT',
// I20160915-17:08:29.442(-7)?         vary: 'Cookie, Accept-Language',
// I20160915-17:08:29.442(-7)?         'x-ratelimit-limit': '500',
// I20160915-17:08:29.442(-7)?         pragma: 'no-cache',
// I20160915-17:08:29.442(-7)?         'cache-control': 'private, no-cache, no-store, must-revalidate',
// I20160915-17:08:29.443(-7)?         date: 'Fri, 16 Sep 2016 00:08:29 GMT',
// I20160915-17:08:29.443(-7)?         'content-type': 'application/json; charset=utf-8',
// I20160915-17:08:29.443(-7)?         'set-cookie': [Object],
// I20160915-17:08:29.443(-7)?         connection: 'close',
// I20160915-17:08:29.443(-7)?         'content-length': '94' },
// I20160915-17:08:29.444(-7)?      data: { meta: [Object] } } }


  var tag = "puppies";


  try {
    var response = HTTP.get('https://api.instagram.com/v1/media/popular?access_token=52511929.d4c9967.f9c106ae0abd4794af7752196df83195', {
    });


    console.log("INSTAGRAM RESPONSE", response);


    // _.each(response.data.results, function(item) {
    //   var doc = {
    //     thumb: item.poster_path,
    //     title: item.name,
    //     show_id: item.id,
    //     //link: item.id + encodeURI(query),
    //     snippet: item.overview
    //   };


    //     Shows.upsert({
    //       show_id: doc.show_id},
    //       {
    //         $setOnInsert: {
    //         thumb: doc.thumb,
    //         title: doc.title,
    //         show_id: doc.show_id,
    //         //link: doc.id + encodeURI(title),
    //         snippet: doc.snippet
    //       },
    //   });
    // });


    self.ready();

  } catch(error) {
    console.log(error);
  }
  //return Shows.find();
});
