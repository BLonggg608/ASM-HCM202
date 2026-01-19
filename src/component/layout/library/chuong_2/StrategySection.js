"use client";

import ScrollReveal from "@/component/animation/ScrollReveal";
import contentData from "@/content/contentData";
import { Image } from "antd"; // Bỏ các import thừa
import "./StrategySection.css";

export default function StrategySection() {
  // 1. Lấy dữ liệu an toàn
  const chapter = contentData.chapters.find((ch) => ch.chapter_number === 2);
  const section21 = chapter?.sections?.find((s) => s.section_id === "2.1");
  const section22 = chapter?.sections?.find((s) => s.section_id === "2.2");

  // 2. Helper render list an toàn (tránh lỗi nếu data null)
  const virtues = section21?.content?.four_virtues || [];
  const criteria = section22?.content?.criteria || [];

  return (
    <div className="strategy-section">
      {/* --- SECTION 2.1: ĐẢNG LÀ ĐẠO ĐỨC --- */}
      <div className="resolution-block">
        <ScrollReveal variant="fadeUp" delay={0.1}>
          <div className="subsection-header">
            {/* <div className="subsection-number">2.1</div> */}
            <h3 className="subsection-title">
              {section21?.title || "Đảng là Đạo đức"}
            </h3>
          </div>
        </ScrollReveal>

        <ScrollReveal variant="fadeIn" delay={0.2} duration={0.8}>
          <div className="resolution-content">
            <div className="resolution-intro">
              <p
                style={{
                  fontSize: "1rem",
                  textAlign: "justify",
                  marginBottom: "1rem",
                }}
              >
                <strong>Khái niệm:</strong>{" "}
                {section21?.content?.concept ||
                  "Đạo đức cách mạng là cái gốc..."}
              </p>
              <p
                style={{
                  fontSize: "1rem",
                  textAlign: "justify",
                  marginBottom: "1rem",
                }}
              >
                <strong>Định nghĩa:</strong>{" "}
                {section21?.content?.definition ||
                  "Vào Đảng là để phục vụ, cống hiến..."}
              </p>
              <p
                style={{
                  fontStyle: "italic",
                  marginTop: "1rem",
                  textAlign: "justify",
                }}
              >
                "
                {section21?.content?.purpose ||
                  "Mục đích duy nhất: Làm cho Tổ quốc giàu mạnh..."}
                "
              </p>
            </div>

            <div className="key-decisions-grid">
              {/* Render 4 phẩm chất Cần, Kiệm, Liêm, Chính */}
              {virtues.length > 0 ? (
                virtues.map((virtue, idx) => (
                  <div
                    key={idx}
                    className={`decision-card ${
                      idx % 2 === 0 ? "highlight" : ""
                    }`}
                  >
                    <div className="decision-header">{virtue.virtue}</div>
                    <p>{virtue.meaning}</p>
                  </div>
                ))
              ) : (
                <p>Đang cập nhật dữ liệu...</p>
              )}

              {/* Chí công vô tư - Card đặc biệt nằm ngang */}
              {section21?.content?.supreme_quality && (
                <div
                  className="decision-card success"
                  style={{ gridColumn: "1 / -1" }}
                >
                  <div className="decision-header">Chí công vô tư</div>
                  <p>{section21.content.supreme_quality}</p>
                </div>
              )}
            </div>

            {/* Lời dạy của Bác Hồ */}
            {section21?.content?.bac_ho_quote && (
              <div
                style={{
                  marginTop: "2rem",
                  padding: "1.5rem",
                  backgroundColor: "rgba(212, 55, 49, 0.05)",
                  borderLeft: "4px solid var(--lacquer-red)",
                  borderRadius: "4px",
                }}
              >
                <p style={{ fontStyle: "italic", color: "var(--lacquer-red)" }}>
                  "{section21.content.bac_ho_quote}"
                </p>
                <p
                  style={{
                    textAlign: "right",
                    fontSize: "0.9rem",
                    marginTop: "0.5rem",
                  }}
                >
                  — Chủ tịch Hồ Chí Minh
                </p>
              </div>
            )}
          </div>
        </ScrollReveal>
      </div>

      {/* --- SECTION 2.2: ĐẢNG LÀ VĂN MINH --- */}
      <div className="dongkhoi-block">
        <ScrollReveal variant="fadeUp" delay={0.1}>
          <div className="subsection-header">
            {/* <div className="subsection-number">2.2</div> */}
            <h3 className="subsection-title">
              {section22?.title || "Đảng là Văn minh"}
            </h3>
          </div>
        </ScrollReveal>

        <ScrollReveal variant="slideLeft" delay={0.15} duration={0.7}>
          <div className="war-response-grid">
            <div
              className="image-side"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                src="https://edumedia.lamdongtructuyen.vn//Images/LDG/khoa.sgd/BONHIEMPGDD/000_638331485433391715.jpg"
                alt="Đảng Văn Minh"
                preview={true}
                style={{
                  width: "100%",
                  borderRadius: "8px",
                  maxWidth: "400px",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
                }}
              />
            </div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
            >
              <p
                style={{
                  fontSize: "1rem",
                  textAlign: "justify",
                  marginBottom: "0.5rem",
                }}
              >
                <strong>Khái niệm:</strong>{" "}
                {section22?.content?.concept_intro ||
                  "Đảng tiêu biểu cho lương tâm..."}
              </p>

              <h4 className="content-subtitle">Tiêu chí Văn Minh</h4>
              <ul style={{ listStyle: "none", padding: 0 }}>
                {criteria.length > 0 ? (
                  criteria.map((crt, i) => (
                    <li
                      key={i}
                      style={{
                        marginBottom: "0.8rem",
                        display: "flex",
                        gap: "0.5rem",
                        alignItems: "start",
                      }}
                    >
                      <span
                        style={{
                          color: "var(--lacquer-gold)",
                          fontSize: "1.2rem",
                        }}
                      >
                        ✦
                      </span>
                      <span>{crt}</span>
                    </li>
                  ))
                ) : (
                  <li>Đang cập nhật...</li>
                )}
              </ul>

              {section22?.content?.conclusion && (
                <div
                  className="achievement-box"
                  style={{ marginTop: "1.5rem" }}
                >
                  <strong>Kết luận:</strong> {section22.content.conclusion}
                </div>
              )}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
