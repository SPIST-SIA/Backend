    const DataType = require('sequelize');
const sequelize = require('../utils/database');

const StudentInfo = sequelize.define('usersStudentInfo', {
    _id: {
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    studentId: {
        type: DataType.INTEGER,
        allowNull: false,
    },
    yearLevel: {
        type: DataType.INTEGER,
        allowNull: true,
    },
    course: {
        type: DataType.STRING,
        allowNull: true,
    },
    section: {
        type: DataType.STRING,
        allowNull: true,
    },
    instructorId: {
        type: DataType.INTEGER,
        allowNull: false,
    },
    createdAt: {
        type: DataType.DATE,
        allowNull: false,
    },
    updatedAt: {
        type: DataType.DATE,
        allowNull: false,
    }
}, {
    tableName: 'student _info'
});

module.exports = StudentInfo;
