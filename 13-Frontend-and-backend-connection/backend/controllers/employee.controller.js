const Employee = require('../models/Employee');

exports.getEmployees = async (req, res) => {
    try {
        const employees = await Employee.find({});

        if (!employees) {
            return res.status(500).json({
                success: false,
                message: 'No employees present'
            });
        }

        return res.status(200).json({
            success: true,
            data: employees,
            message: 'Employees fetched successfully'
        })
    }
    catch (err) {
        console.error(err);
        console.log(err);
        return res.status(500).json({
            success: false,
            error: err.message,
            message: 'Error in fetching all employees'
        });
    }
}

exports.createEmployee = async (req, res) => {
    try {
        const { name, employeeId, email, company } = req.body;

        if (!name || !employeeId || !email || !company) {
            return res.status(500).json({
                success: false,
                message: 'Incomplete employee info'
            });
        }

        const alreadyEmployee = await Employee.findOne({ employeeId: employeeId });
        if (alreadyEmployee) {
            return res.status(500).json({
                success: false,
                message: 'Employee already exists'
            });
        }

        const employee = new Employee({
            name, employeeId, email, company
        });

        const savedEmployee = await employee.save();

        return res.status(200).json({
            success: true,
            data: savedEmployee,
            message: 'Employee created successfully'
        })
    }
    catch (err) {
        console.error(err);
        console.log(err);
        return res.status(500).json({
            success: false,
            error: err.message,
            message: 'Error in creating a employee'
        });
    }
}