import React, { useState } from 'react'

const Register = () => {
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [avatar, setAvatar] = useState(null);
  const [coverImage, setCoverImage] = useState(null);
  const [error, setError] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await axios.post("/api/v1/users/register", {
        username: userName,
        email: email,
        fullName: fullName,
        avatar: avatar,
        password: password,
      });
      const { accessToken, createduser } = response.data.data;

      // Store token and user info
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("user", JSON.stringify(createduser));
      
      navigate("/")
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed");
    }
  }

  return (
    <>
    <form>
      <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 px-4">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 sm:p-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 dark:text-gray-200 mb-6">
          Register
        </h2>
        <form onSubmit={handleRegister} className="space-y-4">
          {/* Email */}
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg 
                       focus:outline-none focus:ring-2 focus:ring-blue-500 
                       dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600"
          />
          {/* Username */}
          <input
            type="text"
            placeholder="Username"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg 
                       focus:outline-none focus:ring-2 focus:ring-blue-500 
                       dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600"
          />
          {/* Fullname */}
          <input
            type="text"
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg 
                       focus:outline-none focus:ring-2 focus:ring-blue-500 
                       dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600"
          />
          {/* Avatar Image */}
          <input
            type="file"
            placeholder="Avatar"
            value={avatar}
            onChange={(e) => setAvatar(e.target.value)}
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

          {/* Register Button */}
          <button
            type="submit"
            className="w-full py-2 bg-blue-600 text-white font-semibold rounded-lg 
                       hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Register
          </button>
        </form>
      </div>
    </div>
    </form>
    </>
  )
}

export default Register