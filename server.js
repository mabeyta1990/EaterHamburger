// NODE DEPENDENCIES 
var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var expresshandlebars = require('express-handlebars');

var port = process.env.PORT || 3000;
var app = express();

app.use(express.static(process.cwd() + '/public'));

app.use(bodyParser.urlencoded({ extended: false }));

app.use(methodOverride('_method'));

app.engine('handlebars', expresshandlebars({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Import routes 
var routes = require('./controllers/burgers_controller.js');

// Give server access to imported routes 
app.use(routes);

app.listen(port, function() {
    console.log("App is running on port " + port);
});