const Message = require("../models/message");
const Conversation = require("../models/conversation");
const AppError = require("../utils/appError");
const AWS = require("aws-sdk");
const User = require("../models/user");

//Oke
exports.getTenLastMessageInConversationID = async (req, res, next) => {
  try {
    let _conversationId = req.params.conversationId;
    let _count = req.body.count;
    if (!_count) {
      _count = 0;
    }
    let _allMessages = await Message.find({
      conversationID: _conversationId,
    }).sort({ createdAt: -1 });
    console.log(_allMessages);
    let _messages = null;
    if (_count < _allMessages.length) {
      res.status(200).json(_allMessages.slice(_count, _count + 10));
    } else if (_count == _allMessages.length) {
      res.status(200).json(null);
    }
  } catch (err) {
    next(err);
  }
};

//OK
exports.getAllMessageInConversationID = async (req, res, next) => {
  try {
    let _conversationId = req.params.conversationId;
    let _messages = await Message.find({ conversationID: _conversationId });
    let _datas = [];

    for (let i of _messages) {
      const _user = await User.findById(i.senderID);
      let _data = {
        _id: i.id,
        content: i.content,
        imageLink: i.imageLink,
        fileLink: i.fileLink,
        senderID: _user.id,
        createdAt: i.createdAt,
        action: i.action,
        deleteBy: i.deleteBy,
      };
      _datas.push(_data);
    }
    res.status(200).json(_datas);
  } catch (err) {
    next(err);
  }
};


// Gửi nhiều file
exports.createMessageManyFile = async (req, res, next) => {
  try {
    let _imageLinks = [];
    let _fileLink = "";
    AWS.config.update({
      accessKeyId: process.env.ID,
      secretAccessKey: process.env.SECRET,
      region: process.env.region,
      correctClockSkew: true,  
    });
    const s3 = new AWS.S3();
    if (!req.files) {
      _imageLinks = null;
      _fileLink = null;
      console.log("null");
    }
    else {
      const _imageLinksClient = req.files.imageLinks;
      if (req.files.imageLinks) {
        const _imageLinksClient = req.files.imageLinks;
        for (let i = 0; i < _imageLinksClient.length; i++) {
          const _fileContent = Buffer.from(_imageLinksClient[i].data, "binary");
          const _param = {
            Bucket: "mechat",
            Key: _imageLinksClient[i].name,
            Body: _fileContent,
          }
          const _paramLocation = await s3
            .upload(_param, (err, data) => {
              if (err) {
                throw err;
              }
            })
            .promise();
          _imageLinks.push(_paramLocation.Location);
        };
      }
      if (req.files.fileLink) {
        const _fileLinkClient = req.files.fileLink;
        const _fileContent = Buffer.from(_fileLinkClient.data, "binary");
        const _param = {
          Bucket: "mechat",
          Key: _fileLinkClient.name,
          Body: _fileContent,
        }
        const _paramFileLocation = await s3
          .upload(_param, (err, data) => {
            if (err) {
              throw err;
            }
          })
          .promise();
        _fileLink = _paramFileLocation;
      }
    }
    const { content, conversationID, senderID } = req.body;
    const _newMessage = await Message.create({
      content: content,
      conversationID: conversationID,
      senderID: senderID,
      imageLink: _imageLinks,
      fileLink: _fileLink,
      action: null,
    });
    const _conversation = await Conversation.findByIdAndUpdate(
      { _id: conversationID },
      {
        lastMessage: _newMessage,
      },
      { new: true }
    );
    res.status(200).json(_newMessage);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};
//Ok
exports.createMessage = async (req, res, next) => {
  try {
    let _imageLink;
    let _fileLink;
    AWS.config.update({
      accessKeyId: process.env.ID,
      secretAccessKey: process.env.SECRET,
      region: process.env.region,
    });
    const s3 = new AWS.S3();
    if (!req.files) {
      _imageLink = null;
      _fileLink = null;
    } else {
      if (req.files.imageLink) {
        const _fileContentImage = Buffer.from(req.files.imageLink.data, "binary");

        const _paramImage = {
          Bucket: "mechat",
          Key: req.files.imageLink.name,
          ContentType: 'image/png',
          Body: _fileContentImage,
        };

        const _paramLocation = await s3
          .upload(_paramImage, (err, data) => {
            if (err) {
              throw err;
            }
          })
          .promise();

        _imageLink = _paramLocation.Location;
      }
      if (req.files.fileLink) {
        const _fileContent = Buffer.from(req.files.fileLink.data, "binary");

        const _paramFile = {
          Bucket: "mechat",
          Key: req.files.fileLink.name,
          ContentType: 'application/pdf',
          Body: _fileContent,
        };

        const _paramFileLocation = await s3
          .upload(_paramFile, (err, data) => {
            if (err) {
              throw err;
            }
          })
          .promise();

        _fileLink = _paramFileLocation.Location;
      }
    }
    const { content, conversationID, senderID } = req.body;
    const _newMessage = await Message.create({
      content: content,
      conversationID: conversationID,
      senderID: senderID,
      imageLink: _imageLink,
      fileLink: _fileLink,
      action: null,
    });
    const _conversation = await Conversation.findByIdAndUpdate(
      { _id: conversationID },
      {
        lastMessage: _newMessage,
      },
      { new: true }
    );
    res.status(200).json(_newMessage);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};
//Oke
exports.deleteMessage = async (req, res, next) => {
  try {
    const _messageID = req.params.messageId;
    const _message = await Message.findById(_messageID);
    const _conversationID = req.body.conversationID;
    const _conversationNow = await Conversation.findById(_conversationID);

    if (_message.id == _conversationNow.lastMessage) {
      await Message.findByIdAndRemove(_messageID);
      let _messages = await Message.find({
        conversationID: _conversationID,
      });

      const _conversation = await Conversation.findByIdAndUpdate(
        { _id: _conversationID },
        {
          lastMessage: _messages[_messages.length - 1],
        },
        { new: true }
      );
    }
    await Message.findByIdAndRemove(_messageID);
    res.status(200).json({ idMessage: _messageID });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};
//Oke
exports.recallMessage = async (req, res, next) => {
  try {
    const _messageID = req.params.messageId;
    await Message.findByIdAndUpdate(_messageID, {
      content: "Tin nhắn này đã được thu hồi",
      imageLink: null,
      fileLink: null,
    });
    const _message = await Message.findById(_messageID);
    res.status(200).json(_message);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

//Oke
exports.deleteMessageForYou = async (req, res, next) => {
  try {
    const _messageId = req.params.messageId;
    const _userId = req.body.userId;
    const _user = await User.findById(_userId);
    await Message.findByIdAndUpdate(_messageId, {
      deleteBy: _user.id,
    });
    const _message = await Message.findById(_messageId);
    let _data = { id: _messageId };
    res.status(200).json(_data);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};
