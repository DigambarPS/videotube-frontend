import { useState } from "react";
import axios from "axios";

export default function Login() {
  const [emailOrUser, setEmailOrUser] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await axios.post("/api/users/login", {
        username: emailOrUser,
        email: emailOrUser,
        password: password,
      });
      const { accessToken, user } = response.data.data;

      // Store token and user info
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("user", JSON.stringify(user));

      // alert("Login successful!");
      // Redirect or update app state here
      navigate("/")
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 px-4">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 sm:p-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 dark:text-gray-200 mb-6">
          Login
        </h2>
        <form onSubmit={handleLogin} className="space-y-4">
          {/* Username/Email */}
          <input
            type="text"
            placeholder="Username or Email"
            value={emailOrUser}
            onChange={(e) => setEmailOrUser(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg 
                       focus:outline-none focus:ring-2 focus:ring-blue-500 
                       dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600"
          />

          {/* Password */}
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg 
                       focus:outline-none focus:ring-2 focus:ring-blue-500 
                       dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600"
          />

          {/* Error message */}
          {error && <p className="text-red-500 text-sm">{error}</p>}

          {/* Login Button */}
          <button
            type="submit"
            className="w-full py-2 bg-blue-600 text-white font-semibold rounded-lg 
                       hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}