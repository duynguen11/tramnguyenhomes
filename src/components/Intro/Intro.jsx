import { useState, useEffect } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

import Intro1 from "../../assets/images/Intro/Intro1.jpg";
import Intro2 from "../../assets/images/Intro/Intro2.jpg";
import Intro3 from "../../assets/images/Intro/Intro3.jpg";
import Intro4 from "../../assets/images/Intro/Intro4.jpg";
import Intro5 from "../../assets/images/Intro/Intro5.jpg";

const slides = [
  {
    id: 1,
    content: "Slide 1",
    image: Intro1,
  },
  {
    id: 2,
    content: "Slide 2",
    image: Intro2,
  },
  {
    id: 3,
    content: "Slide 3",
    image: Intro3,
  },
  {
    id: 4,
    content: "Slide 4",
    image: Intro4,
  },
  {
    id: 5,
    content: "Slide 5",
    image: Intro5,
  },
];

export const Intro = () => {
  const [isPaused, setIsPaused] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === slides.length - 1 ? 0 : prevIndex + 1
        );
      }, 2500 + 1000); // Tự động chuyển sau 2 giây
      return () => clearInterval(interval); // Clear interval khi unmount
    }
  }, [slides.length, isPaused]);

  return (
    <div className="p-4">
      <div className="max-w-7xl mx-auto py-6">
        <h2 className="text-2xl text-center font-bold text-blue-900 mb-6">
          NƠI TẠO DỰNG ƯỚC MƠ VỀ BẤT ĐỘNG SẢN CAO CẤP
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 text-sm">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg font-bold text-blue-900 mb-4">Xin chào!</p>
            <p className="text-justify text-base leading-relaxed text-gray-700 mb-6">
              Tôi là{" "}
              <span className="font-bold text-blue-900">Trâm Nguyễn</span>, một
              <span className="font-bold text-blue-900">
                {" "}
                Nhà mô giới Bất Động Sản
              </span>{" "}
              đến từ Tập đoàn DKRA Group. Tôi tự hào mang đến cho bạn một trải
              nghiệm tuyệt vời về thế giới bất động sản cao cấp.
            </p>

            <p className="text-justify text-base leading-relaxed text-gray-700 mb-6">
              Tôi thành lập trang web này với sứ mệnh đưa Bạn đến gần hơn với
              những cơ hội độc đáo và tiềm năng đầy hứa hẹn trong lĩnh vực bất
              động sản cao cấp tại khu vực{" "}
              <span className="font-bold text-blue-900">
                TP. Hồ Chí Minh và trên toàn Việt Nam
              </span>
              . Cũng như, đồng hành lâu dài cùng Bạn trên hành trình tìm hiểu và
              nghiên cứu bất động sản.
            </p>

            <p className="text-justify text-base leading-relaxed text-gray-700 mb-6">
              Tại{" "}
              <span className="font-bold text-blue-900">TramNguyenHomes</span>,
              tôi hiểu rằng mua bán hoặc đầu tư vào bất động sản là một quyết
              định quan trọng trong cuộc đời của Bạn. Đó không chỉ là việc chọn
              những ngôi nhà, căn hộ, biệt thự hoặc dự án đầu tư - đó còn là
              việc xây dựng và thực hiện ước mơ của Bạn. Điều này là lý do tại
              sao Tôi cam kết cung cấp cho Bạn sự hỗ trợ toàn diện và thông tin
              đáng tin cậy, rõ ràng để Bạn có thể đưa ra quyết định đúng đắn.
            </p>

            <p className="text-justify text-base leading-relaxed text-gray-700 mb-6">
              Do đó, Tôi luôn là cầu nối uy tín giữa Chủ Đầu tư và Khách Hàng,
              vì thế Tôi luôn đặt lợi ích của Khách Hàng lên hàng đầu và tư vấn
              dựa trên nhu cầu cụ thể của từng cá nhân và dự án.
            </p>
          </div>
          <div>
            <div
              className="w-full mx-auto rounded relative overflow-hidden h-[40vh] md:h-[40vh] lg:h-[50vh]"
              onMouseEnter={() => setIsPaused(true)} // Tạm dừng khi hover
              onMouseLeave={() => setIsPaused(false)}
            >
              {slides.map((slide, index) => (
                <div
                  key={slide.id}
                  className={`absolute inset-0 transition-transform duration-1000 ease-in-out ${
                    index === currentIndex
                      ? "translate-x-0"
                      : "translate-x-full"
                  }`}
                  style={{
                    backgroundImage: `url(${slide.image})`,
                    backgroundSize: "cover", // Ensures the image covers the entire area
                    backgroundPosition: "center", // Centers the image
                    backgroundRepeat: "no-repeat", // Prevents tiling
                    width: "100%", // Set width to 100% of the parent container
                    height: "100%", // Adjust height as needed
                  }}
                >
                  {/* Overlay thông tin */}
                </div>
              ))}
              <button
                className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
                onClick={() =>
                  setCurrentIndex((prevIndex) =>
                    prevIndex === 0 ? slides.length - 1 : prevIndex - 1
                  )
                }
              >
                <ChevronLeftIcon className="w-4 h-4" />
              </button>
              <button
                className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
                onClick={() =>
                  setCurrentIndex((prevIndex) =>
                    prevIndex === slides.length - 1 ? 0 : prevIndex + 1
                  )
                }
              >
                <ChevronRightIcon className="w-4 h-4" />
              </button>
            </div>
            <div className="pt-2 grid grid-cols-5 gap-2">
              {slides.map((slide) => (
                <div key={slide.id} className="text-center">
                  <img
                    src={slide.image}
                    alt={slide.content}
                    className="w-full h-20 object-cover rounded cursor-pointer"
                    onClick={() => setSelectedImage(slide.image)}
                  />
                </div>
              ))}
            </div>
            {/* Modal hiển thị ảnh to */}
            {selectedImage && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                <div className="bg-white p-2 relative">
                  <button
                    className="absolute top-5 right-5 text-white bg-gray-500 rounded-full px-3 py-2"
                    onClick={() => setSelectedImage(null)}
                  >
                    ✕
                  </button>
                  <img
                    src={selectedImage}
                    alt="Selected"
                    className="max-w-full max-h-[80vh] object-contain"
                  />
                </div>
              </div>
            )}
            <h2 className="mt-3 text-center">
              Cảm ơn Quý Anh Chị Khách Hàng đã tin tưởng và lựa chọn Trâm Nguyễn
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};
