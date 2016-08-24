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

  // Add GitHub configuration entry
  /*
  ServiceConfiguration.configurations.update(
    { service: "github" },
    { $set: {
        clientId: "XXXXXXXXXXXXXXXXXXXX",
        secret: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
      }
    },
    { upsert: true }
  );
  */



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

  // Add Linkedin configuration entry
  /*
  ServiceConfiguration.configurations.update(
    { service: "linkedin" },
    { $set: {
        clientId: "XXXXXXXXXXXXXX",
        secret: "XXXXXXXXXXXXXXXX"
      }
    },
    { upsert: true }
  );
  */
});
