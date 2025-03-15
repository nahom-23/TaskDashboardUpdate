import axiosInstance from "./axiosInstance";

export const loginUser = async (email: string, password: string) => {
  try {
    const response = await axiosInstance.post(`/login`, { email, password });

    const {user,token} =  response.data;
    if(token){
      localStorage.setItem("token", token); // Store JWT token
    }
   
    return {user, token};
  } catch (error) {
    
  }
 
};

export const logoutUser = () => {
  localStorage.removeItem("token"); // Clear token on logout
};

export const registerUser = async (email: string, password: string, username: string) => {
  try {
    const response = await axiosInstance.post("/signup", { email, password, username })
  const {token} = response.data;

  if (response) {
    localStorage.setItem("token", token)
    return response.data; // Returns { message, user } 
  }
  } catch (error) {
    
  }
    
};

export const getUserProfile = async () => {

  try {
    const response = await axiosInstance.get(`/profile`);
    return response.data; // Returns { user }
  } catch (error) {
    console.error("getUserProfile failed", error);
    
  }
};
