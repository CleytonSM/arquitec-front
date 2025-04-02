import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { Login } from './pages/public/Login';
import { Profile } from './pages/private/profile/Profile';
import { Forms } from './pages/private/form/Forms';
import { Home } from './pages/private/home/Home';
import { Register } from './pages/public/Register';
import { AuthProvider } from './contexts/AuthContext';
import { PrivateRoute } from './config/PrivateRoute';
import { NewForm } from './pages/private/form/formParts/NewForm';
import { Information } from './pages/private/information/Information';
import { CustomerInfo } from './pages/private/information/customer/CustomerInfo';
import { ResidentInfo } from './pages/private/information/resident/ResidentInfo';
import { SocialMediaInfo } from './pages/private/information/socialMedia/SocialMediaInfo';
import { InformationProvider } from './contexts/InformationContext';
import { EditCustomerInfo } from './pages/private/information/customer/EditCustomerInfo';
import { EditResidentInfo } from './pages/private/information/resident/EditResidentInfo';
import { EditSocialMediaInfo } from './pages/private/information/socialMedia/EditSocialMediaInfo';


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
          <Route path="/new-form" element={
            <PrivateRoute>
              <Layout>
                <NewForm />
              </Layout>
            </PrivateRoute>
          } />
          <Route path="/information" element={
            <InformationProvider>
              <PrivateRoute>
                <Layout>
                  <Information />
                </Layout>
              </PrivateRoute>
            </InformationProvider>
          } />
          <Route path="/customer-info" element={
            <PrivateRoute>
              <Layout>
                <CustomerInfo />
              </Layout>
            </PrivateRoute>
          } />
          <Route path="/customer-info/edit" element={
            <PrivateRoute>
              <Layout>
                <EditCustomerInfo />
              </Layout>
            </PrivateRoute>
          } />
          <Route path="/resident-info" element={
            <PrivateRoute>
              <Layout>
                <ResidentInfo />
              </Layout>
            </PrivateRoute>
          } />
          <Route path="/resident-info/edit" element={
            <PrivateRoute>
              <Layout>
                <EditResidentInfo />
              </Layout>
            </PrivateRoute>
          } />
          <Route path="/social-media-info" element={
            <PrivateRoute>
              <Layout>
                <SocialMediaInfo />
              </Layout>
            </PrivateRoute>
          } />
          <Route path="/social-media-info/edit" element={
            <PrivateRoute>
              <Layout>
                <EditSocialMediaInfo />
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
