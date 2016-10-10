import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { Walmart } from '/imports/api/walmart/walmartCollection.js';

Meteor.publish('walmartReturn', function(id){
  return Walmart.find({item_id:id});
});

Meteor.publish('walmart', function(query) {

  try {

    var response = HTTP.get('http://api.walmartlabs.com/v1/search?query=' + query + '&format=json&apiKey=sf3jkfkzdgfx4ksjmcvjnjc7', {
    });

    // console.log("WALMART RESPONSE", response.data.items[0]);

    _.each(response.data.items, function(item) {
      var doc = {
        image: item.mediumImage,
        name: item.name,
        price: item.salePrice,
        description: item.shortDescription,
        customer_review: item.customerRating,
        item_id: item.itemId,
        product_url: item.productUrl,

      };

      console.log(doc);

      //convert to string so you can check the db
      var item_id = doc.item_id;
      var idToString = doc.item_id.toString();


      Walmart.upsert({
        _id: idToString},
        {
          $setOnInsert: {
            image: doc.image,
            name: doc.name,
            price: doc.price,
            description: doc.description,
            customer_review: doc.customer_review,
            item_id: idToString,
            product_url: doc.product_url,

          },
      });

    });




  } catch(error) {
    console.log(error);
  }
  return Walmart.find();
});
