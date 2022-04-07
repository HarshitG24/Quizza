import minimongo from "minimongo";

const addToDb = (dbName = "quiz_app", collection = "quiz", productObj) => {
  return new Promise((resolve, reject) => {
    let db = new minimongo.IndexedDb(
      {
        namespace: dbName,
      },
      function () {
        db.addCollection(
          collection,
          function () {
            db[collection].upsert(productObj, resolve, reject);
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

export { addToDb, getData, removeFromDb };
