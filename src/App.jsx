import { Routes, Route } from 'react-router'
import Header from './components/layout/Header'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import DashboardPage from './pages/DashboardPage'
import LoginPage from './pages/LoginPage'
import PostDetails from './pages/PostDetailsPage'
import NotFoundPage from './pages/NotFoundPage'
import { MessageProvider } from './providers/MessageProvider'

function App() {

  return (
    <MessageProvider>
      <Header />
      <main className='pt-20'>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/about" element={<AboutPage/>} />
          <Route path='/login' element={<LoginPage/>} />
          <Route path="/dashboard" element={<DashboardPage/>} />
          <Route path='/dashboard/:id' element={<PostDetails/>} />
          <Route path='/dashboard/*' element={<NotFoundPage/>} />
          <Route path='*' element={<NotFoundPage/>} />
        </Routes>
      </main>
    </MessageProvider>
  )
}

export default App