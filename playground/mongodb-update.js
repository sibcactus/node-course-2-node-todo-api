const { MongoClient, ObjectID } = require("mongodb");

MongoClient.connect(
  "mongodb://mongo-stend1.noregress.shot.x340.org:27017/TodoApp",
  (err, db) => {
    if (err) {
      console.log("Unable to connect to MongoDB server");
    }
    // delete Many
    // db.collection('Todos').deleteMany({text: "Do anything else"}).then(
    //   (result) => {
    //     console.log(JSON.stringify(result, undefined, 2))
    //   }
    // );
    //delete one
    // db.collection('Users').deleteOne({ name: "TestovTT"}).then((result) => {
    //   console.log(result);
    // })
    //find & deleteOne
    db
      .collection("Todos")
      .findOneAndUpdate(
        {
          _id: new ObjectID("5a368b56268fafbac47c9a87")
        },
        {
          $set: { completed: true }
        },
        {
          returnOriginal: false
        }
      )
      .then(result => {
        console.log(result);
      });
    db.close();
  }
);
