# BackEnd-MeChat-Final-v3

# Path: http://localhost:3000/api/v3/authRouters
### Đăng nhập
```json
    - Method: POST: /login
    - Dữ liệu gửi đi
        {
        "phoneNumber":"0879276284",
        "passWord":"123456"
        }            
    - Dữ liệu trả về
        {
            "status": "success",
            "_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzM4NjU3ZTk5ZTM1MmIzOTRiNDliY2EiLCJpYXQiOjE2NjQ3Njg3MDIsImV4cCI6MTY2NDc2OTMwMn0.WbNzp-8OiPuQQ6jFM7HrBz3HFGePwFSVm8t27oiY_yc",
            "data": {
                "id": "6338657e99e352b394b49bca",
                "name": "\"Huy Update\"",
                "avartar": "https://mechat.s3.ap-southeast-1.amazonaws.com/trang2.jpg",
                "background": "https://mechat.s3.ap-southeast-1.amazonaws.com/nutrang.jpg"
            }
        }
```       
### Đăng ký
```Json
    - Method: POST: /signup
    - Dữ liệu gửi đi    
        {
            "phoneNumber":"0879276299",
            "passWord":"123456",
            "fullName":"signup",
        }
    - Dữ liệu trả về
        {
            "status": "success",
            "_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzM3MTZmYjUzZGFhNjUwMGNjYTk4ZTIiLCJpYXQiOjE2NjQ1NTQ3NDcsImV4cCI6MTY2NDU1NTM0N30.bRCu4-TYPxhmQ0z-DNM6jR_ttkAxH5JMu7vmrJdovbY",
            "data": {
                "_account": {
                    "phoneNumber": "0879276299",
                    "status": true,
                    "role": "User",
                    "_id": "633716fb53daa6500cca98e0",
                    "__v": 0
                }
            }
        }
```
# Path: http://localhost:3000/api/v3/users
### Đăng nhập
```json
    - Method: POST: /login
    - Dữ liệu gửi đi
        {
        "phoneNumber":"0879276284",
        "passWord":"123456"
        }            
    - Dữ liệu trả về
        {
            "status": "success",
            "_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzM4NjU3ZTk5ZTM1MmIzOTRiNDliY2EiLCJpYXQiOjE2NjQ3Njg3MDIsImV4cCI6MTY2NDc2OTMwMn0.WbNzp-8OiPuQQ6jFM7HrBz3HFGePwFSVm8t27oiY_yc",
            "data": {
                "id": "6338657e99e352b394b49bca",
                "name": "\"Huy Update\"",
                "avartar": "https://mechat.s3.ap-southeast-1.amazonaws.com/trang2.jpg",
                "background": "https://mechat.s3.ap-southeast-1.amazonaws.com/nutrang.jpg"
            }
        }
```       
### Đăng ký
```Json
    - Method: POST: /signup
        
    - Dữ liệu gửi đi    
        {
            "phoneNumber":"0879276299",
            "passWord":"123456",
            "fullName":"signup",
        }
    - Dữ liệu trả về
        {
            "status": "success",
            "_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzM3MTZmYjUzZGFhNjUwMGNjYTk4ZTIiLCJpYXQiOjE2NjQ1NTQ3NDcsImV4cCI6MTY2NDU1NTM0N30.bRCu4-TYPxhmQ0z-DNM6jR_ttkAxH5JMu7vmrJdovbY",
            "data": {
                "_account": {
                    "phoneNumber": "0879276299",
                    "status": true,
                    "role": "User",
                    "_id": "633716fb53daa6500cca98e0",
                    "__v": 0
                }
            }
        }
```
### Lấy tất cả users 
        - GET: no body
        - Dữ liệu gửi đi : không
        
```json
    - Dữ liệu trả về : Tất cả user
        {
            "status": "success",
            "results": 5,
            "data": [
                {
                    "_id": "6338657e99e352b394b49bca",
                    "fullName": "\"Huy Update\"",
                    "bio": "Sông Lam",
                    "gender": 0,
                    "birthday": "2001-03-22T17:00:00.000Z",
                    "status": true,
                    "avatarLink": "https://mechat.s3.ap-southeast-1.amazonaws.com/logo.jpg",
                    "backgroundLink": "https://mechat.s3.ap-southeast-1.amazonaws.com/logoSLNA.png",
                    "friendID": null,
                    "phoneNumber": "0879276284"
                },
                {
                    "_id": "6338657e99e352b394b49bce",
                    "fullName": "Võ Minh Phương",
                    "bio": "Sông Lam",
                    "gender": 0,
                    "birthday": "2022-10-01T16:06:22.823Z",
                    "status": true,
                    "avatarLink": "https://mechat.s3.ap-southeast-1.amazonaws.com/phuongAvar.jpg",
                    "backgroundLink": "https://mechat.s3.ap-southeast-1.amazonaws.com/phuongBack.jpg",
                    "friendID": null,
                    "phoneNumber": "0879276284"
                },
                {
                    "_id": "6338657e99e352b394b49bd2",
                    "fullName": "Lê Tuấn",
                    "bio": "Sông Lam",
                    "gender": 0,
                    "birthday": "2022-10-01T16:06:22.988Z",
                    "status": true,
                    "avatarLink": "https://mechat.s3.ap-southeast-1.amazonaws.com/tuanAvar.jpg",
                    "backgroundLink": "https://mechat.s3.ap-southeast-1.amazonaws.com/tuanBack.jpg",
                    "friendID": null,
                    "phoneNumber": "0879276284"
                },
                {
                    "_id": "6338657f99e352b394b49bd6",
                    "fullName": "Võ Thành Nhớ",
                    "bio": "Sông Lam",
                    "gender": 0,
                    "birthday": "2022-10-01T16:06:23.243Z",
                    "status": true,
                    "avatarLink": "https://mechat.s3.ap-southeast-1.amazonaws.com/nhoAvar.jpg",
                    "backgroundLink": "https://mechat.s3.ap-southeast-1.amazonaws.com/nhoBack.jpg",
                    "friendID": null,
                    "phoneNumber": "0879276284"
                },
                {
                    "_id": "6338657f99e352b394b49bda",
                    "fullName": "Tăng Bảo Trấn",
                    "bio": "Sông Lam",
                    "gender": 0,
                    "birthday": "2022-10-01T16:06:23.411Z",
                    "status": true,
                    "avatarLink": "https://mechat.s3.ap-southeast-1.amazonaws.com/tranAvar.jpg",
                    "backgroundLink": "https://mechat.s3.ap-southeast-1.amazonaws.com/tranBack.jpg",
                    "friendID": null,
                    "phoneNumber": "0879276284"
                }
            ]
        }
```
### Lấy user theo số điện thoại
    - Method: GET:    /get-user-by-phone/:phoneNumber
          
```json
    - Dữ liệu gửi đi
    http://localhost:3000/api/v3/users/get-user-by-phone/0879276284
```
```json
    - Dữ liệu trả về
        {
            "_id": "63370d32e7a8a746c7842aa8",
            "fullName": "Nguyễn Đức Huy",
            "bio": "Sông Lam",
            "gender": 0,
            "birthday": "2022-09-30T15:37:22.741Z",
            "status": true,
            "avatarLink": "https://mechat.s3.ap-southeast-1.amazonaws.com/huyAvar.jpg",
            "backgroundLink": "https://mechat.s3.ap-southeast-1.amazonaws.com/huyBack.jpg",
            "accountID": {
                "_id": "63370d31e7a8a746c7842aa5",
                "phoneNumber": "0879276284",
                "passWord": "$2b$10$3DwWJ6pT2vcX8DpnZWgB9OCB4h/rVQMzhiX5YV46YDm//XNQWiMkC"
            },
            "friendID": null,
            "__v": 0
        }
```
                        ### Lấy user theo id
    - Method: GET:    /:userID
```json  
    - Dữ liệu gửi đi
    http://localhost:3000/api/v3/users/63370d32e7a8a746c7842aa8
    - Dữ liệu trả về
        {
            "status": "success",
            "data": {
                "user": {
                    "_id": "63370d32e7a8a746c7842aa8",
                    "fullName": "Nguyễn Đức Huy",
                    "bio": "Sông Lam",
                    "gender": 0,
                    "birthday": "2022-09-30T15:37:22.741Z",
                    "status": true,
                    "avatarLink": "https://mechat.s3.ap-southeast-1.amazonaws.com/huyAvar.jpg",
                    "backgroundLink": "https://mechat.s3.ap-southeast-1.amazonaws.com/huyBack.jpg",
                    "accountID": {
                        "_id": "63370d31e7a8a746c7842aa5",
                        "phoneNumber": "0879276284",
                        "passWord": "$2b$10$3DwWJ6pT2vcX8DpnZWgB9OCB4h/rVQMzhiX5YV46YDm//XNQWiMkC"
                    },
                    "friendID": null,
                    "__v": 0
                }
            }
        }
```
### Chỉnh sửa User (Text)

```json  
    - Method: put:    /:userID
    - Dữ liệu gửi đi
        http://localhost:3000/api/v3/users/634a58d1a85520274df8850e
        {
            "fullName":"fullName",
            "gender":1,
            "birthday":"1/1/2020",
            "bio":"bio"
        }
    - Dữ liệu trả về
        {
            "status": "success",
            "data": {
                "_user1": {
                    "_id": "634a58d1a85520274df8850e",
                    "fullName": "fullName",
                    "bio": "bio",
                    "gender": 1,
                    "birthday": "2019-12-31T17:00:00.000Z",
                    "status": true,
                    "avatarLink": "https://mechat.s3.ap-southeast-1.amazonaws.com/vanducaotrang.jpg",
                    "backgroundLink": "https://mechat.s3.ap-southeast-1.amazonaws.com/logo.jpg",
                    "accountID": "634a58d0a85520274df8850b",
                    "friends": [
                        "634a58d2a85520274df8851e",
                        "634a58d1a85520274df88512",
                        "634a58d2a85520274df88516"
                    ],
                    "__v": 0
                }
            }
        }   
```
### Chỉnh sửa avatar

```json  
    - Method: POST:   /update-avatar/:userId
    - Dữ liệu gửi đi
    http://localhost:3000/api/v3/users/update-avatar/634a58d1a85520274df8850e
    
    Dữ liệu đưa vào form-data: key = avatarLink (file)

    - Dữ liệu trả về
    {
        "status": "success",
        "data": {
            "_id": "634a58d1a85520274df8850e",
            "fullName": "Nguyễn Đức Huy",
            "bio": "Sông Lam",
            "gender": 0,
            "birthday": "2022-10-15T06:53:05.727Z",
            "status": true,
            "avatarLink": "https://mechat.s3.ap-southeast-1.amazonaws.com/huyAvar.jpg",
            "backgroundLink": "https://mechat.s3.ap-southeast-1.amazonaws.com/huyBack.jpg",
            "accountID": {
                "_id": "634a58d0a85520274df8850b",
                "phoneNumber": "0879276284",
                "passWord": "$2b$10$3ZgQWSouPe0kSu5aY3X31ORAkJueCiTQEMfsT1PLIECSiubuMyZam"
            },
            "friends": [
                "634a58d2a85520274df8851e",
                "634a58d1a85520274df88512",
                "634a58d2a85520274df88516"
            ],
            "__v": 0
        }
    }  
```

### Chỉnh sửa backGround

```json  
    - Method: POST:   /update-background/:userId
    - Dữ liệu gửi đi
    http://localhost:3000/api/v3/users/update-background/634a58d1a85520274df8850e
    
    Dữ liệu đưa vào form-data: key = backLink (file)

    - Dữ liệu trả về
    {
        "status": "success",
        "data": {
            "_id": "634a58d1a85520274df8850e",
            "fullName": "Nguyễn Đức Huy",
            "bio": "Sông Lam",
            "gender": 0,
            "birthday": "2022-10-15T06:53:05.727Z",
            "status": true,
            "avatarLink": "https://mechat.s3.ap-southeast-1.amazonaws.com/vanducaotrang.jpg",
            "backgroundLink": "https://mechat.s3.ap-southeast-1.amazonaws.com/logo.jpg",
            "accountID": "634a58d0a85520274df8850b",
            "friends": [
                "634a58d2a85520274df8851e",
                "634a58d1a85520274df88512",
                "634a58d2a85520274df88516"
            ],
            "__v": 0
        }
    }
```

### Lấy tất cả danh sách bạn bè
  
```json  
    - Method: get:    get-friends-user/:userId
    - Dữ liệu gửi đi
 http://localhost:3000/api/v3/users/get-friends-user/634277c306b139dc4c72a4ab
    - Dữ liệu trả về
       {
            "status": "success",
            "data": [
                {
                    "_id": "634277c406b139dc4c72a4b3",
                    "fullName": "Lê Tuấn",
                    "bio": "Sông Lam",
                    "gender": 0,
                    "birthday": "2022-10-09T07:27:00.061Z",
                    "status": true,
                    "avatarLink": "https://mechat.s3.ap-southeast-1.amazonaws.com/tuanAvar.jpg"
                },
                {
                    "_id": "634277c306b139dc4c72a4af",
                    "fullName": "Võ Minh Phương",
                    "bio": "Sông Lam",
                    "gender": 0,
                    "birthday": "2022-10-09T07:26:59.894Z",
                    "status": true,
                    "avatarLink": "https://mechat.s3.ap-southeast-1.amazonaws.com/phuongAvar.jpg"
                }
            ]
        }   
```
### Xóa 1 bạn bè
  
```json  
    - Method: post:    delete_friend/:userId
    - Dữ liệu gửi đi
 http://localhost:3000/api/v3/users/delete-friend/6343cc8513eeee3c3a87c698
        {
            "status":true,
            "userDeleteId":"634277c406b139dc4c72a4b7"
        }
    - Dữ liệu trả về
        {
            "message": "Done!",
            "listFriendsReciver": [],
            "listFriendsSender": [
                "634277c406b139dc4c72a4b3"
            ]
        }  
```
# Path: http://localhost:3000/api/v3/messages

### get 10 lastMessageInConversation
```json
    - Method: POST: /ten-last-messages/:conversationId
    - Dữ liệu gửi đi
 http://localhost:3000/api/v3/messages/ten-last-messages/635f43faead5a8774275361a
    (count là tổng số tin nhắn đang hiển thị trên UI)
        {
            "count":0
        }
    - Dữ liệu trả về
        [
            {
                "_id": "635f498aead5a87742753719",
                "content": "Để gửi cho mấy file tài liệu",
                "imageLink": null,
                "fileLink": null,
                "senderID": "635f12961ac24d08dc61a609",
                "createdAt": "2022-10-31T04:05:30.222Z",
                "action": null,
                "deleteBy": null
            },
        ]
```
### getAllMessageInConversationID
``` json
    - Method: GET: nobody
    - Dữ liệu gửi đi
 http://localhost:3000/api/v3/messages/6342a2cd2d1f50338655e82b
    - Dữ liệu nhận về
   [
    {
        "_id": "635f43faead5a8774275361c",
        "content": null,
        "imageLink": null,
        "fileLink": null,
        "senderID": "635f12961ac24d08dc61a611",
        "createdAt": "2022-10-31T03:41:46.347Z",
        "action": "Hai bạn đã là bạn bè",
        "deleteBy": null
    },
    {
        "_id": "635f440ed874178f4e497ab5",
        "content": "Alo",
        "imageLink": null,
        "fileLink": null,
        "senderID": "635f12961ac24d08dc61a609",
        "createdAt": "2022-10-31T03:42:06.176Z",
        "action": null,
        "deleteBy": null
    },
    ...................
]
```
### Thêm message
    - Method: POST:   body (form-data)
```json
    #thêm thành công
    - Dữ liệu gửi đi
        {
            "content":"Add message",
            "conversationID":"634016808a1090a62877a2b0",
            "senderID":"6340145304260a64fc12b009",
            "imageLinks":[file],
            "fileLink":file,
        }

    - Dữ liệu trả về
        {
            "content": "1",
            "imageLink": [
                "https://mechat.s3.ap-southeast-1.amazonaws.com/huy.jpg",
                "https://mechat.s3.ap-southeast-1.amazonaws.com/huyhung.jpg"
            ],
            "fileLink": "",
            "conversationID": "63642c1da9e50f4b9dbab20c",
            "senderID": "63642bd4fb35ed20a056ea6e",
            "action": null,
            "deleteBy": [],
            "_id": "63649b42822facc87e8da201",
            "createdAt": "2022-11-04T04:55:30.519Z",
            "updatedAt": "2022-11-04T04:55:30.519Z",
            "__v": 0
        }
```         

### Xóa message 
    
```json
    - Method: DELETE: /:messageId
    - Dữ liệu gửi đi
 http://localhost:3000/api/v3/messages/63553df0d6efa86d5ca705fc
        {
            "conversationID":"6354f250d2c16a0be9a94a15"
        }                    
    - Dữ liệu trả về
        {
            "id": "63553df0d6efa86d5ca705fc"
        }
```
### Xóa tin nhắn phía bạn 
```json
    - Method: DELETE: /delete-for-you/:messageId
    - Dữ liệu gửi đi
 http://localhost:3000/api/v3/messages/delete-for-you/635f12e40c640098f0ee9308
        {
            "userId":"635f12971ac24d08dc61a615"
        }                  
    - Dữ liệu trả về
        {
            "id": "635f12e40c640098f0ee9308"
        }
```
### Thu hồi tin nhắn
```json
    - Method: GET: /recall/:messageId
    - Dữ liệu gửi đi
 http://localhost:3000/api/v3/messages/recall/635539662851cec893b19a8d                   
    - Dữ liệu trả về
        {
            "_id": "635539662851cec893b19a8d",
            "content": "Tin nhắn này đã được thu hồi",
            "imageLink": null,
            "fileLink": null,
            "conversationID": "6354f250d2c16a0be9a94a15",
            "senderID": "6354f1c10a879557f30194c9",
            "action": null,
            "createdAt": "2022-10-23T12:53:58.426Z",
            "updatedAt": "2022-10-23T13:14:37.342Z",
            "__v": 0
        }
```
# Path: http://localhost:3000/api/v3/conversations
### Lấy tất cả nhóm chát theo idUser
```json
    - Method: GET :   /:userId
    - Dữ liệu gửi đi
 http://localhost:3000/api/v3/conversations/6364c4a1704a90ce691c6853
    - Dữ liệu trả về
{
    "status": "success",
    "data": [
        {
            "id": "6364c5422942d6d374b065ba",
            "name": "Minh Phuong",
            "members": [
                "6364c4a1704a90ce691c6853",
                "6364c4ba704a90ce691c685f"
            ],
            "imageLinkOfConver": "https://mechat.s3.ap-southeast-1.amazonaws.com/5302e28d-81ef-461a-8fac-0515acea3065.jpeg",
            "content": "[Hình ảnh]",
            "lastMessage": null,
            "time": "2022-11-06T04:05:43.839Z",
            "isGroup": false,
            "createdBy": "6364c4ba704a90ce691c685f",
            "isCalling": false
        },
        {
            "id": "6364d74e3dc787e7553e8fa3",
            "name": "Nhớ",
            "members": [
                "6364d27c7b56f1d96e7d2dcc",
                "6364c4a1704a90ce691c6853"
            ],
            "imageLinkOfConver": "https://mechat-v2.s3.ap-southeast-1.amazonaws.com/avatar-nam.jpg",
            "content": null,
            "lastMessage": "Hai bạn đã là bạn bè",
            "time": "2022-11-04T09:11:42.561Z",
            "isGroup": false,
            "createdBy": "6364c4a1704a90ce691c6853",
            "isCalling": false
        }
    ]
}
```
### Tạo một nhóm chát mới
```json
    - Method: POST:   /create-conversation
    - Dữ liệu gửi đi
        {
            "members":["6364c4ba704a90ce691c685f","6364d27c7b56f1d96e7d2dcc"], 
            "createdBy":"6364c4a1704a90ce691c6853",
            "name":"Tuan group"
        }     
    - Dữ liệu trả về
        {
            "_id": "6367372e1f3cf92b3e3bbc8d",
            "name": "Tuan group",
            "imageLink": "https://mechat-v2.s3.ap-southeast-1.amazonaws.com/avatar-group.png",
            "lastMessage": "6367372e1f3cf92b3e3bbc8f",
            "members": [
                "6364c4ba704a90ce691c685f",
                "6364d27c7b56f1d96e7d2dcc",
                "6364c4a1704a90ce691c6853"
            ],
            "createdBy": "6364c4a1704a90ce691c6853",
            "deleteBy": [],
            "isGroup": true,
            "isCalling": false
        }
``` 
### Add member to conversation
```json
    - Method: POST : /add-member-conversation/:conversationId
    - Dữ liệu gửi đi
 http://localhost:3000/api/v3/conversations/add-member-conversation/6366109ee1a74a27c4a947e7
        {
            "newMemberID":"6364c4ba704a90ce691c685f",
            "memberAddID":"6364d27c7b56f1d96e7d2dcc"
        }
    - Dữ liệu trả về 
        {
            "content": null,
            "imageLink": null,
            "fileLink": null,
            "conversationID": "6366109ee1a74a27c4a947e7",
            "senderID": "6364d27c7b56f1d96e7d2dcc",
            "action": "Nhớ đã thêm Minh Phương vào nhóm.",
            "deleteBy": [],
            "_id": "636611b3e1a74a27c4a947f6",
            "createdAt": "2022-11-05T07:33:07.345Z",
            "updatedAt": "2022-11-05T07:33:07.345Z",
            "__v": 0
        }
```
### Delete member
```json
    - Method : DELETE : /delete-member/:conversationId
    - Dữ liệu gửi đi
 http://localhost:3000/api/v3/conversations/delete-member/6366109ee1a74a27c4a947e7
        {
            "memberId":"6364c4ba704a90ce691c685f",
            "mainId":"6364c4a1704a90ce691c6853"
        }  
    - Dữ liệu nhận về
        {
            "_id": "6367372e1f3cf92b3e3bbc8d",
            "name": "Tuan group",
            "imageLink": "https://mechat-v2.s3.ap-southeast-1.amazonaws.com/avatar-group.png",
            "lastMessage": "636737611f3cf92b3e3bbc95",
            "members": [
                "6364d27c7b56f1d96e7d2dcc",
                "6364c4a1704a90ce691c6853"
            ],
            "createdBy": "6364c4a1704a90ce691c6853",
            "deleteBy": [],
            "isGroup": true,
            "isCalling": false
        }
```
### Delete conversation 
```json
 - Method : DELETE : /delete-conversation /:conversationId
    - Dữ liệu gửi đi
 http://localhost:3000/api/v3/conversations/delete-conversation/634d2c073a0555e973021109
        {
            "mainId":"634a58d1a85520274df88512"
        } 
    - Dữ liệu nhận về
        {
            "msg": "Delete group chat successfully",
            "_id": "6367372e1f3cf92b3e3bbc8d"
        }
```
### Delete conversation for you
```json
 - Method : DELETE : /delete-for-you/:conversationId
    - Dữ liệu gửi đi
 http://localhost:3000/api/v3/conversations/delete-for-you/635fe79743ebe4d945d4b1e2
        {
            "userId":"635fe7612a6ba8c0eea9c6c0"
        }
    - Dữ liệu nhận về
        {
            "id": "635fe79743ebe4d945d4b1e2"
        }
```
### Out conversation 
```json
    - Method: POST : /out-conversation/:conversationId
    - Dữ liệu gửi đi
 http://localhost:3000/api/v3/conversations/out-conversation/634d2c073a0555e973021109
        {
            "userId":"634a58d1a85520274df8850e"
        }
    - Dữ liệu nhận về
        {
            "conversation": {
                "_id": "634d2c073a0555e973021109",
                "name": "test group",
                "imageLink": "https://mechat.s3.ap-southeast-1.amazonaws.com/avatarGroup.png",
                "lastMessage": "634d2c073a0555e97302110b",
                "members": [
                    "634a58d1a85520274df88512",
                    "634a58d2a85520274df88516"
                ],
                "createdBy": "634a58d1a85520274df88512",
                "deleteBy": [],
                "__v": 0
            }
        }
```

### Change Name 
```json
    - Method : POST : /change-name/:conversationId
    - DỮ liệu gửi đi
 http://localhost:3000/api/v3/conversations/change-name/634d2c073a0555e973021109
        {
            "newName":"Test ChangeName",
            "userId":"634a58d1a85520274df88512"
        }
    - Dữ liệu trả về
        {
            "_id": "634d2c073a0555e973021109",
            "name": "Test ChangeName",
            "imageLink": "https://mechat.s3.ap-southeast-1.amazonaws.com/avatarGroup.png",
            "lastMessage": "634d2cf33a0555e973021120",
            "members": [
                "634a58d1a85520274df88512"
            ],
            "createdBy": "634a58d1a85520274df88512",
            "deleteBy": [],
            "__v": 0
        }
```
# Path:  http://localhost:3000/api/v3/friendRequests
### CreateFriendRequests
``` json
    - Method : POST: /create
    - Dữ liệu gửi đi
        {
            "senderID":"633d56db8a9d52c78fcc6257",
            "receiverID":"633d56dc8a9d52c78fcc6267"
        }
    - Dữ liệu trả về
        {
            "friendRequest": {
                "senderID": "633d56db8a9d52c78fcc6257",
                "receiverID": "633d56dc8a9d52c78fcc6267",
                "status": false,
                "_id": "633d9d850f23a2435d0256db",
                "__v": 0
            }
        }
```
### getFriendRequestAddOfMe
```json
    - Method: GET : /get-of-me/:userID
    - Dữ liệu gửi đi
 http://localhost:3000/api/v3/friendRequests/get-of-me/6347f10893dccf4ddec4f604
    - Dữ liệu trả về
        {
            "data": [
                {
                    "idFriendRequest": "6356585bffb62a2b82d706f6",
                    "receiverId": "63563cc0e35d5d15b57f877b",
                    "fullName": "nho v3",
                    "content": "Hello! I'm Nguyễn Đức Huy! Nice to meet you!",
                    "imageLink": "https://mechat.s3.ap-southeast-1.amazonaws.com/download.jpg"
                }
            ]
        }
```
### getListUserSendRequestAddFriendOfMe
```json
    - Method: GET : /get-list-request/:userID
    - Dữ liệu gửi đi
 http://localhost:3000/api/v3/friendRequests/get-list-request/633d56dc8a9d52c78fcc6267
    - Dữ liệu trả về
        {
            "data": {
                "_id": "633d9d850f23a2435d0256db",
                "senderID": {
                    "_id": "633d56db8a9d52c78fcc6257",
                    "fullName": "Nguyễn Đức Huy",
                    "bio": "Sông Lam",
                    "gender": 0,
                    "birthday": "2022-10-05T10:05:15.288Z",
                    "status": true,
                    "avatarLink": "https://mechat.s3.ap-southeast-1.amazonaws.com/huyAvar.jpg",
                    "backgroundLink": "https://mechat.s3.ap-southeast-1.amazonaws.com/huyBack.jpg",
                    "accountID": "633d56d98a9d52c78fcc6254",
                    "friendID": null,
                    "__v": 0
                },
                "receiverID": "633d56dc8a9d52c78fcc6267",
                "status": false,
                "__v": 0
            }
        }
```
### FriendRequests
    - Method: POST : friend-request/:friendRequestID
```json
    * Chấp nhận kết bạn
    - Dữ liệu gửi đi
 http://localhost:3000/api/v3/friendRequests/friend-request/633d9c420f23a2435d0256d5
        {
            "status":true,
            "senderID":"633d56db8a9d52c78fcc6257",
            "receiverID":"633d56db8a9d52c78fcc625f"
        }
    - Dữ liệu trả về
        {
            "message": "Accept friend request",
            "listFriendsReceiver": {
                "_id": "633d9a890babef86c197c978",
                "userID": "633d56db8a9d52c78fcc625f",
                "friends": [
                    "633d56db8a9d52c78fcc6257"
                ],
                "__v": 0
            },
            "listFriendsSender": {
                "_id": "633d9813d507f66d6d7cba5f",
                "userID": "633d56db8a9d52c78fcc6257",
                "friends": [
                    "633d56db8a9d52c78fcc6263",
                    "633d56db8a9d52c78fcc625b",
                    "633d56db8a9d52c78fcc625f"
                ],
                "__v": 0
            }
        }
```
```json
    * Từ chối kết bạn
    - Dữ liệu gửi đi
 http://localhost:3000/api/v3/friendRequests/friend-request/633d9c420f23a2435d0256d5
        {
            "status":false,
            "senderID":"633d56db8a9d52c78fcc6257",
            "receiverID":"633d56dc8a9d52c78fcc6267"
        }
    - Dữ liệu trả về
        {
            "message": "Don't accept friend request",
            "listFriendsReceiver": null,
            "listFriendsSender": {
                "_id": "633d9813d507f66d6d7cba5f",
                "userID": "633d56db8a9d52c78fcc6257",
                "friends": [
                    "633d56db8a9d52c78fcc6263",
                    "633d56db8a9d52c78fcc625b",
                    "633d56db8a9d52c78fcc625f"
                ],
                "__v": 0
            }
        }
```
### Delete FriendRequest
```json
    - Method: DELETE: /:friendRequestID
    - Dữ liệu gửi đi
 http://localhost:3000/api/v3/friendRequests/6348e9c1bdf82ace11be8acb
        {
            "status":true,
            "senderID":"6347f10993dccf4ddec4f60c"
        }
    - Dữ liệu trả về (List lời mời kết bạn của thằng gửi)
        {
            "message": "Delete friend request",
            "data": []
        }
```
# PATH:  http://localhost:3000/api/v3/accounts
### Quên mật khẩu
```json
    - POST:  /forget-password
    - Dữ liệu gửi đi
        {
            "phoneNumber":"0879276284",
            "newPassword":"12345"
        }
    - Dữ liệu trả về
        {
            "status": "success",
            "data": {
                "_id": "6355457b4c65ebf7bcf9f237",
                "phoneNumber": "0879276284",
                "passWord": "$2b$10$UNnjXKWoLmcwcxUNOzig4O5P.VGWZSEr6MWzfuFlMykBoELLSiI0C",
                "status": true,
                "__v": 0
            }
        }
```
### Đổi mật khẩu
```json
    - PUT:  /change-password/:userId
    - Dữ liệu gửi đi
        {
            "oldPass":"12345",
            "newPassword":"123456",
            "confirmNewPass":"123456"
        }
    - Dữ liệu trả về
        {
            "status": "success",
            "data": {
                "_id": "6355457b4c65ebf7bcf9f237",
                "phoneNumber": "0879276284",
                "passWord": "$2b$10$9uLfKFjecblGMKcv3HHM3eYGmmFW8PWnSxxztIg8i8bWEuRL2Oc7e",
                "status": true,
                "__v": 0
            }
        }
```