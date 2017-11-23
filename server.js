const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const routes = require('./routes')

const PORT = process.env.PORT || 3001

const app = express();

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
  }

//Config body parser for AJAX request
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
//Server static files
app.use(express.static("client/build"))
// Add routes, both API and view
app.use(routes)

//Set up promises with mongoose
mongoose.Promise = global.Promise;

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/rosie",
    {
        useMongoClient: true
    }
)

app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
  });
  

app.listen(PORT, function(){
    console.log(`API Server now listening on PORT ${PORT} `);
})