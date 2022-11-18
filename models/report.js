const mongoose = require('mongoose');

const Schema = mongoose.Schema

const reportSchema = new Schema(
    {
        messageID: {
            type: String,
            default: null
        },
        image:{
            type: String,
            default: null
        },
        content:{
            type:String,
            default:null
        }
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model("Report", reportSchema);