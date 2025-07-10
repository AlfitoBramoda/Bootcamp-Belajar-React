import React, { useState, createContext, useEffect } from 'react';

const AuthContext = createContext();

function AuthProvider({children}) {
    const [user, setUser] = useState(null)
    const isAuthenticated = user !== null

    useEffect(() => {
        const savedUser = localStorage.getItem('user')
        if (savedUser) {
            try {
                const parsedUser = JSON.parse(savedUser)
                setUser(parsedUser)
            } catch (error) {
                console.error('Error parsing saved user:', error)
                localStorage.removeItem('user')
            }
        }
    }, [])

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
                    role: users.role,
                    isAuthenticated: true
                }
                setUser(userObj)
                localStorage.setItem('user', JSON.stringify(userObj))
                return true
            }
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