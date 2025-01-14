const express = require('express');
const app = express();
const dbConfig = require('./dbConfig');
const Student = require('./models/student');

//Test database connection
dbConfig.authenticate().then(function(){
    console.log('Database is connected!')
}).catch(function(err){
    console.log(err);
});

//Get all students
app.get('/students', function(req, res){
    let queryParams = {where: {}};

    //Filter based on country ID
    if (req.query.country !== undefined){
        queryParams.where.country_id = req.query.country;
    }

    //filter based on department ID
    if (req.query.department !== undefined){
        queryParams.where.dept_id = req.query.department;
    }

    Student.findAll(queryParams).then(function(result){
        res.status(200).send(result);
    }).catch(function(err){
        res.status(500).send(err)
    });
});


app.listen(3000, function(){
    console.log('Server is running on port 3000...')
});




// const sequelize = require('sequelize')
// let databasename = 'rgm24'
// let username ='root'
// let password = 'Kennys21-'
// let dbConfig = new sequelize(databaseName, username, password, {dialect: 'mariadb', host: 'localhost', port: '3360'})
// moduule.exports = dbconfig;
 
// dbconfig.authenticate().then(function(){
//     console.log('database is connected!')
// })catch(function(err){
// console.log(err);
// });
// application.get('/',function (req, res)) {
//     res.status(200).send('working');
// });

// const express = require('express');
// const app = express();
// const dbconfig = require('')