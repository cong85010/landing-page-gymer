import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next"
import "./globals.css";

export const metadata: Metadata = {
  title: "GYMER - Nơi Rèn Luyện Sức Mạnh & Ý Chí",
  description: "Biến đổi cơ thể, xây dựng sức mạnh, chinh phục bản thân. Đăng ký tập thử miễn phí ngay hôm nay.",
  keywords: "phòng gym, gym Hà Nội, tập gym, giảm cân, tăng cơ, personal trainer, luyện tập thể hình",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className="dark">
      <body className="antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
