function BgmPlayer() {
    return (
      <audio
        src="/music/dol.mp3"
        autoPlay
        loop
        controls
        className="w-full mt-4"
      >
        브라우저가 오디오 태그를 지원하지 않습니다.
      </audio>
    );
  }
  
export default BgmPlayer;