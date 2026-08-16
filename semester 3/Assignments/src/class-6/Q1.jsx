import React, { useState } from 'react'

const Q1 = () => {
    let [count, setCount] = useState(0)

    return (
        <div>
            <h3>Q1</h3>
            <button onClick={() => { if (count < 10) setCount(count + 1) }}>Increase</button>
            <button onClick={() => { if (count > 0) setCount(count - 1) }}>Decrease</button>
            <p>Count: {count}</p>
        </div>
    )
}

export default Q1
