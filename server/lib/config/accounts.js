// Set up login services
Meteor.startup(function() {
  // Add Facebook configuration entry
  /*
  ServiceConfiguration.configurations.update(
    { service: "facebook" },
    { $set: {
        appId: "XXXXXXXXXXXXXXX",
        secret: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
      }
    },
    { upsert: true }
  );
  */

   //Add Instagram configuration entry
//    ServiceConfiguration.configurations.remove({
//   service: 'instagram'
//   });
//
//   ServiceConfiguration.configurations.insert({
//   service: 'instagram',
//   scope: ['basic'],
//   clientId: 'd4c9967d893c437581c31ff994800e5a',
//   secret: '24f14d560f97491b8f867e193172629b'
// });
  ServiceConfiguration.configurations.update(
    { "service": "instagram" },
    {
      $set: {
        clientId: "d4c9967d893c437581c31ff994800e5a",
        secret: "24f14d560f97491b8f867e193172629b"
      }
    },
    { upsert: true }
  );

  ServiceConfiguration.configurations.update(
      { "service": "facebook" },
      {
        $set: {
          "appId": "1799272423640991",
          "secret": "135f631bffef2488d3a585c66433e4ed"
        }
      },
      { upsert: true }
    );

  //Add Linkedin configuration entry
  ServiceConfiguration.configurations.update(
    { "service": "linkedin" },
    { $set: {
        clientId: "XXXXXXXXXXXXXX",
        secret: "XXXXXXXXXXXXXXXX"
      }
    },
    { upsert: true }
  );
});
