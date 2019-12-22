const functions = require("firebase-functions");

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

// exports.myStorageFunction = functions
//     .region('europe-west1')
//     .storage
//     .object()
//     .onFinalize((object) => {
//       // ...
//     });

exports.helloWorld = functions
  .region("asia-northeast1")
  .https.onRequest((request, response) => {
    response.send("Hello from Firebase!");
  });
