import { useState, useEffect } from 'react'
import PostList from '../components/PostList'
import Header from '../components/layout/Header'

function DashboardPage() {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        // Simulasi fetch data atau gunakan API real
        const fetchPosts = async () => {
            try {
                // Contoh dengan JSONPlaceholder API
                const response = await fetch('https://686cbde314219674dcc8f1a9.mockapi.io/Post/Articles')
                const data = await response.json()
                setPosts(data) // Ambil 10 post pertama
                setLoading(false)
            } catch (error) {
                console.error('Error fetching posts:', error)
                setLoading(false)
            }
        }

        fetchPosts()
    }, [])

    return (
        <div className="min-h-screen bg-gray-50">
            <Header />
            <div className="pt-20 px-4">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-3xl font-bold text-gray-800 mb-8">Dashboard</h1>
                    {loading ? (
                        <div className="text-center py-8">Loading...</div>
                    ) : (
                        <PostList posts={posts} />
                    )}
                </div>
            </div>
        </div>
    )
}

export default DashboardPage