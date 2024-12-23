export const Values = () => {
  return (
    <div className="p-6">
      <div className="max-w-7xl mx-auto py-8">
        <h2 className="text-2xl text-center font-bold text-blue-900 mb-7">
          CÁC YẾU TỐ ẢNH HƯỞNG ĐẾN GIÁ TRỊ BẤT ĐỘNG SẢN
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Yếu tố tự nhiên */}
          <div className="bg-blue-50 rounded shadow-sm p-5">
            <div className="flex items-center mb-4">
              <div className="bg-blue-200 text-blue-800 px-3 py-2 rounded-full">
                🌿
              </div>
              <h3 className="ml-4 text-xl font-semibold text-blue-900">
                Yếu tố tự nhiên
              </h3>
            </div>
            <p className="text-gray-700">
              • Vị trí, diện tích, địa hình, thực trạng, môi trường, tác động
              của thiên nhiên.
            </p>
          </div>
          {/* Yếu tố kinh tế */}
          <div className="bg-blue-50 rounded shadow-sm p-5">
            <div className="flex items-center mb-4">
              <div className="bg-green-100 text-green-800 px-3 py-2 rounded-full">
                💰
              </div>
              <h3 className="ml-4 text-xl font-semibold text-blue-900">
                Yếu tố kinh tế
              </h3>
            </div>
            <p className="text-gray-700">
              • Lợi nhuận, sự kiện kinh tế, thị trường kinh tế theo từng năm.
            </p>
          </div>
          {/* Yếu tố thị trường */}
          <div className="bg-blue-50 rounded shadow-sm p-5">
            <div className="flex items-center mb-4">
              <div className="bg-yellow-100 text-yellow-800 px-3 py-2 rounded-full">
                📈
              </div>
              <h3 className="ml-4 text-xl font-semibold text-blue-900">
                Yếu tố thị trường
              </h3>
            </div>
            <p className="text-gray-700">
              • Tính hữu dụng, nhu cầu từng loại bất động sản trên thị trường.
            </p>
          </div>
          {/* Yếu tố pháp lý */}
          <div className="bg-blue-50 rounded shadow-sm p-5">
            <div className="flex items-center mb-4">
              <div className="bg-red-100 text-red-800 px-3 py-2 rounded-full">
                ⚖️
              </div>
              <h3 className="ml-4 text-xl font-semibold text-blue-900">
                Yếu tố pháp lý
              </h3>
            </div>
            <p className="text-gray-700">
              • Tình trạng pháp lý, quy định xây dựng gắn với bất động sản.
            </p>
          </div>
          {/* Yếu tố chính trị */}
          <div className="bg-blue-50 rounded shadow-sm p-5">
            <div className="flex items-center mb-4">
              <div className="bg-purple-100 text-purple-800 px-3 py-2 rounded-full">
                🏛️
              </div>
              <h3 className="ml-4 text-xl font-semibold text-blue-900">
                Yếu tố chính trị
              </h3>
            </div>
            <p className="text-gray-700">
              • Ổn định chính trị, các chính sách tác động trực tiếp và gián
              tiếp.
            </p>
          </div>
          {/* Yếu tố vĩ mô */}
          <div className="bg-blue-50 rounded shadow-sm p-5">
            <div className="flex items-center mb-4">
              <div className="bg-gray-200 text-gray-800 px-3 py-2 rounded-full">
                🌍
              </div>
              <h3 className="ml-4 text-xl font-semibold text-blue-900">
                Yếu tố vĩ mô
              </h3>
            </div>
            <p className="text-gray-700">
              • Chính sách tiền tệ, tăng trưởng GDP, lãi suất ngân hàng, định
              hướng phát triển.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
