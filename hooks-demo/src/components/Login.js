import React , {useState} from 'react';

function Login(){

    const [username,setUsername]=useState('');
    const [password,setpassword]=useState('');

    const handleSubmit=(e)=>{
        e.preventDefault();
        alert(`username : ${username} and password : ${password}`);
    }



    return(
        <div>
            <h1> Login Here </h1> 
            <form onSubmit={handleSubmit}>             
            username : <input type="text" value= {username}
            onChange={(e)=>setUsername(e.target.value)} /><br/>

            password : <input type="password" value= {password} 
            onChange={(e)=>setpassword(e.target.value)} /><br/>

            <button>Submit</button>
            </form>
        </div>
    )
}
export default Login ;