var express = require('express');
var router = express.Router();

var User = require('.././models/userSchema');
var Board = require('.././models/boardSchema');
var Team = require('.././models/teamSchema');

var createBoard = function(req,res,next) {
  var title = req.body.title;
  var url = "/b/"+title;
  Board.create({
  "name": req.body.title,
  "url": url,
  "team":{
  },
  "prefs": {
    "backgroundColor": "rgb(44,62,80)",
    "permissionLevel":"Public",
    "comments": "Public"
  },
  "lists": [],
  "members": [],
  "lastActivity": new Date()
  },function(err,board) {
    console.log("Something");
  if(!err) {
    res.json(board);
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

var showAllBoards = function(req,res,next) {
  Board.find(function(err,data) {
    res.render('users/home',{ boards: data });
  });
}

router.get('/boards',function(req,res) {
  showAllBoards(req,res);
});

router.get('/:id', function(req, res, next) {
  var id = req.params.id;
  Board.find({"members":{ $elemMatch: {"id": id}}},function(err,results) {
    res.render('home',{ boards: results });
  });
});

router.post('/createBoard',function(req,res) {
  createBoard(req,res);
});

router.post('/:teamId/createBoard',function(req,res) {
  var teamId = req.param.teamId;
  createBoard(teamId,req,res);
});

module.exports = router;
