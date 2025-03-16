import React, { useRef, useState } from "react";
import { FaPlay, FaPause, FaMusic } from "react-icons/fa";

// 배경 음악 목록
const tracks = [
  { src: "/assets/bgm1.mp3", title: "잔잔한 감성 음악" },
  { src: "/assets/bgm2.mp3", title: "잔치 분위기 신나는 음악" },
];

const BGMPlayer: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(0); // 현재 재생 중인 음악

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

  const changeTrack = (index: number) => {
    setCurrentTrack(index);
    if (audioRef.current) {
      audioRef.current.src = tracks[index].src;
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <div className="mt-6 flex flex-col items-center text-center">
      {/* 음악 아이콘 */}
      <div className="flex items-center gap-2 text-lg font-bold text-gray-700">
        <FaMusic /> 배경 음악 🎵
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

      {/* 오디오 태그 */}
      <audio ref={audioRef} src={tracks[currentTrack].src} loop />
    </div>
  );
