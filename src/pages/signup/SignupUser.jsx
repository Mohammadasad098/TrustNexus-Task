import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import {
  Mail,
  Lock,
  User,
  ArrowRight,
  Eye,
  EyeOff,
  Building,
} from "lucide-react";
import LandingNavbar from "../../components/LandingNavbar";

export default function SignupUser() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    navigate("/login/user");
  };

  const password = watch("password");

  return (
    <>
      <LandingNavbar />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 py-12 px-4">
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
          className="max-w-2xl mx-auto"
        >
          {/* Header */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            }}
            className="text-center mb-8"
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Join as a Client
            </h1>
            <p className="text-slate-600">
              Create your client profile and start posting amazing projects
            </p>
          </motion.div>

          {/* Form */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            }}
            className="bg-white rounded-3xl p-8 shadow-xl border border-slate-200"
          >
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
                  <div className="w-full border-t border-slate-200" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-white text-slate-500">
                    Or continue with email
                  </span>
                </div>
              </div>

              {/* Full Name & Email */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="text-slate-700 font-medium">Full Name *</label>
                  <div className="relative mt-2">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input
                      type="text"
                      {...register("fullName", { required: "Full name is required" })}
                      className={`pl-10 py-3 rounded-xl border-2 w-full ${errors.fullName ? "border-red-300" : "border-slate-200"
                        } focus:border-slate-400`}
                      placeholder="John Doe"
                    />
                  </div>
                  {errors.fullName && (
                    <p className="text-red-500 text-sm">{errors.fullName.message}</p>
                  )}
                </div>

                <div>
                  <label className="text-slate-700 font-medium">Email Address *</label>
                  <div className="relative mt-2">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input
                      type="email"
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^\S+@\S+\.\S+$/,
                          message: "Email is invalid",
                        },
                      })}
                      className={`pl-10 py-3 rounded-xl border-2 w-full ${errors.email ? "border-red-300" : "border-slate-200"
                        } focus:border-slate-400`}
                      placeholder="john@company.com"
                    />
                  </div>
                  {errors.email && (
                    <p className="text-red-500 text-sm">{errors.email.message}</p>
                  )}
                </div>
              </div>

              {/* Password Fields */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="text-slate-700 font-medium">Password *</label>
                  <div className="relative mt-2">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input
                      type={showPassword ? "text" : "password"}
                      {...register("password", {
                        required: "Password is required",
                        minLength: {
                          value: 8,
                          message: "Password must be at least 8 characters",
                        },
                      })}
                      className={`pl-10 pr-10 py-3 rounded-xl border-2 w-full ${errors.password ? "border-red-300" : "border-slate-200"
                        } focus:border-slate-400`}
                      placeholder="••••••••"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                  {errors.password && (
                    <p className="text-red-500 text-sm">{errors.password.message}</p>
                  )}
                </div>

                <div>
                  <label className="text-slate-700 font-medium">Confirm Password *</label>
                  <div className="relative mt-2">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      {...register("confirmPassword", {
                        required: "Confirm your password",
                        validate: (value) =>
                          value === password || "Passwords do not match",
                      })}
                      className={`pl-10 pr-10 py-3 rounded-xl border-2 w-full ${errors.confirmPassword ? "border-red-300" : "border-slate-200"
                        } focus:border-slate-400`}
                      placeholder="••••••••"
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                    >
                      {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                  {errors.confirmPassword && (
                    <p className="text-red-500 text-sm">{errors.confirmPassword.message}</p>
                  )}
                </div>
              </div>

              {/* Company Field */}
              <div>
                <label className="text-slate-700 font-medium">
                  Company / Organization
                </label>
                <div className="relative mt-2">
                  <Building className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input
                    type="text"
                    {...register("company")}
                    className="pl-10 py-3 rounded-xl border-2 border-slate-200 w-full focus:border-slate-400"
                    placeholder="Company Name"
                  />
                </div>
              </div>

              {/* Project Description */}
              <div>
                <label className="text-slate-700 font-medium">Project Description</label>
                <textarea
                  rows={4}
                  {...register("projectDescription")}
                  className="mt-2 py-3 px-4 rounded-xl border-2 border-slate-200 w-full focus:border-slate-400 resize-none"
                  placeholder="Tell us about the projects you want to build..."
                />
              </div>

              {/* Submit Button */}
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-3 rounded-xl font-semibold flex justify-center items-center gap-2"
                >
                  Create Client Account
                  <ArrowRight className="w-5 h-5" />
                </button>
              </motion.div>
            </form>

            <div className="mt-6 text-center">
              <p className="text-slate-600">
                Already have an account?{" "}
                <Link
                  to="/login/user"
                  className="text-black hover:text-pink-700 font-medium"
                >
                  Sign in here
                </Link>
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}
