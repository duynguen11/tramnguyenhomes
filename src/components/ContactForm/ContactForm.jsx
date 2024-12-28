import { useRef } from "react";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGift } from "@fortawesome/free-solid-svg-icons";

export const ContactForm = () => {
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
          Swal.fire({
            icon: "success",
            title: "Thành công!",
            text: "Gửi thông tin thành công!",
            confirmButtonText: "Xác nhận",
            customClass: {
              popup: "rounded shadow-lg",
              confirmButton: "bg-blue-700 text-white px-6 py-2 rounded",
            },
          });
        },
        (error) => {
          console.log("Error sending email:", error.text);
          Swal.fire({
            icon: "error",
            title: "Lỗi!",
            text: "Có lỗi xảy ra. Vui lòng thử lại!",
            confirmButtonText: "Thử lại",
            customClass: {
              popup: "rounded shadow-lg",
              confirmButton: "bg-red-500 text-white px-6 py-2 rounded",
            },
          });
        }
      );
  };

  return (
    <div className="">
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 py-3 px-5 shadow max-w mx-auto mt-3">
        <h2 className="text-white text-2xl font-bold text-center mb-4 flex justify-center">
          <FontAwesomeIcon icon={faGift} className="h-7 w-7 mr-2" />
          NHẬN THÔNG TIN & ƯU ĐÃI MỚI NHẤT
        </h2>
        <p className="text-white mb-6 text-center">
          Quý anh chị nếu có nhu cầu tìm hiểu thêm thông tin, vui lòng để lại
          thông tin bên dưới chúng tôi sẽ liên hệ tư vấn ngay.
          <br />
          Hoặc có thể liên hệ qua hotline
          <a href="tel:0949651568" className="font-bold">
            {" "}
            0949651568
          </a>
        </p>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 px-4"
        >
          <div className="mb-2">
            <label className="block text-white mb-2" htmlFor="name">
              Họ và Tên
            </label>
            <input
              type="text"
              name="from_name"
              className="w-full p-2 rounded border border-gray-300"
              placeholder="Nhập họ và tên"
            />
          </div>
          <div className="mb-2">
            <label className="block text-white mb-2" htmlFor="phone">
              Số điện thoại
            </label>
            <input
              type="tel"
              name="phone"
              className="w-full p-2 rounded border border-gray-300"
              placeholder="Nhập số điện thoại"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-white mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              name="reply_to"
              className="w-full p-2 rounded border border-gray-300"
              placeholder="Nhập email"
            />
          </div>
          <div className="col-span-1 sm:col-span-2 lg:col-span-3 flex justify-center mt-3">
            <button
              type="submit"
              className="bg-red-500 text-white font-bold py-3 px-8 rounded hover:bg-gray-200 transition duration-300"
            >
              NHẬN THÔNG TIN
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
