import React, { useState } from 'react'

const Badge = ({ total }) => {
    return <h4>Total: {total}</h4>
}

const Q4 = () => {
    let [tasks, setTasks] = useState(['Task1', 'Task2'])
    let [input, setInput] = useState('')

    return (
        <div>
            <h3>Q4</h3>
            <Badge total={tasks.length} />
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
            <button onClick={() => {
                if (input.trim() !== '') {
                    setTasks([...tasks, input])
                    setInput('')
                }
            }}>Add</button>

            <ul>
                {tasks.map((task, index) => {
                    return <li key={index}>{task}</li>
                })}
            </ul>
        </div>
    )
}

export default Q4
