const express = require('express');
const router = express.Router();
const {getInstructors, createInstructors, deleteInstructors} = require('../controllers/instructors.controller.js');

router.get('/', getInstructors);
router.post('/', createInstructors);
router.delete('/:id', deleteInstructors.deleteInstructorsById);
module.exports = router;