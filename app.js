
const express = require('express')
const app = express()
const cors = require('cors')
//const pg = require('pg')
app.use(cors())
app.use(express.json())

const UserRouter = require('./routes/users');
app.use('/users', UserRouter)


const InstructorsRouter = require('./routes/instructors')
app.use('/instructors', InstructorsRouter)

// ================== Get all students ===================== //
app.get('/students', (req, res) => {
    db.query('SELECT * FROM students', (err, results) => {
      if (err) throw err;
      res.json(results);
    });
  });
  
  // ====================== Get all student info ====================== //
  app.get('/studentinfo', (req, res) => {
    db.query('SELECT * FROM studentinfo', (err, results) => {
      if (err) throw err;
      res.json(results);
    });
  });

  

app.listen(5000, () => console.log('server is running at 127.0.0.1:5000'))