import './App.css'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Login from './pages/Login.tsx'
import Signup from './pages/signup.tsx'
import Dashboard from './pages/Dashboard.tsx'
import ProtectedRoute from './routes/ProtectedRoute.tsx'
import { AuthProvider } from './context/AuthContext.tsx.tsx'
function App() {
  
  return (
    <>
    <BrowserRouter>
      <AuthProvider>
      <Routes>
        <Route path="/" element={<Login />} />               
        <Route path="/signup" element={<Signup />} /> 
        <Route path="/dashboard" element={<Dashboard/>} /> 
        <Route element={<ProtectedRoute/>}>
          
        </Route>            
      </Routes>
      
      </AuthProvider>
    </BrowserRouter>
    </>
  )
}

export default App
