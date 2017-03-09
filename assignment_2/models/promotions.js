var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

// Will add the Currency type to the Mongoose Schema types
require('mongoose-currency').loadType(mongoose);
var Currency = mongoose.Types.Currency;

var promotionsSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  image: {
    type: String,
    required: true
  },
  label: {
    type: String,
    default: ''
  },
  price: {
    type: Currency
  },
  description: {
    type: String
  }
});


// the schema is useless so far
// we need to create a model using it
var Promotions = mongoose.model('Promotion', promotionsSchema);

// make this available to our Node applications
module.exports = Promotions;
