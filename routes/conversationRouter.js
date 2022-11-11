const Router = require("express").Router();
const ConversationsController = require("../controllers/conversationController");

Router.get("/:userId", ConversationsController.getAllConversationByUserID);

Router.put("/change-createBy/:conversationId", ConversationsController.changeCreateByConversation);

Router.post("/create-conversation", ConversationsController.createConversation);
Router.post("/change-name/:conversationId", ConversationsController.changeName);
Router.post("/change-avatar/:conversationId",ConversationsController.changeAvatar)
Router.post("/add-member-conversation/:conversationId", ConversationsController.addMemberConversation);
Router.post("/out-conversation/:conversationId", ConversationsController.outConversation);
Router.post("/block-conversation/:conversationId", ConversationsController.blockConversation);
Router.post("/remove-block-conversation/:conversationId", ConversationsController.removeBlockConversation);

Router.delete("/delete-conversation/:conversationId", ConversationsController.deleteConversation);
Router.delete("/delete-for-you/:conversationId",ConversationsController.deleteConversationForYou);
Router.delete("/delete-member/:conversationId", ConversationsController.deleteMemberConversation);

module.exports = Router;
