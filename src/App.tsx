import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { Login } from './pages/public/Login';
import { Profile } from './pages/private/Profile';
import { Forms } from './pages/private/Forms';
import { Home } from './pages/private/Home';
import { Register } from './pages/public/Register';


function App() {

  return (
    <>
      {/* Public Routes */}
      <Router>
        <Routes>
          <Route path="/" element={<Layout><Home /></Layout>} />
          <Route path="/forms" element={<Layout><Forms /></Layout>} />
          <Route path="/profile" element={<Layout><Profile /></Layout>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/register' element={<Register/>} />
        </Routes>
      </Router>
      
    </>
  )
}

export default App
