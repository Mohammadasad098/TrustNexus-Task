import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { Mail, Lock, ArrowRight, Eye, EyeOff } from "lucide-react";
import LandingNavbar from "../../components/LandingNavbar";

export default function LoginUser() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // Fake login logic
    localStorage.setItem("loggedIn", "true");
    navigate("/project");
  };

  return (
    <>
      <LandingNavbar />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
          className="max-w-md w-full"
        >
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8"
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Welcome Back
            </h1>
            <p className="text-slate-600">Sign in to your client account</p>
          </motion.div>

          {/* Form */}
          <motion.div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-200">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Google Button */}
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <button
                  type="button"
                  className="w-full py-3 border-2 border-slate-200 hover:bg-slate-50 rounded-xl flex items-center justify-center gap-3"
                >
                  <img
                    src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
                    alt="Google Logo"
                    className="w-5 h-5"
                  />
                  Continue with Google
                </button>
              </motion.div>

              {/* Divider */}
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-slate-200"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-white text-slate-500">Or continue with email</span>
                </div>
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="text-slate-700 font-medium">
                  Email Address
                </label>
                <div className="relative mt-2">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input
                    id="email"
                    type="email"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^\S+@\S+\.\S+$/,
                        message: "Email is invalid",
                      },
                    })}
                    className={`pl-10 py-3 w-full rounded-xl border-2 ${errors.email ? "border-red-300" : "border-slate-200"
                      } focus:border-slate-400`}
                    placeholder="john@company.com"
                  />
                </div>
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
              </div>

              {/* Password */}
              <div>
                <label htmlFor="password" className="text-slate-700 font-medium">
                  Password
                </label>
                <div className="relative mt-2">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    {...register("password", {
                      required: "Password is required",
                    })}
                    className={`pl-10 pr-10 py-3 w-full rounded-xl border-2 ${errors.password ? "border-red-300" : "border-slate-200"
                      } focus:border-slate-400`}
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-600"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
                {errors.password && (
                  <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
                )}
              </div>

              {/* Remember & Forgot */}
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-slate-600 border-slate-300 rounded"
                  />
                  <label htmlFor="remember-me" className="ml-2 text-sm text-slate-700">
                    Remember me
                  </label>
                </div>
                <span className="text-sm text-slate-600 hover:text-slate-700">
                  Forgot password?
                </span>
              </div>

              {/* Submit */}
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-3 rounded-xl font-semibold flex justify-center items-center"
                >
                  Sign In
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
              </motion.div>
            </form>

            {/* Signup Link */}
            <div className="mt-6 text-center">
              <p className="text-slate-600">
                Don't have an account?{" "}
                <Link to="/signup/user" className="text-black hover:text-pink-700 font-medium">
                  Sign up here
                </Link>
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}
