import React, { useEffect } from 'react'
import { useState } from 'react'

function Timer() {

    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date())
            console.log("Time is Updated")

        }, 1000);
    } , [])

    return()=>{
        clearInterval(interval)
        console.log("Interval is Cleared")
    }


    return (
        <div>
            <h1>
                {time.toLocaleTimeString()}
            </h1>
        </div>
    )
}

export default Timer;