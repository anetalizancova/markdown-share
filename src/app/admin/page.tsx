"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import AdminPanel from "@/components/AdminPanel";

const ADMIN_PASSWORD = "2859";

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  useEffect(() => {
    // Check if already authenticated
    const auth = sessionStorage.getItem("mdshare_admin");
    if (auth === "true") {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      sessionStorage.setItem("mdshare_admin", "true");
      setIsAuthenticated(true);
      setError("");
    } else {
      setError("Nesprávné heslo");
      setPassword("");
    }
  };

  if (!isAuthenticated) {
    return (
      <main className="container">
        <div className="login-container">
          <div className="login-box">
            <h1 className="login-title">Admin Panel</h1>
            <p className="login-subtitle">Zadej heslo pro přístup</p>
            <form onSubmit={handleLogin} className="login-form">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Heslo"
                className="login-input"
                autoFocus
              />
              {error && <p className="login-error">{error}</p>}
              <button type="submit" className="btn btn-primary">
                Přihlásit se
              </button>
            </form>
          </div>
        </div>
      </main>
    );
  }

  return <AdminPanel />;
}
