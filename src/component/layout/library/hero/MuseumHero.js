"use client";

import { FlagOutlined, StarOutlined } from "@ant-design/icons";
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
          <span>HCM202 - Nhóm 5 - SE1835</span>
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
          Vận dụng tư tưởng Hồ Chí Minh
          <br />& Khát vọng kỷ nguyên số
        </Title>

        <div className="hero-years">
          <FlagOutlined className="years-icon" />
          <span>Lý luận & 4.0</span>
        </div>

        <div className="hero-learning-outcomes">
          <div className="outcome-badge">
            <span className="outcome-label">CLO2</span>
            <span className="outcome-text">
              Phân tích bản chất và nguyên tắc xây dựng Đảng
            </span>
          </div>
          <div className="outcome-badge">
            <span className="outcome-label">CLO4</span>
            <span className="outcome-text">
              Vận dụng giải pháp vào thực tiễn Chuyển đổi số
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
