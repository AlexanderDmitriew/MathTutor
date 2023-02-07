//imports
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = process.env.port || 5000;

//middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// database connection
mongoose.connect(process.env.DB_URI, {
 useNewUrlParser: true,
 useUnifiedTopology: true,
}).then(()=> console.log("Connected to DB")).catch((err)=>console.log(err))

//routers prefix
app.use("/api/post", require("./routes/routes"));

//stare server
app.listen(port, ()=>console.log(`server running at http://localhost:${port}`));