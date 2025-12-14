"use client";

import { Users, ClipboardList, Dumbbell, Shield, Calendar } from "lucide-react";

export default function BenefitsSection() {
  const benefits = [
    {
      icon: Users,
      title: "Huấn luyện 1-1 chuyên sâu",
      description: "PT cá nhân giàu kinh nghiệm, được chứng nhận quốc tế, tập trung 100% vào bạn.",
    },
    {
      icon: ClipboardList,
      title: "Lộ trình 100% cá nhân hóa",
      description: "Kế hoạch tập và dinh dưỡng được thiết kế riêng dựa trên mục tiêu và thể trạng của bạn.",
    },
    {
      icon: Dumbbell,
      title: "Theo dõi tiến độ chi tiết",
      description: "Đo lường và điều chỉnh chương trình liên tục để đảm bảo kết quả tối ưu.",
    },
    {
      icon: Shield,
      title: "Cam kết trách nhiệm cao",
      description: "Tôi chịu trách nhiệm cho kết quả của bạn, không chỉ hướng dẫn mà còn theo sát từng bước.",
    },
    {
      icon: Calendar,
      title: "Lịch tập linh hoạt tuyệt đối",
      description: "Sắp xếp buổi tập phù hợp với lịch trình của bạn, không bị ràng buộc giờ giấc cố định.",
    },
  ];

  return (
    <section className="py-24 sm:py-32 relative overflow-hidden diagonal-lines">
      <div className="absolute inset-0 bg-black" />

      {/* Geometric accents */}
      <div className="absolute top-20 right-10 w-40 h-40 border border-orange-500/20 transform rotate-45" />
      <div className="absolute bottom-20 left-10 w-32 h-32 border border-orange-500/20 transform rotate-12" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <div className="inline-block px-4 py-2 bg-orange-500/10 border border-orange-500/30 rounded-full text-orange-400 text-sm font-semibold tracking-wide mb-6">
              LỢI ÍCH & TÍNH NĂNG
            </div>
            <h2 className="text-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl mb-4 sm:mb-6 px-4">
              TẠI SAO CHỌN{" "}
              <span className="bg-gradient-fire bg-clip-text text-white">
                HUẤN LUYỆN CÁ NHÂN?
              </span>
            </h2>
            <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto px-4">
              Tôi cung cấp mọi thứ bạn cần để đạt được mục tiêu fitness nhanh nhất và hiệu quả nhất.
            </p>
          </div>

          {/* Benefits grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className="group relative p-8 bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 hover:border-orange-500/50 transition-all duration-500 overflow-hidden"
                >
                  {/* Hover gradient effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 to-orange-500/0 group-hover:from-orange-500/5 group-hover:to-orange-500/10 transition-all duration-500" />

                  {/* Diagonal line accent */}
                  <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-orange-500/0 group-hover:border-orange-500/30 transition-all duration-500" />

                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="mb-6 inline-flex">
                      <div className="p-4 bg-gradient-fire group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-display text-2xl text-white mb-3 group-hover:text-orange-400 transition-colors duration-300">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                      {benefit.description}
                    </p>
                  </div>

                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-fire group-hover:w-full transition-all duration-500" />
                </div>
              );
            })}
          </div>

          {/* Call to action */}
          <div className="mt-16 text-center">
            <p className="text-xl text-gray-300 mb-6">
              Trải nghiệm sự khác biệt ngay hôm nay
            </p>
            <a
              href="#register"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('register')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-block px-10 py-4 bg-gradient-fire text-white font-bold text-lg rounded-none glow-orange-hover hover:scale-105 transition-all duration-300"
            >
              ĐĂNG KÝ TƯ VẤN MIỄN PHÍ
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
