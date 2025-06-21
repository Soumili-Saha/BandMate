import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate loading delay
    setTimeout(() => {
      // Dummy validation - you can customize this logic
      if (form.email && form.password) {
        alert("Login successful! (This is a dummy login)");
        navigate("/home"); // Redirect to home page
      } else {
        alert("Please fill in all fields");
      }
      setIsLoading(false);
    }, 1500);
  };

  const handleSignupRedirect = () => {
    navigate("/signup");
  };

  const handleBackToLanding = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50 text-gray-800 font-serif overflow-x-hidden flex items-center justify-center">
      {/* Floating particles - same as landing page */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-20 left-20 w-2 h-2 bg-purple-300 rounded-full opacity-60 animate-pulse" />
        <div className="absolute top-40 right-32 w-1 h-1 bg-pink-400 rounded-full opacity-40 animate-bounce" />
        <div className="absolute bottom-40 left-32 w-3 h-3 bg-blue-200 rounded-full opacity-30 animate-ping" />
        <div className="absolute top-60 right-20 w-2 h-2 bg-purple-200 rounded-full opacity-50 animate-pulse" />
        <div className="absolute top-10 right-20 text-orange-300/40 text-3xl animate-bounce">🎸</div>
        <div className="absolute bottom-10 left-20 text-blue-300/40 text-2xl animate-pulse">🥁</div>
        <div className="absolute top-1/2 left-10 text-red-300/40 text-2xl animate-bounce">🎤</div>
        <div className="absolute bottom-20 right-20 text-orange-400/30 text-xl animate-pulse">♪</div>
      </div>

      {/* Back to Landing Button */}
      <button
        onClick={handleBackToLanding}
        className="absolute top-6 left-6 flex items-center space-x-2 text-orange-600 hover:text-orange-700 transition z-10"
      >
        <span className="text-xl">←</span>
        <span className="font-semibold">Back to Home</span>
      </button>

      {/* Login Form Container */}
      <div className="relative z-10 w-full max-w-md mx-4">
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-orange-100/50">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-2">
              <span className="font-[cursive] bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">Band</span>
              <span className="ml-2 text-gray-800">Mate</span>
            </h1>
            <p className="text-gray-600">Welcome back, musician!</p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                Enter your email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="your.email@example.com"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl border-2 border-orange-200 focus:border-orange-500 focus:outline-none transition bg-white/80 text-gray-800 placeholder-gray-400"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-2">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="Enter your password"
                value={form.password}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl border-2 border-orange-200 focus:border-orange-500 focus:outline-none transition bg-white/80 text-gray-800 placeholder-gray-400"
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-xl hover:from-orange-600 hover:to-red-600 transition font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
            >
              {isLoading ? (
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  <span>Logging in...</span>
                </div>
              ) : (
                "Login"
              )}
            </button>
          </form>

          {/* Signup Link */}
          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-4">Don't have an account?</p>
            <button
              onClick={handleSignupRedirect}
              className="text-orange-600 hover:text-orange-700 font-semibold border-b-2 border-orange-300 hover:border-orange-500 transition"
            >
              Create Account
            </button>
          </div>

          {/* Forgot Password */}
          <div className="mt-6 text-center">
            <button className="text-sm text-gray-500 hover:text-gray-700 transition">
              Forgot your password?
            </button>
          </div>
        </div>

        {/* Musical Note Decorations around form */}
        <div className="absolute -top-4 -left-4 text-orange-400/30 text-2xl animate-bounce">♪</div>
        <div className="absolute -top-2 -right-6 text-blue-400/30 text-xl animate-pulse">♫</div>
        <div className="absolute -bottom-4 -right-4 text-red-400/30 text-2xl animate-bounce">♪</div>
        <div className="absolute -bottom-2 -left-6 text-orange-400/30 text-xl animate-pulse">♫</div>
      </div>
    </div>
  );
};

export default Login;