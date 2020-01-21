/* let mongoose = require('mongoose');

class Database {
  constructor() {
    this._connect()
  }

_connect() {
     mongoose.connect('mongodb+srv://varunks99:Danbrown12@cluster0-51pdu.mongodb.net/queue?retryWrites=true&w=majority')
       .then(() => {
         console.log('Database connection successful')
       })
       .catch(err => {
         console.error('Database connection error')
       })
  }
}

module.exports = new Database() */


/* import Rebase from 're-base';
import Firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCruVHtYdQvKvhylVCoF4A8QDKLQlHPUoE",
    authDomain: "queue-b52d0.firebaseapp.com",
    databaseURL: "https://queue-b52d0.firebaseio.com",
    projectId: "queue-b52d0",
    storageBucket: "",
    messagingSenderId: "676647013723",
    appId: "1:676647013723:web:5e9bd3c7cfea9f2e"
  };

  const app = Firebase.initializeApp(firebaseConfig);
 const base = Rebase.createClass(app.database())

export { base }; */
