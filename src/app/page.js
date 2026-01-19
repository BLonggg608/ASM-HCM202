"use client";

import HeroSection from "@/component/layout/dashboard/sections/hero-section";

export default function Dashboard() {
  // Historical & Modern images for "Party & Aspiration 4.0"
  const historicalImages = [
    {
      title: "Chủ tịch Hồ Chí Minh",
      thumbnail: "https://media.vov.vn/sites/default/files/styles/large/public/2021-05/bac_ho_noi_chuyen_voi_can_bo__dang_vien.jpg",
    },
    {
      title: "Đại hội Đảng",
      thumbnail:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Communist_Party_of_Vietnam_flag.svg/2560px-Communist_Party_of_Vietnam_flag.svg.png",
    },
    {
      title: "Tư tưởng Hồ Chí Minh",
      thumbnail:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Ho_Chi_Minh_1946.jpg/220px-Ho_Chi_Minh_1946.jpg",
    },
    {
      title: "Nhà nước Pháp quyền",
      thumbnail:
        "https://cdn.chinhphu.vn/334894974524682240/2022/10/8/co-do-sao-vang-166520379208034448530.jpg",
    },
    {
      title: "Quốc hội Việt Nam",
      thumbnail:
        "https://data.quochoi.vn/UserControls/Publishing/News/Image/2021/1/6/1.jpg",
    },
    {
      title: "Chuyển đổi số Quốc gia",
      thumbnail:
        "https://mic.gov.vn/Uploads/2022/10/10/12/04/Chuyen-doi-so-quoc-gia.jpg",
    },
    {
      title: "Thanh niên xung kích 4.0",
      thumbnail:
        "https://doanthanhnien.vn/Content/uploads/images/132829702148100812_3-san-sang-080821.jpg",
    },
    {
      title: "Đoàn kết Dân tộc",
      thumbnail:
        "https://cdnmedia.baotintuc.vn/Upload/e9GdNZvHDFi8lZSWc6ubA/files/2025/04/dieu-hanh-30425-3.jpg",
    },
    {
      title: "Cần, Kiệm, Liêm, Chính",
      thumbnail:
        "https://tuyengiao.vn/Uploads/2019/6/5/26/dang-cong-san-viet-nam.jpg",
    },
    {
      title: "Đổi mới sáng tạo",
      thumbnail:
        "https://cdn.vnu.edu.vn/upload/2019/08/29/image001.jpg",
    },
  ];

  // Navigation cards for main features - Updated descriptions for new theme
  const navigationCards = [
    {
      title: "Lý luận & Thực tiễn",
      description:
        "Khám phá bản chất Đảng, Tư tưởng Hồ Chí Minh và ứng dụng trong kỷ nguyên số",
      link: "/library",
      icon: "BookOutlined",
      color: "lacquer-red",
    },
    {
      title: "Trắc Nghiệm Kiến Thức",
      description: "Kiểm tra sự hiểu biết về Đạo đức cách mạng và Nhà nước pháp quyền",
      // link: "https://play.blooket.com/play",
      link: "/library/quiz",
      icon: "EditOutlined",
      color: "jade-green",
    },
    {
      title: "AI Usage",
      description: "Ứng dụng AI có trách nhiệm – minh bạch – sáng tạo – liêm chính học thuật",
      link: "/ai-usage",
      icon: "RobotOutlined",
      color: "lacquer-gold",
    },
  ];

  return (
    <>
      <main className="">
        <HeroSection
          historicalImages={historicalImages}
          navigationCards={navigationCards}
        />
      </main>
    </>
  );
}