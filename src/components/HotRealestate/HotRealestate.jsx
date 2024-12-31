import { Link } from "react-router-dom";

import Akari from "../../assets/images/HotRealestate/Akari.jpg";
import CityGrand from "../../assets/images/HotRealestate/CityGrand.jpg";
import Emeral68 from "../../assets/images/HotRealestate/Emerald68.jpg";
import HiepTruong from "../../assets/images/HotRealestate/HiepTruongPhat.jpg";
import RiverPark from "../../assets/images/HotRealestate/RiverPark.jpg";
import Soli from "../../assets/images/HotRealestate/Soli.jpg";

const cardData = [
  {
    imageUrl: Akari,
    propertyCount: "Hiện có 20 bất động sản",
    priceRange: "48 - 55 triệu/ m2",
    title: "AKARI CITY",
    description: "Đã bàn giao 10/2024",
    author: "Nam Long Group",
    role: "Co-Founder / CTO",
    detailUrl: "/DEdgeTown-BT",
  },
  {
    imageUrl: CityGrand,
    propertyCount: "Hiện có 20 bất động sản",
    priceRange: "50 triệu/ m2",
    title: "CITIGRAND",
    description: "Bàn giao 12/2026",
    author: "Kiến Á",
    role: "Co-Founder / CTO",
    detailUrl: "/TDGreen",
  },
  {
    imageUrl: Emeral68,
    propertyCount: "Hiện có 20 bất động sản",
    priceRange: "44 - 48 triệu/ m2",
    title: "THE EMERALD 68",
    description: "Bàn giao 09/2026",
    author: "Lê Phong và Coteccons",
    role: "Co-Founder / CTO",
    detailUrl: "https://www.duanemerald68.com/",
  },
  {
    imageUrl: Soli,
    propertyCount: "Hiện có 20 bất động sản",
    priceRange: "từ 11,9 tỷ/ căn",
    title: "NHÀ PHỐ THƯƠNG MẠI THE SHOLI",
    description: "Bàn giao Quý I 2025",
    author: "DKRA Group",
    role: "Co-Founder / CTO",
    detailUrl: "/Q2ThaoDien-Q2",
  },
  {
    imageUrl: HiepTruong,
    propertyCount: "Hiện có 63 bất động sản",
    priceRange: "từ 1,39 tỷ/ nền",
    title: "HIỆP TRƯỜNG PHÁT",
    description: "Đã có sổ, đang mở bán",
    author: "Hai Thành Group",
    role: "Co-Founder / CTO",
    detailUrl: "/DiamondIsland-Q2",
  },
  {
    imageUrl: RiverPark,
    propertyCount: "Hiện có 71 bất động sản",
    priceRange: "từ 1,96 tỷ/ nền",
    title: "SAIGON RIVER PARK",
    description: "Đã có sổ, đang mở bán",
    author: "Hai Thành Group",
    role: "Co-Founder / CTO",
    detailUrl: "/Feliz-Q2",
  },
];

export const HotRealestate = () => {
  return (
    <div className="p-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-blue-900 my-8">
          DỰ ÁN NỔI BẬT ĐANG PHÂN PHỐI
        </h2>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {cardData.map((card, index) => (
            <div
              key={index}
              className="rounded overflow-hidden bg-white shadow border"
            >
              {/* Image Section */}
              <img
                src={card.imageUrl}
                alt={card.title}
                className="w-full h-64 object-cover"
              />

              {/* Content Section */}
              <div className="p-4">
                {/* Date and Tag */}
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <span>{card.propertyCount}</span>
                  <span className="ml-3 inline-block rounded bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700">
                    {card.priceRange}
                  </span>
                </div>

                {/* Title */}
                <h2 className="text-lg font-semibold text-gray-900 hover:text-blue-600 cursor-pointer">
                  {card.title}
                </h2>

                {/* Description */}
                <p className="text-sm text-gray-600 mb-3">{card.description}</p>

                {/* Author Section */}
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-gray-900">
                      {card.author}
                    </p>
                    <p className="text-xs text-gray-500">{card.role}</p>
                  </div>

                  {/* Nút xem chi tiết */}
                  <Link
                    to={card.detailUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-auto inline-block rounded bg-red-500 p-2 text-sm font-semibold text-white hover:bg-red-700 transition-colors"
                  >
                    Thông tin dự án
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
