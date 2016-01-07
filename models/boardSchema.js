var mongoose = require('mongoose');

var BoardSchema = new mongoose.Schema({
  "id": mongoose.Schema.Types.ObjectId,
  "name": String,
  "url": String,
  "team": {
    "id": mongoose.Schema.Types.ObjectId
  },
  "prefs": {
    "backgroundColor": String,
    "permissionLevel": String,
    "backgroundImage": String,
    "comments": String
  },
  "lists": [
    {
      "id": mongoose.Schema.Types.ObjectId,
      "name": String
    }
  ],
  "members": [
    {
      "id": String
    }
  ],
  "lastActivity": Date
});

module.exports = mongoose.model("Board", BoardSchema,"boards");
