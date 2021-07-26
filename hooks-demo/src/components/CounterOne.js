import React , {useState} from 'react';

function CounterOne(){
    const[count,setCount]= useState(0) //const[object,Function]
    return(
        <div>
            <h1>Count : {count}</h1>
            <button onClick={()=>setCount(count+1)}>Increment by One</button>
        </div>
    )
}

export default CounterOne ;