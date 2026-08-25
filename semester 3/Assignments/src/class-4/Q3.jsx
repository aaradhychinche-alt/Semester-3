import React, { useState } from 'react'

const Display = ({count}) => {
    return <h3>Count: {count}</h3>
}

const Controls = ({count, setCount}) => {
    return (
        <div>
            <button onClick={() => {if (count<10) setCount(count+1)}}>Increase</button>
            <button onClick={() => {if (count>0) setCount(count-1)}}>Decrease</button>
        </div>
    )
}

const Q3 = () => {
    let [count, setCount] = useState(0)

    return (
        <div>
            <h3>Q3</h3>
            <Display count={count} />
            <Controls count={count} setCount={setCount} />
        </div>
    )
}

export default Q3
