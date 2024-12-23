import {
  FaHome,
  FaBuilding,
  FaKey,
  FaDollarSign,
  FaRegCreditCard,
} from "react-icons/fa";

export const Service = () => {
  return (
    <div className="p-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl text-center font-bold text-blue-900 mb-8">
          DỊCH VỤ CỦA TRÂM NGUYỄN HOMES BAO GỒM
        </h2>
        <div className="relative border-l-2 border-blue-900">
          {/* Tư vấn mua bán BĐS Cao cấp */}
          <div className="mb-5 pl-8 relative">
            <div className="absolute -left-4 top-0 bg-blue-400 text-white rounded-full w-8 h-8 flex items-center justify-center">
              <FaHome className="w-4 h-4" />
            </div>
            <h3 className="text-xl font-bold text-blue-900 mb-1">
              Tư vấn mua bán BĐS Cao cấp
            </h3>
            <p className="text-gray-700 text-base leading-relaxed">
              Chúng tôi cung cấp dịch vụ tư vấn toàn diện cho việc mua, bán và
              cho thuê bất động sản cao cấp. Đội ngũ chuyên gia sẽ hỗ trợ bạn từ
              khâu tìm kiếm đến đàm phán và giao dịch.
            </p>
          </div>
          {/* Đánh giá và định giá bất động sản */}
          <div className="mb-5 pl-8 relative">
            <div className="absolute -left-4 top-0 bg-green-400 text-white rounded-full w-8 h-8 flex items-center justify-center">
              <FaBuilding className="w-4 h-4" />
            </div>
            <h3 className="text-xl font-bold text-blue-900 mb-1">
              Đánh giá và định giá bất động sản
            </h3>
            <p className="text-gray-700 text-base leading-relaxed">
              Sử dụng công cụ và kiến thức chuyên sâu để đánh giá chính xác giá
              trị bất động sản, giúp bạn đưa ra quyết định dựa trên dữ liệu đáng
              tin cậy.
            </p>
          </div>
          {/* Hỗ trợ tài chính và vay vốn */}
          <div className="mb-5 pl-8 relative">
            <div className="absolute -left-4 top-0 bg-yellow-300 text-white rounded-full w-8 h-8 flex items-center justify-center">
              <FaRegCreditCard className="w-4 h-4" />
            </div>
            <h3 className="text-xl font-bold text-blue-900 mb-1">
              Hỗ trợ tài chính và vay vốn bất động sản
            </h3>
            <p className="text-gray-700 text-base leading-relaxed">
              Chúng tôi hợp tác với các tổ chức tài chính để cung cấp giải pháp
              vay vốn linh hoạt, giúp bạn đạt được mục tiêu đầu tư một cách dễ
              dàng.
            </p>
          </div>
          {/* Quản lý bất động sản */}
          <div className="mb-5 pl-8 relative">
            <div className="absolute -left-4 top-0 bg-red-400 text-white rounded-full w-8 h-8 flex items-center justify-center">
              <FaKey className="w-4 h-4" />
            </div>
            <h3 className="text-xl font-bold text-blue-900 mb-1">
              Quản lý bất động sản và dịch vụ sau bán hàng
            </h3>
            <p className="text-gray-700 text-base leading-relaxed">
              Dịch vụ quản lý bất động sản chuyên nghiệp đảm bảo tài sản của bạn
              được vận hành hiệu quả và duy trì giá trị lâu dài.
            </p>
          </div>
          {/* Tìm kiếm và đề xuất dự án */}
          <div className="mb-5 pl-8 relative">
            <div className="absolute -left-4 top-0 bg-purple-400 text-white rounded-full w-8 h-8 flex items-center justify-center">
              <FaDollarSign className="w-4 h-4" />
            </div>
            <h3 className="text-xl font-bold text-blue-900 mb-1">
              Tìm kiếm và đề xuất các dự án đầu tư tiềm năng
            </h3>
            <p className="text-gray-700 text-base leading-relaxed">
              Phân tích thị trường và đề xuất các dự án đầu tư tiềm năng phù hợp
              với mục tiêu và ngân sách của bạn.
            </p>
          </div>
        </div>
        <p className="text-center text-xl font-bold text-blue-900 mt-6">
          Với các dịch vụ này, chúng tôi cam kết đồng hành cùng bạn trên hành
          trình bất động sản cao cấp.
        </p>
      </div>
    </div>
  );
};
