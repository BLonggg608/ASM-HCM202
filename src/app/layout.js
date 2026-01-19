import AntdStylesProvider from "@/component/providers/AntdStyleProvider";
import { ConfigProvider } from "antd";
import { Fraunces, Geist, Geist_Mono } from "next/font/google";
import FloatingChatbot from "../component/chatbot/FloatingChatbot";
import HomeButton from "../component/layout/HomeButton";
import "./globals.css";
// import "./page.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Đảng Cộng sản Việt Nam: Đạo đức, Văn minh & Khát vọng 4.0",
  description:
    "Vận dụng Tư tưởng Hồ Chí Minh về xây dựng Đảng để khơi dậy niềm tin thanh niên và thích ứng với yêu cầu của cách mạng công nghiệp 4.0.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="vi">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${fraunces.variable} antialiased`}
      >
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: "#d43731", // vn-red-600
              colorSuccess: "#f9f350", // vn-yellow-500
              colorWarning: "#f8c979", // cream-500
              colorError: "#b91c1c", // vn-red-700
              colorInfo: "#d43731",
              colorTextBase: "#171717", // foreground
              colorBgBase: "#ffffff", // background
              fontFamily: "var(--font-fraunces), serif",
              borderRadius: 8,
              wireframe: false,
            },
            components: {
              Layout: {
                headerBg: "#d43731",
                headerColor: "#ffffff",
              },
              Card: {
                borderRadius: 12,
              },
              Button: {
                borderRadius: 8,
              },
            },
          }}
        >
          <AntdStylesProvider>{children}</AntdStylesProvider>
          <HomeButton />
          <FloatingChatbot />
        </ConfigProvider>
      </body>
    </html>
  );
}
