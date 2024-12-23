import LogoZalo from "../../assets/images/Logo-zalo.png";
import LogoCall from "../../assets/images/call-logo.webp";
import LogoMess from "../../assets/images/mess-logo.png";

const FloatingContact = () => {
  return (
    <>
      <div className="fixed bottom-4 right-4 flex flex-col items-center gap-4 z-100">
        {/* Zalo */}
        <a
          href="https://zalo.me/0949651568"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
        >
          <img
            src={LogoZalo} // Đường dẫn đến icon Zalo
            alt="Zalo"
            className="shadow-lg rounded-full w-11 h-11"
          />
        </a>

        {/* WhatsApp */}
        <a
          href="https://m.me/tramnguyendkravega"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 bg-gray-300 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
        >
          <img
            src={LogoMess} // Đường dẫn đến icon WhatsApp
            alt="WhatsApp"
            className="rounded-full w-11 h-11"
          />
        </a>

        {/* Phone */}
        <a
          href="tel:0949651568"
          className="w-14 h-14 bg-gray-300 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
        >
          <img
            src={LogoCall} // Đường dẫn đến icon Phone
            alt="Phone"
            className="w-12 h-12"
          />
        </a>
      </div>
    </>
  );
};

export default FloatingContact;
