const Router = require("express").Router();
const AccountController = require("../controllers/accountController");

Router.get("/", AccountController.getAllAccount);
Router.post("/forget-password", AccountController.forgetPassWord);
Router.put("/change-password/:userId", AccountController.changePassWord);
Router.get("/:phoneNumber", AccountController.getAccountByPhoneNumber);

module.exports = Router;
