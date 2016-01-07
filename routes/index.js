var express = require('express');
var router = express.Router();

var Board = require('.././models/boardSchema.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("creating a new board");
  Board.create({
  "name": "Proj Trello",
  "url": "urlOfTheBoard",
  "prefs": {
    "backgroundColor": "rgb(44,62,80)",
    "permissionLevel":"Public",
    "comments": "Public"
  },
  "lists": [
    {
      "name": "BackLog"
    }
  ],
  "members": [{"id" : "568a6ed5a3b58908299a387d"}],
  "lastActivity": new Date()
},function(err,board) {
  console.log("Something");
  if(!err) {
    console.log(board);
    res.render('home', { boards: [board] });
  }
  else {
    console.log(err);
  }
});
  // Board.find(function(err,results) {
  //   console.log(results);
  //   res.render('home',{boards: results});
  // });
});

module.exports = router;
