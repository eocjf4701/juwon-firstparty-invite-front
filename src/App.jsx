import './App.css';
import babyImage from '../public/baby.jpg';

function App() {
  return (
    <div className="min-h-screen bg-pink-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-lg max-w-md w-full p-6 text-center space-y-4">
        <h1 className="text-3xl font-bold text-pink-600">홍길동 첫 생일잔치</h1>
        <img src={babyImage} alt="아기 사진" className="rounded-xl w-full h-auto" />
        <p className="text-gray-700">2025년 7월 5일 (토) 낮 12시</p>
        <p className="text-gray-700">경기 고양시 덕양구 꽃마을로 4 퍼스트타워 804호 파티플라</p>
        <p className="text-gray-600 italic mt-4">
          사랑으로 지켜봐 주신 덕분에<br />아들 박주원이 첫 생일을 맞았습니다.<br />
          오셔서 자리를 빛내주세요.
        </p>
        <a
          href="https://map.kakao.com/link/map/돌잔치웨딩홀,37.123456,127.123456"
          target="_blank"
          className="inline-block mt-4 px-4 py-2 bg-pink-500 text-white rounded-xl hover:bg-pink-600"
          rel="noreferrer"
        >
          오시는 길
        </a>
        <div className="bg-gray-100 p-3 rounded-xl text-sm text-gray-700 mt-4">
          💝 마음 전하실 곳<br />
          신한은행 123-456-789012<br />
          예금주: 박주원
        </div>
        <a
          href="https://forms.gle/xxx" // 구글폼 링크
          target="_blank"
          className="block mt-4 text-blue-500 underline"
          rel="noreferrer"
        >
          참석 여부 알려주세요
        </a>
      </div>
    </div>
  );
}

export default App;
