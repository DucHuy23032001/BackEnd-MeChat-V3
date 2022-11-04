const Router = require("express").Router();
const FriendRequestController = require("../controllers/friendRequestController");

Router.get("/get-list-request/:userID", FriendRequestController.getListUserSendRequestAddFriendOfMe);
Router.get("/get-of-me/:userID", FriendRequestController.getFriendRequestOfMe);

Router.post("/create", FriendRequestController.addFriendRequestController);
Router.delete("/:friendRequestID", FriendRequestController.deleteFriendRequest);
Router.post("/friend-request/:friendRequestID", FriendRequestController.friendRequest);

module.exports = Router;
