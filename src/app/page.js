"use client";

import HeroSection from "@/component/layout/dashboard/sections/hero-section";

export default function Dashboard() {
  // Historical & Modern images for "Party & Aspiration 4.0"
  const historicalImages = [
    {
      title: "Chủ tịch Hồ Chí Minh",
      thumbnail:
        "https://media.baocaobang.vn/upload/image/202405/medium/119322_chu_tich_ho_chi_minh_doc_tuyen_ngon_doc_lap_anh_t_l_05340013.jpg",
    },
    {
      title: "Đại hội Đảng",
      thumbnail:
        "https://vnanet.vn/Data/Articles/2021/01/16/5238062/vna_potal_dai_hoi_lan_thu_nhat_cua_dang_khoi_phuc_to_chuc_thong_nhat_cac_phong_trao_dau_tranh_cach_mang_duoi_su_lanh_dao_cua_dang_145515225_stand.jpg",
    },
    {
      title: "Tư tưởng Hồ Chí Minh",
      thumbnail:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9YluwUSuh6yLUdIw9NMVQcllQvjdBehLMKg&s",
    },
    {
      title: "Nhà nước Pháp quyền",
      thumbnail:
        "https://images.hcmcpv.org.vn/res/news/2021/12/12-12-2021-xay-dung-nha-nuoc-phap-quyen-xa-hoi-chu-nghia-theo-quan-diem-cua-chu-tich-ho-chi-minh-28448453.jpg",
    },
    {
      title: "Quốc hội Việt Nam",
      thumbnail: "https://hdll.vn/FileUpload/Images/ttxvn_khaimac.jpg",
    },
    {
      title: "Chuyển đổi số Quốc gia",
      thumbnail:
        "https://www.meinvoice.vn/wp-content/uploads/2025/01/ngay-chuy-doi-so-quoc-gia.png",
    },
    {
      title: "Thế hệ kiến tạo tương lai",
      thumbnail:
        "https://special.nhandan.vn/tuong-lai-cho-the-he-vuon-minh/assets/AtmJIrJSSX/0000-2500x1406.jpg",
    },
    {
      title: "Đoàn kết Dân tộc",
      thumbnail:
        "https://a.tcnnld.vn//Upload/Images/Normal/2025/10/4ad4dc730da27bdfdc0518bc3b75dfe2-20251006_0947_Doan-Ket-Dan-Toc_simple_compose_01k6vpjhj1fnya9g3kqetrdfcp65424-01.jpg",
    },
    {
      title: "Cần, Kiệm, Liêm, Chính",
      thumbnail:
        "https://tttctt.1cdn.vn/thumbs/720x480/2024/05/18/ho-chi-minh.jpg",
    },
    {
      title: "Đổi mới sáng tạo",
      thumbnail: "https://images.squarespace-cdn.com/content/v1/5930dc9237c5817c00b10842/1587183012138-NVA9LT7AR1Y9G5RCYINT/10_innovations_lessons_2_o.jpg",
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
    // {
    //   title: "Trắc Nghiệm Kiến Thức",
    //   description:
    //     "Ôn tập kiến thức về Đảng Cộng sản Việt Nam và Tư tưởng Hồ Chí Minh qua các câu hỏi tương tác",
    //   // link: "https://play.blooket.com/play",
    //   link: "/quiz",
    //   icon: "EditOutlined",
    //   color: "jade-green",
    // },
    {
      title: "AI Usage",
      description:
        "Ứng dụng AI có trách nhiệm – minh bạch – sáng tạo – liêm chính học thuật",
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
