"use client";

import { Check, ArrowRight } from "lucide-react";

export default function ProgramsSection() {
  const programs = [
    {
      name: "Beginner Foundation",
      subtitle: "Khởi đầu vững chắc",
      description: "Chương trình hoàn hảo cho người mới bắt đầu. Học động tác cơ bản, xây dựng nền tảng sức mạnh và thói quen tập luyện.",
      duration: "8-12 tuần",
      features: [
        "Hướng dẫn chi tiết từng động tác",
        "Giám sát kỹ thuật 1-1",
        "Kế hoạch dinh dưỡng cơ bản",
        "Tăng sức mạnh dần dần",
        "Xây dựng thói quen bền vững",
      ],
      ideal: "Người mới bắt đầu hoàn toàn",
      color: "from-blue-600 to-cyan-600",
      borderColor: "border-cyan-500",
    },
    {
      name: "Fat Loss Program",
      subtitle: "Đốt mỡ hiệu quả",
      description: "Chương trình tối ưu hóa giảm mỡ, giữ cơ. Kết hợp cardio thông minh và tập tạ để đạt body săn chắc, rõ nét.",
      duration: "12-16 tuần",
      features: [
        "HIIT & cardio tối ưu",
        "Tập tạ duy trì cơ bắp",
        "Kế hoạch dinh dưỡng giảm cân",
        "Theo dõi % mỡ cơ thể",
        "Tư vấn 1-1 hàng tuần",
      ],
      ideal: "Người muốn giảm mỡ, có săn chắc",
      color: "from-orange-600 to-red-600",
      borderColor: "border-orange-500",
      featured: true,
    },
    {
      name: "Muscle Building",
      subtitle: "Tăng cơ bắp mạnh mẽ",
      description: "Chương trình tăng khối cơ chuyên sâu. Progressive overload, ăn uống điều chỉnh, phục hồi tối ưu để xây dựng cơ bắp.",
      duration: "16-24 tuần",
      features: [
        "Lộ trình tăng tạ khoa học",
        "Split training chuyên sâu",
        "Kế hoạch dinh dưỡng tăng cơ",
        "Theo dõi sức mạnh & kích thước",
        "Bổ sung supplement",
      ],
      ideal: "Người muốn tăng cơ, xây dựng khối lượng",
      color: "from-purple-600 to-pink-600",
      borderColor: "border-purple-500",
    },
    {
      name: "Personal Training",
      subtitle: "Huấn luyện cá nhân 1-1",
      description: "Chương trình tùy chỉnh 100% theo mục tiêu cá nhân. Huấn luyện viên riêng theo sát từng buổi tập.",
      duration: "Linh hoạt",
      features: [
        "1-1 với PT chuyên nghiệp",
        "Lộ trình hoàn toàn cá nhân hóa",
        "Linh hoạt lịch tập",
        "Kết quả nhanh nhất",
        "Theo dõi sát sao tiến độ",
      ],
      ideal: "Ai cần sự tập trung tối đa",
      color: "from-yellow-600 to-orange-600",
      borderColor: "border-yellow-500",
    },
  ];

  return (
    <section className="py-24 sm:py-32 relative overflow-hidden diagonal-lines">
      <div className="absolute inset-0 bg-black" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <div className="inline-block px-4 py-2 bg-orange-500/10 border border-orange-500/30 rounded-full text-orange-400 text-sm font-semibold tracking-wide mb-6">
              CHƯƠNG TRÌNH TẬP LUYỆN
            </div>
            <h2 className="text-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl mb-4 sm:mb-6 px-4">
              CHỌN{" "}
              <span className="bg-gradient-fire bg-clip-text text-white">
                CHƯƠNG TRÌNH
              </span>
              {" "}PHÙ HỢP
            </h2>
            <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto px-4">
              Dù mục tiêu của bạn là gì, tôi có chương trình phù hợp để giúp bạn đạt được.
            </p>
          </div>

          {/* Programs grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {programs.map((program, index) => (
              <div
                key={index}
                className={`relative group bg-gradient-to-br from-zinc-900 to-zinc-950 border-2 ${
                  program.featured ? "border-orange-500" : "border-zinc-800"
                } hover:border-orange-500/50 transition-all duration-500 overflow-hidden ${
                  program.featured ? "md:transform md:scale-105" : ""
                }`}
              >
                {/* Featured badge */}
                {program.featured && (
                  <div className="absolute top-0 right-0 px-6 py-2 bg-gradient-fire text-white text-xs font-bold tracking-wider">
                    PHỔ BIẾN NHẤT
                  </div>
                )}

                {/* Gradient accent */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${program.color}`} />

                <div className="p-8 sm:p-10">
                  {/* Header */}
                  <div className="mb-6">
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`w-12 h-1 bg-gradient-to-r ${program.color}`} />
                      <span className="text-gray-400 text-sm uppercase tracking-wider">
                        {program.duration}
                      </span>
                    </div>
                    <h3 className="text-display text-4xl text-white mb-2">
                      {program.name}
                    </h3>
                    <p className="text-orange-400 text-lg font-semibold mb-4">
                      {program.subtitle}
                    </p>
                    <p className="text-gray-400 leading-relaxed">
                      {program.description}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="space-y-3 mb-8">
                    {program.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="w-5 h-5 mt-0.5 flex-shrink-0">
                          <div className={`w-full h-full bg-gradient-to-br ${program.color} flex items-center justify-center`}>
                            <Check className="w-3 h-3 text-white" strokeWidth={3} />
                          </div>
                        </div>
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Ideal for */}
                  <div className="mb-8 p-4 bg-zinc-800/50 border-l-4 border-orange-500">
                    <div className="text-gray-400 text-sm mb-1">Phù hợp với:</div>
                    <div className="text-white font-semibold">{program.ideal}</div>
                  </div>

                  {/* CTA Button */}
                  <a
                    href="#register"
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById('register')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className={`group/btn w-full py-4 border-2 ${program.borderColor} ${
                      program.featured
                        ? "bg-gradient-fire text-white glow-orange"
                        : "bg-transparent text-white hover:bg-gradient-fire"
                    } font-bold transition-all duration-300 hover:scale-105 block`}
                  >
                    <span className="flex items-center justify-center gap-2">
                      CHỌN CHƯƠNG TRÌNH NÀY
                      <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                    </span>
                  </a>
                </div>

                {/* Hover glow effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${program.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`} />
              </div>
            ))}
          </div>

          {/* Bottom note */}
          <div className="mt-16 text-center">
            <p className="text-gray-400 mb-4">
              Không chắc chương trình nào phù hợp?
            </p>
            <a
              href="#register"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('register')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-orange-400 font-semibold hover:text-orange-300 transition-colors underline"
            >
              Đặt lịch tư vấn miễn phí với tôi ngay
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
