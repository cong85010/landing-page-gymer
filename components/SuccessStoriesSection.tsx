"use client";

import { TrendingUp, Award, Zap } from "lucide-react";

export default function SuccessStoriesSection() {
  const stories = [
    {
      name: "Minh Tuấn",
      age: 28,
      job: "Nhân viên văn phòng",
      timeframe: "4 tháng",
      achievement: "Giảm 15kg, tăng 5kg cơ",
      stats: [
        { label: "Cân nặng", before: "85kg", after: "70kg" },
        { label: "Mỡ cơ thể", before: "28%", after: "15%" },
      ],
      quote: "Tôi đã thử nhiều phòng gym nhưng chỉ ở GYMER tôi mới thấy kết quả thực sự. Huấn luyện viên tận tâm, kế hoạch tập rõ ràng, và quan trọng nhất là tôi không bao giờ cảm thấy buồn chán.",
      icon: TrendingUp,
      color: "orange",
    },
    {
      name: "Thu Hà",
      age: 24,
      job: "Marketing Manager",
      timeframe: "3 tháng",
      achievement: "Giảm 12kg, vòng eo -10cm",
      stats: [
        { label: "Cân nặng", before: "68kg", after: "56kg" },
        { label: "Vòng eo", before: "80cm", after: "70cm" },
      ],
      quote: "Là người bận rộn, tôi rất trân trọng sự linh hoạt của GYMER. Lịch tập cá nhân hóa phù hợp hoàn hảo với công việc của tôi. Giờ tôi tự tin hơn rất nhiều!",
      icon: Award,
      color: "yellow",
    },
    {
      name: "Đức Anh",
      age: 32,
      job: "Kỹ sư IT",
      timeframe: "6 tháng",
      achievement: "Tăng 10kg cơ, tự tin tối đa",
      stats: [
        { label: "Cân nặng", before: "65kg", after: "75kg" },
        { label: "Sức mạnh", before: "Squat 60kg", after: "Squat 120kg" },
      ],
      quote: "Từ một người gầy yếu, giờ tôi có thân hình như mơ. GYMER không chỉ thay đổi cơ thể tôi mà còn thay đổi cả tư duy và lối sống của tôi. Đây là khoản đầu tư tốt nhất!",
      icon: Zap,
      color: "red",
    },
  ];

  return (
    <section id="success-stories" className="py-24 sm:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-black to-zinc-950" />

      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <div className="inline-block px-4 py-2 bg-orange-500/10 border border-orange-500/30 rounded-full text-orange-400 text-sm font-semibold tracking-wide mb-6">
              CHUYỂN ĐỔI THỰC SỰ
            </div>
            <h2 className="text-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl mb-4 sm:mb-6 px-4">
              CÂU CHUYỆN{" "}
              <span className="bg-gradient-fire bg-clip-text text-white">
                THÀNH CÔNG
              </span>
            </h2>
            <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto px-4">
              Những con người thực, những kết quả thực, những chuyển đổi đáng kinh ngạc.
            </p>
          </div>

          {/* Stories */}
          <div className="space-y-12">
            {stories.map((story, index) => {
              const Icon = story.icon;
              return (
                <div
                  key={index}
                  className="group relative bg-gradient-to-br from-zinc-900/80 to-zinc-950/80 border border-zinc-800 overflow-hidden hover:border-orange-500/50 transition-all duration-500"
                >
                  {/* Diagonal accent line */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-fire" />

                  <div className="grid lg:grid-cols-3 gap-8 p-8 sm:p-12">
                    {/* Left: Profile & Stats */}
                    <div className="space-y-6">
                      {/* Profile */}
                      <div>
                        <div className="flex items-start gap-4 mb-4">
                          <div className="w-16 h-16 bg-gradient-fire flex items-center justify-center glow-orange">
                            <Icon className="w-8 h-8 text-white" />
                          </div>
                          <div>
                            <h3 className="text-display text-3xl text-white mb-1">
                              {story.name}
                            </h3>
                            <p className="text-gray-400 text-sm">
                              {story.age} tuổi • {story.job}
                            </p>
                          </div>
                        </div>

                        <div className="bg-zinc-800/50 p-4 border-l-4 border-orange-500">
                          <div className="text-orange-400 font-semibold mb-1">
                            Thời gian: {story.timeframe}
                          </div>
                          <div className="text-white text-lg font-bold">
                            {story.achievement}
                          </div>
                        </div>
                      </div>

                      {/* Stats comparison */}
                      <div className="space-y-3">
                        {story.stats.map((stat, idx) => (
                          <div key={idx} className="bg-zinc-800/30 p-4">
                            <div className="text-gray-400 text-sm mb-2 uppercase tracking-wider">
                              {stat.label}
                            </div>
                            <div className="flex items-center gap-4">
                              <div className="flex-1">
                                <div className="text-gray-500 text-xs mb-1">Trước</div>
                                <div className="text-white font-bold">{stat.before}</div>
                              </div>
                              <div className="text-orange-500">→</div>
                              <div className="flex-1">
                                <div className="text-orange-400 text-xs mb-1">Sau</div>
                                <div className="text-orange-400 font-bold text-xl">
                                  {stat.after}
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Right: Testimonial */}
                    <div className="lg:col-span-2 flex items-center">
                      <div className="relative">
                        {/* Quote mark */}
                        <div className="absolute -top-4 -left-4 text-orange-500/20 text-8xl font-serif leading-none">
                          "
                        </div>

                        <div className="relative z-10 pl-8">
                          <p className="text-gray-300 text-lg sm:text-xl leading-relaxed italic mb-6">
                            {story.quote}
                          </p>

                          {/* Achievement badge */}
                          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-fire/10 border border-orange-500/30">
                            <Award className="w-5 h-5 text-orange-400" />
                            <span className="text-orange-400 font-semibold">
                              Đạt mục tiêu vượt kỳ vọng
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom glow effect */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-fire transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </div>
              );
            })}
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <p className="text-2xl text-white mb-2 font-bold">
              Câu chuyện tiếp theo có thể là của bạn!
            </p>
            <p className="text-gray-400 mb-8">
              Hàng trăm người đã thành công cùng tôi. Đến lượt bạn.
            </p>
            <a
              href="#register"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('register')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-block px-10 py-4 bg-gradient-fire text-white font-bold text-lg rounded-none glow-orange-hover hover:scale-105 transition-all duration-300"
            >
              BẮT ĐẦU HÀNH TRÌNH CỦA BẠN
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
