import PostCard from './PostCard'

function PostList({ posts }) {
    return (
        <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Recent Posts</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {posts.map(post => (
                    <PostCard key={post.id} post={post} />
                ))}
            </div>
        </div>
    )
}

export default PostList