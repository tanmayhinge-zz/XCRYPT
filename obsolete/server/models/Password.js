const { model, Schema } = require('mongoose');

const passwordSchema = new Schema({
    username: String,
    name:String,
    websiteName: String,
    websitePassword:String,
    createdAt: String,

    user: {

        type: Schema.Types.ObjectId,
        ref: 'users'

    }
})

module.exports = model('Password', passwordSchema);