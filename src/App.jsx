import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BabyGallery from './components/BabyGallery';
import MapImageLink from './components/MapImageLink';
import ShareButton from './components/ShareButton';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-6 text-center space-y-6 border border-rose-100">
        <h1 className="text-4xl font-semibold text-rose-500 mb-2">🎂 주원이의 첫 생일</h1>
        <BabyGallery />
        {/* <ShareButton /> */}
        {/* <MapImageLink /> */}
        <p className="text-gray-600 leading-relaxed">
          사랑으로 지켜봐 주신 덕분에<br />
          아들 <strong className="text-rose-500">주원</strong>이가<br />
          첫 번째 생일을 맞았습니다.<br />
          귀한 발걸음으로 축하해 주세요.
        </p>

        <p className="text-gray-700 font-medium mt-4">
          📅 2025년 7월 5일 (토) 낮 12시
        </p>

        <p className="text-gray-700 font-medium">
          📍 경기 고양시 덕양구 꽃마을로 4<br />
          퍼스트타워 804호 <strong>파티플라</strong>
        </p>
        <a
          href="https://map.kakao.com/link/search/경기 고양시 덕양구 꽃마을로 4 파티플라"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center gap-2 mt-6 px-6 py-2 bg-rose-400 text-white font-semibold rounded-full hover:bg-rose-500 transition"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m8.485-8.485l-.707.707M4.222 4.222l-.707.707M21 12h1M3 12H2m16.95 4.95l-.707-.707M6.343 17.657l-.707-.707M12 5a7 7 0 110 14a7 7 0 010-14z" />
          </svg>
          오시는 길
        </a>

      </div>
    </div>
  );
}

export default App;
