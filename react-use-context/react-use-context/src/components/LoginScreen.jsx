import { useState } from "react";

export default function LoginScreen({setUser}) {
    const [userName, setUserName] = useState('')

    function loginUser() {
        setUser(userName)
    }

    return <div>
        Username:
        <input type="text" value={userName} onChange={(e)=>{
            setUserName(e.target.value)
        }}></input>
        <button style={{backgroundColor: 'white', color: 'black'}} onClick={loginUser}>Login</button>
    </div>
}