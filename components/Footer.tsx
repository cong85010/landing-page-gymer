"use client";

import { Facebook, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-black border-t border-zinc-800">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-fire" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-display text-4xl text-white mb-4">GYMER</h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Huấn luyện viên cá nhân chuyên nghiệp. Biến đổi cơ thể, thay đổi cuộc sống.
            </p>
            <div className="flex gap-4">
              {[
                { icon: Facebook, href: "#" },
                { icon: Instagram, href: "#" },
                { icon: Youtube, href: "#" },
              ].map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 bg-zinc-900 border border-zinc-800 hover:border-orange-500 flex items-center justify-center hover:bg-gradient-fire transition-all duration-300 group"
                  >
                    <Icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-4 uppercase tracking-wide">
              Liên kết
            </h4>
            <ul className="space-y-3">
              {[
                "Về chúng tôi",
                "Chương trình",
                "Câu chuyện thành công",
                "Blog",
                "Liên hệ",
              ].map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-orange-400 transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="w-0 h-px bg-orange-500 group-hover:w-4 transition-all duration-300" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold text-lg mb-4 uppercase tracking-wide">
              Liên hệ
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" />
                <div>
                  <a
                    href="tel:+84123456789"
                    className="text-gray-400 hover:text-orange-400 transition-colors block"
                    onClick={() => {
                      // Track phone call clicks if needed
                      console.log('Phone clicked');
                    }}
                  >
                    (+84) 123 456 789
                  </a>
                  <p className="text-gray-600 text-xs mt-1">Gọi ngay để tư vấn</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" />
                <div>
                  <a
                    href="mailto:contact@gymer.vn"
                    className="text-gray-400 hover:text-orange-400 transition-colors block"
                    onClick={() => {
                      // Track email clicks if needed
                      console.log('Email clicked');
                    }}
                  >
                    contact@gymer.vn
                  </a>
                  <p className="text-gray-600 text-xs mt-1">Email tư vấn 24/7</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" />
                <div className="text-gray-400">
                  123 Đường ABC, Quận XYZ,
                  <br />
                  Hà Nội, Việt Nam
                </div>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-white font-bold text-lg mb-4 uppercase tracking-wide">
              Giờ hoạt động
            </h4>
            <ul className="space-y-3">
              <li className="flex justify-between text-gray-400">
                <span>Thứ 2 - Thứ 6:</span>
                <span className="text-orange-400 font-semibold">5:00 - 23:00</span>
              </li>
              <li className="flex justify-between text-gray-400">
                <span>Thứ 7 - CN:</span>
                <span className="text-orange-400 font-semibold">6:00 - 22:00</span>
              </li>
            </ul>
            <div className="mt-6 p-4 bg-orange-500/10 border border-orange-500/30">
              <p className="text-orange-400 text-sm font-semibold mb-2">
                Đăng ký tư vấn miễn phí!
              </p>
              <a
                href="#register"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('register')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-white text-xs hover:text-orange-400 transition-colors underline"
              >
                Nhấn để đăng ký →
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-zinc-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm text-center md:text-left">
              © 2024 GYMER - Personal Training. All rights reserved. Made with 💪 in Vietnam.
            </p>
            <div className="flex gap-6 text-sm">
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="text-gray-500 hover:text-orange-400 transition-colors"
              >
                Chính sách bảo mật
              </a>
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="text-gray-500 hover:text-orange-400 transition-colors"
              >
                Điều khoản sử dụng
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
