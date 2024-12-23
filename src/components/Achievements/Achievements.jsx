export const Achievements = () => {
  return (
    <div className="p-6 bg-gray-50">
      <div className="max-w-7xl mx-auto py-6">
        <h2 className="text-2xl text-center font-bold text-blue-900 mb-10">
          BẤT ĐỘNG SẢN MANG LẠI GIÁ TRỊ GÌ?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Giá trị xã hội và cộng đồng */}
          <div className="bg-white shadow-sm rounded p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-2 flex items-center">
              <span className="mr-2">🏡</span> Giá trị xã hội và cộng đồng
            </h3>
            <p className="text-gray-600">
              • Bất động sản tạo ra không gian sống, làm việc và giải trí cho
              con người. Đồng thời tạo nên giá trị xã hội.
            </p>
            <p className="text-gray-600 mt-1">
              • Những khu đô thị hiện đại cung cấp nhà ở, môi trường sống an
              toàn và tiện nghi.
            </p>
          </div>
          {/* Giá trị đầu tư */}
          <div className="bg-white shadow-sm rounded p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-2 flex items-center">
              <span className="mr-2">💰</span> Giá trị đầu tư và tích lũy tài
              sản
            </h3>
            <p className="text-gray-600">
              • Bất động sản là tài sản có giá trị tăng trưởng dài hạn.
            </p>
            <p className="text-gray-600 mt-1">
              • Là công cụ đầu tư vì giá trị thường tăng theo thời gian.
            </p>
            <p className="text-gray-600 mt-1">
              • Đất đai là tài nguyên giới hạn, giá trị tăng khi nhu cầu tăng.
            </p>
          </div>
          {/* Giá trị phát triển kinh tế */}
          <div className="bg-white shadow-sm rounded p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-2 flex items-center">
              <span className="mr-2">🌆</span> Giá trị phát triển kinh tế
            </h3>
            <p className="text-gray-600">
              • Bất động sản đóng vai trò quan trọng trong phát triển hạ tầng và
              kinh tế.
            </p>
            <p className="text-gray-600 mt-1">
              • Các dự án lớn thúc đẩy các ngành xây dựng, vật liệu, và thương
              mại.
            </p>
          </div>
          {/* Nguồn thu nhập thụ động */}
          <div className="bg-white shadow-sm rounded p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-2 flex items-center">
              <span className="mr-2">📈</span> Nguồn thu nhập thụ động
            </h3>
            <p className="text-gray-600">• Mang lại nguồn thu nhập ổn định.</p>
          </div>
          {/* Tài sản cho thế hệ sau */}
          <div className="bg-white shadow-sm rounded p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-2 flex items-center">
              <span className="mr-2">👨‍👩‍👧‍👦</span> Tài sản cho thế hệ sau
            </h3>
            <p className="text-gray-600">
              • Bất động sản là cách chuyển giao tài sản cho thế hệ sau, bảo đảm
              tài sản lâu dài.
            </p>
          </div>
          {/* Đa dạng danh mục đầu tư */}
          <div className="bg-white shadow-sm rounded p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-2 flex items-center">
              <span className="mr-2">📊</span> Đa dạng danh mục đầu tư
            </h3>
            <p className="text-gray-600">
              • Giúp đa dạng hóa danh mục đầu tư, giảm rủi ro khi thị trường tài
              chính biến động.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
