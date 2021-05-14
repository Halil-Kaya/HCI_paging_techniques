const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/hw-db', { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true })
    .then(() => console.log('DATABASE CONNECTION IS SUCCESSFUL'))
    .catch(err => console.log('DATABASE CONNECTION IS FAIL ERROR : ' + err))