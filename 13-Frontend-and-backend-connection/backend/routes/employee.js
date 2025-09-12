const express = require('express');
const { getEmployees, createEmployee } = require('../controllers/employee.controller');
const router = express.Router();

router.get('/get-employees', getEmployees);
router.post('/create-employee', createEmployee);

module.exports = router;