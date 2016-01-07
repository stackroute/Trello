var express = require('express');
var router = express.Router();

var User = require('.././models/userSchema');
var Board = require('.././models/boardSchema');
var Team = require('.././models/teamSchema');

var createBoard = function(req,res,next) {
  Board.create({
  "name": "Proj Trello",
  "url": "urlOfTheBoard",
  "team":{
    "id": teamId
  },
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
    res.json(board)
  }
  else {
    console.log(err);
  }
});
}

var createTeam = function(req,res,next) {
  var teamName = req.params.teamName;
  var creatorId = req.params.creatorId;
  Team.create({
    "teamName": teamName,
    "member": creatorId,
    "boards": [],
    "permissionLevel": "public",
    "pref": {
      "backgroundColor": ""
    }
  });
  next();
}

router.get('/:id', function(req, res, next) {
  var id = req.params.id;
  Boards.find({"members":{ $elemMatch: {"id": id}}},function(err,results) {
    res.render('home',{ boards: results });
  });
});

router.post('/createBoard',function(req,res) {
  createBoard(null,req,res);
});

router.post('/:teamId/createBoard',function(req,res) {
  var teamId = req.param.teamId;
  createBoard(teamId,req,res);
});

module.exports = router;
