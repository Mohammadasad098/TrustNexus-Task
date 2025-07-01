import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { Mail, Lock, ArrowRight, Eye, EyeOff } from "lucide-react";
import LandingNavbar from "../../components/LandingNavbar";

export default function LoginDeveloper() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // Form is valid here
    navigate("/project");
  };

  return (
    <>
      <LandingNavbar />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 flex items-center justify-center p-4">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1, delayChildren: 0.2 },
            },
          }}
          className="max-w-md w-full"
        >
          {/* Header */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.5,
                  ease: [0.25, 0.46, 0.45, 0.94],
                },
              },
            }}
            className="text-center mb-8"
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Welcome Back
            </h1>
            <p className="text-slate-600">Sign in to your developer account</p>
          </motion.div>

          {/* Form */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.5,
                  ease: [0.25, 0.46, 0.45, 0.94],
                },
              },
            }}
            className="bg-white rounded-3xl p-8 shadow-xl border border-slate-200"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Google Button with real logo */}
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

              {/* Email Field */}
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
                        message: "Invalid email format",
                      },
                    })}
                    className={`pl-10 py-3 w-full rounded-xl border-2 ${errors.email ? "border-red-300" : "border-slate-200"
                      } focus:border-blue-400`}
                    placeholder="john@example.com"
                  />
                </div>
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
              </div>

              {/* Password Field */}
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
                      } focus:border-blue-400`}
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
                {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
              </div>

              {/* Remember & Forgot */}
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-blue-600 border-slate-300 rounded"
                  />
                  <label htmlFor="remember-me" className="ml-2 text-sm text-slate-700">
                    Remember me
                  </label>
                </div>
                <span className="text-sm text-blue-600 hover:text-blue-700 cursor-pointer">
                  Forgot password?
                </span>
              </div>

              {/* Submit Button */}
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-3 rounded-xl font-semibold flex justify-center items-center gap-2"
                >
                  Sign In
                  <ArrowRight className="w-5 h-5" />
                </button>
              </motion.div>
            </form>

            <div className="mt-6 text-center">
              <p className="text-slate-600">
                Don't have an account?{" "}
                <Link
                  to="/signup/developer"
                  className="text-black hover:text-pink-700 font-medium"
                >
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
