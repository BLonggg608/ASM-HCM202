"use client";

import ScrollReveal from "@/component/animation/ScrollReveal";
import contentData from "@/content/contentData";
import { InfoCircleOutlined } from "@ant-design/icons";
import { Button, Image, Modal } from "antd";
import { useState } from "react";
import "./NorthSection.css";

export default function NorthSection() {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState({ title: "", content: "" });

  const openModal = (title, content) => {
    setModalContent({ title, content });
    setModalVisible(true);
  };

  const chapter = contentData.chapters.find((ch) => ch.chapter_number === 3);
  const section31 = chapter.sections.find((s) => s.section_id === "3.1");
  const section32 = chapter.sections.find((s) => s.section_id === "3.2");

  return (
    <div className="north-section">
      {/* Section 3.1: 5 Nguyên tắc Xây dựng Đảng */}
      <div className="section-block">
        <ScrollReveal variant="fadeUp" delay={0.1}>
          <div className="subsection-header">
            {/* <div className="subsection-number">3.1</div> */}
            <h3 className="subsection-title">{section31.title}</h3>
          </div>
        </ScrollReveal>

        <ScrollReveal variant="stagger" delay={0.1}>
            <div className="movements-grid-expanded">
                {section31?.content.principles.map((p, idx) => (
                    <div key={idx} className="movement-card-expanded">
                         <div className={`movement-header ${idx === 0 ? 'youth' : idx % 2 === 0 ? 'farmer' : 'women'}`}>
                             <h5 className="movement-title">{p.name}</h5>
                             <span className="movement-badge">Nguyên tắc {idx + 1}</span>
                         </div>
                         <div className="movement-content-list" style={{padding: "1rem"}}>
                             <p style={{fontSize: "1rem", lineHeight: "1.6"}}>{p.desc}</p>
                         </div>
                    </div>
                ))}
            </div>
        </ScrollReveal>
      </div>

      {/* Section 3.2: Chống Giặc nội xâm */}
      {/* <div className="section-block">
        <ScrollReveal variant="fadeUp" delay={0.1}>
          <div className="subsection-header">
            <div className="subsection-number">3.2</div>
            <h3 className="subsection-title">{section32.title}</h3>
          </div>
        </ScrollReveal>

         <div className="content-section">
            <div className="strategic-quote" style={{backgroundColor: "rgba(139, 26, 26, 0.05)", borderLeft: "4px solid var(--lacquer-red)"}}>
                <p>"{section32?.content.warning}"</p>
                <p className="quote-author">- Cảnh báo của Hồ Chí Minh</p>
            </div>

            <h4 className="content-heading" style={{marginTop: "2rem"}}>Các Căn Bệnh Nguy Hiểm</h4>
            
            <div className="challenges-grid" style={{
                display: "grid", 
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", 
                gap: "1.5rem",
                marginTop: "1.5rem"
            }}>
                {section32?.content.internal_enemies.map((enemy, idx) => (
                    <div key={idx} className="challenge-item" style={{
                        border: "1px solid var(--lacquer-gold)",
                        padding: "1.5rem",
                        borderRadius: "8px",
                        backgroundColor: "#fff"
                    }}>
                        <h5 className="challenge-name" style={{color: "var(--lacquer-red)", fontSize: "1.2rem", marginBottom: "0.5rem"}}>
                            {enemy.disease}
                        </h5>
                        <p className="challenge-detail">
                            {enemy.danger}
                        </p>
                    </div>
                ))}
            </div>
         </div>
      </div> */}

      <Modal
        title={modalContent.title}
        open={modalVisible}
        onCancel={() => setModalVisible(false)}
        footer={null}
        width={800}
      >
        <div style={{ fontSize: "1rem", lineHeight: "1.8" }}>
          {modalContent.content}
        </div>
      </Modal>
    </div>
  );
}