import { Link } from 'react-router'

function PostCard({ post }) {
    return (
        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
            <h3 className="text-lg font-semibold text-gray-800 mb-3 line-clamp-2">
                {post.title}
            </h3>
            <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                {post.content}
            </p>
            <div className="flex justify-between items-center text-sm text-gray-500">
                <span>Post #{post.id}</span>
                <Link 
                    to={`/dashboard/${post.id}`}
                    className="text-blue-600 hover:text-blue-800 font-medium"
                >
                    Read More
                </Link>
            </div>
        </div>
    )
}

export default PostCard