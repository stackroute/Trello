var mongoose = require('mongoose');

var card = new mongoose.Schema({
    "id": mongoose.Schema.Types.ObjectId,
    "title": String,
    "list": {
      "id": mongoose.Schema.Types.ObjectId
    },
    "board": {
      "id": mongoose.Schema.Types.ObjectId,
      "name": String,
      "url": String
    },
    "members": [
      {
        "id": mongoose.Schema.Types.ObjectId,
      }
    ],
    "checkLists": [
      {
        "id": mongoose.Schema.Types.ObjectId,
        "title": String,
        "checkListItems": [
          {
            "id": mongoose.Schema.Types.ObjectId,
            "text": String,
            "checkedState": bool,
            "checkedOn": Date,
            "createdOn": Date,
            "modifiedOn": Date,
            "creatorId": mongoose.Schema.Types.ObjectId,
            "assignedToId": mongoose.Schema.Types.ObjectId
          }
        ]
      }
    ],
    "attachments": {
      "cover": mongoose.Schema.Types.ObjectId,
      "items": [
        {
          "id": mongoose.Schema.Types.ObjectId,
          "name": String,
          "attachementType": String,
          "addedBy": String,
          "idOfThePersonAdded": mongoose.Schema.Types.ObjectId,
          "addedOn": Date,
          "path": String
        }
      ]
  },
    "comments": [{
      "addedBy": "name of the person",
      "addedById": "id of the person who added It",
      "dateTime": "date time it got added",
      "description": "someText",
      "lastModifiedOn": "dateTime"
    }]
});
