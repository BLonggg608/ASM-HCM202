"use client";

import ScrollReveal from "@/component/animation/ScrollReveal";
import contentData from "@/content/contentData";
import { InfoCircleOutlined } from "@ant-design/icons";
import "./SouthSection.css";

export default function SouthSection() {
  // 1. Lấy dữ liệu an toàn
  const chapter = contentData.chapters.find((ch) => ch.chapter_number === 4);
  const section41 = chapter?.sections?.find((s) => s.section_id === "4.1");
  const section42 = chapter?.sections?.find((s) => s.section_id === "4.2");
  const section43 = chapter?.sections?.find((s) => s.section_id === "4.3");

  // Helper render list an toàn
  const renderList = (items) => {
    if (!items || !Array.isArray(items)) return <li>Đang cập nhật...</li>;
    return items.map((item, idx) => <li key={idx}>{item}</li>);
  };

  return (
    <div className="south-section">
      {/* ==================== SECTION 4.1: NHÀ NƯỚC CỦA DÂN ==================== */}
      <div className="section-block">
        <ScrollReveal variant="fadeUp" delay={0.1}>
          <div className="subsection-header">
            <div className="subsection-number">4.1</div>
            <h3 className="subsection-title">
              {section41?.title || "Nhà nước của Dân"}
            </h3>
          </div>
        </ScrollReveal>

        <ScrollReveal variant="slideRight" delay={0.2} duration={0.8}>
          <div className="content-section">
            <div className="strategic-quote">
              <p>
                "{section41?.content?.power_source || "Quyền hành và lực lượng đều ở nơi dân."}"
              </p>
            </div>
            <div className="achievement-block">
              <h5>Quyền Hạn của Nhân Dân</h5>
              <ul>
                <li>
                  {section41?.content?.political_rights || "Quyền bầu cử, ứng cử, bãi miễn."}
                </li>
                <li>
                  <strong>Hình thức thực hiện:</strong>{" "}
                  {section41?.content?.democracy_forms || "Dân chủ trực tiếp & gián tiếp."}
                </li>
              </ul>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* ==================== SECTION 4.2: DO DÂN & VÌ DÂN ==================== */}
      <div className="section-block">
        <ScrollReveal variant="fadeUp" delay={0.1}>
          <div className="subsection-header">
            <div className="subsection-number">4.2</div>
            <h3 className="subsection-title">
              {section42?.title || "Nhà nước Do dân & Vì dân"}
            </h3>
          </div>
        </ScrollReveal>

        <ScrollReveal variant="fadeUp" delay={0.2}>
          <div className="split-content">
            {/* Do Dân */}
            <div>
              <h4 className="content-heading">Nhà nước Do Dân</h4>
              <ul className="info-list">
                {renderList(section42?.content?.by_people)}
              </ul>
            </div>
            {/* Vì Dân */}
            <div>
              <h4 className="content-heading">Nhà nước Vì Dân</h4>
              <ul className="info-list">
                {renderList(section42?.content?.for_people)}
              </ul>
            </div>
          </div>

          {/* Nhà nước Pháp quyền */}
          {section42?.content?.rule_of_law && (
            <div
              className="decision-card highlight"
              style={{ marginTop: "2rem" }}
            >
              <div className="decision-header">
                {section42.content.rule_of_law.concept || "Nhà nước Pháp quyền"}
              </div>
              <p>
                <strong>Nguyên tắc:</strong>{" "}
                {section42.content.rule_of_law.principle}
              </p>
              <p style={{ marginTop: "0.5rem" }}>
                <strong>Tính nhân văn:</strong>{" "}
                {section42.content.rule_of_law.humanity}
              </p>
            </div>
          )}
        </ScrollReveal>
      </div>

      {/* ==================== SECTION 4.3: DI CHÚC HỒ CHÍ MINH (NẾU CÓ) ==================== */}
      {section43 && (
        <div className="section-block">
          <ScrollReveal variant="fadeUp" delay={0.1}>
            <div className="subsection-header">
              <div className="subsection-number">4.3</div>
              <h3 className="subsection-title">{section43.title}</h3>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="slideLeft" delay={0.2} duration={0.8}>
            <div className="content-section">
              <div className="strategic-quote highlight">
                <InfoCircleOutlined
                  style={{ marginRight: "0.5rem", color: "var(--lacquer-red)" }}
                />
                <p>"{section43.content?.significance || "Đảng ta là một Đảng cầm quyền..."}"</p>
              </div>

              <div
                className="achievement-block"
                style={{ marginTop: "1.5rem" }}
              >
                <h5>Nhiệm vụ Lâu dài</h5>
                <p style={{ lineHeight: "1.8", color: "#333" }}>
                  {section43.content?.legacy_mission}
                </p>
              </div>

              <div
                className="decision-card highlight"
                style={{ marginTop: "1.5rem" }}
              >
                <div className="decision-header">💡 Ý nghĩa Lịch sử</div>
                <p style={{ marginTop: "0.8rem" }}>
                  Di chúc Hồ Chí Minh là lời dạy dỗ cuối cùng và quý báu nhất về
                  việc xây dựng Đảng trong sạch, vững mạnh. Đây không chỉ là yêu
                  cầu của năm 1969 mà là bài học vĩnh viễn cho các thế hệ cán
                  bộ, đảng viên.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      )}
    </div>
  );
}