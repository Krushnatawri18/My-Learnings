const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    name: {
        type: String,
        maxLength: 40,
        required: true
    },
    employeeId: {
        type: String,
        required: true,
        unique: true
    },
    company: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model('Employee', employeeSchema);