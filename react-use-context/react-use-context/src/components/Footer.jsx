export default function Footer({user, setUser}) {
    return <div style={{ width: '100%', backgroundColor: 'gray'}}>
        <div>Hi {user}</div>
        <button>Logout</button>
    </div>
}