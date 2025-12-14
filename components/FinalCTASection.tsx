"use client";

import { ArrowRight, Clock, Users, Trophy } from "lucide-react";
import { motion } from "framer-motion";

export default function FinalCTASection() {
  return (
    <section className="py-24 sm:py-32 relative overflow-hidden">
      {/* Dynamic background */}
      <div className="absolute inset-0 bg-black" />
      <div className="absolute inset-0 bg-gradient-fire opacity-10" />

      {/* Animated grid pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(255, 107, 53, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 107, 53, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }} />
      </div>

      {/* Large geometric shapes */}
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] border-4 border-orange-500/20 transform rotate-45" />
      <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] border-4 border-orange-500/20 transform rotate-12" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Main CTA content */}
          <div className="text-center mb-16">
            {/* Urgency badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-red-600/20 border-2 border-red-500 mb-8"
            >
              <Clock className="w-5 h-5 text-red-400 animate-pulse" />
              <span className="text-red-400 font-bold uppercase tracking-wide">
                Ưu đãi có hạn - Chỉ còn 5 suất miễn phí trong tháng này
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl mb-8"
            >
              <span className="block text-white">ĐỪNG CHỜ ĐỢI</span>
              <span className="block bg-gradient-fire bg-clip-text text-white">
                HÀNH ĐỘNG!
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl sm:text-2xl md:text-3xl text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto"
            >
              Mỗi ngày trì hoãn là một ngày bạn chưa tiến gần hơn đến mục tiêu.
              <br />
              <span className="text-orange-400 font-bold">
                Hành trình thay đổi bắt đầu từ hôm nay.
              </span>
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12"
            >
              <a
                href="#register"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('register')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="group relative px-12 py-6 bg-gradient-fire text-white font-bold text-xl uppercase tracking-wide overflow-hidden glow-orange hover:scale-105 transition-all duration-300 min-w-[320px] block"
              >
                <span className="relative z-10 flex items-center justify-center gap-3">
                  BẮT ĐẦU NGAY
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 opacity-10" />
              </a>
            </motion.div>

            {/* Social proof stats */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto"
            >
              {[
                { icon: Users, number: "500+", label: "Học viên tin tưởng" },
                { icon: Trophy, number: "98%", label: "Đạt mục tiêu" },
                { icon: Clock, number: "10+", label: "Năm kinh nghiệm" },
              ].map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={index}
                    className="relative p-6 bg-zinc-900/50 border border-zinc-800 hover:border-orange-500/50 transition-all duration-300 group"
                  >
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-fire transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                    <Icon className="w-10 h-10 text-orange-500 mb-3 mx-auto" />
                    <div className="metric-number text-4xl mb-1">{stat.number}</div>
                    <div className="text-gray-400 text-sm uppercase tracking-wider">
                      {stat.label}
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </div>

          {/* Motivational closing */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="relative p-12 bg-gradient-to-r from-zinc-900/80 via-orange-900/20 to-zinc-900/80 border-2 border-orange-500/30"
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-fire" />
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-fire" />

            <div className="text-center">
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                "Cơ thể bạn có thể chịu đựng được nhiều hơn bạn nghĩ.
                <br />
                <span className="text-orange-400">Chính tâm trí bạn mới là điều cần thuyết phục."</span>
              </p>
              <p className="text-gray-400 text-lg">
                Hãy để tôi giúp bạn vượt qua mọi giới hạn và đạt được mục tiêu.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
