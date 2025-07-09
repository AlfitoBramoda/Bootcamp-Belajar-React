import { Link } from 'react-router'

function HomePage() {
    return (
        <div className="min-h-screen bg-gray-50">
            <div className="max-w-4xl mx-auto px-4 py-16">
                <div className="text-center">
                    <h1 className="text-5xl font-bold text-gray-800 mb-6">
                        Welcome to Blog Kelompok 5
                    </h1>
                    <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                        Nih Artikel Keren yang Kami Buat
                    </p>
                    <Link 
                        to="/dashboard"
                        className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition font-medium"
                    >
                        Read Our Posts
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default HomePage
