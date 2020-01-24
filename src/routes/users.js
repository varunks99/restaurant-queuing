const router = express.Router();

router.post('/register', (req, res) => {
  User.register(new User({username: req.body.username}), req.body.password, (err, user) => {
    if(err)
      console.error(err);
    else {
      passport.authenticate('local')(req, res, () => {
        res.redirect('/login');
      })
    }
  })
})

router.post('/login', passport.authenticate('local', {
  successRedirect: '/dashboard',
  failureRedirect: '/login'
}));

module.exports = router;

// bcrypt.genSalt(10, (err, salt) => {
//   bcrypt.hash(User1.password, salt, (err, hash) => {
//     if(err) console.error(err);
//     User1.password = hash;
//     User1.save((err, res) => {
//       if(err)
//         console.error(err);
//       else
//         console.log('Saved', res);
//     })
//   })
// })


// router.post('/login', [check('username').isLength({min:1}).withMessage('Your username must be at least 3 characters long'), check('password').isLength({min:5})], (req, res) => {
//   const errors = validationResult(req);
//   if(!errors.isEmpty()) {
//     return res.status(422).json({errors: errors.array()})
//   }
//
//   let username = req.body.username;
//   let password = req.body.password;
//
//   User.findOne({username: username}, (err, doc) => {
//     if(doc == null) {
//       console.log("User not found");
//     }
//     else {
//       const
//     }
//   })
// })
