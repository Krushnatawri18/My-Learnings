import React, { useState } from 'react'
import '../App.css'

const Home = () => {
    const [employeeData, setEmployeeData] = useState([]);

    const clickHandler = async () => {
        const employeeDetails = await fetch(
            `${process.env.REACT_APP_BASE_URL}/get-employees`,
            {
                method: 'GET',
                headers: {
                    "Content-Type": "application/json",
                }
            }
        )

        if (!employeeDetails.ok) {
            throw new Error('Failed to get all employees');
        }
        const response = await employeeDetails.json();
        setEmployeeData(response.data);
        console.log(response);
    }

    return (
        <div className='all-employee-details'>
            <div>
            {
                employeeData && employeeData.map((emp) => {
                    return (
                        <div key={emp._id}>
                            <h3>{emp.name}</h3>
                            <p>Email - {emp.email}</p>
                            <p>Company - {emp.company}</p>
                        </div>
                    )
                })
            }
            </div>
            <button className='get-all-employee' onClick={clickHandler}>Get All Employees</button>
        </div>
    )
}

export default Home