// get nerd model
var Nerd = require('./models/nerd');

module.exports = function(app) {

  app.get('/api/nerds', function(req, res){
      // get all nerds in the database
      Nerd.find(function(err, nerds){
          // send error
          if(err)
            res.send(err);
          // return nerds in JSON format
          res.json(nerds);
      });
  });

  // road to handle creating goes here (app.post)
  // road to handle delete goes here (app.delete)

  // frontend routes ==========================================
  // route ot handle all angular requests
  app.get('*', function(req,res){
      res.sendfile('./public/views/index.html');// load index
  });
};
