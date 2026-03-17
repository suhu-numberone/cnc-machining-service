"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { User, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut as firebaseSignOut, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth, isFirebaseConfigured } from "@/lib/firebase";
import { isUserAdmin } from "@/lib/admin";
import { syncUserFromAuth } from "@/lib/users";

interface AuthContextType {
  user: User | null;
  isAdmin: boolean;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string) => Promise<void>;
  signInWithGoogle: () => Promise<void>;
  signOut: () => Promise<void>;
  isConfigured: boolean;
  checkAdminStatus: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);

  const checkAdminStatus = async () => {
    if (user?.email) {
      const adminStatus = await isUserAdmin(user.email);
      setIsAdmin(adminStatus);
    } else {
      setIsAdmin(false);
    }
  };

  useEffect(() => {
    if (!isFirebaseConfigured || !auth) {
      setLoading(false);
      return;
    }

    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setUser(user);

      if (user?.email) {
        // Sync user to Supabase (creates if not exists, updates last login if exists)
        await syncUserFromAuth(user.email, user.displayName);
        // Check admin status
        const adminStatus = await isUserAdmin(user.email);
        setIsAdmin(adminStatus);
      } else {
        setIsAdmin(false);
      }

      setLoading(false);

      // Set/clear auth session cookie for middleware
      if (user) {
        const token = await user.getIdToken();
        document.cookie = `auth-session=${token}; path=/; max-age=3600; SameSite=Strict; Secure`;
      } else {
        document.cookie = "auth-session=; path=/; max-age=0";
      }
    });

    return () => unsubscribe();
  }, []);

  const signIn = async (email: string, password: string) => {
    if (!auth) throw new Error("Firebase not configured");
    await signInWithEmailAndPassword(auth, email, password);
  };

  const signUp = async (email: string, password: string) => {
    if (!auth) throw new Error("Firebase not configured");
    await createUserWithEmailAndPassword(auth, email, password);
  };

  const signInWithGoogle = async () => {
    if (!auth) throw new Error("Firebase not configured");
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider);
  };

  const signOut = async () => {
    if (!auth) throw new Error("Firebase not configured");
    // Clear auth cookie
    document.cookie = "auth-session=; path=/; max-age=0";
    setIsAdmin(false);
    await firebaseSignOut(auth);
  };

  return (
    <AuthContext.Provider
      value={{ user, isAdmin, loading, signIn, signUp, signInWithGoogle, signOut, isConfigured: isFirebaseConfigured, checkAdminStatus }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
