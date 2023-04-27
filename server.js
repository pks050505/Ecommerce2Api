const express = require('express')
const bodyParser = require('body-parser')
//convert data
const morgan = require('morgan') //for logging
const mongoose = require('mongoose') //fdatabase connection with mongodb
const cors = require('cors')
require('dotenv/config') // for environment variable
const api = process.env.API_URL

const app = express()

//middleware
app.use(cors())
app.options('*', cors())
app.use(bodyParser.json())
app.use(morgan('tiny'))

const ProductRouter = require('./routers/product_router')
app.use(api + '/product', ProductRouter)
const CategoryRouter=require("./routers/category_router");
app.use(api+"/category",CategoryRouter);
//end middleware

mongoose.connect(process.env.CONNECTION_STRING).then(() => {
    console.log('database connection ready')
})

const PORT = 3000

app.listen(PORT, () => {
    console.log('Server listen at  http://localhost:3000')
})
