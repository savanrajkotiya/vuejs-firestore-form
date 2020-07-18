const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();
const db = admin.firestore(); // DB firestore

exports.helloWorld = functions.https.onRequest((request, response) => {
    console.log(request);
    response.send("Hello from Firebase!!");
});
// https://us-central1-vue-firestore-c8a57.cloudfunctions.net/helloWorld

// update Form percentage function

exports.updateForm = functions.database.ref('users').onWrite((change, context) => {
    console.log(context)
    const afterWriteData = change.after.val(); // object after change
    db.doc('users/formratio').set({ percentage: (Object.keys(afterWriteData.users).length * 20) });
    return change.after.val();
});
