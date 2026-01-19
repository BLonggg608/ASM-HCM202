"use client";

import Assets from "@/assets";
import ScrollReveal from "@/component/animation/ScrollReveal";
import ARImage from "@/component/common/ARImage";
import contentData from "@/content/contentData";
import { Image } from "antd"; // Bỏ Button, Modal thừa
import "./FoundationSection.css";

export default function FoundationSection() {
  // Lấy dữ liệu an toàn
  const chapter1 = contentData.chapters.find((ch) => ch.chapter_number === 1);
  const section11 = chapter1?.sections?.[0]; // Sự cần thiết
  const section12 = chapter1?.sections?.[1]; // Bản chất

  // Helper để render list an toàn
  const renderList = (items) => {
    if (!items || !Array.isArray(items)) return null;
    return items.map((item, index) => (
      <li
        key={index}
        className="challenge-item"
        style={{
          fontSize: "1.1rem",
          marginBottom: "1rem",
          borderLeft: "4px solid var(--lacquer-gold)",
          paddingLeft: "1rem",
        }}
      >
        {item}
      </li>
    ));
  };

  return (
    <div className="foundation-section">
      {/* --- PHẦN 1.1: TÍNH TẤT YẾU --- */}
      <div className="section-block">
        <ScrollReveal variant="fadeUp" delay={0.1}>
          <div className="subsection-header">
            {/* <div className="subsection-number">1.1</div> */}
            <h3 className="subsection-title">
              {section11?.title || "Sự cần thiết"}
            </h3>
          </div>
        </ScrollReveal>

        <ScrollReveal variant="slideRight" delay={0.2} duration={0.7}>
          <div className="context-section domestic">
            {/* <h4 className="context-title">
              <span className="title-marker">✦</span>
              Quy Luật Ra Đời & Vai Trò Lãnh Đạo
            </h4> */}

            <div className="split-content reverse">
              <div className="image-content">
                <Image
                  src="https://file3.qdnd.vn/data/images/0/2022/07/06/huydong/bac%20ho%202.jpg?dpi=150&quality=100&w=870"
                  alt="Người cầm lái vĩ đại"
                  // Tạm thời ẩn QR code cũ để tránh nhầm lẫn nội dung AR
                  preview={true}
                  style={{ width: "100%", borderRadius: "8px" }}
                  caption="Người cầm lái có vững thuyền mới chạy"
                />
              </div>

              <div className="text-content">
                <div className="region-info north">
                  <h5 className="region-label">Quy luật Hình thành</h5>
                  <p
                    className="region-text"
                    style={{ fontSize: "1rem", textAlign: "justify" }}
                  >
                    {section11?.content?.formation_law ||
                      "Khác với lý luận của Lênin..."}
                  </p>
                </div>
                <div
                  className="region-info south"
                  style={{ marginTop: "1rem" }}
                >
                  <h5 className="region-label">Quan điểm Hồ Chí Minh</h5>
                  <p
                    className="region-text"
                    style={{ fontSize: "1.1rem", fontStyle: "italic" }}
                  >
                    "
                    {section11?.content?.viewpoint ||
                      "Cách mạng trước hết phải có Đảng cách mệnh..."}
                    "
                  </p>
                  <p style={{ marginTop: "1rem", fontSize: "0.95rem" }}>
                    <strong>Kết luận:</strong>{" "}
                    {section11?.content?.leadership_role ||
                      "Sự lãnh đạo của Đảng là nhân tố quyết định."}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* --- PHẦN 1.2: BẢN CHẤT CỦA ĐẢNG --- */}
      <div className="section-block">
        {/* <ScrollReveal variant="fadeUp" delay={0.1}>
          <div className="subsection-header">
            <div className="subsection-number">1.2</div>
            <h3 className="subsection-title">
              {section12?.title || "Bản chất Đảng"}
            </h3>
          </div>
        </ScrollReveal> */}

        <ScrollReveal variant="scaleIn" delay={0.2} duration={0.8}>
          <div className="strategies-comparison">
            {/* Cột 1: Mác - Lênin */}
            {/* <div className="strategy-block north">
              <h4 className="strategy-region">Quan điểm Mác - Lênin</h4>
              <div className="strategy-details">
                <p className="role-highlight" style={{ textAlign: "justify" }}>
                  {section12?.content?.marx_lenin_view ||
                    "Đảng là đội tiên phong của giai cấp công nhân."}
                </p>
                <Image
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Marx_old.jpg/220px-Marx_old.jpg"
                  alt="Karl Marx"
                  style={{
                    width: "100px",
                    borderRadius: "50%",
                    margin: "1rem auto",
                    display: "block",
                    border: "2px solid #fff",
                  }}
                />
              </div>
            </div> */}

            {/* Cột 2: Hồ Chí Minh (Sáng tạo) */}
            {/* <div className="strategy-block south">
              <h4 className="strategy-region">Sự sáng tạo Hồ Chí Minh</h4>
              <div className="strategy-details">
                <p
                  className="role-highlight"
                  style={{
                    textAlign: "justify",
                    fontWeight: "bold",
                    color: "var(--lacquer-red)", // Màu đỏ sơn mài
                  }}
                >
                  {section12?.content?.hcm_innovation ||
                    "Đảng của GCCN, nhân dân lao động và cả dân tộc."}
                </p>
                <Image
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Ho_Chi_Minh_1946.jpg/220px-Ho_Chi_Minh_1946.jpg"
                  alt="Hồ Chí Minh"
                  style={{
                    width: "100px",
                    borderRadius: "50%",
                    margin: "1rem auto",
                    display: "block",
                    border: "2px solid var(--lacquer-gold)",
                  }}
                />
              </div>
            </div> */}
          </div>
        </ScrollReveal>

        {/* Phần Ý nghĩa */}
        {/* <ScrollReveal variant="fadeUp" delay={0.15} duration={0.7}>
          <div className="table-wrapper">
            <h4 className="table-title">Ý Nghĩa & Sức Mạnh Đại Đoàn Kết</h4>
            <ul
              className="challenges-list"
              style={{ listStyle: "none", padding: "1rem" }}
            >
              {renderList(section12?.content?.significance)}
            </ul>
          </div>
        </ScrollReveal> */}
      </div>
    </div>
  );
}
