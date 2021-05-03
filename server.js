const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();




//intialize app
const app = express();

//database-connection
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: true
}).then(() => {
    console.log("DB CONNECTED");
}).catch((err) => {
    console.log("error : ", err);
})


//middleware
app.use(morgan("dev"))
app.use(bodyParser.json({ limit: "2mb" }))
app.use(cors());


//routes
app.get("/api", (req, res) => {
    res.json({
        data: "hello buddy"
    })
})


const port = process.env.PORT || 8000

app.listen(port, () => {
    console.log(`server running on port no ${port}`);
})
