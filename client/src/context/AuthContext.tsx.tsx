import React, { createContext, useState, useEffect, ReactNode } from "react";
import { loginUser, logoutUser,getUserProfile, registerUser } from "../api/authService"; // API calls
import { useNavigate } from "react-router-dom";

// Define types for AuthContext
interface AuthContextType {
  user: string | null;
  token: string | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  signup: (email: string, password: string, username: string) => Promise<void>;
}

// Create context
export const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Auth Provider Component
export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<string | null>(null); 
  const [token, setToken] = useState<string | null>(localStorage.getItem("token"));
  const navigate = useNavigate();

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
      getUserProfile().then(setUser).catch(() => logout());
    }
  }, []);
  // Login function
  const login = async (email: string, password: string) => {
    try {
      const { token } = await loginUser(email, password); // Call API
      setToken(token);
      navigate("/home")

      const userProfile = await getUserProfile();
      setUser(userProfile);

      // Store JWT
    } catch (error) {
      console.error("Login failed", error);
    }
  };
  const signup = async (email: string, password: string, username: string) =>{
    try{
      const { token } = await registerUser(email, password, username);
      setToken(token);
      navigate("/");
    }
    catch(error){
      console.error("error", error);
    }
   
  }
  // Logout function
  const logout = () => {
    logoutUser(); // Call API (if needed)
    setUser(null);
    setToken(null);
    localStorage.removeItem("token"); // Remove JWT
    navigate("/")
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout, signup }}>
      {children}
    </AuthContext.Provider>
  );
};
