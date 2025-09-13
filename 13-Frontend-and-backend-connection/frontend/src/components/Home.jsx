import React, { useState } from 'react'
import '../App.css'
import NotFound from './NotFound';
import Navbar from './Navbar';
import toast from 'react-hot-toast';

const Home = () => {
    const [employeeData, setEmployeeData] = useState([]);
    const [employeeDetails, setEmployeeDetails] = useState([]);

    const clickHandler = async () => {
        const getEmployeeDetails = fetch(
            `${process.env.REACT_APP_BASE_URL}/get-employees`,
            {
                method: 'GET',
                headers: {
                    "Content-Type": "application/json",
                }
            }
        )

        const response = await toast.promise(
            getEmployeeDetails,
            {
                loading: 'Fetching...',
                success: 'Employees fetched successfully',
                error: 'Error in fetching all employees'
            });

        if (!response.ok) {
            throw new Error('Failed to get all employees');
        }
        const employeeDetails = await response.json();
        setEmployeeData(employeeDetails.data);
    }

    const searchHandler = async (name) => {
        const searchedEmployee = fetch(
            `${process.env.REACT_APP_BASE_URL}/search-employee?name=${name}`,
            {
                method: 'GET',
                headers: {
                    'CONTENT-TYPE': 'application/json'
                }
            }
        )

        const response = await toast.promise(
            searchedEmployee,
            {
                loading: 'Fetching...',
                success: 'Employee fetched successfully',
                error: 'Error in fetching the employees'
            });

        if (!response.ok) {
            throw new Error('Failed to search a employee');
        }

        const searchedEmployeeDetails = await response.json();
        setEmployeeDetails(searchedEmployeeDetails.data);
    }

    return (
        <div className='home-container'>
            <Navbar onSearch={searchHandler} />
            <div className='employee-container'>
                <div className='all-employee-details'>
                    {
                        employeeData && employeeData.map((emp) => {
                            return (
                                <div key={emp._id}>
                                    <h3>{emp.employeeId} {emp.name} {emp.email} {emp.company}</h3>
                                </div>
                            )
                        })
                    }
                    <button className='get-all-employee' onClick={clickHandler}>Get All Employees</button>
                    {
                        employeeDetails && employeeDetails.map((emp) => {
                            return (
                                <div key={emp._id}>
                                    <h3>{emp.employeeId} {emp.name} {emp.email} {emp.company}</h3>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Home