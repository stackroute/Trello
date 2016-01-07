var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
  id: mongoose.Schema.Types.ObjectId,
  userName: String,
  firstName: String,
  lastName: String,
  emailId: String,
  password: String,
  url: String,
  boards: [
    {
      id: mongoose.Schema.Types.ObjectId,
    }
  ],
  teams: [
    {
      id: mongoose.Schema.Types.ObjectId,
      name: String,
      url: String,
      boards: [
        {
          id: mongoose.Schema.Types.ObjectId,
          name: String,
          url: String,
          backgroundColor: String
        }
      ]
    }
  ],
  initial: String,
  avatar: String,
  bio: String,
  emailAddress: [
    {
      id: mongoose.Schema.Types.ObjectId,
      emailId: String,
      addedOn: Date
    }
  ],
  sessions: [
    {
      id: mongoose.Schema.Types.ObjectId,
      deviceName: String,
      deviceId: String,
      deviceType: String,
    }
  ],
  accountcreatedOn: Date,
  emailNotifications: String
});

module.exports = mongoose.model('User',userSchema,'trello');
