import React from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "../schemas/authSchemas";
import { registerUserApi } from "../api/authApi";

const Register = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerSchema),
  });

  const registerUser = async (data) => {
    const formData = new FormData();
    formData.append("username", data.userName);
    formData.append("email", data.email);
    formData.append("fullName", data.fullName);
    formData.append("password", data.password);
    
    // File inputs return a FileList, grab the first file
    if (data.avatar?.[0]) {
      formData.append("avatar", data.avatar[0]);
    }
    if (data.coverImage?.[0]) {
      formData.append("coverImage", data.coverImage[0]);
    }
    const response = await registerUserApi(formData);
    return response.data;
  };

  const { mutate, isPending, error } = useMutation({
    mutationFn: registerUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["currentUser"] });
      navigate("/login");
    },
  });

  const onSubmit = (data) => {
    mutate(data);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 px-4">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 sm:p-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 dark:text-gray-200 mb-6">
          Register
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          
          {/* Email */}
          <div>
            <input
              type="email"
              placeholder="Email"
              {...register("email")}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600"
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
          </div>

          {/* Username */}
          <div>
            <input
              type="text"
              placeholder="Username"
              {...register("userName")}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600"
            />
            {errors.userName && <p className="text-red-500 text-xs mt-1">{errors.userName.message}</p>}
          </div>

          {/* Full Name */}
          <div>
            <input
              type="text"
              placeholder="Full Name"
              {...register("fullName")}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600"
            />
            {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName.message}</p>}
          </div>

          {/* Avatar Image */}
          <div>
            <label className="block text-xs text-gray-500 mb-1">Avatar Image</label>
            <input
              type="file"
              accept="image/*"
              {...register("avatar")}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600"
            />
            {errors.avatar && <p className="text-red-500 text-xs mt-1">{errors.avatar.message}</p>}
          </div>

          {/* Cover Image */}
          <div>
            <label className="block text-xs text-gray-500 mb-1">Cover Image (Optional)</label>
            <input
              type="file"
              accept="image/*"
              {...register("coverImage")}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600"
            />
          </div>

          {/* Password */}
          <div>
            <input
              type="password"
              placeholder="Password"
              {...register("password")}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600"
            />
            {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
          </div>

          {/* Error Message Display */}
          {error && (
            <p className="text-red-500 text-sm">
              {error.response?.data?.message || error.message || "Registration failed"}
            </p>
          )}

          {/* Register Button */}
          <button
            type="submit"
            disabled={isPending}
            className="w-full py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 disabled:opacity-50"
          >
            {isPending ? "Registering..." : "Register"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;