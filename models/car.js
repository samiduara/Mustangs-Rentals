// 1. dependencies
const mongoose = require('mongoose')

// 2. car schema

const carSchema = new mongoose.Schema({
    make: { type: String },
    model: { type: String},
    manufacture: { type: String},
    fuel: { type: Number},
    image: { type: String}
})
// 3. export statement

module.exports = mongoose.model('Car', carSchema)
