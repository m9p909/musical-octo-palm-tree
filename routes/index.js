var express = require('express');
var router = express.Router();

var imageURLs = [
  "images/external-content.duckduckgo.com.jpeg"
, "images/jack.jpeg"
, "images/jack2.jpeg",
"images/jackcard.jpeg",
"images/jacklayton.jpeg",
"images/jackskull.jpeg"
];

function getImageTag() {
  var img = 'img(src=\"';
  var randomIndex = Math.floor(Math.random() * imageURLs.length);
  img += imageURLs[randomIndex];
  img += '\" alt=\"a picture of Jack\" class=\"profilepic\")';
  return img;
 }

 imgid = getImageTag()

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { profilePic:getImageTag()});
});

module.exports = router;
