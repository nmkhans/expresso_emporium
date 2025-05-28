import { createContext, use } from "react";

const AuthContext = createContext(null);

export function useAuthContext() {
  return use(AuthContext);
}

export default AuthContext;
