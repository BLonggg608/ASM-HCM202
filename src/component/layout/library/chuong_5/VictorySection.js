"use client";

import ScrollReveal from "@/component/animation/ScrollReveal";
import contentData from "@/content/contentData";
import "./VictorySection.css";

export default function VictorySection() {
  // 1. Lấy dữ liệu an toàn
  const chapter = contentData.chapters.find((ch) => ch.chapter_number === 5);
  // Dùng fallback mảng rỗng để tránh lỗi nếu chapter undefined
  const sections = chapter?.sections || [];
  const section51 = sections[0];
  const section52 = sections[1];

  return (
    <div className="victory-section">
      {/* ==================== SECTION 5.1: THÁCH THỨC 4.0 ==================== */}
      <div className="significance-block">
        <ScrollReveal variant="fadeUp" delay={0.1}>
          <div className="subsection-header">
            <div className="subsection-number">5.1</div>
            <h3 className="subsection-title">
              {section51?.title || "Thách thức thời đại 4.0"}
            </h3>
          </div>
        </ScrollReveal>

        <ScrollReveal variant="fadeUp" delay={0.15} duration={0.7}>
          <div className="achievements-grid">
            {/* Quan liêu số */}
            <div className="achievement-card">
              <h4
                className="achievement-aspect"
                style={{ color: "var(--lacquer-red)" }}
              >
                {section51?.content?.digital_bureaucracy?.name || "Quan liêu số"}
              </h4>
              <p className="achievement-description">
                {section51?.content?.digital_bureaucracy?.manifestation || "Xa rời dân trên không gian mạng."}
              </p>
            </div>

            {/* Xa rời nhân dân (Sống ảo) */}
            <div className="achievement-card">
              <h4
                className="achievement-aspect"
                style={{ color: "var(--lacquer-red)" }}
              >
                {section51?.content?.virtual_distance?.name || "Bệnh xa rời thực tiễn"}
              </h4>
              <p className="achievement-description">
                {section51?.content?.virtual_distance?.manifestation || "Cán bộ sống ảo, thiếu gương mẫu."}
              </p>
            </div>

            {/* Tham nhũng công nghệ (Tech Corruption) */}
            <div className="achievement-card">
              <h4
                className="achievement-aspect"
                style={{ color: "var(--lacquer-red)" }}
              >
                {section51?.content?.tech_corruption?.name || "Lợi ích nhóm 4.0"}
              </h4>
              <p className="achievement-description">
                {section51?.content?.tech_corruption?.manifestation || "Lợi dụng kẽ hở công nghệ để trục lợi."}
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* ==================== SECTION 5.2: GIẢI PHÁP & KHÁT VỌNG ==================== */}
      <div className="causes-block">
        <ScrollReveal variant="fadeUp" delay={0.1}>
          <div className="subsection-header">
            <div className="subsection-number">5.2</div>
            <h3 className="subsection-title">
              {section52?.title || "Giải pháp & Hành động"}
            </h3>
          </div>
        </ScrollReveal>

        <ScrollReveal variant="fadeUp" delay={0.1} duration={0.7}>
          <div className="factors-grid">
            {/* Render Solutions an toàn */}
            {section52?.content?.solutions && Array.isArray(section52.content.solutions) ? (
              section52.content.solutions.map((sol, idx) => (
                <div key={idx} className="factor-card">
                  <h4 className="factor-title">{sol.principle}</h4>
                  <p>{sol.action}</p>
                </div>
              ))
            ) : (
              <p>Đang cập nhật giải pháp...</p>
            )}
          </div>

          {/* Vai trò thanh niên */}
          {section52?.content?.youth_role && (
            <div className="final-affirmation" style={{ marginTop: "3rem" }}>
              <div className="affirmation-content">
                {/* <div className="affirmation-icon" style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>🚀</div> */}
                <h4>{section52.content.youth_role.title}</h4>
                <p className="affirmation-text">
                  {section52.content.youth_role.action}
                </p>
              </div>
            </div>
          )}
        </ScrollReveal>
      </div>
    </div>
  );
}