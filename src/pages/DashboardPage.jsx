import { useState } from 'react'
import PostList from '../components/PostList'
import Header from '../components/layout/Header'
import Pagination from '../components/Pagination'
import useFetch from '../hooks/useFetch'

function DashboardPage() {
    const {data: article, loading, error} = useFetch('https://686cbde314219674dcc8f1a9.mockapi.io/Post/Articles')
    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage] = useState(6) // 6 posts per halaman

    if(error){
        alert("Lagi Error Bos")
    }

    // Calculate pagination jika data sudah ada
    const posts = article || []
    const indexOfLastPost = currentPage * postsPerPage
    const indexOfFirstPost = indexOfLastPost - postsPerPage
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)
    const totalPages = Math.ceil(posts.length / postsPerPage)

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber)
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <div className="min-h-screen bg-gray-50">
            <Header />
            <div className="pt-20 px-4">
                <div className="max-w-4xl mx-auto">
                    {/* Header with post count */}
                    <div className="flex justify-between items-center mb-8">
                        <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
                        {!loading && posts.length > 0 && (
                            <div className="text-sm text-gray-600">
                                Showing {indexOfFirstPost + 1}-{Math.min(indexOfLastPost, posts.length)} of {posts.length} posts
                            </div>
                        )}
                    </div>

                    {loading ? (
                        <div className="text-center py-8">Loading...</div>
                    ) : (
                        <>
                            <PostList posts={currentPosts} />
                            
                            {/* Show pagination only if more than 1 page */}
                            {totalPages > 1 && (
                                <Pagination
                                    currentPage={currentPage}
                                    totalPages={totalPages}
                                    onPageChange={handlePageChange}
                                />
                            )}
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}

export default DashboardPage
