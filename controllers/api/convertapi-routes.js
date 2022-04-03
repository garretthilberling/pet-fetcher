const router = require('express').Router();
const axios = require('axios');
var convertapi = require('convertapi')(process.env.API_SECRET);
require('dotenv').config();

var path = './public/images/IMG_7268.jpg';

router.post('/', (req, res) => {
    convertapi.convert('svg', { File: path }, 'jpg')
  .then(function(result) {
    // get converted file url
    console.log("Converted file url: " + result.file.url);

    // save to file
    return result.file.save('./public/img/IMG_7268.svg');
  })
  .then(function(file) {
    console.log("File saved: " + file);
  })
  .catch(function(e) {
    console.error(e.toString());
  });
});

module.exports = router;
