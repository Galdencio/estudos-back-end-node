const mongoose = require('mongoose');

mongoose.connect('mongodb://serie-node:teste123@ds141704.mlab.com:41704/serie-node', 
    { useNewUrlParser: true,  useCreateIndex: true });
mongoose.Promise = global.Promise;

module.exports = mongoose;