import React from 'react'

const StudentCard = ({ name, rollNo, course }) => {
    return (
        <div>
            <h3>Student Card</h3>
            <p>Name: {name}</p>
            <p>Roll No: {rollNo}</p>
            <p>Course: {course}</p>
        </div>
    )
}

const Q2 = () => {
    return (
        <div>
            <h3>Q2</h3>
            <StudentCard name="Rahul" rollNo="101" course="React" />
            <StudentCard name="Priya" rollNo="102" course="JavaScript" />
            <StudentCard name="Amit" rollNo="103" course="MERN" />
        </div>
    )
}

export default Q2
