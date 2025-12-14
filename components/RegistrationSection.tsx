"use client";

import { useState, useEffect } from "react";
import { Send, Shield, Clock, Gift } from "lucide-react";

export default function RegistrationSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    goal: "",
    honeypot: "", // Spam trap field
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formLoadTime, setFormLoadTime] = useState<number>(0);

  // Track when form was loaded (to prevent instant submissions)
  useEffect(() => {
    setFormLoadTime(Date.now());
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Anti-spam checks
    // 1. Check if honeypot field is filled (bot detection)
    if (formData.honeypot) {
      console.log("Spam detected: honeypot field filled");
      return;
    }

    // 2. Check if form was submitted too quickly (< 3 seconds = bot)
    const timeSinceLoad = Date.now() - formLoadTime;
    if (timeSinceLoad < 3000) {
      alert("Vui lòng điền form cẩn thận hơn.");
      return;
    }

    setIsSubmitting(true);

    try {
      // Google Apps Script Web App URL
      const GOOGLE_SCRIPT_URL = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL ||
        "YOUR_GOOGLE_APPS_SCRIPT_URL_HERE";

      // Prepare data for Google Sheets
      const submissionData = {
        timestamp: new Date().toISOString(),
        name: formData.name,
        phone: formData.phone,
        goal: formData.goal,
      };

      console.log("Submitting to Google Sheets:", submissionData);

      // Send data to Google Apps Script
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors", // Required for Google Apps Script
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submissionData),
      });

      // Note: With no-cors mode, we can't read the response
      // But we can assume success if no error is thrown
      console.log("Form submitted successfully");

      // Reset form after successful submission
      setFormData({
        name: "",
        phone: "",
        goal: "",
        honeypot: "",
      });

      // Show success message
      alert("Đăng ký thành công! Tôi sẽ liên hệ với bạn trong vòng 24 giờ.");

    } catch (error) {
      console.error("Form submission error:", error);
      alert("Có lỗi xảy ra. Vui lòng thử lại hoặc liên hệ trực tiếp qua số điện thoại.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const goals = [
    "Giảm cân & giảm mỡ",
    "Tăng cơ & xây dựng khối lượng",
    "Cải thiện sức khỏe tổng thể",
    "Tăng sức mạnh & hiệu suất",
    "Chưa chắc chắn - cần tư vấn",
  ];

  return (
    <section className="py-24 sm:py-32 relative overflow-hidden" id="register">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-950 via-black to-zinc-950" />

      {/* Animated gradient orbs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-500/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "1s" }} />

      {/* Diagonal lines */}
      <div className="absolute top-1/4 right-0 w-full h-px bg-gradient-to-r from-transparent via-orange-500/30 to-transparent" />
      <div className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-500/30 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-orange-500/10 border border-orange-500/30 rounded-full text-orange-400 text-sm font-semibold tracking-wide mb-6">
              BẮT ĐẦU NGAY HÔM NAY
            </div>
            <h2 className="text-display text-5xl sm:text-6xl md:text-7xl mb-6">
              ĐĂNG KÝ{" "}
              <span className="bg-gradient-fire bg-clip-text text-white">
                TƯ VẤN MIỄN PHÍ
              </span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Nhận tư vấn 1-1 miễn phí về lộ trình tập luyện phù hợp với bạn.
              Không ràng buộc, không phí ẩn.
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-12">
            {/* Benefits sidebar */}
            <div className="lg:col-span-2 space-y-6">
              <h3 className="text-display text-3xl text-white mb-6">
                Bạn sẽ nhận được:
              </h3>

              {[
                {
                  icon: Gift,
                  title: "Buổi tư vấn 1-1 miễn phí",
                  description: "Phân tích thể trạng và mục tiêu của bạn chi tiết",
                },
                {
                  icon: Clock,
                  title: "Xây dựng lộ trình cá nhân",
                  description: "Nhận kế hoạch tập luyện riêng biệt phù hợp 100% với bạn",
                },
                {
                  icon: Shield,
                  title: "Cam kết không spam",
                  description: "Thông tin của bạn được bảo mật tuyệt đối",
                },
              ].map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div
                    key={index}
                    className="flex gap-4 p-5 bg-zinc-900/50 border-l-4 border-orange-500/50 hover:border-orange-500 hover:bg-zinc-900 transition-all duration-300"
                  >
                    <div className="w-12 h-12 flex-shrink-0 bg-gradient-fire flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold mb-1">{benefit.title}</h4>
                      <p className="text-gray-400 text-sm">{benefit.description}</p>
                    </div>
                  </div>
                );
              })}

              {/* Trust badges */}
              <div className="pt-6 border-t border-zinc-800">
                <div className="flex items-center gap-2 text-gray-400 text-sm mb-2">
                  <Shield className="w-4 h-4 text-orange-400" />
                  <span>Hủy bất cứ lúc nào</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400 text-sm">
                  <Shield className="w-4 h-4 text-orange-400" />
                  <span>Không yêu cầu thẻ tín dụng</span>
                </div>
              </div>
            </div>

            {/* Registration form */}
            <div className="lg:col-span-3">
              <form
                onSubmit={handleSubmit}
                className="relative bg-gradient-to-br from-zinc-900 to-zinc-950 border-2 border-orange-500/30 p-8 sm:p-10"
              >
                {/* Top accent */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-fire" />

                <div className="space-y-6">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-white font-semibold mb-2 uppercase tracking-wide text-sm">
                      Họ và tên *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-4 bg-black border-2 border-zinc-800 text-white placeholder-gray-500 focus:border-orange-500 focus:outline-none transition-colors"
                      placeholder="Nguyễn Văn A"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-white font-semibold mb-2 uppercase tracking-wide text-sm">
                      Số điện thoại *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-4 bg-black border-2 border-zinc-800 text-white placeholder-gray-500 focus:border-orange-500 focus:outline-none transition-colors"
                      placeholder="0912 345 678"
                    />
                  </div>

                  {/* Honeypot field - hidden from users, only bots will fill it */}
                  <div className="hidden" aria-hidden="true">
                    <label htmlFor="website">Website</label>
                    <input
                      type="text"
                      id="website"
                      name="honeypot"
                      value={formData.honeypot}
                      onChange={handleChange}
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </div>

                  {/* Goal */}
                  <div>
                    <label htmlFor="goal" className="block text-white font-semibold mb-2 uppercase tracking-wide text-sm">
                      Mục tiêu của bạn *
                    </label>
                    <select
                      id="goal"
                      name="goal"
                      required
                      value={formData.goal}
                      onChange={handleChange}
                      className="w-full px-4 py-4 bg-black border-2 border-zinc-800 text-white focus:border-orange-500 focus:outline-none transition-colors appearance-none cursor-pointer"
                    >
                      <option value="">Chọn mục tiêu của bạn</option>
                      {goals.map((goal, index) => (
                        <option key={index} value={goal}>
                          {goal}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Submit button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-5 bg-gradient-fire text-white font-bold text-lg uppercase tracking-wide glow-orange-hover hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 ${
                      isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                  >
                    <span>{isSubmitting ? "ĐANG GỬI..." : "ĐĂNG KÝ NGAY"}</span>
                    <Send className={`w-5 h-5 ${isSubmitting ? "animate-pulse" : ""}`} />
                  </button>

                  {/* Privacy note */}
                  <p className="text-gray-500 text-xs text-center">
                    Bằng cách đăng ký, bạn đồng ý với{" "}
                    <a href="#" className="text-orange-400 hover:text-orange-300 underline">
                      Chính sách bảo mật
                    </a>
                    {" "}của chúng tôi.
                  </p>
                </div>
              </form>
            </div>
          </div>

          {/* Social proof */}
          <div className="mt-16 text-center">
            <p className="text-gray-400 mb-4">
              Tham gia cùng <span className="text-orange-400 font-bold">500+ học viên</span> đã thay đổi cuộc sống
            </p>
            <div className="flex justify-center items-center gap-4 flex-wrap">
              {[1, 2, 3, 4, 5].map((_, index) => (
                <div
                  key={index}
                  className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-red-600 border-2 border-zinc-900"
                  style={{ marginLeft: index > 0 ? "-12px" : "0" }}
                />
              ))}
              <span className="text-gray-400 ml-2">và nhiều người khác...</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
