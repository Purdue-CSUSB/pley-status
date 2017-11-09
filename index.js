var express         = require('express');
var app             = express();
var bodyParser      = require('body-parser');
var cors            = require('cors');
var cluster         = require('cluster');
var config          = require('./config');


if (cluster.isMaster) {
  var numWorkers = require('os').cpus().length;
  for(var i = 0; i < numWorkers; i++) {
    cluster.fork();
  }
} else {

  /* Cors
   * Allows for external services to make API requests
   */
  app.use(cors());

  /* Morgan
   * if we are in dev, log requests to the server
   */
  if (process.env.NODE_ENV !== 'production') {
    var logger = require('morgan');
    app.use(logger('dev'));
  }

  /* Body Parser
   * Parses incoming requests and puts them in the req.body
   * variable
   */
   app.use(bodyParser.urlencoded({ extended: false }));
   app.use(bodyParser.json());

   /* API Routes
    * Abstratcs out routes
    */
   app.use('/api/', require('./routes'));

   /* Frontend
    * Express rendered frontend
    */
   app.use('/', express.static('public'))
   app.get('/*', (req,res) => {res.redirect('/')})


   app.listen(config.port);
   console.log("Listening on port " + config.port);
}
