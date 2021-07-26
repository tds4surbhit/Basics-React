import React from 'react'
import Timer from './Timer'

function Clock(){
    
    const [displayTimer,setDisplayTimer] = useState(true)

    return(
        <div>{displayTime?<Timer/>:null}
            <button onClick={()=>setDisplayTimer(!displayTimer)}>{displayTime?"Hide":"Show"}</button>
        </div>
    )
}

export default Clock ;