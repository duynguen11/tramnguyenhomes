import { useRef } from "react";
import emailjs from "emailjs-com";

import Bg3 from "../../assets/images/Slider/Bg3.jpg";
import Bg6 from "../../assets/images/Slider/Bg6.jpg";

export const Slider = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ia2yp2p", // Thay bằng Service ID của bạn
        "template_x6nv5tc", // Thay bằng Template ID của bạn
        form.current,
        "QMA1eCQFk32sEpwul" // Thay bằng User ID của bạn
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          alert("Gửi thông tin thành công!");
        },
        (error) => {
          console.log("Error sending email:", error.text);
          alert("Có lỗi xảy ra. Vui lòng thử lại!");
        }
      );
  };

  return (
    <div className="p-4">
      <div className="max-w-7xl mx-auto pt-24">
        <img className="rounded" src={Bg3} alt="Bg-1" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-4">
          <img src={Bg6} alt="Bg-2" className="w-full h-auto rounded" />
          <div className="bg-white p-5">
            <h2 className="text-2xl font-bold text-center text-blue-900 mb-4">
              LIÊN HỆ TƯ VẤN
            </h2>
            <p className="text-base text-center mb-6">
              Quý anh chị nếu có nhu cầu tìm hiểu thêm thông tin, vui lòng để
              lại thông tin bên dưới chúng tôi sẽ liên hệ tư vấn ngay. Hoặc có
              thể liên hệ qua hotline{" "}
              <a href="tel:0949651568" className="font-bold text-blue-900">
                0949651568
              </a>
            </p>
            <form ref={form} onSubmit={sendEmail} className="space-y-4">
              <div className="space-y-4">
                <input
                  type="text"
                  name="from_name" // Phù hợp với {{from_name}} trong template
                  placeholder="Họ và Tên"
                  className="border border-gray-300 rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-gray-400"
                  required
                />
                <input
                  type="email"
                  name="reply_to" // Phù hợp với {{reply_to}} trong template
                  placeholder="Email"
                  className="border border-gray-300 rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-gray-400"
                  required
                />
                <input
                  type="tel"
                  name="phone" // Phù hợp với {{phone}} trong template
                  placeholder="Số điện thoại"
                  className="border border-gray-300 rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-gray-400"
                  required
                />
                <textarea
                  name="message" // Phù hợp với {{message}} trong template
                  placeholder="Nội dung"
                  rows="4"
                  className="border border-gray-300 rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-gray-400"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-red-500 text-white font-bold py-3 px-4 rounded w-full hover:bg-red-700 transition duration-200"
              >
                GỬI THÔNG TIN
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
