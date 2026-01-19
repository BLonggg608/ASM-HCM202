"use client";

import { HeartOutlined, StarOutlined } from "@ant-design/icons";
import { Col, Layout, Row } from "antd";
import "./MuseumFooter.css";

const { Footer } = Layout;

export default function MuseumFooter() {
  return (
    <Footer className="museum-footer">
      <div className="footer-content">
        <div className="footer-quote-section">
          <div className="quote-ornament">❋</div>
          <div className="footer-quote">
            <p className="quote-main">"Đảng ta là đạo đức, là văn minh"</p>
            <p className="quote-author">— Chủ tịch Hồ Chí Minh</p>
          </div>
          <div className="quote-ornament">❋</div>
        </div>

        <div className="footer-divider" />

        <Row gutter={[48, 32]} className="footer-info">
          <Col xs={24} md={8}>
            <div className="footer-section">
              <h4 className="footer-title">
                <StarOutlined className="title-icon" />
                Đề tài
              </h4>
              <p className="footer-text">
                Tư tưởng Hồ Chí Minh về Đảng Cộng sản Việt Nam "Đạo đức, Văn
                minh" và vận dụng xây dựng Nhà nước trong kỷ nguyên số 4.0.
              </p>
            </div>
          </Col>

          <Col xs={24} md={8}>
            <div className="footer-section">
              <h4 className="footer-title">
                <HeartOutlined className="title-icon" />
                Mục tiêu Học tập
              </h4>
              <ul className="footer-list">
                <li>
                  CLO2: Phân tích quy luật ra đời và bản chất của Đảng
                </li>
                <li>CLO4: Đề xuất giải pháp chống "quan liêu số"</li>
              </ul>
            </div>
          </Col>

          <Col xs={24} md={8}>
            <div className="footer-section">
              <h4 className="footer-title">
                <StarOutlined className="title-icon" />
                Thông tin
              </h4>
              <p className="footer-text">
                <strong>Môn học:</strong> HCM202 - Tư tưởng Hồ Chí Minh
                <br />
                <strong>Nhóm:</strong> Nhóm 5 - SE1835
                <br />
              </p>
            </div>
          </Col>
        </Row>

        <div className="footer-divider" />

        <div className="footer-bottom">
          <div className="footer-flame">🔥</div>
          <p className="footer-message">
            Thế hệ trẻ Việt Nam - Tiếp nối truyền thống vẻ vang, xây dựng tương
            lai tươi sáng
          </p>
          <div className="footer-flame">🔥</div>
        </div>

        <div className="footer-copyright">
          <p>
            © 2026 HCM202 - Nhóm 5. Tất cả nội dung phục vụ mục đích học tập.
          </p>
          <div className="vietnam-flag">🇻🇳</div>
        </div>
      </div>
    </Footer>
  );
}
