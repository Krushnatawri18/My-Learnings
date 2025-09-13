import React, { useState } from 'react'
import '../App.css'
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const EmployeeForm = () => {
    const [employeeData, setEmployeeData] = useState({
        'name': '',
        'employeeId': '',
        'email': '',
        'company': ''
    });

    const navigate = useNavigate();

    const submitHandler = async (e) => {
        e.preventDefault();

        const createEmployeePromise = fetch(
            `${process.env.REACT_APP_BASE_URL}/create-employee`,
            {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ ...employeeData })
            }
        )

        const response = await toast.promise(
            createEmployeePromise,
            {
                loading: 'Saving...',
                success: 'Employee created successfully!',
                error: 'Failed to create employee',
            }
        );

        if (!response.ok) {
            throw new Error('Failed to create an employee');
        }
        setEmployeeData({
            name: '',
            employeeId: '',
            email: '',
            company: ''
        });
        navigate('/');
    }

    const changeHandler = (e) => {
        const { name, value } = e.target;
        setEmployeeData(prev => ({ ...prev, [name]: value }));
    }

    return (
        <div className='employee-form'>
            <form onSubmit={submitHandler} className='employee-details'>
                <div className='employee-header'>
                    Employee Details
                </div>
                <label>
                    Name:
                </label>
                <input type='text' placeholder='Name' name='name' value={employeeData.name} onChange={changeHandler} required />
                <label>
                    Employee Id:
                </label>
                <input type='number' placeholder='Employee Id' name='employeeId' value={employeeData.employeeId} onChange={changeHandler} required />
                <label>
                    Email:
                </label>
                <input type='email' placeholder='Email' name='email' value={employeeData.email} onChange={changeHandler} required />
                <label>
                    Company:
                </label>
                <input type='text' placeholder='Company' name='company' value={employeeData.company} onChange={changeHandler} required />
                <button className='add-employee-button'>
                    Add Employee
                </button>
            </form>
        </div>
    )
}

export default EmployeeForm