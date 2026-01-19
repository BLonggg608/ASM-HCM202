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
      {/* ==================== SECTION 5.2: PHÂN TÍCH GIẢI PHÁP & KHÁT VỌNG ==================== */}
      <div className="causes-block">
        <ScrollReveal variant="fadeUp" delay={0.1}>
          <div className="subsection-header">
            {/* <div className="subsection-number">5.2</div> */}
            <h3 className="subsection-title">
              {section52?.title || "Phân tích giải pháp & Khát vọng"}
            </h3>
          </div>
        </ScrollReveal>

        {/* Câu hỏi phân tích */}
        <ScrollReveal variant="fadeUp" delay={0.15}>
          <div
            style={{
              marginBottom: "2rem",
              padding: "1.5rem",
              backgroundColor: "rgba(212, 55, 49, 0.08)",
              borderLeft: "4px solid var(--lacquer-red)",
              borderRadius: "4px",
            }}
          >
            <p
              style={{
                fontSize: "0.95rem",
                fontStyle: "italic",
                lineHeight: "1.6",
              }}
            >
              <strong>Câu hỏi:</strong>{" "}
              {section52?.content?.analysis_question ||
                "Làm thế nào để Đảng vừa giữ được bản chất cách mạng..."}
            </p>
          </div>
        </ScrollReveal>

        {/* Các giải pháp */}
        <ScrollReveal variant="fadeUp" delay={0.2} duration={0.7}>
          <div className="factors-grid">
            {section52?.content?.solutions &&
            Array.isArray(section52.content.solutions) ? (
              section52.content.solutions.map((solution, idx) => (
                <div key={idx} className="factor-card">
                  <h4 className="factor-title">{solution.theme}</h4>
                  <div style={{ marginBottom: "1rem" }}>
                    <p
                      style={{
                        fontSize: "0.9rem",
                        fontWeight: "600",
                        color: "#d43731",
                        marginBottom: "0.5rem",
                      }}
                    >
                      📍 Vấn đề:
                    </p>
                    <p style={{ fontSize: "0.85rem", color: "#555" }}>
                      {solution.problem}
                    </p>
                  </div>
                  <p
                    style={{
                      fontSize: "0.9rem",
                      fontWeight: "600",
                      color: "#d43731",
                      marginBottom: "0.5rem",
                    }}
                  >
                    💡 Giải pháp:
                  </p>
                  {solution.approaches &&
                    Array.isArray(solution.approaches) && (
                      <div style={{ marginLeft: "0.5rem" }}>
                        {solution.approaches.map((approach, appIdx) => (
                          <div key={appIdx} style={{ marginBottom: "0.8rem" }}>
                            <p
                              style={{
                                fontWeight: "600",
                                fontSize: "0.85rem",
                                marginBottom: "0.3rem",
                              }}
                            >
                              • {approach.title}
                            </p>
                            <p
                              style={{
                                fontSize: "0.8rem",
                                color: "#666",
                                lineHeight: "1.5",
                              }}
                            >
                              {approach.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}
                </div>
              ))
            ) : (
              <p>Đang cập nhật phân tích giải pháp...</p>
            )}
          </div>
        </ScrollReveal>
        
        <div style={{ height: "3rem" }}></div>

        {/* Vai trò thanh niên */}
        {/* {section52?.content?.youth_empowerment && (
          <ScrollReveal variant="fadeUp" delay={0.25}>
            <div className="final-affirmation" style={{ marginTop: "2.5rem" }}>
              <div className="affirmation-content">
                <h4>Khơi dậy niềm tin Thế hệ trẻ</h4>
                <p className="affirmation-text">
                  {section52.content.youth_empowerment}
                </p>
              </div>
            </div>
          </ScrollReveal>
        )} */}
      </div>
    </div>
  );
}
