const mongoose = require('mongoose')

const Schema = mongoose.Schema

const makaleSchema = new Schema({

    title : {
        type : String
    },
    text : {
        type : String
    },
    subtitle : {
        type : String
    }

})

const makale = mongoose.model('Makale', makaleSchema)

module.exports = makale
