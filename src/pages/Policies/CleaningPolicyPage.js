import React from "react";
import "./CleaningPolicyPage.scss";

const CleaningPolicyPage = () => {
  return (
    <div className="cleaning-policy">
      <h1>Chính Sách Vệ Sinh Và Bảo Quản Mắt Kính</h1>
      <div className="content">
        <h2>Hướng Dẫn Vệ Sinh Mắt Kính</h2>
        <p>
          Để giữ cho mắt kính của bạn luôn sạch sẽ và trong suốt, hãy thực hiện các bước vệ sinh sau đây:
        </p>
        <ol>
          <li>Sử dụng nước sạch hoặc dung dịch vệ sinh mắt kính chuyên dụng để rửa mắt kính.</li>
          <li>Sử dụng khăn mềm, khô và sạch (không bông xù) để lau mắt kính.</li>
          <li>Tránh sử dụng xà phòng, nước rửa chén, hay các chất tẩy rửa mạnh để vệ sinh mắt kính.</li>
          <li>Luôn dùng khăn chuyên dụng để lau kính, không sử dụng áo hoặc vải thô để lau.</li>
        </ol>

        <h2>Hướng Dẫn Bảo Quản Mắt Kính</h2>
        <p>
          Để bảo quản mắt kính tránh bị hỏng, trầy xước hoặc biến dạng, bạn cần chú ý các nguyên tắc bảo quản sau:
        </p>
        <ul>
          <li>Luôn để mắt kính trong hộp khi không sử dụng để tránh trầy xước hoặc bị bẻ cong.</li>
          <li>Tránh để kính ở những nơi có nhiệt độ cao như trên xe ô tô hoặc gần nguồn nhiệt.</li>
          <li>Không đặt kính trực tiếp lên mặt kính, nên đặt kính úp xuống hoặc cất vào hộp đựng.</li>
          <li>Tránh để kính tiếp xúc với các vật cứng hoặc sắc nhọn.</li>
          <li>Hạn chế để kính trong túi mà không có hộp bảo quản, vì dễ bị va chạm và trầy xước.</li>
        </ul>

        <h2>Bảo Dưỡng Định Kỳ</h2>
        <p>
          Để đảm bảo kính của bạn luôn hoạt động tốt và bảo vệ mắt một cách tối ưu, hãy mang kính đến cửa hàng để được bảo dưỡng định kỳ, điều chỉnh độ cong gọng và kiểm tra độ tròng kính.
        </p>
      </div>
    </div>
  );
};

export default CleaningPolicyPage;
