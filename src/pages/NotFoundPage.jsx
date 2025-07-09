import { Link } from 'react-router'

function NotFoundPage() {
    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
            <div className="text-center">
                <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
                <h2 className="text-2xl font-semibold text-gray-600 mb-4">Page Not Found</h2>
                <p className="text-gray-500 mb-8">
                    Gaada Cuy Halaman Yang Dimaksud
                </p>
                <div className="space-x-4">
                    <Link 
                        to="/"
                        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition font-medium"
                    >
                        Go Home
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default NotFoundPage