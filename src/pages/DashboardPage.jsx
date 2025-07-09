import PostList from '../components/PostList'
import Header from '../components/layout/Header'
import useFetch from '../hooks/useFetch'

function DashboardPage() {
    const {data: article, loading, error} = useFetch('https://686cbde314219674dcc8f1a9.mockapi.io/Post/Articles')

    if(error){
        alert("Lagi Error Bos")
    }

    return (
        <div className="min-h-screen bg-gray-50">
            <Header />
            <div className="pt-20 px-4">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-3xl font-bold text-gray-800 mb-8">Dashboard</h1>
                    {loading ? (
                        <div className="text-center py-8">Loading...</div>
                    ) : (
                        <PostList posts={article} />
                    )}
                </div>
            </div>
        </div>
    )
}

export default DashboardPage