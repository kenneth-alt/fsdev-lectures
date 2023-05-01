import { useContext } from "react"
import { UserContext } from "./UserContext"

export default function Footer() {
    const {user, setUser} = useContext(UserContext)
    function logout(){
        setUser(null)
    }

    return <div style={{ width: '100%', 
    backgroundColor: 'gray', 
    display: 'flex', 
    justifyContent: 'space-around', 
    alignItems: 'center'
    }}>
        <div>Hi {user}</div>
        <button onClick={logout}>Logout</button>
    </div>
}