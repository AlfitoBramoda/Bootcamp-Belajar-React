import { useNavigate } from "react-router"

function LoginPage() {
    const navigate = useNavigate()

    const handleLogin = (e) => {
        e.preventDefault()
        const loginSuccessfull = true

        if(loginSuccessfull) {
            navigate('/dashboard')
        } else {
            alert('Login Failed')
        }
    }

    const handleCancel = () => {
        navigate(-1)
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-md">
                <form onSubmit={handleLogin} className="space-y-6">
                    <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">Login</h2>
                    
                    <div>
                        <input 
                            type="email" 
                            placeholder="Email" 
                            required 
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                        />
                    </div>
                    
                    <div>
                        <input 
                            type="password" 
                            placeholder="Password" 
                            required 
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                        />
                    </div>
                    
                    <div className="flex gap-4">
                        <button 
                            type="submit"
                            className="flex-1 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition font-medium"
                        >
                            Login
                        </button>
                        <button 
                            type="button" 
                            onClick={handleCancel}
                            className="flex-1 bg-gray-200 text-gray-700 py-3 rounded-lg hover:bg-gray-300 transition font-medium"
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LoginPage
