"use client";

import {
  FlagOutlined,
  StarOutlined,
  ReadOutlined,
  RocketOutlined,
} from "@ant-design/icons"; // Import thêm icon nếu thích
import { Typography } from "antd";
import "./MuseumHero.css";

const { Title, Paragraph } = Typography;

export default function MuseumHero() {
  return (
    <div className="museum-hero">
      <div className="hero-overlay" />
      <div className="hero-content">
        <div className="hero-badge">
          <StarOutlined className="badge-icon" />
          <span>Chương IV: Tư tưởng Hồ Chí Minh về Đảng và Nhà nước</span>
        </div>

        <Title level={1} className="hero-main-title">
          Đảng Cộng sản Việt Nam:
          <br />
          Đạo đức - Văn minh
        </Title>

        <div className="hero-divider">
          <span className="divider-star">✦</span>
        </div>

        <Title level={2} className="hero-subtitle">
          Dân của dân, do dân, vì dân
          <br />& Thích ứng với kỷ nguyên số
        </Title>

        <div className="hero-years">
          <FlagOutlined className="years-icon" />
          <span>Lý thuyết & Thực tiễn</span>
        </div>

        <div className="hero-learning-outcomes">
          {/* Tư tưởng về Đảng Cộng sản Việt Nam */}
          <div className="outcome-badge">
            <span className="outcome-label">ĐẢNG CỘNG SẢN</span>
            <span className="outcome-text">
              Tính tất yếu, vai trò lãnh đạo & nguyên tắc xây dựng Đảng
            </span>
          </div>

          {/* Tư tưởng về Nhà nước dân chủ */}
          <div className="outcome-badge">
            <span className="outcome-label">NHÀ NƯỚC DÂN CHỦ</span>
            <span className="outcome-text">
              Nhà nước pháp quyền, trong sạch, vững mạnh
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
