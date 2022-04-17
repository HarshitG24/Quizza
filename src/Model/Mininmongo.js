import minimongo from "minimongo";

/**
 * @typedef {Function} addToDb
 * @param {String} dbName - Name of the database
 * @param {String} collection - Name of the collection
 * @param {Object} quizObj - A quiz object, which contains the category, score, date and answer-summary
 * @returns {Promise}
 * @description Adds the quiz object to the minimongo database.
 */

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

/**
 * @typedef {Function} getData
 * @param {String} dbName - Name of the database
 * @param {String} collection - Name of the collection
 * @param {Function} doneCBK - A javascript callback function, which is called after we are successfully able to access the minimongo database and collection
 * @returns {void}
 * @description Gets all the data from minimongo database for given set of database and collection
 */
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

/**
 * @typedef {Function} removeFromDb
 * @param {String} dbName - Name of the database
 * @param {String} collection - Name of the collection
 * @param {Object} quizObj - A quiz object, to be deleted from the minimongo database
 * @returns {Promise}
 * @description Removes the quiz object from the minimongo database.
 */
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

/**
 * @typedef {Function} findAndRemove
 * @param {String} dbName - Name of the database
 * @param {String} collection - Name of the collection
 * @param {String} selectedCategory - Category whose object has to be deleted
 * @returns {void}
 * @description Finds the quiz object by fetching all the data, filtering and then removing from the database
 */
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

/**
 * @typedef {Function} getDataWithoutCbk
 * @param {String} dbName - Name of the database
 * @param {String} collection - Name of the collection
 * @returns {Promise}
 * @description Finds the quiz object by fetching all the data, filtering and then removing from the database, but returns a promise instead of callback
 */

const getDataWithoutCbk = (dbName = "quiz_app", collection = "quiz") => {
  return new Promise((resolve, reject) => {
    const db = new minimongo.IndexedDb(
      { namespace: dbName },
      function () {
        db.addCollection(
          collection,
          function () {
            db[collection].find({}).fetch(resolve, reject);
          },
          reject
        );
      },
      reject
    );
  });
};

export { addToDb, getData, removeFromDb, findAndRemove, getDataWithoutCbk };
