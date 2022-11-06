const AppError = require("../utils/appError");
const User = require("../models/user");
const Account = require("../models/account");
const AWS = require("aws-sdk");
const Conversation = require("../models/conversation");

//Oke
exports.deleteUserPhuong = async (req, res, next) => {
  try {
    const _user1 = await User.findById(req.params.userId);
    const _user = await User.findByIdAndDelete(req.params.userId);

    const _account = await Account.findByIdAndDelete(_user1.accountID);

    if (!_user || !_account) {
      return next(
        new AppError(404, "fail", "No document found with that id"),
        req,
        res,
        next
      );
    }

    res.status(204).json({
      status: "success",
      data: {
        _user,
      },
    });
  } catch (error) {
    return res.status(500).json({ msg: error });
  }
};
//OKe
exports.deleteUser = async (req, res, next) => {
  try {
    const _user = await User.findByIdAndUpdate(req.params.userID, req.body, {
      new: true,
      runValidators: true,
    });
    const _acount = await Account.findByIdAndUpdate(_user.accountID, req.body, {
      new: true,
      runValidators: true,
    });
    if (!_user || !_acount) {
      return next(
        new AppError(404, "fail", "No document found with that id"),
        req,
        res,
        next
      );
    }

    res.status(204).json({
      status: "success",
      data: {
        _user,
      },
    });
  } catch (error) {
    return res.status(500).json({ msg: error });
  }
};

exports.updateBack = async (req, res, next) => {
  try {
    AWS.config.update({
      accessKeyId: process.env.ID,
      secretAccessKey: process.env.SECRET,
      region: process.env.region,
    });
    const s3 = new AWS.S3();
    if (req.files != null) {
      const _fileContentBack = Buffer.from(req.files.backLink.data, "binary");
      const _paramBack = {
        Bucket: "mechat",
        Key: req.files.backLink.name,
        Body: _fileContentBack,
      };
      const _paramBackLocation = await s3
        .upload(_paramBack, (err, data) => {
          if (err) {
            throw err;
          }
        })
        .promise();
      const _user = await User.findByIdAndUpdate(req.params.userId, {
        backgroundLink: _paramBackLocation.Location,
      }).populate("accountID", "phoneNumber");

      if (!_user) {
        return next(
          new AppError(404, "fail", "No document found with that id"),
          req,
          res,
          next
        );
      }
      const _userUpdate = await User.findById(_user.id);
      const _account = await Account.findById(_userUpdate.accountID);
      const _data = {
        _id:_userUpdate.id,
        fullName: _userUpdate.fullName,
        bio: _userUpdate.bio,
        gender: _userUpdate.gender,
        birthday: _userUpdate.birthday,
        status: _userUpdate.status,
        avatarLink: _userUpdate.avatarLink,
        backgroundLink: _userUpdate.backgroundLink,
        friends: _userUpdate.friends,
        phoneNumber:_account.phoneNumber
      };
      res.status(200).json(_data);
    } else {
      return res.status(400).json({ msg: "Dữ liệu null!" });
    }
  } catch (error) {
    return res.status(500).json({ msg: error });
  }
};

//OKe
exports.updateAvar = async (req, res, next) => {
  try {
    let _avarLink;
    AWS.config.update({
      accessKeyId: process.env.ID,
      secretAccessKey: process.env.SECRET,
      region: process.env.region, 
    });
    const s3 = new AWS.S3();
    if (req.files != null) {
      const _fileContentAvar = Buffer.from(req.files.avatarLink.data, "binary");
      const _paramAvar = {
        Bucket: "mechat",
        Key: req.files.avatarLink.name,
        Body: _fileContentAvar,
      };
      const _paramAvarLocation = await s3
        .upload(_paramAvar, (err, data) => {
          if (err) {
            throw err;
          }
        })
        .promise();
      const _user = await User.findByIdAndUpdate(req.params.userId, {
        avatarLink: _paramAvarLocation.Location,
      });
      const _conversations = await Conversation.find({
        members: { $in: [_user.id] },
      });
      for (let i of _conversations) {
        if (i.members.length == 2) {
          let _imageLink = i.imageLink;
          for (let j = 0; j < _imageLink.length; j++) {
            if (_imageLink[j] == _user.avatarLink) {
              _imageLink[j] = _paramAvarLocation.Location;
              await Conversation.findByIdAndUpdate(i.id, {
                imageLink: _imageLink,
              });
            }
          }
        }
      }
      if (!_user) {
        return next(
          new AppError(404, "fail", "No document found with that id"),
          req,
          res,
          next
        );
      }
      const _userUpdate = await User.findById(_user.id);
      const _account = await Account.findById(_userUpdate.accountID);
      const _data = {
        _id:_userUpdate.id,
        fullName: _userUpdate.fullName,
        bio: _userUpdate.bio,
        gender: _userUpdate.gender,
        birthday: _userUpdate.birthday,
        status: _userUpdate.status,
        avatarLink: _userUpdate.avatarLink,
        backgroundLink: _userUpdate.backgroundLink,
        friends: _userUpdate.friends,
        phoneNumber:_account.phoneNumber
      };
      res.status(200).json(_data);
    } else {
      return res.status(400).json({ msg: "Dữ liệu null" });
    }
  } catch (error) {
    return res.status(500).json({ msg: error });
  }
};
//Oke
exports.updateUserText = async (req, res, next) => {
  try {
    const { fullName, gender, birthday, bio } = req.body;
    const dateBirthday = new Date(birthday);
    const _user = await User.findByIdAndUpdate(req.params.userID, {
      fullName: fullName,
      gender: gender,
      birthday: dateBirthday,
      bio: bio,
    }).populate("accountID", "phoneNumber");

    if (!_user) {
      return next(
        new AppError(404, "fail", "No document found with that id"),
        req,
        res,
        next
      );
    }
    const _userUpdate = await User.findById(_user.id);
    const _account = await Account.findById(_userUpdate.accountID);
    const _data = {
      _id:_userUpdate.id,
      fullName: _userUpdate.fullName,
      bio: _userUpdate.bio,
      gender: _userUpdate.gender,
      birthday: _userUpdate.birthday,
      status: _userUpdate.status,
      avatarLink: _userUpdate.avatarLink,
      backgroundLink: _userUpdate.backgroundLink,
      friends: _userUpdate.friends,
      phoneNumber:_account.phoneNumber
    };
    res.status(200).json(_data);
  } catch (error) {
    return res.status(500).json({ msg: error });
  }
};
//Oke
exports.getUserByID = async (req, res, next) => {
  try {
    const _user = await User.findById(req.params.userID).populate(
      "accountID",
      "phoneNumber"
    );
    const _account = await Account.findById(_user.accountID);
    const _data = {
      _id: _user.id,
      fullName: _user.fullName,
      bio: _user.bio,
      gender: _user.gender,
      birthday: _user.birthday,
      status: _user.status,
      avatarLink: _user.avatarLink,
      backgroundLink: _user.backgroundLink,
      friends: _user.friends,
      phoneNumber: _account.phoneNumber,
    };
    if (!_user) {
      return next(
        new AppError(404, "fail", "No document found with that id"),
        req,
        res,
        next
      );
    }

    res.status(200).json({
      status: "success",
      data: _data,
    });
  } catch (error) {
    return res.status(500).json({ msg: error });
  }
};
exports.getAllFriendsUserByUserID = async (req, res, next) => {
  try {
    const _user = await User.findById(req.params.userId);
    let _datas = [];
    for (let i of _user.friends) {
      let _userI = await User.findById(i);
      const _data = {
        _id: _userI.id,
        fullName: _userI.fullName,
        bio: _userI.bio,
        gender: _userI.gender,
        birthday: _userI.birthday,
        status: _userI.status,
        avatarLink: _userI.avatarLink,
      };
      _datas.push(_data);
    }
    if (!_user) {
      return next(
        new AppError(404, "fail", "No document found with that id"),
        req,
        res,
        next
      );
    }

    res.status(200).json({
      status: "success",
      data: _datas,
    });
  } catch (error) {
    return res.status(500).json({ msg: error });
  }
};
//Oke
exports.getUserByPhoneNumber = async (req, res) => {
  try {
    let _phoneNumber = req.params.phoneNumber;
    const _account = await Account.findOne({
      phoneNumber: _phoneNumber,
    });
    const _user = await User.findOne({ accountID: _account }).populate(
      "accountID",
      "phoneNumber"
    );
    const _data = {
      _id: _user.id,
      fullName: _user.fullName,
      bio: _user.bio,
      gender: _user.gender,
      birthday: _user.birthday,
      status: _user.status,
      avatarLink: _user.avatarLink,
      backgroundLink: _user.backgroundLink,
      friends: _user.friends,
      phoneNumber: _account.phoneNumber,
    };
    res.status(200).json(_data);
  } catch (err) {
    return res.status(500).json({ msg: "Không tồn tại!", status: 500 });
  }
};
//Oke
exports.getAllUsers = async (req, res, next) => {
  try {
    let _datas = [];
    const _users = await User.find();

    for (let i of _users) {
      const _account = await Account.findById(i.accountID);
      const _data = {
        _id: i.id,
        fullName: i.fullName,
        bio: i.bio,
        gender: i.gender,
        birthday: i.birthday,
        status: i.status,
        avatarLink: i.avatarLink,
        backgroundLink: i.backgroundLink,
        friends: i.friends,
        phoneNumber: _account.phoneNumber,
      };
      _datas.push(_data);
    }

    res.status(200).json({
      status: "success",
      results: _users.length,
      data: _datas,
    });
  } catch (error) {
    return res.status(500).json({ msg: error });
  }
};

//OKe
exports.deleteFriend = async (req, res, next) => {
  try {
    const _userId = req.params.userId;
    const _status = req.body.status;
    const _userDeleteId = req.body.userDeleteId;
    if (_status) {
      const _senderUser = await User.findById(_userId);
      const _reciverUser = await User.findById(_userDeleteId);
      // Xử lý thằng gửi
      let _friendsSenDer = _senderUser.friends.pull(_reciverUser);
      const _friendsSenDerUpdate = await User.findByIdAndUpdate(
        { _id: _senderUser.id },
        {
          friends: _friendsSenDer,
        },
        { new: true }
      );
      // Xử lý thằng nhận
      let _friendsReciver = [];
      _friendsReciver = _reciverUser.friends;
      _friendsReciver.pull(_senderUser);
      const _friendsReciverUpdate = await User.findByIdAndUpdate(
        { _id: _reciverUser.id },
        {
          friends: _friendsReciver,
        },
        { new: true }
      );

      return res.status(200).json({
        message: "Done!",
        listFriendsUserDelete: _friendsReciverUpdate.friends,
        listFriendsUser: _friendsSenDerUpdate.friends,
      });
    } else {
      await FriendRequest.findByIdAndRemove(_friendRequestID);
      return res.status(200).json({
        message: "Don't done!",
      });
    }
  } catch (error) {
    return res.status(500).json({ msg: error });
  }
};

//Tạo để thiết lập data chứ đéo có tác dụng gì, sau này nhớ xóa
//Oke
exports.deleteAllFriends = async (req, res, next) => {
  try {
    const { userId } = req.params;
    const _user = await User.findByIdAndUpdate(userId, {
      friends: [],
    });
    res.status(200).json({
      status: "success",
      user: _user,
    });
  } catch (error) {
    return res.status(500).json({ msg: error });
  }
};
