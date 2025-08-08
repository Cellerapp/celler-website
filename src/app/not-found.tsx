"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { IoHome, IoArrowBack } from "react-icons/io5";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0C0D1D] flex items-center justify-center px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          {/* 404 Number */}
          <div className="relative mb-8">
            <h1 className="text-[120px] md:text-[180px] font-bold text-transparent bg-gradient-to-r from-[#3A66FF] to-[#9C9DCE] bg-clip-text">
              404
            </h1>
            <div className="absolute inset-0 bg-gradient-to-r from-[#3A66FF]/20 to-[#9C9DCE]/20 blur-3xl -z-10"></div>
          </div>

          {/* Illustration */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <div className="relative w-64 h-64 mx-auto">
              {/* Floating elements */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-br from-[#3A66FF] to-[#9C9DCE] rounded-full opacity-60 animate-pulse"></div>
              <div className="absolute top-8 right-8 w-8 h-8 bg-[#3A66FF] rounded-full opacity-40 animate-bounce"></div>
              <div className="absolute bottom-8 left-8 w-6 h-6 bg-[#9C9DCE] rounded-full opacity-50 animate-ping"></div>

              {/* Main illustration */}
              <div className="relative w-full h-full flex items-center justify-center">
                <div className="w-32 h-32 border-4 border-[#3A66FF] rounded-full flex items-center justify-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#3A66FF] to-[#9C9DCE] rounded-full flex items-center justify-center">
                    <div className="w-8 h-8 bg-[#0C0D1D] rounded-full"></div>
                  </div>
                </div>

                {/* Orbiting elements */}
                <div className="absolute inset-0 animate-spin">
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#3A66FF] rounded-full"></div>
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#9C9DCE] rounded-full"></div>
                  <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-[#3A66FF] rounded-full"></div>
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-[#9C9DCE] rounded-full"></div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Error Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Page Not Found
            </h2>
            <p className="text-[#9C9DCE] text-lg max-w-md mx-auto">
              Oops! The page you&apos;re looking for seems to have wandered off
              into the digital void.
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link
              href="/"
              className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#3A66FF] to-[#3A66FF]/80 hover:from-[#3A66FF]/90 hover:to-[#3A66FF]/70 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 border border-[#3A66FF]/30"
            >
              <IoHome className="text-lg" />
              Go Home
            </Link>

            <button
              onClick={() => window.history.back()}
              className="flex items-center gap-2 px-8 py-4 bg-transparent border-2 border-[#3D3D3D] hover:border-[#3A66FF] text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105"
            >
              <IoArrowBack className="text-lg" />
              Go Back
            </button>
          </motion.div>

          {/* Decorative elements */}
          <div className="absolute top-20 left-10 w-2 h-2 bg-[#3A66FF] rounded-full opacity-60 animate-pulse"></div>
          <div className="absolute top-40 right-20 w-3 h-3 bg-[#9C9DCE] rounded-full opacity-40 animate-bounce"></div>
          <div className="absolute bottom-20 left-20 w-2 h-2 bg-[#3A66FF] rounded-full opacity-50 animate-ping"></div>
          <div className="absolute bottom-40 right-10 w-3 h-3 bg-[#9C9DCE] rounded-full opacity-30 animate-pulse"></div>
        </motion.div>
      </div>
    </div>
  );
}
