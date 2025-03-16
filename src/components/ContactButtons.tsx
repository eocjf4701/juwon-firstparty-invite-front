import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { RiKakaoTalkFill } from "react-icons/ri";
import { MdTextsms } from "react-icons/md";

const ContactButtons: React.FC = () => {
  const phoneNumber = "01012345678"; // 실제 전화번호 입력
  const kakaoChatUrl = "https://open.kakao.com/o/somechatlink"; // 카톡 오픈채팅 링크
  const smsMessage = "안녕하세요! 돌잔치 초대 확인 관련하여 문자드립니다.";

  return (
    <div className="mt-6 flex flex-col items-center gap-4">
      {/* 전화 버튼 */}
      <a
        href={`tel:${phoneNumber}`}
        className="w-full max-w-xs flex items-center justify-center gap-2 bg-blue-500 text-white px-4 py-3 rounded-lg shadow-md hover:bg-blue-600 transition-all"
      >
        <FaPhoneAlt /> 전화하기
      </a>

      {/* 카카오톡 문의 버튼 */}
      <a
        href={kakaoChatUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full max-w-xs flex items-center justify-center gap-2 bg-yellow-400 text-black px-4 py-3 rounded-lg shadow-md hover:bg-yellow-500 transition-all"
      >
        <RiKakaoTalkFill /> 카카오톡 문의
      </a>

      {/* 문자 보내기 버튼 */}
      <a
        href={`sms:${phoneNumber}?body=${encodeURIComponent(smsMessage)}`}
        className="w-full max-w-xs flex items-center justify-center gap-2 bg-green-500 text-white px-4 py-3 rounded-lg shadow-md hover:bg-green-600 transition-all"
      >
        <MdTextsms /> 문자 보내기
      </a>
    </div>
  );
};

export default ContactButtons;
