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
            {/* <div className="subsection-number">4.1</div> */}
            <h3 className="subsection-title">
              {section41?.title || "Nhà nước của Dân"}
            </h3>
          </div>
        </ScrollReveal>

        <ScrollReveal variant="slideRight" delay={0.2} duration={0.8}>
          <div className="content-section">
            <div
              style={{
                marginBottom: "1.5rem",
                padding: "1rem",
                backgroundColor: "rgba(249, 243, 80, 0.1)",
                borderRadius: "4px",
              }}
            >
              <p style={{ fontSize: "0.95rem", marginBottom: "0.5rem" }}>
                <strong>Bản chất giai cấp:</strong>{" "}
                {section41?.content?.class_nature ||
                  "Nhà nước mang bản chất..."}
              </p>
              <p style={{ fontSize: "0.95rem" }}>
                <strong>Của nhân dân:</strong>{" "}
                {section41?.content?.of_people ||
                  "Quyền lực thuộc về nhân dân."}
              </p>
            </div>

            <div className="strategic-quote">
              <p>
                "
                {section41?.content?.power_source ||
                  "Quyền hành và lực lượng đều ở nơi dân."}
                "
              </p>
            </div>
            <div className="achievement-block">
              <h5>Do Nhân Dân</h5>
              <p style={{ fontSize: "0.95rem", marginBottom: "0.5rem" }}>
                {section41?.content?.by_people ||
                  "Nhà nước do dân lập nên, dân ủng hộ, dân đóng thuế để hoạt động."}
              </p>
              <h5 style={{ marginTop: "1rem" }}>Vì Nhân Dân</h5>
              <p style={{ fontSize: "0.95rem" }}>
                {section41?.content?.for_people ||
                  "Nhà nước phục vụ lợi ích của dân, cán bộ là 'công bộc', là 'đầy tớ' của dân."}
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* ==================== SECTION 4.2: NHÀ NƯỚC PHÁP QUYỀN ==================== */}
      <div className="section-block">
        <ScrollReveal variant="fadeUp" delay={0.1}>
          <div className="subsection-header">
            {/* <div className="subsection-number">4.2</div> */}
            <h3 className="subsection-title">
              {section42?.title || "Nhà nước Pháp quyền"}
            </h3>
          </div>
        </ScrollReveal>

        <ScrollReveal variant="fadeUp" delay={0.2}>
          {/* Hợp hiến, hợp pháp */}
          <div
            style={{
              marginBottom: "1.5rem",
              padding: "1rem",
              backgroundColor: "rgba(212, 55, 49, 0.05)",
              borderLeft: "4px solid var(--lacquer-red)",
              borderRadius: "4px",
            }}
          >
            <p style={{ fontSize: "0.95rem", marginBottom: "0.5rem" }}>
              <strong>Hợp hiến, hợp pháp:</strong>{" "}
              {section42?.content?.constitutional_and_legal ||
                "Hồ Chí Minh chú trọng xây dựng Hiến pháp và pháp luật..."}
            </p>
          </div>

          {/* Thượng tôn pháp luật */}
          <div
            style={{
              marginBottom: "1.5rem",
              padding: "1rem",
              backgroundColor: "rgba(249, 243, 80, 0.1)",
              borderRadius: "4px",
            }}
          >
            <p style={{ fontSize: "0.95rem", marginBottom: "0.5rem" }}>
              <strong>Thượng tôn pháp luật:</strong>{" "}
              {section42?.content?.rule_of_law ||
                "Pháp luật phải nghiêm minh, công bằng, không có vùng cấm."}
            </p>
            <p style={{ fontSize: "0.95rem" }}>
              <strong>Pháp quyền nhân nghĩa:</strong>{" "}
              {section42?.content?.human_rights_law ||
                "Pháp luật có tính nhân văn, khuyến thiện, vì con người."}
            </p>
          </div>
        </ScrollReveal>
      </div>

      {/* ==================== SECTION 4.3: NHÀ NƯỚC TRONG SẠCH, VỮNG MẠNH ==================== */}
      {section43 && (
        <div className="section-block">
          <ScrollReveal variant="fadeUp" delay={0.1}>
            <div className="subsection-header">
              {/* <div className="subsection-number">4.3</div> */}
              <h3 className="subsection-title">{section43.title}</h3>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="slideLeft" delay={0.2} duration={0.8}>
            <div className="content-section">
              {/* Kiểm soát quyền lực */}
              <div className="strategic-quote highlight">
                <InfoCircleOutlined
                  style={{ marginRight: "0.5rem", color: "var(--lacquer-red)" }}
                />
                <p style={{ fontSize: "0.95rem" }}>
                  {section43.content?.power_control ||
                    "Kiểm soát quyền lực: Cần kiểm soát để tránh lạm quyền..."}
                </p>
              </div>

              {/* Phòng chống tiêu cực */}
              <div
                className="achievement-block"
                style={{ marginTop: "1.5rem" }}
              >
                <h5>Phòng, chống tiêu cực</h5>
                {section43?.content?.anti_corruption &&
                  Array.isArray(section43.content.anti_corruption) && (
                    <div style={{ marginTop: "1rem" }}>
                      {section43.content.anti_corruption.map((item, idx) => (
                        <div
                          key={idx}
                          style={{
                            marginBottom: "1rem",
                            paddingLeft: "1rem",
                            borderLeft: "3px solid var(--lacquer-red)",
                          }}
                        >
                          <p
                            style={{
                              fontWeight: "bold",
                              marginBottom: "0.5rem",
                            }}
                          >
                            {item.form}
                          </p>
                          <p style={{ fontSize: "0.9rem", color: "#555" }}>
                            {item.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
              </div>
            </div>
          </ScrollReveal>
        </div>
      )}
    </div>
  );
}
