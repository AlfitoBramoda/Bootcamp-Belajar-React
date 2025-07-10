import React, { useState, createContext } from 'react';

const AuthContext = createContext();

function AuthProvider({children}) {
    const [user, setUser] = useState(null)
    const isAuthenticated = user !== null

    const Login = async (username, password) => {
        try {
            const response = await fetch(`https://686cbde314219674dcc8f1a9.mockapi.io/Post/Users?username=${username}`)
            const userData = await response.json()
            
            if(userData.length === 0) {
                return false
            }

            const users = userData[0]
            if(users.password === password) {
                let userObj = {
                    id: users.id,
                    username: users.username,
                    name: users.name,
                    role: users.role
                }
                setUser(userObj)
                console.log("Berhasil")
                localStorage.setItem('user', JSON.stringify(userObj))

                return true
            }
            console.log("Gagal");
            return false
        } catch (error) {
            console.error('Login error:', error)
            return false
        }
    }

    const Logout = () => {
        setUser(null)
        localStorage.removeItem('user')
    }

    const value = {
        user,
        isAuthenticated,
        Login,
        Logout
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

export {AuthProvider, AuthContext}