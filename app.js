const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const path = require('path')
const ejs = require('ejs')

require('./src/db/dbConnection')

const app = express();

const hwRouter = require('./src/routers/hwRouter')
const dataRouter = require('./src/routers/dataRouter')

app.use(express.json())
app.use(express.urlencoded({extended : true}))
app.use(express.static('public'))
app.use(expressLayouts)
app.set('view engine','ejs')


app.set('views', path.resolve(__dirname,'src/views'))

app.use('/hw',hwRouter)
app.use('/api',dataRouter)


app.listen(3000, () => {
    console.log('server is up | port : 3000');
})