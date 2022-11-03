const express = require('express');
const dotenv = require('dotenv'); 
const mongoose = require('mongoose');
const { format } = require('date-fns');
const morgan = require('morgan');

const User = require('../models/User');

const app = express();
app.use(morgan('tiny'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('static'));
dotenv.config();

const MONGOURI_LOCAL = 'mongodb://admin:password@localhost:27017/';
const MONGOURI_DOCKER = 'mongodb://admin:password@mongodb:27017/';

mongoose.connect(
    // MONGOURI_LOCAL,
    MONGOURI_DOCKER,
    { useNewUrlParser: true,useUnifiedTopology: true , dbName: 'portfolio'
})
    .then(()=>{
        console.log('connected to database');
        app.listen(3000, ()=>console.log('listening on http://localhost:3000'));
    })
    .catch(e=>console.error(e));

app.get('/', (req, res) => {
    User.find()
            .then(users=>res.render('index', {users}))
            .catch(e=>console.log(e));
});

app.get('/create', (req, res) =>{
    res.render('create');
});

app.post('/create', (req, res) =>{
    User.create(req.body)
        .then(user=>res.json({user,'redirect':'/'}))
        .catch(error=>{
            res.json({error});
            console.log(error);
        });
});

app.get('/detail/:id', (req, res)=>{
    const id = req.params.id;
    User.findById(id)
        .then(user=>{
            user.formatedDate = format(user.createdAt, ' hh:mm:ss aaa, do MMMM yyyy');
            res.render('detail', { user });
        })
        .catch(e=>console.error(e));
});
