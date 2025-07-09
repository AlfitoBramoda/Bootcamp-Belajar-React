import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router'
import Header from '../components/layout/Header'

function PostDetails() {
    const { id } = useParams()
    const navigate = useNavigate()
    const [post, setPost] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await fetch(`https://686cbde314219674dcc8f1a9.mockapi.io/Post/Articles/${id}`)
                const data = await response.json()
                setPost(data)
                setLoading(false)
            } catch (error) {
                console.error('Error fetching post:', error)
                setLoading(false)
            }
        }

        fetchPost()
    }, [id])

    if (loading) {
        return (
            <div className="min-h-screen bg-gray-50">
                <Header />
                <div className="pt-20 px-4">
                    <div className="max-w-4xl mx-auto text-center py-8">
                        Loading...
                    </div>
                </div>
            </div>
        )
    }

    if (!post) {
        return (
            <div className="min-h-screen bg-gray-50">
                <Header />
                <div className="pt-20 px-4">
                    <div className="max-w-4xl mx-auto text-center py-8">
                        Post not found
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-gray-50">
            <Header />
            <div className="pt-20 px-4">
                <div className="max-w-4xl mx-auto">
                    <button 
                        onClick={() => navigate(-1)}
                        className="mb-6 text-white hover:text-blue-800 font-medium cursor-pointer"
                    >
                        Back
                    </button>
                    
                    <article className="bg-white rounded-lg shadow-md p-8">
                        <h1 className="text-3xl font-bold text-gray-800 mb-4">
                            {post.title}
                        </h1>
                        
                        <div className="text-gray-500 text-sm mb-6">
                            Post ID: {post.id}
                        </div>
                        
                        <div className="prose max-w-none">
                            <p className="text-gray-700 leading-relaxed">
                                {post.content}
                            </p>
                        </div>
                    </article>
                </div>
            </div>
        </div>
    )
}

export default PostDetails