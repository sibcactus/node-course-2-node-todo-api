const MongoClient = require("mongodb").MongoClient;

MongoClient.connect(
  "mongodb://mongo-stend1.noregress.shot.x340.org:27017/TodoApp",
  (err, db) => {
    if (err) {
      console.log("Unable to connect to MongoDB server");
    }
    console.log("Connected to MongoDB server");
    db.collection('Users').insertOne(
      {
        name: "TestovTT",
        age: 25,
        location: 'Moscow, Aeroport'
      },
      (err, result) => {
        if (err) {
          return console.log("Unable to insert todo", err);
        }

        console.log(JSON.stringify(result.ops, undefined, 2));
      }
    );
    db.close();
  }
);
