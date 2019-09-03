const express = require('express');
const morgan = require('morgan');
const parser = require('body-parser');
const mysql = require('mysql');
const crypto = require('crypto');
const session = require('express-session');
const app = express();

//convinient variable to refer to the html drectory
// var html_dir = './public';

app.use(morgan('short'));

app.use(parser.urlencoded({
    extended: false
}));

app.use(express.static('./public'));

//session
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));

//routes to serve the static HTML files
app.get('/', function (req, res) {
    res.sendfile(html_dir + 'index.html');
});

//Note: route names need not match the file name
app.get('/login', function (req, res) {
    res.sendfile(html_dir + 'login.html');
    res.end();
});

app.get('/register', function (req, res) {
    res.sendfile(html_dir + 'register.html');
    res.end();
});

//home route
app.get('/home', function(req, res){
    if(req.session.loggedin){
        res.send('welcome back Nisha ' + req.session.username +'!');
    } else{
        res.send('please login to view this page');
    }
res.end();
});

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'refactory',
    
})



app.post('/auth', (req, res) => {
    var name = req.body.username
    var password = req.body.password
    

    if (name && password) {
        connection.query('SELECT * FROM registration WHERE name=? AND pass=?', [name, password], function(error, results, fields){
            if (results.length > 0) {
                req.session.loggedin = true;
                req.session.username = name;
                res.redirect('/home');
    
        }
        else{
            res.send('incorrect username and/or password')
        }
        res.end();
});
}else{
    res.send('please enter username and password')
    res.end();
}


});

app.post('/userdetails', (req, res) => {
        const theBody = req.body;



    let obj = {
        id: theBody.user,
        password: crypto.createHash('md5').update(theBody.pass).digest('hex'),
        userName: crypto.createHash('md5').update(theBody.name).digest('hex'),
        address: theBody.add,
        country: theBody.country,
        zipCode: theBody.zip,
        email: theBody.email,
        gender: theBody.gender,
        language: theBody.language,
        about: theBody.about
    };

    //console.log('the obj: ' + JSON.stringify(obj));

    const querystring = 
    "INSERT INTO registration(userid,pass,name,address,country,zip,email,gender,lang,about) VALUES(?,?,?,?,?,?,?,?,?,?)";
    connection.query(querystring, [
    obj.id, 
    obj.password, 
    obj.userName, 
    obj.address, 
    obj.country, 
    obj.zipCode, 
    obj.email, 
    obj.gender, 
    obj.language,
    obj.about
    ]);

    res.end();

    console.log('testing...');
});
// res.end();
// console.log('captured' + name + password)
// })


// app.get('/users', (req, res) => {
//     let user1= {name:"nisha", age:45, gender:"girl", location:"katwe"}
//     const user2= {name:"trisha", age:60, geder:"girl", location:"banda"}

//     res.json([user1.name , user2]);
// });


//this code is creating an API
app.get('/users/:userid', (req, res) => {
    // console.log('getting all user from the database');
    const userid = req.params.userid;
console.log('getting user details' + req.params.userid);
    connection.query('SELECT address, country FROM registration WHERE userid=?', [userid], (err, rows, fields) =>{ 
        console.log('providing the fetched details')
        res.json(rows)
    });
});

console.log('Server is listening from port 3000');
app.listen(3000);




