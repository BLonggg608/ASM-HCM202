"use client";

import ScrollReveal from "@/component/animation/ScrollReveal";
import FoundationSection from "@/component/layout/library/chuong_1/FoundationSection";
import StrategySection from "@/component/layout/library/chuong_2/StrategySection";
import NorthSection from "@/component/layout/library/chuong_3/NorthSection";
import SouthSection from "@/component/layout/library/chuong_4/SouthSection";
import VictorySection from "@/component/layout/library/chuong_5/VictorySection";
import MuseumFooter from "@/component/layout/library/footer/MuseumFooter";
import MuseumHeader from "@/component/layout/library/header/MuseumHeader";
import MuseumHero from "@/component/layout/library/hero/MuseumHero";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";
import { Button, Layout } from "antd";
import { useEffect, useState } from "react";
import "./page.css";

const { Content } = Layout;

export default function HomePage() {
  const [activeSection, setActiveSection] = useState("hero");

  // Scroll to top whenever activeSection changes
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [activeSection]);

  // Define chapters configuration (include hero and footer)
  const chapters = [
    { key: "hero", title: "Trang chủ", isHero: true },
    { key: "foundation", title: "I. Bản chất Đảng", years: "Lý luận" },
    {
      key: "strategy",
      title: "II. Đạo đức & Văn minh",
      years: "Tư tưởng",
      subtitle: "Cần, Kiệm, Liêm, Chính, Chí công vô tư",
    },
    {
      key: "north",
      title: "III. Xây dựng Đảng",
      years: "Nguyên tắc",
      subtitle: "Phòng chống 'Giặc nội xâm' & Quan liêu",
    },
    {
      key: "south",
      title: "IV. Nhà nước Của Dân",
      years: "Pháp quyền",
      subtitle: "Do dân, Vì dân & Dân chủ",
    },
    {
      key: "victory",
      title: "V. Khát vọng & 4.0",
      years: "Thực tiễn",
      subtitle: "Chuyển đổi số & Tầm nhìn tương lai",
    },
    { key: "footer", title: "Thông tin", isFooter: true },
  ];

  const currentIndex = chapters.findIndex((ch) => ch.key === activeSection);
  const safeCurrentIndex = currentIndex >= 0 ? currentIndex : 0;

  const handleNextChapter = () => {
    // Chuyển tuyến tính: hero->1->2->3->4->5->footer->hero (loop back)
    const nextIndex = (safeCurrentIndex + 1) % chapters.length;
    setActiveSection(chapters[nextIndex].key);
  };

  const handlePreviousChapter = () => {
    // Chuyển ngược: footer->5->4->3->2->1->hero->footer
    const prevIndex =
      (safeCurrentIndex - 1 + chapters.length) % chapters.length;
    setActiveSection(chapters[prevIndex].key);
  };

  // Render current chapter component
  const renderCurrentChapter = () => {
    const currentChapter = chapters[safeCurrentIndex];

    if (!currentChapter) {
      return <MuseumHero />;
    }

    // If hero section, render hero directly
    if (currentChapter.isHero) {
      return <MuseumHero />;
    }

    // If footer section, render footer directly
    if (currentChapter.isFooter) {
      return <MuseumFooter />;
    }

    return (
      <section
        id={currentChapter.key}
        className={`museum-section ${currentChapter.key}-section magazine-section bg-${currentChapter.key}`}
      >
        <ScrollReveal variant="fadeUp" duration={0.8}>
          <div className="section-header">
            <div className="section-roman">{currentChapter.title}</div>
            <div className="section-years">{currentChapter.years}</div>
            {currentChapter.subtitle && (
              <div className="section-subtitle">{currentChapter.subtitle}</div>
            )}
          </div>
        </ScrollReveal>

        {activeSection === "foundation" && <FoundationSection />}
        {activeSection === "strategy" && <StrategySection />}
        {activeSection === "north" && <NorthSection />}
        {activeSection === "south" && <SouthSection />}
        {activeSection === "victory" && <VictorySection />}
      </section>
    );
  };

  return (
    <Layout className="museum-layout">
      <MuseumHeader
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />

      <Content className="museum-content museum-article">
        {/* Chapter Navigation Buttons - Circular like AI button */}
        <div className="chapter-navigation-buttons">
          {/* Previous Button */}
          <Button
            type="primary"
            shape="circle"
            size="large"
            icon={<ArrowLeftOutlined style={{ fontSize: "24px" }} />}
            onClick={handlePreviousChapter}
            className="nav-btn-circle nav-btn-prev"
            style={{
              width: "60px",
              height: "60px",
              background: "var(--lacquer-red)",
              borderColor: "var(--lacquer-gold)",
              border: "3px solid var(--lacquer-gold)",
              boxShadow: "0 4px 12px rgba(139, 26, 26, 0.4)",
            }}
            title={`Quay lại ${
              chapters[
                (safeCurrentIndex - 1 + chapters.length) % chapters.length
              ].title
            }`}
          />

          {/* Chapter indicator */}
          <div className="chapter-indicator">
            {chapters[safeCurrentIndex].isHero
              ? "Home"
              : chapters[safeCurrentIndex].isFooter
              ? "Info"
              : `${safeCurrentIndex}/5`}
          </div>

          {/* Next Button */}
          <Button
            type="primary"
            shape="circle"
            size="large"
            icon={<ArrowRightOutlined style={{ fontSize: "24px" }} />}
            onClick={handleNextChapter}
            className="nav-btn-circle nav-btn-next"
            style={{
              width: "60px",
              height: "60px",
              background: "var(--lacquer-red)",
              borderColor: "var(--lacquer-gold)",
              border: "3px solid var(--lacquer-gold)",
              boxShadow: "0 4px 12px rgba(139, 26, 26, 0.4)",
            }}
            title={`Chuyển sang ${
              chapters[(safeCurrentIndex + 1) % chapters.length].title
            }`}
          />
        </div>

        {/* Render Current Chapter Only */}
        {renderCurrentChapter()}
      </Content>
    </Layout>
  );
}
