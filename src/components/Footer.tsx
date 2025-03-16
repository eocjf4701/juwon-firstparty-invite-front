import React from "react";
import ContactButtons from "./ContactButtons";

const Footer: React.FC = () => {
  return (
    <div className="mt-8 text-center">
      {/* 연락처 버튼 */}
      <ContactButtons />
    </div>
  );
};

export default Footer;
