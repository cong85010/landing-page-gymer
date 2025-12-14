"use client";

import { ArrowRight, Play } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden diagonal-lines">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-dark opacity-90" />

      {/* Diagonal accent bars */}
      <div className="absolute top-20 -right-32 w-96 h-2 bg-gradient-fire transform rotate-45 opacity-20" />
      <div className="absolute bottom-40 -left-32 w-96 h-2 bg-gradient-fire transform rotate-45 opacity-20" />

      {/* Large geometric shape background */}
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] border-2 border-orange-500/10 transform rotate-45" />
      <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] border-2 border-orange-500/10 transform rotate-12" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Small badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-6"
          >
            <span className="px-4 py-2 bg-orange-500/10 border border-orange-500/30 rounded-full text-orange-400 text-xs md:text-sm font-semibold tracking-wide">
              ✦ HUẤN LUYỆN VIÊN CÁ NHÂN CHUYÊN NGHIỆP
            </span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl mb-6"
          >
            <span className="block">RÈN LUYỆN</span>
            <span className="block bg-gradient-fire bg-clip-text text-white">
              SỨC MẠNH
            </span>
            <span className="block">& Ý CHÍ</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 sm:mb-12 max-w-3xl mx-auto font-light leading-relaxed px-4"
          >
            Huấn luyện viên cá nhân 1-1 giúp bạn <span className="text-orange-400 font-semibold">biến đổi cơ thể</span>,
            {" "}<span className="text-orange-400 font-semibold">xây dựng sức mạnh</span>, và{" "}
            <span className="text-orange-400 font-semibold">chinh phục chính mình</span>.
            <br />
            Lộ trình cá nhân hóa 100% phù hợp với mục tiêu của bạn.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-stretch sm:items-center px-4 w-full max-w-2xl mx-auto"
          >
            <a
              href="#register"
              className="group relative px-6  py-4 sm:py-5 bg-gradient-fire text-white font-bold text-base sm:text-lg rounded-none overflow-hidden glow-orange-hover transition-all duration-300 hover:scale-105 flex-1 sm:flex-initial sm:min-w-[280px]"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('register')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                ĐĂNG KÝ TƯ VẤN MIỄN PHÍ
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
            </a>

            <a
              href="#success-stories"
              className="group px-6  py-4 sm:py-5 border-2 border-orange-500 text-orange-400 font-bold text-base sm:text-lg rounded-none hover:bg-orange-500 hover:text-white transition-all duration-300 flex-1 sm:flex-initial sm:min-w-[280px]"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('success-stories')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <span className="flex items-center justify-center gap-2">
                <Play className="w-5 h-5" />
                <span className="hidden xs:inline">XEM THÀNH CÔNG CỦA HỌC VIÊN</span>
                <span className="inline xs:hidden">HỌC VIÊN THÀNH CÔNG</span>
              </span>
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="mt-12 sm:mt-16 md:mt-20 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-3xl mx-auto px-4"
          >
            {[
              { number: "500+", label: "Học viên đã biến đổi" },
              { number: "98%", label: "Đạt mục tiêu trong 3 tháng" },
              { number: "10+", label: "Năm kinh nghiệm" },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center opacity-0 animate-reveal"
                style={{ animationDelay: `${0.8 + index * 0.1}s` }}
              >
                <div className="metric-number mb-2">{stat.number}</div>
                <div className="text-gray-400 text-sm uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

    </section>
  );
}
