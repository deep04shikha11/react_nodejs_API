const express = require('express');
const bodyParser = require('body-parser');
const indexRouter = require('./routes/index');
const app = express();
var cors = require('cors');
app.use(cors());

const session = require('express-session');
app.listen(3001, () => {
    console.log(`Server Running at port 3001`);
})
const con = require('./database/con');
app.use(bodyParser.json());

app.use(session({
    secret: 'ABCDefg',
    resave: false,
    saveUninitialized: true
}));
app.use(
    bodyParser.urlencoded({
        extended: true,
        limit: "1mb"
    })
);
app.use('/', indexRouter);