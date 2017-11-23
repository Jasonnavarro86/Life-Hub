const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/reactreadinglist",
  {
    useMongoClient: true
  }
);

const mainSeed = [
  {
    name: "Jason",
    fId: "11",
    email:'jnav@gmail.com',
    date: new Date(Date.now())
  }

];

db.Main
  .remove({})
  .then(() => db.Main.collection.insertMany(mainSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });