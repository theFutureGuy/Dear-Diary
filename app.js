const express = require('express');
const app = express();
const methodOverride = require('method-override');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const myrouter = require('./routers/router');
const bodyParser = require('body-parser');
const session = require('express-session');
const flash = require('connect-flash');

dotenv.config();
mongoose.connect(process.env.MONGODBURL);
app.set('view engine', 'ejs');

app.use(methodOverride('_method'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// session middleware
app.use(session({
    secret: 'nodejs',
    resave: true,
    saveUninitialized: true
}));

// flash middleware
app.use(flash());

app.use((req, res, next) => {
    res.locals.success = req.flash('success');
    res.locals.err = req.flash('err');
    next();
});

app.use(myrouter);

app.listen(process.env.PORT, () => {
    console.log(process.env.PORT, "Port Working");
});
