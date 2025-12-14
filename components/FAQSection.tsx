"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Huấn luyện cá nhân có phù hợp với người mới bắt đầu không?",
      answer:
        "Hoàn toàn phù hợp! Tôi chuyên huấn luyện cả người mới bắt đầu hoàn toàn và người đã có kinh nghiệm. Bạn sẽ nhận được chương trình riêng biệt 100% phù hợp với trình độ và mục tiêu của mình. Tôi sẽ hướng dẫn kỹ lưỡng từng động tác cơ bản để đảm bảo bạn tập đúng kỹ thuật và an toàn ngay từ buổi đầu tiên.",
    },
    {
      question: "Mất bao lâu để thấy kết quả?",
      answer:
        "Kết quả phụ thuộc vào mục tiêu, sự cam kết và thể trạng ban đầu của bạn. Với huấn luyện 1-1, tiến độ thường nhanh hơn đáng kể so với tập tự do. Bạn sẽ cảm nhận được sự khác biệt về năng lượng và sức mạnh sau 2-3 tuần. Thay đổi về hình thể rõ rệt thường xuất hiện sau 6-8 tuần với chế độ tập và ăn uống đều đặn. 98% học viên của tôi đạt mục tiêu trong vòng 3 tháng.",
    },
    {
      question: "Tôi cần có kinh nghiệm tập gym trước đó không?",
      answer:
        "Hoàn toàn không cần! Tôi chào đón mọi trình độ từ người chưa bao giờ tập đến vận động viên muốn nâng cao thành tích. Với người mới, tôi sẽ bắt đầu từ những động tác cơ bản nhất, xây dựng nền tảng vững chắc về kỹ thuật và sức mạnh trước khi tiến đến các bài tập phức tạp hơn. Đây chính là lợi thế của huấn luyện 1-1!",
    },
    {
      question: "Tôi nên mang gì vào buổi tư vấn đầu tiên?",
      answer:
        "Cho buổi tư vấn đầu tiên, bạn chỉ cần mang theo tinh thần sẵn sàng! Nếu muốn tập thử luôn, hãy mang theo quần áo thể thao thoải mái, giày thể thao và chai nước. Nếu bạn có mục tiêu cụ thể hoặc vấn đề sức khỏe nào (chấn thương cũ, bệnh lý...), hãy chia sẻ với tôi ngay trong buổi tư vấn để tôi thiết kế chương trình phù hợp nhất.",
    },
    {
      question: "Chi phí huấn luyện cá nhân là bao nhiêu?",
      answer:
        "Tôi có nhiều gói tập phù hợp với mọi ngân sách và mục tiêu. Giá dao động từ 2,000,000 - 6,000,000 VNĐ/tháng tùy vào số buổi tập/tuần và mức độ cá nhân hóa. Bạn có thể đăng ký buổi tư vấn MIỄN PHÍ để tôi hiểu rõ mục tiêu của bạn và tư vấn gói tập phù hợp nhất với ngân sách. Đầu tư cho sức khỏe là đầu tư tốt nhất!",
    },
    {
      question: "Nếu bận không thể đến tập thì sao?",
      answer:
        "Lịch tập huấn luyện cá nhân rất linh hoạt! Bạn có thể điều chỉnh hoặc dời lịch buổi tập trước 24 giờ mà không mất phí. Tôi hiểu rằng cuộc sống có những biến động bất ngờ, vì vậy luôn cố gắng sắp xếp lại lịch phù hợp nhất để bạn không bỏ lỡ tiến độ tập luyện. Đây chính là ưu điểm của huấn luyện 1-1!",
    },
  ];

  return (
    <section className="py-24 sm:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-900 to-black" />

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 border border-orange-500/10 transform rotate-45" />
      <div className="absolute bottom-20 right-10 w-40 h-40 border border-orange-500/10 transform -rotate-12" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-orange-500/10 border border-orange-500/30 rounded-full text-orange-400 text-sm font-semibold tracking-wide mb-6">
              CÂU HỎI THƯỜNG GẶP
            </div>
            <h2 className="text-display text-5xl sm:text-6xl md:text-7xl mb-6">
              CÒN{" "}
              <span className="bg-gradient-fire bg-clip-text text-white">
                THẮC MẮC?
              </span>
            </h2>
            <p className="text-gray-400 text-lg">
              Chúng tôi đã tổng hợp những câu hỏi phổ biến nhất từ học viên.
            </p>
          </div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className="group bg-zinc-900/50 border-2 border-zinc-800 hover:border-orange-500/50 transition-all duration-300 overflow-hidden"
                >
                  {/* Question */}
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full flex items-center justify-between gap-4 p-6 text-left"
                  >
                    <h3 className="text-white text-lg sm:text-xl font-bold flex-1 group-hover:text-orange-400 transition-colors">
                      {faq.question}
                    </h3>
                    <div
                      className={`w-10 h-10 flex-shrink-0 bg-gradient-fire flex items-center justify-center transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    >
                      {isOpen ? (
                        <Minus className="w-5 h-5 text-white" />
                      ) : (
                        <Plus className="w-5 h-5 text-white" />
                      )}
                    </div>
                  </button>

                  {/* Answer */}
                  <div
                    className={`transition-all duration-300 ease-in-out ${
                      isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    } overflow-hidden`}
                  >
                    <div className="px-6 pb-6">
                      <div className="w-12 h-1 bg-gradient-fire mb-4" />
                      <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>

                  {/* Bottom accent when open */}
                  {isOpen && (
                    <div className="h-1 bg-gradient-fire animate-fade-in" />
                  )}
                </div>
              );
            })}
          </div>

          {/* Contact CTA */}
          <div className="mt-16 text-center p-8 bg-gradient-to-r from-zinc-900/50 via-orange-900/10 to-zinc-900/50 border border-orange-500/30">
            <h3 className="text-white text-2xl font-bold mb-2">
              Vẫn có câu hỏi khác?
            </h3>
            <p className="text-gray-400 mb-6">
              Tôi luôn sẵn sàng giải đáp mọi thắc mắc của bạn.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#register"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('register')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-8 py-3 bg-gradient-fire text-white font-bold hover:scale-105 transition-transform inline-block"
              >
                ĐĂNG KÝ TƯ VẤN
              </a>
              <a
                href="tel:0123456789"
                className="px-8 py-3 border-2 border-orange-500 text-orange-400 font-bold hover:bg-orange-500 hover:text-white transition-all inline-block"
              >
                GỌI ĐIỆN TƯ VẤN
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
