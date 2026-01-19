# Thư viện Lịch sử Đảng Cộng sản Việt Nam

## Tổng quan

Trang web thư viện học thuật về Lịch sử Đảng Cộng sản Việt Nam giai đoạn 1954-1975, được thiết kế với giao diện hiện đại, tối giản, thấm đượm bản sắc văn hóa Việt Nam.

## Cấu trúc Component

Dự án được chia thành các component tối ưu, mỗi component có file CSS riêng. Đặc biệt, layout mới có thêm section hình ảnh minh họa lịch sử với mosaic shape bất quy tắc, vibe hoài cổ:

### 📂 src/component/layout/library/

#### **ImageMosaicSection** (ImageMosaicSection.js + ImageMosaicSection.css)

- Mosaic hình ảnh lịch sử, nhiều shape (circle, square, landscape, portrait)
- Overlay caption và nội dung minh họa, đan xen với các section nội dung
- Vibe hoài cổ, layout bất quy tắc, giảm emoji, tăng tính minh họa
- Dễ mở rộng thêm ảnh và nội dung từ `content/content.txt`

Các component nội dung (FoundationSection, StrategySection, NorthSection, SouthSection, VictorySection, OrientationSection) đã được tích hợp hình ảnh chính với caption làm trung tâm, dẫn dắt vào nội dung chi tiết qua tooltip. Layout mới tập trung vào visual và đề mục, tăng tính tương tác và dễ đọc.

## Công nghệ sử dụng

### Framework & Libraries

- **Next.js** - React framework
- **Ant Design** - UI component library
- **Lucide React** - Icon library
- **Google Fonts** - Fraunces (font chính)

### Styling

- **CSS Modules** - Component-scoped CSS
- **CSS Variables** - Màu sắc theme
- **Flexbox & Grid** - Layout responsive

## Màu sắc chủ đạo

```css
--red-primary: #BF092F      /* Đỏ Quốc kỳ */
--red-secondary: #DC2626    /* Đỏ Đảng */
--yellow-star: #FFC400      /* Vàng sao */
--yellow-light: #FFE1AF     /* Vàng pastel */
--teal-light: #91C4C3       /* Xanh ngọc */
--bg-cream: #FDFBF8         /* Kem nhạt */
--bg-paper: #FAF3E0         /* Vàng ngà */
--text-brown: #8B4513       /* Nâu gỗ */
```

## Cài đặt và Chạy

### 1. Cài đặt dependencies

```bash
npm install
# hoặc
yarn install
```

### 2. Chạy development server

```bash
npm run dev
# hoặc
yarn dev
```

### 3. Truy cập trang

Mở trình duyệt và truy cập: `http://localhost:3000/library`

## Tính năng chính

### ✨ UI/UX

- [x] Giao diện tối giản, sang trọng
- [x] Màu sắc Quốc kỳ VN (đỏ-vàng)
- [x] Font Fraunces (Google Fonts)
- [x] Icons từ Lucide React
- [x] Bo góc tối đa 8px
- [x] Shadow tối thiểu

### 🎨 Components

- [x] Header sticky với menu
- [x] Hero với quote rotator
- [x] Timeline interactive
- [x] Dual-column layout với tabs
- [x] Image gallery với shapes đa dạng
- [x] Analysis cards
- [x] Lessons collapse
- [x] Orientation cards với CTA
- [x] Footer với pattern

### 📱 Responsive

- [x] Desktop (>992px)
- [x] Tablet (768px-991px)
- [x] Mobile (<768px)

### ♿ Accessibility

- [x] Semantic HTML5
- [x] ARIA labels
- [x] Keyboard navigation
- [x] Focus visible
- [x] Alt text cho images

## Cấu trúc File

```
src/
├── app/
│   └── library/
│       ├── page.js          # Main page component
│       └── page.css         # Global styles
└── component/
    └── layout/
        └── page1/
            ├── LibraryHeader.js
            ├── LibraryHeader.css
            ├── LibraryHero.js
            ├── LibraryHero.css
            ├── LibraryTimeline.js
            ├── LibraryTimeline.css
            ├── DualTaskSection.js
            ├── DualTaskSection.css
            ├── ImageGallery.js
            ├── ImageGallery.css
            ├── AnalysisSection.js
            ├── AnalysisSection.css
            ├── LessonsSection.js
            ├── LessonsSection.css
            ├── OrientationSection.js
            ├── OrientationSection.css
            ├── LibraryFooter.js
            └── LibraryFooter.css
```

## Tùy chỉnh

### Thay đổi hình ảnh

Các section hình ảnh minh họa lịch sử (`ImageMosaicSection`) sử dụng các hình ảnh tiêu biểu, có thể thay thế bằng ảnh thực tế hoặc bổ sung thêm ảnh mới trong file `ImageMosaicSection.js`.

Các file khác như `LibraryTimeline.js`, `ImageGallery.js`, `LibraryHero.js` cũng có thể thay đổi hình ảnh để phù hợp nội dung lịch sử.

### Thay đổi nội dung

Nội dung được lấy từ `content/content.txt` và có thể mở rộng vào các section hình ảnh minh họa (`ImageMosaicSection`) để tăng tính trực quan, sinh động cho thư viện lịch sử. Chỉnh sửa trực tiếp trong các component:

- Timeline data in `LibraryTimeline.js`
- North/South tabs in `DualTaskSection.js`
- Analysis cards in `AnalysisSection.js`
- Lessons in `LessonsSection.js`
- Orientation cards in `OrientationSection.js`
- Mosaic images/captions in `ImageMosaicSection.js`

### Thay đổi màu sắc

Chỉnh sửa CSS variables trong `page.css`:

```css
:root {
  --red-primary: #bf092f;
  --yellow-star: #ffc400;
  /* ... */
}
```

## Tối ưu hóa

### Performance

- Lazy load images
- Code splitting
- Minimize CSS
- Optimize fonts

### SEO

- Meta tags trong `page.js`
- Semantic HTML
- Alt text cho images
- Schema.org markup (tùy chọn)

## Lưu ý quan trọng

1. **Font Fraunces** - Font toàn cục bắt buộc
2. **Icons** - Ưu tiên Lucide React thay vì emoji
3. **CSS riêng** - Mỗi component có file CSS riêng
4. **Component tối ưu** - Thiết kế modular, dễ bảo trì
5. **Responsive** - Đảm bảo hiển thị tốt trên mọi thiết bị

## Hỗ trợ

Nếu có vấn đề, vui lòng kiểm tra:

1. Dependencies đã cài đặt đầy đủ
2. Next.js version tương thích
3. Ant Design đã import đúng
4. CSS modules hoạt động

## License

Educational purpose - FPT University

## Tác giả

Nhóm 5 - HCM202 - SE1835
Trường Đại học FPT
