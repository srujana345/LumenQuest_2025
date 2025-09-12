import { useState } from "react";
import "./Login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // replace this with real auth later
    alert(`Login attempted\nEmail: ${email}`);
  };

  return (
    <div className="login-container">
      <main className="login-box" role="main" aria-labelledby="login-title">
        <div className="header">
          <h2 id="login-title">Welcome Back 👋</h2>
          <p className="subtitle">Please login to continue</p>
        </div>

        <form className="login-form" onSubmit={handleSubmit} noValidate>
          <label className="sr-only" htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            autoComplete="email"
            className="input-field"
          />

          <label className="sr-only" htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            autoComplete="current-password"
            className="input-field"
          />

          <button type="submit" className="login-btn">Login</button>
        </form>

        <p className="signup-text">
          Don’t have an account? <a href="#" className="signup-link">Sign Up</a>
        </p>
      </main>
    </div>
  );
}
