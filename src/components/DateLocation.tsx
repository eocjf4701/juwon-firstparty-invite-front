import React from "react";

interface DateLocationProps {
  date: string;
  venue: string;
  address: string;
}

const DateLocation: React.FC<DateLocationProps> = ({ date, venue, address }) => {
  // 네이버 지도 링크 생성
  const naverMapsUrl = `https://map.naver.com/v5/search/${encodeURIComponent(address)}`;

  return (
    <div className="mt-4 text-center text-gray-700">
      📍 <strong>{venue}</strong>  
      <br />
      📅 <strong>{date}</strong>
      <br />
      <a
        href={naverMapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-2 inline-block bg-green-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-600 transition-all"
      >
        🗺️ 위치 찾기
      </a>
    </div>
  );
};

export default DateLocation;
