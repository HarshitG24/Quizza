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

const removeFromDb = (dbName = "quiz_app", collection = "quiz", quizObj) => {
  return new Promise((resolve, reject) => {
    let db = new minimongo.IndexedDb(
      {
        namespace: dbName,
      },
      function () {
        db.addCollection(
          collection,
          function () {
            db[collection].remove(quizObj, resolve, reject);
          },
          reject
        );
      },
      reject
    );
  });
};

const findAndRemove = (
  dbName = "quiz_app",
  collection = "quiz",
  selectedCategory
) => {
  getData(dbName, collection, (foundResultObj) => {
    let obj = foundResultObj.find(
      (e) => e.selectedCategory === selectedCategory
    );

    if (obj !== undefined) {
      removeFromDb(dbName, collection, obj);
    }
  });
};

export { addToDb, getData, removeFromDb, findAndRemove };
