const mongoose = require('mongoose');

const { MONGODB_URI, TICKETERA_MONGODB_HOST, TICKETERA_MONGODB_DATABASE } = process.env;
const MONGODB_URI_BACKUP = 'mongodb://' + TICKETERA_MONGODB_HOST + '/' + TICKETERA_MONGODB_DATABASE;

mongoose.connect(MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
})

    .then(db => console.log('Database is connected'))
    .catch(err => console.log(err));