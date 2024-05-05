const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');//basically like a permission for frontend to connect with backend
const route = require("./Route/index");
const dotenv = require("dotenv");
const passport = require("passport");
require('./Controller/passport');
const cookieSession = require("cookie-session");

const PORT = 5500;
const HOSTNAME = "localhost";
const paymentRoute = require("./Controller/payment");
const authRoute = require("./Controller/auth");
const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,
    optionSuccessStatus: 200
}

dotenv.config(); //keep it in this part,above app part 


const app = express();

app.use(cookieSession({ name: "session", keys:["zomato"], maxAge: 24*60*60*1000 }))

app.use(express.json());        // A body Parser Required to post a data
app.use(passport.initialize());
app.use(passport.session());
app.use(cors(corsOptions));
app.options('*', cors());
app.use('/', route);
app.use('/api/payment/', paymentRoute);     // Razorpay Payment Gateway
app.use('/auth', authRoute);     


const Mongoatlas = "mongodb+srv://admin:RnvBNrqd0qAoRaye@zomatoprac.g9razd8.mongodb.net/ZomatoPracClass?retryWrites=true&w=majority&appName=ZomatoPrac"
mongoose.connect(Mongoatlas, {
    //useNewUrlParser: true,
    //useUnifiedTopology: true
})
    .then(res => {
        app.listen(PORT, HOSTNAME, () => {
            console.log(`Server is running at ${HOSTNAME}: ${PORT}`)
        });
    })
    .catch(err => console.log(err));


