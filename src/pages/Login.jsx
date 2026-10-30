import { useState, useEffect } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { loginUserApi } from "../api/authApi.js";
import { useNavigate } from "react-router-dom";
import ErrorUI from "../components/ui/ErrorUI.jsx";
import Button from "../components/ui/Button.jsx";

export default function Login() {
  const [emailOrUser, setEmailOrUser] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const {mutate:loginMutation, isPending, isError} = useMutation({
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
    loginMutation({ email:emailOrUser, username:emailOrUser, password });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 px-4">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 sm:p-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 dark:text-gray-200 mb-6">
          Login
        </h2>

        {isError && (
          <ErrorUI
            message={"Something went wrong, Login failed"}
            onClose={() => loginMutation.reset()}
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

          <Button
            type="submit"
            disabled={isPending}
            extra_class="w-full py-2 bg-blue-600 text-white font-semibold rounded-lg 
                       hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
            val={isPending ? 'Logging in...' : 'Login'}
          />
        </form>
      </div>
    </div>
  );
}