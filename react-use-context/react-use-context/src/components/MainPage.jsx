function WelcomePage({theUser}) {
    return <div>Welcome {theUser}</div>
}

function MainPage({user}){
    return <div>
        <WelcomePage theUser={user} />
        This is your main application. 
        Your are logged in if you can see it.
    </div>
}

export default MainPage