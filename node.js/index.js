const express = require('express');
const app = express();
const dbConfig = require('./dbConfig');
const Student = require('./models/student');


app.use(express.urlencoded)({extended: false});


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


// const Sequelize = require('sequelize');

app.post('/students', function(req, res){
Student.create(req, body).then(function(result){
        res.status(200).send(result);
        }).catch(function(err){
            res.status(500).send(err);
        });
});

// let databaseName = 'robomay24';
// let username = 'root';
// let password = 'Kennys21-';

// let dbConfig = new Sequelize(databaseName, username, password, {dialect: 'mariadb'});



// module.exports = dbConfig;

app.patch('/students/:student_id', (req, res) => {
    let studentId = parseInt(req.params.student_id);


    Student.findByPk(studentId)
        .then(function(result) {
            if (result) {

                Object.assign(result, req.body);
                
                result.save()
                    .then(function() {
                        res.status(200).send(result);
                    })
                    .catch(function(err) {
                        res.status(500).send(err);
                    });
            } else {
                res.status(404).send('Student not found');
            }
        })
        .catch(function(err) {
            res.status(500).send(err);
        });
});