const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const rsosSchema = new Schema({

    fullname: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    phonenumber: {
        type: String,
        required: true,
        trim: true
    },
    



    
}, {
    timestamps: true
});

const rsosmod = mongoose.model('appcollect1',rsosSchema);

module.exports = rsosmod;