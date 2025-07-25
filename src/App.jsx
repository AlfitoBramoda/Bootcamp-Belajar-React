import { Routes, Route } from 'react-router'
import Header from './components/layout/Header'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import DashboardPage from './pages/DashboardPage'
import LoginPage from './pages/LoginPage'
import PostDetails from './pages/PostDetailsPage'
import NotFoundPage from './pages/NotFoundPage'
import AppProviders from './providers/AppProviders'
import ProtectedRoute from './components/ProtectedRoute'
import NoteTaking from './pages/NoteTaking'

function App() {

  return (
    <AppProviders>
      <Header />
      <main className='pt-20'>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/about" element={<AboutPage/>} />
          <Route path='/login' element={<LoginPage/>} />
          <Route path="/dashboard" element={
            <ProtectedRoute>
              <DashboardPage/>
            </ProtectedRoute>
          }/>
          <Route path='/dashboard/:id' element={
            <ProtectedRoute>
              <PostDetails/>
            </ProtectedRoute>
          }/>
          <Route path='*' element={<NotFoundPage/>} />
          <Route path='/note' element={<NoteTaking/>}/>
        </Routes>
      </main>
    </AppProviders>
  )
}

export default App