import { useState, useEffect } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { loginUserApi } from "../api/authApi.js";
import { useNavigate } from "react-router-dom";
import ErrorUI from "../components/ui/ErrorUI.jsx";

export default function Login() {
  const [emailOrUser, setEmailOrUser] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const loginMutation = useMutation({
    mutationFn: (payload) => loginUserApi(payload),
    onSuccess: (res) => {
      queryClient.invalidateQueries({ queryKey: ["currentUser"] });
      navigate("/Home");
    },
    onError: (error) => {
    },
  });

  const handleLogin = (e) => {
    e.preventDefault();
    loginMutation.mutate({ email:emailOrUser, username:emailOrUser, password });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 px-4">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 sm:p-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 dark:text-gray-200 mb-6">
          Login
        </h2>

        {loginMutation.isError && (
          <ErrorUI
            message={loginMutation.error.message || "Login failed"}
            onClose={() => loginMutation.reset()} // reset clears error state
          />
        )}

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