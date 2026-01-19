"use client";

import {
  CheckCircleOutlined,
  CodeOutlined,
  SearchOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import { Layout } from "antd";
import "./page.css";

const { Content } = Layout;

export default function AIUsagePage() {
  return (
    <Layout className="museum-layout">
      <Content className="museum-content ai-report">
        <section className="section-header">
          <h1 className="section-title">BÁO CÁO SỬ DỤNG AI</h1>
          <div className="project-info">
            <p>Dự án: Tư tưởng Hồ Chí Minh & Khát vọng 4.0</p>
            <p>HCM202 - Nhóm 5 - SE1835</p>
            <p className="meta">Ngày: 01/11/2025</p>
          </div>
        </section>

        <section className="report-section">
          <h2 className="subsection-title">
            <SearchOutlined style={{ marginRight: "8px" }} />
            I. THÔNG TIN DỰ ÁN
          </h2>
          <div className="info-box">
            <p>
              <strong>Link sản phẩm:</strong>{" "}
              <a
                href="https://codecuatienne.github.io/assignment-vnr202/"
                target="_blank"
                rel="noreferrer"
              >
                codecuatienne.github.io/assignment-vnr202
              </a>
            </p>
            <p>
              <strong>Công nghệ:</strong> Website xây dựng bằng Next.js
            </p>
            <p>
              Việc ứng dụng Trí tuệ nhân tạo (AI) trong sản phẩm này nhằm mục tiêu
              tối ưu hóa quy trình nghiên cứu, xây dựng nội dung và phát triển
              giao diện cho Website "Tư tưởng Hồ Chí Minh & Khát vọng 4.0". Chúng
              tôi cam kết sử dụng AI một cách có trách nhiệm, minh bạch và luôn
              đặt yếu tố con người (kiểm duyệt, sáng tạo) làm nòng cốt.
            </p>
          </div>
        </section>

        <section className="report-section">
          <h2 className="subsection-title">
            <CodeOutlined style={{ marginRight: "8px" }} />
            II. CÁC CÔNG CỤ AI ĐÃ SỬ DỤNG
          </h2>
          <div className="tools-grid">
            <div className="tool-card">
              <div className="tool-icon">🧠</div>
              <h3 className="tool-name">Google Gemini 1.5 Pro</h3>
              <p className="tool-desc">
                Hỗ trợ phân tích tài liệu "Giáo trình Tư tưởng Hồ Chí Minh",
                tổng hợp các luận điểm về "Đạo đức, Văn minh" và đề xuất ý tưởng
                liên hệ thực tiễn 4.0.
              </p>
            </div>
            <div className="tool-card">
              <div className="tool-icon">🎨</div>
              <h3 className="tool-name">Midjourney / Dall-E</h3>
              <p className="tool-desc">
                Tạo ý tưởng layout giao diện mang phong cách "Bảo tàng số" và
                các icon minh họa cho các khái niệm trừu tượng.
              </p>
            </div>
            <div className="tool-card">
              <div className="tool-icon">💻</div>
              <h3 className="tool-name">GitHub Copilot</h3>
              <p className="tool-desc">
                Hỗ trợ viết code React/Next.js, tối ưu hóa CSS và debug logic
                xử lý dữ liệu JSON.
              </p>
            </div>
          </div>
        </section>

        <section className="report-section">
          <h2 className="subsection-title">
            <SearchOutlined style={{ marginRight: "8px" }} />
            III. QUY TRÌNH PHỐI HỢP NGƯỜI - AI
          </h2>
          <div className="process-steps">
            <h3 className="step-title">Bước 1: Ra lệnh (Prompting)</h3>
            <p>
              Nhóm xây dựng các prompt chi tiết dựa trên file <code>context.txt</code>{" "}
              (Dữ liệu nền tảng giáo trình) để AI không "bịa" thông tin lý luận.
            </p>

            <h3 className="step-title">Bước 2: Sàn lọc & Tổng hợp</h3>
            <p>
              AI tạo ra các đoạn văn bản thô. Nhóm tiến hành đối chiếu với Giáo
              trình gốc để đảm bảo tính chính trị và độ chính xác của các trích
              dẫn (VD: Tứ đức, 5 nguyên tắc xây dựng Đảng).
            </p>

            <h3 className="step-title">Bước 3: Kiểm tra và Hoàn thiện</h3>
            <p>
              <strong>Nhóm chịu trách nhiệm:</strong> Kiểm duyệt toàn bộ thông
              tin lý luận, đánh giá trải nghiệm người dùng, chỉnh sửa văn phong
              chính trị cho phù hợp.
            </p>
          </div>
        </section>

        <section className="report-section">
          <h2 className="subsection-title">
            <CheckCircleOutlined style={{ marginRight: "8px" }} />
            IV. TRÁCH NHIỆM CỦA NHÓM
          </h2>
          <div className="responsibility-note">
            AI chỉ là công cụ hỗ trợ. Nhóm chịu trách nhiệm chính về chất lượng
            sản phẩm:
          </div>

          <table className="tools-table responsibilities">
            <thead>
              <tr>
                <th style={{ width: "200px" }}>Trách nhiệm</th>
                <th>Nội dung</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <strong>Kiểm duyệt thông tin</strong>
                </td>
                <td>
                  Xác minh tính chính xác của mọi luận điểm tư tưởng, trích dẫn
                  lời Bác so với giáo trình chuẩn.
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Đánh giá chất lượng</strong>
                </td>
                <td>Kiểm tra giao diện, tính năng Quiz và Chatbot AI</td>
              </tr>
              <tr>
                <td>
                  <strong>Chỉnh sửa & Hoàn thiện</strong>
                </td>
                <td>
                  Bổ sung các liên hệ thực tiễn về "Chuyển đổi số" mà AI có thể
                  thiếu kiến thức cập nhật.
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Quyết định cuối cùng</strong>
                </td>
                <td>
                  Đưa ra quyết định về cấu trúc website và thông điệp truyền tải.
                </td>
              </tr>
            </tbody>
          </table>
        </section>

        <section className="report-section">
          <h2 className="subsection-title">V. KẾT LUẬN</h2>

          <div className="conclusion-box positive">
            <h3 className="conclusion-title">Lợi ích khi sử dụng AI</h3>
            <ul className="simple-list">
              <li>
                <strong>Tăng tốc độ:</strong> Giảm 60-70% thời gian làm việc
              </li>
              <li>
                <strong>Chất lượng tốt hơn:</strong> Website được tối ưu và dễ
                sử dụng
              </li>
              <li>
                <strong>Học hỏi nhiều:</strong> Tiếp cận công nghệ mới nhanh
                chóng
              </li>
              <li>
                <strong>Chatbox thông minh:</strong> Người dùng có thể hỏi đáp
                về lịch sử
              </li>
            </ul>
          </div>

          <div className="conclusion-box limitation">
            <h3 className="conclusion-title">Hạn chế cần lưu ý</h3>
            <ul className="simple-list">
              <li>
                <strong>Cần kiểm tra:</strong> AI có thể tạo thông tin không
                chính xác
              </li>
              <li>
                <strong>Thiếu sáng tạo:</strong> Cần con người để tạo nét riêng
              </li>
              <li>
                <strong>Chưa thay thế được:</strong> Vẫn cần kiến thức chuyên
                môn để đánh giá
              </li>
            </ul>
          </div>

          <div className="final-statement">
            <p>
              <strong>AI là công cụ hỗ trợ tuyệt vời</strong> giúp nhóm làm việc
              hiệu quả hơn và tạo ra sản phẩm chất lượng. Tuy nhiên,{" "}
              <strong>AI không thể thay thế con người</strong>. Nhóm vẫn phải
              kiểm duyệt thông tin, đánh giá chất lượng và đưa ra quyết định
              cuối cùng về sản phẩm.
            </p>
          </div>
        </section>
      </Content>
    </Layout>
  );
}
