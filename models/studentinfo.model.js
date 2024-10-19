const DataType = require('sequelize');
const sequelize = require('../utils/database');

const StudentInfo = sequelize.define('studentinfo', {
    _id: {
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    firstName: {
        type: DataType.STRING,
        allowNull: true
    },
    lastName: {
        type: DataType.STRING,
        allowNull: true
    },
    subject: {
        type: DataType.STRING,
        allowNull: true,
    },
    degree: {
        type: DataType.STRING,
        allowNull: true,
    },
    birthday: {
        type: DataType.DATE,
        allowNull: true,
    },
    email: {
        type: DataType.STRING,      
        allowNull: true,
    },
    contact: {
        type: DataType.INTEGER,
        allowNull: true,
    },
    avatar: {
        type: DataType.JSON,
        allowNull: true,
    },
    createdAt: {
        type: DataType.DATE,  
        allowNull: true,
    },
    updatedAt: {
        type: DataType.DATE, 
        allowNull: true,
    },
}, {
    tableName: 'studentinfo' 
});

module.exports = StudentInfo;