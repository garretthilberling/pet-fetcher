const router = require('express').Router();
const { Pet } = require('../../models');
var convertapi = require('convertapi')(process.env.API_SECRET);
require('dotenv').config();

router.post('/', (req, res) => {
  console.log(req);

});

// router.post('/', (req, res) => {

//   convertapi.convert('svg', {
//     File: './public/img/test.jpg'
//   }, 'jpg')

//   .then(function(res) {
//     res.saveFiles('./public/img/test.svg');
//   });
// });

function setData(data) {
  let newData = data;
  console.log(newData)
  return
}

module.exports = router;