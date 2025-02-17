import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { Login } from './pages/public/Login';
import { Profile } from './pages/private/Profile';
import { Forms } from './pages/private/Forms';
import { Home } from './pages/private/Home';
import { Register } from './pages/public/Register';
import { AuthProvider } from './contexts/AuthContext';
import { PrivateRoute } from './config/PrivateRoute';


function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={
            <PrivateRoute>
              <Layout>
                <Home />
              </Layout>
            </PrivateRoute>
          } />
          <Route path="/forms" element={
            <PrivateRoute>
              <Layout>
                <Forms />
              </Layout>
            </PrivateRoute>
          } />
          <Route path="/profile" element={
            <PrivateRoute>
              <Layout>
                <Profile />
              </Layout>
            </PrivateRoute>
          } />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </Router>
    </AuthProvider>
  )
}

export default App
