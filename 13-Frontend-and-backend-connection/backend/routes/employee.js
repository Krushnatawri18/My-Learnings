const express = require('express');
const { getEmployees, createEmployee, getEmployeeByName } = require('../controllers/employee.controller');
const router = express.Router();

router.get('/get-employees', getEmployees);
router.post('/create-employee', createEmployee);
router.get('/search-employee', getEmployeeByName);

module.exports = router;