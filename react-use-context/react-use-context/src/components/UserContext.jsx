import { createContext, useState } from "react";

export const UserContext = createContext('default context')

export default function UserContextProvider({children}) {
    const [user, setUser] = useState('Chris Tes')

    return <UserContext.Provider value={{user, setUser}}>
        {children}
    </UserContext.Provider>
}