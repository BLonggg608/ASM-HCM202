"use client";

import { BookOutlined, MenuOutlined, StarOutlined } from "@ant-design/icons";
import { Button, Layout, Menu } from "antd";
import "./MuseumHeader.css";

const { Header } = Layout;

export default function MuseumHeader({ activeSection, setActiveSection }) {
  const menuItems = [
    { key: "hero", label: "Trang chủ", icon: <StarOutlined /> },
    { key: "foundation", label: "I. Bản chất Đảng", icon: <BookOutlined /> },
    {
      key: "strategy",
      label: "II. Đạo đức & Văn minh",
      icon: <BookOutlined />,
    },
    { key: "north", label: "III. Xây dựng Đảng", icon: <BookOutlined /> },
    { key: "south", label: "IV. Nhà nước của Dân", icon: <BookOutlined /> },
    { key: "victory", label: "V. Khát vọng 4.0", icon: <BookOutlined /> },
    { key: "footer", label: "Thông tin", icon: <StarOutlined /> },
  ];

  const handleMenuClick = (e) => {
    // Directly change chapter instead of scrolling
    setActiveSection(e.key);
  };

  return (
    <Header className="museum-header">
      <div className="header-container">
        {/* Brand Section */}
        {/* <div className="header-brand">
          <img
            src="https://file3.qdnd.vn/data/images/0/2025/04/03/upload_2049/lo-go.jpg"
            alt="Logo Đảng"
            className="header-logo"
          />
          <div className="header-title-group">
            <h1 className="header-title">
              Đảng Cộng sản Việt Nam: Đạo đức, Văn minh & Khát vọng 4.0
              <a className="header-subtitle">
                <StarOutlined className="subtitle-icon" />
                Nhóm 5 - SE1835 | HCM202
              </a>
            </h1>
          </div>
        </div> */}

        {/* Navigation Menu */}
        <Menu
          mode="horizontal"
          selectedKeys={[activeSection]}
          items={menuItems}
          onClick={handleMenuClick}
          className="header-menu"
        />

        {/* Mobile Menu Button */}
        {/* <Button
          type="text"
          icon={<MenuOutlined />}
          className="menu-mobile-btn"
        /> */}
      </div>
    </Header>
  );
}
