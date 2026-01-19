"use client";

import contentData from "@/content/contentData";
import { Image } from "antd";
import "./OrientationSection.css";

export default function OrientationSection() {
  const chapter = contentData.chapters.find((ch) => ch.chapter_number === 5);
  const section = chapter.sections.find((s) => s.section_id === "5.4");

  return (
    <div className="orientation-section">
      <div className="subsection-header">
        <div className="subsection-number">5.4</div>
        <h3 className="subsection-title">{section.title}</h3>
      </div>

      <div className="overall-message">
        <p className="message-text">{section.content.overall_message}</p>
      </div>

      {/* Historical Sites */}
      <div className="historical-sites">
        <h4 className="sites-title">Di tích Lịch sử Minh chứng</h4>

        <div className="sites-grid">
          {section.content.historical_sites.map((site, idx) => (
            <div key={idx} className="site-card">
              <div className="site-header">
                <h5 className="site-name">{site.name}</h5>
                {site.classification && (
                  <span className="site-classification">
                    {site.classification}
                  </span>
                )}
              </div>

              <div className="site-info">
                <p>
                  <strong>Địa điểm:</strong> {site.location}
                </p>
                {site.nickname && (
                  <p>
                    <strong>Biệt danh:</strong> {site.nickname}
                  </p>
                )}
                <p className="site-description">{site.description || ""}</p>
                <p className="site-significance">
                  <strong>Ý nghĩa:</strong>{" "}
                  {site.significance || site.symbolic_meaning}
                </p>
              </div>

              {site.historical_moment && (
                <div className="historical-moment">
                  <h6>Khoảnh khắc Lịch sử</h6>
                  <p>
                    <strong>Sự kiện:</strong> {site.historical_moment.event}
                  </p>
                  <p>
                    <strong>Thời gian:</strong> {site.historical_moment.time}
                  </p>
                  <p>
                    <em>{site.historical_moment.significance}</em>
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Historical Sites Images - 2 Column Grid */}
        <div
          className="sites-images"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "2rem",
            margin: "2rem 0",
            "@media (max-width: 768px)": {
              gridTemplateColumns: "1fr",
              gap: "1rem",
            },
          }}
        >
          {/* Địa đạo Củ Chi */}
          <div style={{ textAlign: "center" }}>
            <Image
              src="https://i.ex-cdn.com/vntravellive.com/files/news/2025/04/13/gioi-tre-ru-nhau-di-dia-dao-cu-chi-de-tan-mat-thay-dat-thep-thay-hoa-binh-dep-lam-090006.jpg"
              alt="Địa đạo Củ Chi"
              style={{
                width: "100%",
                maxWidth: "400px",
                borderRadius: "4px",
              }}
              preview={true}
            />
            <p
              style={{
                fontSize: "0.85rem",
                color: "#666",
                marginTop: "0.5rem",
                textAlign: "center",
              }}
            >
              Địa đạo Củ Chi - Biểu tượng của lòng yêu nước và ý chí kiên cường
            </p>
          </div>

          {/* Dinh Độc Lập ngày nay */}
          <div style={{ textAlign: "center" }}>
            <Image
              src="https://ik.imagekit.io/tvlk/blog/2025/04/dinh-doc-lap.jpg?tr=q-70,c-at_max,w-500,h-300,dpr-2"
              alt="Dinh Độc Lập ngày nay"
              style={{
                width: "100%",
                maxWidth: "400px",
                borderRadius: "4px",
              }}
              preview={true}
            />
            <p
              style={{
                fontSize: "0.85rem",
                color: "#666",
                marginTop: "0.5rem",
                textAlign: "center",
              }}
            >
              Dinh Độc Lập (nay là Dinh Thống Nhất) - Nơi đánh dấu chiến thắng
              30/4/1975
            </p>
          </div>
        </div>
      </div>

      {/* Message to Youth */}
      <div className="youth-message">
        <div className="message-card">
          <div className="message-icon"></div>
          <h4>Thông điệp đến Thế hệ Trẻ</h4>
          <p className="youth-text">{section.content.message_to_youth}</p>
        </div>
      </div>

      {/* 50th Anniversary Celebration */}
      <div className="anniversary-celebration">
        <h4>Kỷ niệm 50 năm Giải phóng miền Nam (30/4/2025)</h4>

        {/* First Row - 2 Column Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "2rem",
            margin: "2rem 0",
          }}
        >
          {/* Lễ diễu binh TP.HCM */}
          <div style={{ textAlign: "center" }}>
            <Image
              src="https://file3.qdnd.vn/data/images/0/2025/04/30/upload_2201/anh%20le%20ky%20niem.jpg?dpi=150&quality=100&w=870"
              alt="Lễ diễu binh kỷ niệm 50 năm Giải phóng miền Nam tại TP.HCM"
              style={{
                width: "100%",
                maxWidth: "400px",
                borderRadius: "4px",
              }}
              preview={true}
            />
            <p
              style={{
                fontSize: "0.85rem",
                color: "#666",
                marginTop: "0.5rem",
                textAlign: "center",
              }}
            >
              Lễ diễu binh kỷ niệm 50 năm Ngày Giải phóng miền Nam, thống nhất
              đất nước tại TP.HCM
            </p>
          </div>

          {/* Lễ kỷ niệm tại Dinh Thống Nhất */}
          <div style={{ textAlign: "center" }}>
            <Image
              src="https://hn.ss.bfcplatform.vn/tckt/2019/03/19A03054.jpg"
              alt="Sài Gòn nay Thành phố Hồ Chí Minh"
              style={{
                width: "100%",
                maxWidth: "400px",
                borderRadius: "4px",
              }}
              preview={true}
            />
            <p
              style={{
                fontSize: "0.85rem",
                color: "#666",
                marginTop: "0.5rem",
                textAlign: "center",
              }}
            >
              Lễ kỷ niệm 50 năm Ngày Giải phóng miền Nam tại Dinh Thống Nhất
            </p>
          </div>
        </div>

        {/* Second Row - Centered Single Image */}
        <div style={{ textAlign: "center", margin: "2rem 0" }}>
          <Image
            src="https://cdnmedia.baotintuc.vn/Upload/e9GdNZvHDFi8lZSWc6ubA/files/2025/04/dieu-hanh-30425-3.jpg"
            alt="Đoàn diễu hành kỷ niệm 50 năm đi giữa khối 'đại đoàn kết dân tộc'"
            style={{
              width: "100%",
              maxWidth: "500px",
              borderRadius: "4px",
            }}
            preview={true}
          />
          <p
            style={{
              fontSize: "0.85rem",
              color: "#666",
              marginTop: "0.5rem",
              textAlign: "center",
            }}
          >
            Đoàn diễu hành trong lễ kỷ niệm 50 năm Ngày Giải phóng miền Nam
          </p>
        </div>
      </div>

      {/* Final Affirmation */}
      <div className="final-affirmation">
        <div className="affirmation-content">
          <div className="affirmation-icon">✦</div>
          <p className="affirmation-text">
            {section.content.final_affirmation}
          </p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="call-to-action">
        <h4>Hãy cùng nhau:</h4>
        <div className="action-grid">
          <div className="action-item">
            <span className="action-emoji"></span>
            <p>Học tập và nghiên cứu lịch sử Đảng</p>
          </div>
          <div className="action-item">
            <span className="action-emoji">🇻🇳</span>
            <p>Giữ gìn và phát huy truyền thống dân tộc</p>
          </div>
          <div className="action-item">
            <span className="action-emoji"></span>
            <p>Phấn đấu xây dựng đất nước phồn vinh</p>
          </div>
          <div className="action-item">
            <span className="action-emoji"></span>
            <p>Đóng góp cho hòa bình thế giới</p>
          </div>
        </div>
      </div>
    </div>
  );
}
