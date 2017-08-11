(function(define){
    var run        = require('../../config/run-config');
    var express    = require('express');
    var bodyParser = require('body-parser');
    
    //express init
    var app = express();

    //express server config 
    app.set('port',run.server.port);  //http://localhost:7890
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    
    app.listen(app.get('port'), function () {
        console.log('Express server listening on port ' + app.get('port'));
    });
    
    define(app);
}(function(def){if(def)module.exports = def; return module.exports;}))