import minimongo from "minimongo";

const addToDb = (dbName = "quiz_app", collection = "quiz", quizObj) => {
  return new Promise((resolve, reject) => {
    let db = new minimongo.IndexedDb(
      {
        namespace: dbName,
      },
      function () {
        db.addCollection(
          collection,
          function () {
            db[collection].upsert(quizObj, resolve, reject);
          },
          reject
        );
      },
      reject
    );
  });
};

const getData = (dbName = "quiz_app", collection = "quiz", doneCBK) => {
  let db = new minimongo.IndexedDb(
    {
      namespace: dbName,
    },
    function () {
      db.addCollection(collection, function () {
        db[collection].find({}).fetch(function (quiz, err) {
          doneCBK(quiz);
        });
      });
    }
  );
};

const removeFromDb = (dbName = "quiz_app", collection = "quiz", productObj) => {
  return new Promise((resolve, reject) => {
    let db = new minimongo.IndexedDb(
      {
        namespace: dbName,
      },
      function () {
        db.addCollection(
          collection,
          function () {
            db[collection].remove(productObj, resolve, reject);
          },
          reject
        );
      },
      reject
    );
  });
};

function findAndRemove(
  dbName = "quiz_score",
  collection = "Food & Drink",
  quizObj
) {
  getData("quiz_score", "Food & Drink", (fetchedObjected) => {
    removeFromDb("quiz_score", "Food & Drink", fetchedObjected);
  });
}

export { addToDb, getData, removeFromDb, findAndRemove };
