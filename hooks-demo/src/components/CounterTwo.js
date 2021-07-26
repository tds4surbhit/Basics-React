import React, { useState, useEffect } from 'react'

function CounterTwo() {

    const [count, setCount] = useState(0)
    const [countTwo, setCountTwo] = useState(0)

    // useEffect(()=>{
    // document.title=`you have clicked ${count} times`
    // console.log(`you have clicked ${count} times`)  
    // })// []If the second paramter of useEffect is an Empty Array then it will fire only once , similar to component dismount

    useEffect(() => {
        document.title = `you have clicked ${count} times`
        console.log(`you have clicked ${count} times`)
    }, [count]
    )


    return (
        <div>
            <h1>Count One : {count} </h1>
            <button onClick={() => setCount(count + 1)}>Increment by One</button>
            <h1>Count Two : {countTwo} </h1>
            <button onClick={() => setCountTwo(countTwo + 1)}>Increment by One</button>
        </div>
    )
}

export default CounterTwo;
