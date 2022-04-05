const router = require('express').Router();
const { Pet } = require('../../models');
var convertapi = require('convertapi')(process.env.API_SECRET);
require('dotenv').config();

router.post('/', (req, res) => {
console.log(req.body);
  convertapi.convert('svg', {
    File: req.body,
  }, 'jpg')
  
  .then(function(send) {
    // res.saveFiles('./public/img/test.svg');
    send.saveFiles('./public/img/test.svg');
    console.log(send)
  })
});

// router.post('/', (req, res) => {

//   convertapi.convert('svg', {
//     File: './public/img/test.jpg'
//   }, 'jpg')
  
//   .then(function(res) {
//     res.saveFiles('./public/img/test.svg');
//   });
// });

module.exports = router;
