"use client";

import { useState } from "react";
import { Eye, EyeOff, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { SiBlockchaindotcom } from "react-icons/si";
import Link from "next/link";

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agreeToTerms, setAgreeToTerms] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-red-600 via-purple-700 to-purple-800 pb-8">
        <header className="flex items-center justify-between px-4 py-6 font-normal md:px-6">
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center w-8 h-8 rounded">
              <SiBlockchaindotcom className="w-8 h-8" />
            </div>
            <span className="text-xl font-semibold text-white">
              Cryptonomex.com
            </span>
          </div>

          <div className="flex items-center gap-4 text-white">
            <span className="hidden text-md sm:inline">
              Already have an account?
            </span>
            <Link href="/auth/login">
              {" "}
              <Button
                variant="outline"
                className="rounded-full cursor-pointer font-bold px-6 border-white/30 bg-transparent text-white hover:bg-white/10"
              >
                Log in
              </Button>
            </Link>
          </div>
        </header>
      </div>

      {/* Main Content */}
      <div className="-mt-11 min-h-screen bg-gray-100 rounded-t-3xl">
        <div className="flex justify-center px-4 pt-8 pb-16 overflow-y-auto">
          <div className="w-full max-w-2xl">
            <div className="p-8 bg-white rounded-2xl shadow-lg font-normal">
              {/* Avatar */}
              <div className="flex justify-center mb-6">
                <div className="flex items-center justify-center w-16 h-16 bg-slate-800 rounded-full">
                  <User className="w-8 h-8 text-white" />
                </div>
              </div>

              {/* Title */}
              <div className="mb-8 text-center">
                <h1 className="mb-2 text-2xl font-semibold text-slate-800">
                  Let's get started
                </h1>
                <p className="text-slate-600">
                  Enter your email address and password.
                </p>
              </div>

              {/* Form */}
              <form className="space-y-6">
                {/* Email */}
                <div className="space-y-2">
                  <Label htmlFor="email" className="font-bold text-slate-700">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="h-12 bg-slate-50 border-slate-200 text-black rounded-lg"
                  />
                </div>

                {/* Create Password */}
                <div className="space-y-2">
                  <Label
                    htmlFor="password"
                    className="font-bold text-slate-700"
                  >
                    Create password
                  </Label>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Minimum of 8 characters"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="h-12 pr-12 bg-slate-50 text-black border-slate-200 rounded-lg"
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="absolute top-1/2 right-2 -translate-y-1/2 h-8 w-8 p-0 hover:bg-transparent"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <EyeOff className="w-4 h-4 text-slate-400" />
                      ) : (
                        <Eye className="w-4 h-4 text-slate-400" />
                      )}
                    </Button>
                  </div>
                </div>

                {/* Confirm Password */}
                <div className="space-y-2">
                  <Label
                    htmlFor="confirmPassword"
                    className="font-bold text-slate-700"
                  >
                    Confirm password
                  </Label>
                  <div className="relative">
                    <Input
                      id="confirmPassword"
                      type={showConfirmPassword ? "text" : "password"}
                      placeholder="Re-enter your password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className="h-12 pr-12 bg-slate-50 text-black border-slate-200 rounded-lg"
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="absolute top-1/2 right-2 -translate-y-1/2 h-8 w-8 p-0 hover:bg-transparent"
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                    >
                      {showConfirmPassword ? (
                        <EyeOff className="w-4 h-4 text-slate-400" />
                      ) : (
                        <Eye className="w-4 h-4 text-slate-400" />
                      )}
                    </Button>
                  </div>
                </div>

                {/* Terms Checkbox */}
                <div className="flex justify-start cursor-pointer items-center pt-2 space-x-3">
                  <Checkbox
                    id="terms"
                    checked={agreeToTerms}
                    onCheckedChange={(checked) =>
                      setAgreeToTerms(checked as boolean)
                    }
                    className="mt-0.5 font-semibold w-6 h-6 rounded-md text-blue-500 border-slate-300 focus:ring-blue-500 focus:ring-offset-0 hover:bg-blue-50 disabled:cursor-not-allowed disabled:opacity-50"
                  />
                  <Label
                    htmlFor="terms"
                    className="text-sm leading-relaxed text-slate-600 font-semibold"
                  >
                    I certify I am 18 years of age or older and agree to the
                    Cryptonomex.com.
                  </Label>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="w-full h-12 mt-8 cursor-pointer text-lg font-medium text-white bg-blue-500 rounded-3xl hover:bg-blue-600"
                  disabled={
                    !email || !password || !confirmPassword || !agreeToTerms
                  }
                >
                  Next
                </Button>
              </form>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="px-4 pb-6 text-sm text-center text-slate-500">
          <div className="flex flex-col items-center justify-center gap-2 sm:flex-row sm:gap-4">
            <span>
              © Cryptonomex.com. All rights reserved. Version v5.0.128
            </span>
          </div>
        </footer>
      </div>
    </div>
  );
}
