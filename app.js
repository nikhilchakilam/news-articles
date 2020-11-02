const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const port = 5000

app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/img', express.static(__dirname + 'public/img'))
app.use('/js', express.static(__dirname + 'public/js'))

app.set('views', './src/views')
app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({ extended : true }))

const newsarticleRouter = require('./src/routes/news')

app.use('/', newsarticleRouter)
app.use('/article', newsarticleRouter)

app.listen(port, () => console.log(`server started -running on port ${port}`))