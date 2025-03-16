import React, { useRef, useState, useEffect } from "react";
import { FaPlay, FaPause, FaMusic, FaVolumeUp, FaVolumeDown } from "react-icons/fa";

// 배경 음악 목록
const tracks = [
  { src: "/assets/bgm1.mp3", title: "잔잔한 감성 음악" },
  { src: "/assets/bgm2.mp3", title: "잔치 분위기 신나는 음악" },
];

const BGMPlayer: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(0);
  const [volume, setVolume] = useState(0.5); // 기본 볼륨 50%

  // 🔹 localStorage에서 저장된 곡과 볼륨 불러오기
  useEffect(() => {
    const savedTrack = localStorage.getItem("selectedTrack");
    const savedVolume = localStorage.getItem("audioVolume");

    if (savedTrack) setCurrentTrack(parseInt(savedTrack, 10));
    if (savedVolume) setVolume(parseFloat(savedVolume));
  }, []);

  // 🔹 볼륨 변경 핸들러
  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) audioRef.current.volume = newVolume;
    localStorage.setItem("audioVolume", newVolume.toString()); // localStorage에 저장
  };

  // 🔹 재생 / 일시정지 핸들러
  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  // 🔹 음악 변경 핸들러 (새 곡 선택 시 자동 재생)
  const changeTrack = (index: number) => {
    setCurrentTrack(index);
    localStorage.setItem("selectedTrack", index.toString()); // localStorage에 저장

    if (audioRef.current) {
      audioRef.current.src = tracks[index].src;
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <div className="mt-6 flex flex-col items-center text-center">
      {/* 음악 제목 */}
      <div className="flex items-center gap-2 text-lg font-bold text-gray-700">
        <FaMusic /> 배경 음악 🎵 ({tracks[currentTrack].title})
      </div>

      {/* 재생/일시정지 버튼 */}
      <button
        onClick={togglePlay}
        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-full shadow-md hover:bg-blue-600 transition-all flex items-center gap-2"
      >
        {isPlaying ? <FaPause /> : <FaPlay />}
        {isPlaying ? "일시정지" : "재생"}
      </button>

      {/* 음악 변경 버튼 */}
      <div className="mt-4 flex gap-2">
        {tracks.map((track, index) => (
          <button
            key={index}
            onClick={() => changeTrack(index)}
            className={`px-4 py-2 rounded-lg shadow-md transition-all ${
              currentTrack === index
                ? "bg-green-500 text-white"
                : "bg-gray-300 text-gray-700"
            }`}
          >
            {track.title}
          </button>
        ))}
      </div>

      {/* 볼륨 조절 슬라이더 */}
      <div className="mt-4 flex items-center gap-2">
        <FaVolumeDown />
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={handleVolumeChange}
          className="w-32"
        />
        <FaVolumeUp />
      </div>

      {/* 오디오 태그 */}
      <audio ref={audioRef} src={tracks[currentTrack].src} loop />
    </div>
  );
};

export default BGMPlayer;
