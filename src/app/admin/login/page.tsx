"use client";

import { useState, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const [isRegister, setIsRegister] = useState(false);
  const { user, isAdmin, loading: authLoading, signIn, signUp, signInWithGoogle, isConfigured } = useAuth();
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectTo = searchParams.get("redirect") || "/admin/blog";

  // Redirect if already logged in and is admin
  useEffect(() => {
    if (!authLoading && user && isAdmin) {
      router.push(redirectTo);
    }
  }, [user, isAdmin, authLoading, router, redirectTo]);

  // Show loading while checking auth state
  if (authLoading) {
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #1a1512 0%, #2d1f15 50%, #1a1512 100%)",
        }}
      >
        <div style={{ color: "#D09947", fontSize: "18px" }}>Loading...</div>
      </div>
    );
  }

  // Don't show login form if already logged in (waiting for redirect)
  if (user && isAdmin) {
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #1a1512 0%, #2d1f15 50%, #1a1512 100%)",
        }}
      >
        <div style={{ color: "#D09947", fontSize: "18px" }}>Redirecting...</div>
      </div>
    );
  }

  if (!isConfigured) {
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #1a1512 0%, #2d1f15 50%, #1a1512 100%)",
        }}
      >
        <div
          style={{
            background: "#2a2a2a",
            padding: "48px",
            borderRadius: "16px",
            width: "100%",
            maxWidth: "500px",
            border: "1px solid rgba(208,153,71,0.2)",
            textAlign: "center",
          }}
        >
          <h1 style={{ fontSize: "24px", fontWeight: 700, color: "#FFFFFF", marginBottom: "16px" }}>
            Firebase Not Configured
          </h1>
          <p style={{ color: "#888", fontSize: "14px", lineHeight: 1.6, marginBottom: "24px" }}>
            To use the admin panel, you need to set up Firebase and add the configuration to your <code style={{ background: "#1a1a1a", padding: "2px 6px", borderRadius: "4px" }}>.env.local</code> file.
          </p>
          <p style={{ color: "#666", fontSize: "13px" }}>
            See <code style={{ background: "#1a1a1a", padding: "2px 6px", borderRadius: "4px" }}>.env.local.example</code> for required variables.
          </p>
        </div>
      </div>
    );
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (isRegister && password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (isRegister && password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    setLoading(true);

    try {
      if (isRegister) {
        await signUp(email, password);
        setSuccess("Account created successfully! You can now sign in.");
        setIsRegister(false);
        setEmail("");
        setPassword("");
        setConfirmPassword("");
      } else {
        await signIn(email, password);
        // Small delay to allow auth state and cookie to update
        await new Promise(resolve => setTimeout(resolve, 500));
        router.push(redirectTo);
      }
    } catch {
      setError(isRegister ? "Registration failed. Email may already be in use." : "Invalid email or password");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setError("");
    setLoading(true);

    try {
      await signInWithGoogle();
      // Small delay to allow auth state and cookie to update
      await new Promise(resolve => setTimeout(resolve, 500));
      router.push(redirectTo);
    } catch {
      setError("Sign-in failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const toggleMode = () => {
    setIsRegister(!isRegister);
    setError("");
    setSuccess("");
    setConfirmPassword("");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #1a1512 0%, #2d1f15 50%, #1a1512 100%)",
      }}
    >
      <div
        style={{
          background: "#2a2a2a",
          padding: "48px",
          borderRadius: "16px",
          width: "100%",
          maxWidth: "400px",
          border: "1px solid rgba(208,153,71,0.2)",
        }}
      >
        <h1
          style={{
            fontSize: "28px",
            fontWeight: 700,
            color: "#FFFFFF",
            marginBottom: "8px",
            textAlign: "center",
          }}
        >
          {isRegister ? "Create Account" : "Admin Login"}
        </h1>
        <p
          style={{
            color: "#888",
            fontSize: "14px",
            textAlign: "center",
            marginBottom: "32px",
          }}
        >
          {isRegister ? "Register for admin access" : "Sign in to access the admin panel"}
        </p>

        {error && (
          <div
            style={{
              background: "rgba(239, 68, 68, 0.1)",
              border: "1px solid rgba(239, 68, 68, 0.3)",
              color: "#ef4444",
              padding: "12px 16px",
              borderRadius: "8px",
              marginBottom: "24px",
              fontSize: "14px",
            }}
          >
            {error}
          </div>
        )}

        {success && (
          <div
            style={{
              background: "rgba(34, 197, 94, 0.1)",
              border: "1px solid rgba(34, 197, 94, 0.3)",
              color: "#22c55e",
              padding: "12px 16px",
              borderRadius: "8px",
              marginBottom: "24px",
              fontSize: "14px",
            }}
          >
            {success}
          </div>
        )}

        {/* Google Sign In Button */}
        <button
          type="button"
          onClick={handleGoogleSignIn}
          disabled={loading}
          style={{
            width: "100%",
            padding: "14px",
            background: "#FFFFFF",
            color: "#333",
            border: "none",
            borderRadius: "8px",
            fontSize: "16px",
            fontWeight: 500,
            cursor: loading ? "not-allowed" : "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "12px",
            marginBottom: "24px",
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24">
            <path
              fill="#4285F4"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            />
            <path
              fill="#34A853"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            />
            <path
              fill="#FBBC05"
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
            />
            <path
              fill="#EA4335"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            />
          </svg>
          Continue with Google
        </button>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginBottom: "24px",
          }}
        >
          <div style={{ flex: 1, height: "1px", background: "#444" }} />
          <span style={{ color: "#666", fontSize: "14px" }}>or</span>
          <div style={{ flex: 1, height: "1px", background: "#444" }} />
        </div>

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "20px" }}>
            <label
              style={{
                display: "block",
                color: "#C5C6C9",
                fontSize: "14px",
                marginBottom: "8px",
              }}
            >
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{
                width: "100%",
                padding: "12px 16px",
                background: "#1a1a1a",
                border: "1px solid #444",
                borderRadius: "8px",
                color: "#FFFFFF",
                fontSize: "16px",
                outline: "none",
              }}
            />
          </div>

          <div style={{ marginBottom: isRegister ? "20px" : "28px" }}>
            <label
              style={{
                display: "block",
                color: "#C5C6C9",
                fontSize: "14px",
                marginBottom: "8px",
              }}
            >
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength={isRegister ? 6 : undefined}
              style={{
                width: "100%",
                padding: "12px 16px",
                background: "#1a1a1a",
                border: "1px solid #444",
                borderRadius: "8px",
                color: "#FFFFFF",
                fontSize: "16px",
                outline: "none",
              }}
            />
          </div>

          {isRegister && (
            <div style={{ marginBottom: "28px" }}>
              <label
                style={{
                  display: "block",
                  color: "#C5C6C9",
                  fontSize: "14px",
                  marginBottom: "8px",
                }}
              >
                Confirm Password
              </label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                style={{
                  width: "100%",
                  padding: "12px 16px",
                  background: "#1a1a1a",
                  border: "1px solid #444",
                  borderRadius: "8px",
                  color: "#FFFFFF",
                  fontSize: "16px",
                  outline: "none",
                }}
              />
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            style={{
              width: "100%",
              padding: "14px",
              background: loading ? "#666" : "#D09947",
              color: "#000000",
              border: "none",
              borderRadius: "8px",
              fontSize: "16px",
              fontWeight: 600,
              cursor: loading ? "not-allowed" : "pointer",
              transition: "background 0.2s",
            }}
          >
            {loading ? (isRegister ? "Creating account..." : "Signing in...") : (isRegister ? "Create Account" : "Sign In")}
          </button>
        </form>

        {/* Toggle between login and register */}
        <div style={{ marginTop: "24px", textAlign: "center" }}>
          <span style={{ color: "#888", fontSize: "14px" }}>
            {isRegister ? "Already have an account? " : "Don't have an account? "}
          </span>
          <button
            type="button"
            onClick={toggleMode}
            style={{
              background: "none",
              border: "none",
              color: "#D09947",
              fontSize: "14px",
              fontWeight: 500,
              cursor: "pointer",
              textDecoration: "underline",
            }}
          >
            {isRegister ? "Sign in" : "Register"}
          </button>
        </div>
      </div>
    </div>
  );
}

function LoadingFallback() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #1a1512 0%, #2d1f15 50%, #1a1512 100%)",
      }}
    >
      <div style={{ color: "#D09947", fontSize: "18px" }}>Loading...</div>
    </div>
  );
}

export default function AdminLoginPage() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <LoginForm />
    </Suspense>
  );
}
