require("dotenv").config();
const express = require('express');
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors")
const cookieParser = require("cookie-parser");
const authRoute = require("./Routes/AuthRoute");

const allowedOrigins = ["http://localhost:3000", "http://localhost:3001"];
app.use(cors({
    origin: (origin, callback) => {
        if (allowedOrigins.includes(origin)){
            callback(null, true);
        } else {
            callback(new Error("Not allowed by CORS"));
        }
    },
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
}));

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());


const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;

mongoose.connect(uri).then(() => console.log("MongoDB is  connected successfully"))
.catch((err) => console.error(err));

app.use("/", authRoute);


app.listen(PORT,()=>{
    console.log(`App started at port ${PORT}`);
})
