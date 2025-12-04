"use client";

import { logo, comingSoonGoogle, hero1 } from "@/assets/images";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import { staggerContainer, scaleIn, fadeInUp } from "@/utils/animations";

const DownloadPage = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="h-screen w-full flex flex-col items-center"
    >
      <motion.div
        variants={staggerContainer}
        style={{
          backgroundImage: `url(${hero1.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          height: "100%",
        }}
        className="w-full px-4 xs:px-6 py-12 flex flex-col items-center mds:px-12 md:px-16 lgss:px-12 xl:px-16 xxxl:px-[250px]"
      >
        <motion.div variants={scaleIn}>
          <Image
            src={logo}
            alt="Celler Logo"
            className="w-[180px] my-8"
            priority
            quality={75}
          />
        </motion.div>

        <motion.div
          variants={fadeInUp}
          className="w-full max-w-[600px] space-y-6 mt-10 bg-[#161834] rounded-2xl p-6"
        >
          <h2 className="text-white text-[20px] font-bold text-left mb-8">
            Select a Download Option
          </h2>

          {/* Android Section */}
          <div className="bg-[#252750] border border-[#474B7A]  rounded-2xl p-6 relative">
            <div className="absolute left-1/2 -translate-x-1/2 -top-4 bg-[#3A66FF] text-white text-center py-2 px-4 rounded text-[12px] font-bold tracking-widest">
              ANDROID
            </div>
            <div className="mt-4 flex justify-center">
              <p className="text-sm text-gray-300">
                Click the link to download our{" "}
                <Link
                  href=https://drive.google.com/drive/folders/1TQBSx9U2aW76YtVP3EUxxYwahegs_Jyk?usp=share_link"
                  className="text-[#3A66FF] hover:text-[#5A86FF]"
                >
                  APK
                </Link>{" "}
              </p>
            </div>
          </div>

          {/* iOS Section */}
          <div className="bg-[#252750] border border-[#474B7A]   rounded-2xl p-6 relative">
            <div className="absolute left-1/2 -translate-x-1/2 -top-4 bg-[#3A66FF] text-white text-center py-2 px-4 rounded text-[12px] font-bold tracking-widest">
              IOS
            </div>
            <div className="space-y-4 mt-3">
              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-sm flex-shrink-0 text-white">
                  1
                </span>
                <p className="text-sm text-gray-300">
                  Click the link to install{" "}
                  <Link
                    href="https://apps.apple.com/ng/app/celler/id6749920384"
                    className="text-[#3A66FF] hover:text-[#5A86FF]"
                  >
                    Celler App
                  </Link>{" "}
                  on Appstore
                </p>
              </div>
            </div>
          </div>

          {/* PWA Section */}
          <div className="bg-[#252750] border border-[#474B7A]   rounded-2xl p-6 relative">
            <div className="absolute left-1/2 -translate-x-1/2 -top-4 bg-[#3A66FF] text-white text-center py-2 px-4 rounded text-[12px] font-bold tracking-widest">
              PWA
            </div>
            <div className="space-y-4 mt-3">
              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-sm flex-shrink-0 text-white">
                  1
                </span>
                <p className="text-sm text-gray-300">
                  Got to{" "}
                  <Link
                    href="https://web.celler.app"
                    className="text-[#3A66FF] hover:text-[#5A86FF]"
                  >
                    web.celler.app
                  </Link>{" "}
                  in your browser
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-sm flex-shrink-0 text-white">
                  2
                </span>
                <p className="text-sm text-gray-300">
                  Tap the Share icon (it looks like a square with an arrow
                  pointing out from the top) at the bottom part of the browser.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-sm flex-shrink-0 text-white">
                  3
                </span>
                <p className="text-sm text-gray-300">
                  Scroll down and tap &quot;Add to Home Screen&quot;
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-sm flex-shrink-0 text-white">
                  4
                </span>
                <p className="text-sm text-gray-300">
                  Name the shortcut then tap &quot;Add&quot;
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-sm flex-shrink-0 text-white">
                  5
                </span>
                <p className="text-sm text-gray-300">
                  The shortcut will be created and placed on your home screen
                  where the other applications are.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          className="mt-12 flex justify-center gap-4"
        >
          <Image
            src={comingSoonGoogle}
            alt="Play Store"
            className="h-12 w-auto"
          />
        </motion.div>

        <Link
          href="/"
          className="block text-center mt-10  underline text-[16px] font-semibold text-gray-100 transition-colors"
        >
          Back To Website
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default DownloadPage;
