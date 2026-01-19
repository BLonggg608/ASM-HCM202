"use client";

import { GoogleGenAI } from "@google/genai";
import { useState } from "react";

const SYSTEM_PROMPT = `
Tập trung trả lời về Đảng Cộng sản Việt Nam: Đạo đức, Văn minh & Khát vọng 4.0 và Tư tưởng Hồ Chí Minh.
Nhiệm vụ chính: Giải đáp thắc mắc về chủ đề "Đảng là Đạo đức, Văn minh & Khát vọng 4.0".

Phạm vi kiến thức chuyên môn:
1. Tư tưởng Hồ Chí Minh về Đảng Cộng sản:
   - Bản chất Đảng: Đội tiên phong của giai cấp công nhân, nhân dân lao động và dân tộc.
   - Xây dựng Đảng: 5 nguyên tắc (Tập trung dân chủ, Tự phê bình và phê bình...).
   - Tứ đức: Cần, Kiệm, Liêm, Chính. Chí công vô tư.
   - Đảng là Đạo đức, là Văn minh.

2. Xây dựng Nhà nước Pháp quyền XHCN:
   - Nhà nước của dân, do dân, vì dân.
   - Kiểm soát quyền lực, chống tham nhũng, lãng phí, quan liêu.

3. Vận dụng trong Kỷ nguyên số (4.0):
   - Chuyển đổi số trong công tác Đảng và quản lý Nhà nước.
   - Nhận diện và phòng chống "Quan liêu số", "Xa rời nhân dân trên không gian mạng".
   - Vai trò của thanh niên trong bảo vệ nền tảng tư tưởng trên không gian mạng.

Phong cách trả lời:
- Dễ hiểu, chính xác, đầy đủ nhưng ngắn gọn, mang tính giáo dục chính trị nhưng vẫn gần gũi.
- Dẫn chứng các câu nói của Bác Hồ (ví dụ: "Việc gì có lợi cho dân thì phải hết sức làm...").
- Liên hệ thực tiễn với bối cảnh công nghệ 4.0 (AI, Big Data, Mạng xã hội).
- Khuyến khích sinh viên rèn luyện đạo đức và kỹ năng số.
`;

export function useAI() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const generateResponse = async (userInput) => {
    const keys = [
      { key: process.env.NEXT_PUBLIC_GEMINI_API_KEY, version: "v1" },
      { key: process.env.NEXT_PUBLIC_GEMINI_API_KEY_V2, version: "v2" },
      { key: process.env.NEXT_PUBLIC_GEMINI_API_KEY_V3, version: "v3" },
    ];

    const availableKeys = keys.filter((k) => k.key);

    if (availableKeys.length === 0) {
      setError("Không có API key khả dụng");
      return null;
    }

    setLoading(true);
    setError(null);

    // Thử tất cả các key có sẵn
    const failedKeys = [];

    for (const keyToTry of availableKeys) {
      // Bỏ qua key đã lỗi trước đó
      if (failedKeys.includes(keyToTry.version)) {
        continue;
      }

      try {
        console.log(`Đang thử sử dụng API key ${keyToTry.version}...`);

        const genAI = new GoogleGenAI({
          apiKey: keyToTry.key,
        });

        const response = await genAI.models.generateContent({
          model: "gemini-2.5-flash",
          contents: SYSTEM_PROMPT + "\n\n" + userInput,
        });

        console.log(`✅ Thành công với API key ${keyToTry.version}`);
        setLoading(false);
        return response.text;
      } catch (err) {
        console.error(`❌ Lỗi với API key ${keyToTry.version}:`, err);
        failedKeys.push(keyToTry.version);

        // Kiểm tra nếu là lỗi 503 Service Unavailable
        const isServiceUnavailable =
          err.message?.includes("503") ||
          err.status === 503 ||
          err.message?.includes("Service Unavailable");

        if (isServiceUnavailable) {
          console.log(
            `🔄 API key ${keyToTry.version} gặp lỗi 503, chuyển sang key khác...`,
          );

          // Kiểm tra xem còn key nào khả dụng không
          const remainingKeys = availableKeys.filter(
            (k) => !failedKeys.includes(k.version),
          );
          if (remainingKeys.length > 0) {
            setError(
              `Dịch vụ tạm thời không khả dụng với ${keyToTry.version}. Đang thử key khác...`,
            );
            continue; // Thử key tiếp theo
          }
        }

        // Nếu là key cuối cùng hoặc không phải lỗi 503
        const remainingKeys = availableKeys.filter(
          (k) => !failedKeys.includes(k.version),
        );
        if (remainingKeys.length === 0) {
          break; // Đã thử hết tất cả key
        }
      }
    }

    // Nếu đã thử hết tất cả key
    setLoading(false);
    const errorMessage =
      failedKeys.length > 1
        ? `Tất cả API key đều gặp sự cố. Vui lòng thử lại sau vài phút. (Đã thử: ${failedKeys.join(
            ", ",
          )})`
        : `Dịch vụ tạm thời không khả dụng. Vui lòng thử lại sau ít phút.`;

    setError(errorMessage);
    return null;
  };

  return {
    generateResponse,
    loading,
    error,
  };
}
