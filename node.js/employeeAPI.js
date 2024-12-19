const express = require('express');
const app = express ();
 const {sequelize, DataTypes } =require('sequelize');
 const sequelize = require('../config');
 const Employee = require('./models/Employee');
 const Department = require('/,.models/Department');
 app.use(express.json());

 Department.hasMany(Employee, {foreignKey: 'departmentId', onDelete: 'CASCADE'});
 Employee.belongsTo(Department, {foreignKey: 'departmentID'});

 sequelize.sync({FORCE: true}).then(async()=>{
    console.log("Database & tables are created");
 });

 const PORT = 3000;
 app.listen(PORT, () =>{
    console.log(`server is running on port ${PORT}`);
 });