const mongoose = require('mongoose');


const connect = async (mongoUri) => {
    await mongoose.connect(
        mongoUri,
        { useNewUrlParser: true, useUnifiedTopology: true }
    );
}

module.exports = { connect };