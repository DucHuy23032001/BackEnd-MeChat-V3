const Report = require('../models/report')
const Message = require('../models/message')
const User = require('../models/user')
const AWS = require("aws-sdk");
const { v4: uuidv4 } = require('uuid');

AWS.config.update({
    accessKeyId: process.env.ID,
    secretAccessKey: process.env.SECRET,
    region: process.env.region,
});
const s3 = new AWS.S3();

exports.getAllReports = async (req, res) => {
    try {
        let _datas = [];
        const _report = await Report.find();

        for (let i of _report) {
            const _message = await Message.findById(i.messageID);
            const _user = await User.findById(_message.senderID);
            const _data = {
                id: i.id,
                messageID: i.messageID,
                image: i.image,
                idUser:_user.id,
                fullName:_user.fullName,
            };
            _datas.push(_data);
        }

        res.status(200).json({
            status: "success",
            results: _report.length,
            data: _datas,
        });
    } catch (error) {
        return res.status(500).json({ msg: error });
    }
}

//Oke
exports.addReport = async (req, res) => {
    try {
        const { messageId } = req.body;
        const _fileClient = req.files.fileImage;
        const _fileContent = Buffer.from(_fileClient.data, "binary");
        const _param = {
          Bucket: "mechat-v2",
          Key: uuidv4() + _fileClient.name,
          Body: _fileContent,
        }
        const _paramFileLocation = await s3
          .upload(_param, (err, data) => {
            if (err) {
              throw err;
            }
          })
          .promise();
        const _newReport = await Report.create({
            messageID:messageId,
            image:_paramFileLocation.Location
        })
        const _messageReport = await Message.findById(messageId);
        let _data={
            id:_newReport.id,
            messageID:_newReport.messageID,
            content:_messageReport.content,
            imageLink:_messageReport.imageLink,
            fileLink:_messageReport.fileLink,
            image:_newReport.image,
            createAt:_newReport.createdAt
        }
        res.status(200).json(_data);
    } catch (error) {
        return res.status(500).json({ msg: error });
    }
}
exports.getReportById = async (req,res) =>{
    try {
        const _id = req.params.id
        const _report = await Report.findById(id);
        const _message = await Message.findById(_report.messageID);
        const _user = await User.findById(_message.senderID);
        let _data = {
            id:_report.id,
            imageReport : _report.image,
            content : _message.content,
            imageLink : _message.imageLink,
            fileLink : _message.fileLink,
            createAt : _message.createAt,
            idUser:_user.id,
            fullName:_user.fullName,
        }
        res.status(200).json(_data);
    } catch (error) {
        return res.status(500).json({ msg: error });
    }
}

exports.deleteReport = async (req,res) =>{
    try {
        const { status } = req.body;
        if(status){
            const _report = await Report.findByIdAndDelete(req.params.reportId);
            res.status(200).json(_report);
        }
    } catch (error) {
        return res.status(500).json({ msg: error });
    }
}

exports.acceptReport = async (req,res) =>{
    try {
        const { status } = req.body;
        if(status){
            const _rep = await Report.findById(req.params.reportId);
            const _message = await Message.findById(_rep.messageID);
            const _user =  await User.findById(_message.senderID);
            let _warning = _user.warning;
            _warning ++;
            await User.findByIdAndUpdate(_user.id,{
                warning:_warning
            })
            const _report = await Report.findByIdAndDelete(req.params.reportId);
            res.status(200).json(_report);
        }
    } catch (error) {
        return res.status(500).json({ msg: error });
    }
}