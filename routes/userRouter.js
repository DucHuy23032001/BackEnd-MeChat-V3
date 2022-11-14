const express = require('express');
const Router = express.Router();
const UserController = require('../controllers/userController');

// router.use(authController.protect);
// router.use(authController.restrictTo('user'));

Router.get('/',UserController.getAllUsers);
Router.get('/get-friends-user/:userId',UserController.getAllFriendsUserByUserID);
Router.get('/get-user-by-phone/:phoneNumber',UserController.getUserByPhoneNumber);

Router.post('/delete-friend/:userId',UserController.deleteFriend);
Router.post('/update-avatar/:userId',UserController.updateAvar);
Router.post('/update-background/:userId',UserController.updateBack);


//Hoom sau nho xoa
Router.delete('/delete-phuong/:userId',UserController.deleteUserPhuong);


Router
    .route('/:userID')
    .get(UserController.getUserByID)
    .put(UserController.updateUserText)
    .delete(UserController.deleteUser);

module.exports = Router;