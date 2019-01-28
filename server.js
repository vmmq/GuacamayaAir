//------------DEPENDENCIES--------------//
const express = require("express");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const db = require("./models");


let port = process.env.PORT || 8080;
const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));


app.use(express.static("public"));


app.use(methodOverride("_method"));


const exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


const routes = require("./controllers/main_controller.js");
app.use("/", routes);


db.sequelize.sync({ force: true }).then(function() {
  app.listen(port, function() {
    console.log("App listening on port " + port);
  });
});


