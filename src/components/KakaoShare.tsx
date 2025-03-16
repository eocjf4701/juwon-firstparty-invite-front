import React, { useEffect } from "react";

const KakaoShare: React.FC = () => {
  useEffect(() => {
    if (!window.Kakao) return;
    const kakao = window.Kakao;
    if (!kakao.isInitialized()) {
      kakao.init(import.meta.env.VITE_KAKAO_API_KEY); // .env의 API 키 사용
    }
  }, []);

  const shareKakao = () => {
    if (!window.Kakao) return;
    const kakao = window.Kakao;

    kakao.Share.sendDefault({
      objectType: "feed",
      content: {
        title: "우리 아기 돌잔치 초대장 🎉",
        description: "2025년 7월 5일 (토) 낮 12시 | 고양 파티플라",
        imageUrl: "https://your-image-url.com/invitation.jpg",
        link: {
          mobileWebUrl: "https://your-invitation-site.com",
          webUrl: "https://your-invitation-site.com",
        },
      },
      buttons: [
        {
          title: "초대장 보기",
          link: {
            mobileWebUrl: "https://your-invitation-site.com",
            webUrl: "https://your-invitation-site.com",
          },
        },
      ],
    });
  };

  return (
    <button
      onClick={shareKakao}
      className="w-full max-w-xs flex items-center justify-center gap-2 bg-yellow-400 text-black px-4 py-3 rounded-lg shadow-md hover:bg-yellow-500 transition-all"
    >
      📩 카카오톡으로 초대장 공유하기
    </button>
  );
};

export default KakaoShare;
