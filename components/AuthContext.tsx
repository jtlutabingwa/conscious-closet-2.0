"use client";
import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { getCurrentUser, signOut, fetchUserAttributes, AuthUser } from "aws-amplify/auth";

interface UserAttributes {
  email?: string;
  name?: string;
  sub?: string;
}

interface AuthContextType {
  user: AuthUser | null;
  userAttributes: UserAttributes;
  loading: boolean;
  checkUser: () => Promise<void>;
  handleSignOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  userAttributes: {},
  loading: true,
  checkUser: async () => {},
  handleSignOut: async () => {},
});

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [userAttributes, setUserAttributes] = useState<UserAttributes>({});
  const [loading, setLoading] = useState(true);

  async function checkUser() {
    try {
      const currentUser = await getCurrentUser();
      setUser(currentUser);
      const attributes = await fetchUserAttributes();
      setUserAttributes(attributes);
    } catch {
      setUser(null);
      setUserAttributes({});
    } finally {
      setLoading(false);
    }
  }

  async function handleSignOut() {
    try {
      await signOut();
      setUser(null);
      setUserAttributes({});
    } catch (error) {
      console.error("Error signing out:", error);
    }
  }

  useEffect(() => {
    checkUser();
  }, []);

  return (
    <AuthContext.Provider value={{ user, userAttributes, loading, checkUser, handleSignOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
