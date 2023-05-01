import { useContext } from "react"
import { UserContext } from "./UserContext"

function WelcomePage() {
    const context = useContext(UserContext)

    return <div>Welcome {context.user}</div>
}

function MainPage(){
    return <div>
        <WelcomePage  />
        This is your main application. 
        Your are logged in if you can see it.
    </div>
}

export default MainPage