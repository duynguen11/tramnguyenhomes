import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGift } from "@fortawesome/free-solid-svg-icons";

export const ContactForm = () => {
  return (
    <div className="p-4">
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 p-3 rounded-lg shadow-lg max-w mx-auto mt-6">
        <h2 className="text-white text-2xl font-bold text-center mb-4 flex justify-center">
          <FontAwesomeIcon icon={faGift} className="h-7 w-7 mr-2" />
          NHẬN THÔNG TIN & ƯU ĐÃI MỚI NHẤT
        </h2>
        <p className="text-white mb-6 text-center">
          Quý anh chị nếu có nhu cầu tìm hiểu thêm thông tin, vui lòng để lại
          thông tin bên dưới chúng tôi sẽ liên hệ tư vấn ngay.
          <br />
          Hoặc có thể liên hệ qua hotline
          <span className="font-bold"> 0949651568</span>
        </p>
        <form className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <div className="mb-2">
            <label className="block text-white mb-2" htmlFor="name">
              Họ và Tên
            </label>
            <input
              type="text"
              id="name"
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
              id="phone"
              className="w-full p-2 rounded border border-gray-300"
              placeholder="Nhập số điện thoại"
            />
          </div>
          <div className="mb-4">
            <label className="block text-white mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-2 rounded border border-gray-300"
              placeholder="Nhập email"
            />
          </div>
        </form>
        <div className="flex justify-center mt-5">
          <button
            type="submit"
            className="bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-gray-200 transition duration-300"
          >
            NHẬN THÔNG TIN
          </button>
        </div>
      </div>
    </div>
  );
};
