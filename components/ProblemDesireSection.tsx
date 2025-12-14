"use client";

import { X, Target } from "lucide-react";

export default function ProblemDesireSection() {
  const problems = [
    "Tập luyện mãi không thấy kết quả",
    "Thiếu động lực, dễ bỏ cuộc",
    "Không biết tập đúng cách",
    "Lịch trình bận rộn, khó sắp xếp",
  ];

  const desires = [
    "Cơ bắp rõ nét, săn chắc",
    "Giảm mỡ hiệu quả, dáng chuẩn",
    "Tự tin vào bản thân",
    "Kiên trì, không bỏ cuộc",
  ];

  return (
    <section className="py-24 sm:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-900 to-black" />

      {/* Diagonal accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-fire" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section title */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl mb-4 sm:mb-6 px-4">
              BẠN CÓ ĐANG GẶP{" "}
              <span className="bg-gradient-fire bg-clip-text text-white">
                NHỮNG VẤN ĐỀ NÀY?
              </span>
            </h2>
            <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto px-4">
              Tôi hiểu rõ những khó khăn bạn đang đối mặt. Và tôi có giải pháp.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Problems - Left side */}
            <div className="relative">
              <div className="absolute -left-4 top-0 bottom-0 w-1 bg-red-600/30" />

              <div className="mb-6 flex items-center gap-3">
                <div className="w-12 h-12 bg-red-600/20 border-2 border-red-600 flex items-center justify-center">
                  <X className="w-6 h-6 text-red-500" />
                </div>
                <h3 className="text-display text-3xl text-red-400">CÁC VẤN ĐỀ</h3>
              </div>

              <div className="space-y-4">
                {problems.map((problem, index) => (
                  <div
                    key={index}
                    className="group p-5 bg-zinc-900/50 border-l-4 border-red-600/50 hover:border-red-500 transition-all duration-300 hover:bg-zinc-800/50"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 mt-1 flex-shrink-0">
                        <div className="w-full h-full border-2 border-red-500/50 rotate-45" />
                      </div>
                      <p className="text-gray-300 text-lg flex-1">{problem}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Desires - Right side */}
            <div className="relative">
              <div className="absolute -right-4 top-0 bottom-0 w-1 bg-gradient-fire opacity-50" />

              <div className="mb-6 flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-fire flex items-center justify-center glow-orange">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-display text-3xl text-orange-400">ĐIỀU BẠN MONG MUỐN</h3>
              </div>

              <div className="space-y-4">
                {desires.map((desire, index) => (
                  <div
                    key={index}
                    className="group p-5 bg-gradient-to-r from-orange-900/10 to-transparent border-l-4 border-orange-500/50 hover:border-orange-400 transition-all duration-300 hover:from-orange-900/20"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 mt-1 flex-shrink-0">
                        <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
                          <path
                            d="M5 13l4 4L19 7"
                            stroke="currentColor"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-orange-500"
                          />
                        </svg>
                      </div>
                      <p className="text-gray-200 text-lg font-medium flex-1">{desire}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Transition statement */}
          <div className="mt-16 text-center">
            <div className="inline-block relative">
              <div className="absolute inset-0 bg-gradient-fire blur-2xl opacity-20" />
              <p className="relative text-2xl sm:text-3xl md:text-4xl font-bold text-white px-8 py-4">
                Hãy để chúng tôi giúp bạn{" "}
                <span className="text-display text-orange-400">CHUYỂN ĐỔI</span>
                {" "}từ vấn đề thành mục tiêu!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
