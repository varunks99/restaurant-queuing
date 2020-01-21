/* var Schema = mongoose.Schema;
var userSchema = new Schema({
  username: { type: String, required: true, index: { unique: true } },
 password: { type: String, required: true }
})

module.exports = mongoose.model('User', userSchema);

let UserModel = require('./server');

let user1 = new UserModel({
  username: 'Roll Goal',
  password: 'RollGoal123'
})

user1.save()
   .then(doc => {
     console.log(doc)
   })
   .catch(err => {
     console.error(err)
   }) */

   
