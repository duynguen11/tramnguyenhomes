import {
  FaMapMarkerAlt,
  FaPhone,
  FaCertificate,
  FaEnvelope,
  FaGlobe,
  FaCreditCard,
  FaShieldAlt,
  FaFileContract,
  FaPhoneAlt,
} from "react-icons/fa";

import Avatar from "../../assets/images/Avatar.jpg";

import FloatingContact from "../FloatingContact/FloatingContact";

export const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-gray-700 to-gray-600 text-white p-8">
      <FloatingContact />
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl text-center font-bold mb-6">
          TRÂM NGUYỄN HOMES - QUẢN LÝ BĐS CAO CẤP
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-12 mt-10">
          <div className="mx-auto">
            <h3 className="text-xl font-semibold mb-4">THÔNG TIN LIÊN HỆ</h3>
            {/* Địa chỉ */}
            <p className="flex items-center mb-4">
              <FaMapMarkerAlt className="mr-3 text-lg text-gray-200" />
              <span>Địa chỉ: 36 Tăng Bạt Hổ, P. 12, Quận 5, TP.HCM</span>
            </p>
            {/* Hotline */}
            <p className="flex items-center mb-4">
              <FaPhone className="mr-3 text-lg text-gray-200" />
              <span>Hotline: 0949651568</span>
            </p>
            {/* Số chứng chỉ MG */}
            <p className="flex items-center mb-4">
              <FaCertificate className="mr-3 text-lg text-gray-200" />
              <span>Số chứng chỉ MG: HCM-0002600 (SỞ XÂY DỰNG TP.HCM)</span>
            </p>
            {/* Email */}
            <p className="flex items-center mb-4">
              <FaEnvelope className="mr-3 text-lg text-gray-200" />
              <span>Email: ngoctramnguyen280991@gmail.com</span>
            </p>
            {/* Website */}
            <p className="flex items-center mb-6">
              <FaGlobe className="mr-3 text-lg text-gray-200" />
              <span>Website chính thức:</span>
              <a
                href="http://tramnguyenhomes.com"
                className="text-white hover:text-blue-600 ml-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                tramnguyenhomes.com.vn
              </a>
            </p>

            <h3 className="text-xl font-semibold mb-4">
              CÁC DỊCH VỤ KHÁCH HÀNG
            </h3>
            <div className="flex gap-x-8 mt-4">
              <div className="w-1/2">
                <p className="flex items-center mb-4">
                  <FaCreditCard className="mr-3 text-lg text-gray-200" />
                  Thanh toán
                </p>
                <p className="flex items-center mb-4">
                  <FaShieldAlt className="mr-3 text-lg text-gray-200" />
                  Chính sách
                </p>
              </div>
              <div className="w-1/2">
                <p className="flex items-center mb-4">
                  <FaFileContract className="mr-3 text-lg text-gray-200" />
                  Điều khoản
                </p>
                <p className="flex items-center mb-4">
                  <FaPhoneAlt className="mr-3 text-lg text-gray-200" />
                  Liên hệ chúng tôi
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center flex-col">
            <img
              src={Avatar}
              alt="Service Image"
              className="w-64 h-64 rounded-full shadow transform hover:scale-105 transition-all duration-300"
            />
            {/* Nút "Ưu đãi mới nhất" */}
            <a
              href="#"
              className="mt-6 px-6 py-3 bg-red-500 text-white font-semibold rounded-full text-lg hover:bg-red-700 transition-all duration-300"
            >
              Nhận ưu đãi mới nhất
            </a>
          </div>
        </div>
        <hr className="my-8 border-gray-300" />
        <h3 className="text-center text-base text-gray-200">
          @tramnguyenhomes.com.vn - 2024 All rights reserved.
        </h3>
      </div>
    </div>
  );
};
