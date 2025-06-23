function KakaoShareButton() {
  const kakaoShare = () => {
    const url = encodeURIComponent(window.location.href);
    const kakaoUrl = `https://kauth.kakao.com/oauth/authorize?client_id=YOUR_APP_KEY&redirect_uri=${url}&response_type=code`;
    window.open(`https://sharer.kakao.com/talk/friends/picker/link?url=${url}`, '_blank');
  };

  return (
    <button
      onClick={() => {
        const kakaoUrl = `kakaolink://send?text=${encodeURIComponent(
          "주원이 돌잔치 초대장 " + window.location.href
        )}`;
        window.location.href = kakaoUrl;
      }}
      className="mt-2 ml-4 text-sm text-yellow-500 underline"
      type="button"
    >
      카카오톡으로 공유
    </button>
  );
}

export default KakaoShareButton;