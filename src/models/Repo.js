const { Schema, model } = require('mongoose');
const { uuid } = require("uuidv4");

const RepositorySchema = new Schema({
    id: {
        type: uuid,
        required: true
    }, title: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    techs: {
        type: Array,
        required: true
    },
    likes: {
        type: Number,
        required: true,
        ref: 'Repo'
    }

});