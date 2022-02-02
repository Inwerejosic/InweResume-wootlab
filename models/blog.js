const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// The resume model is coming be
const blogSchema = new Schema({
    fName: {
        type: String,
        // required: true,
    },    
    mName: {
        type: String,
        // required: false,
    },    
    lName: {
        type: String,
        // required: true,
    },
    phone: {
        type: Number
    },
    email: {
        type: String,
    },
    github: {
        type:String,
    },
    linkedin: {
        type: String,
    },
    address: {
        type:String,
    },
    summary: {
        type: String,
        // required: true
    },
    company: {
        type: String,
        // required: true,
    },
    position: {
        type: String,
        // required: true,
    },      
    location: {
        type: String,
        // required: true,
    },      
    school: {
        type: String,
        // required: true,
    },
    startDateSchool: {
        type: String,
        // required: false,
    },
    endDateSchool: {
        type: String,
        // required: false,
    },
    startDateWork: {
        type: String,
        // required: false,
    },
    endDateWork: {
        type: String,
        // required: false,
    },
    startDateSchool: {
        type: String,
        // required: false,
    },
    duties: {
        type: [String],
        // required: true,
    },
    hobbies: {
        type: [String],
        // required: true,
    },
    skills: {
        type: [String],
        // required: true,
    },    
    courseStudied: {
        type: String,
        // required: true,
    },
    activitiesSchool: {
        type: [String],
    },
}, { timestamps: true });

const Blog = mongoose.model('Blog', blogSchema);
module.exports = Blog;