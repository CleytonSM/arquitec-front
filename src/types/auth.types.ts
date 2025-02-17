export interface User {
    userId: number;
    name: string;
    lastname: string;
    token: string;
    email: string
  }

export interface UserInfo {
  name: string;
  lastname: string;
  email: string
}
  
export interface AuthContextType {
  user: User | null;
  login: (userData: User) => void;
  logout: () => void;
  isAuthenticated: boolean;
}