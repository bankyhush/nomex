"use client";

import { useState } from "react";
import { Eye, EyeOff, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FaUserLock } from "react-icons/fa";
import { SiBlockchaindotcom } from "react-icons/si";
import Link from "next/link";

export default function ForgotPasswordForm() {
  const [email, setEmail] = useState("");

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-red-600 via-purple-700 to-purple-800 pb-0">
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
              Don't have an account?
            </span>
            <Link href="/auth/signup">
              <Button
                variant="outline"
                className="rounded-full cursor-pointer font-bold px-6 border-white/30 bg-transparent text-white hover:bg-white/10"
              >
                Sign up
              </Button>
            </Link>
          </div>
        </header>
      </div>

      {/* Security Notice */}
      <div className="px-6 md:px-8 mt-4 mb-6">
        <div className="bg-[#E3E7EF] backdrop-blur-sm rounded-2xl py-2 px-4 text-center max-w-lg mx-auto">
          <p className="flex justify-center items-center gap-1 text-[#677184] text-sm font-bold">
            Check that the URL is correct. <FaUserLock />{" "}
            https://login.cryptonomex.com
          </p>
        </div>
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
                  Forgot password
                </h1>
                <p className="text-gray-700 text-md font-medium">
                  We'll email you a link to recover your account
                </p>
              </div>

              {/* Form */}
              <form className="space-y-6">
                {/* Email */}
                <div className="space-y-2">
                  <Label htmlFor="email" className="font-bold text-slate-700">
                    Enter your email
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

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="w-full h-12 mt-8 cursor-pointer text-lg font-medium text-white bg-blue-500 rounded-3xl hover:bg-blue-600"
                  disabled={!email}
                >
                  Continue
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
