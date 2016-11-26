// get mongoose modules
var mongoose = require('mongoose');

// allows passing model to other files to call
module.exports = mongoose.model('Nerd', {
  name : {type : String, default: ''}
});
