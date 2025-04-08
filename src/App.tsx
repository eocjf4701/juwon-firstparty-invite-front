import DateLocation from "./components/DateLocation"; 
import RSVP from "./components/RSVP";
import Title from "./components/Title";
import Footer from "./components/Footer";
import KakaoShare from "./components/KakaoShare";
import BGMPlayer from "./components/BGMPlayer";

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-purple-100 p-4">
      <div className="relative bg-white max-w-md w-full p-6 rounded-3xl shadow-xl transform rotate-2">
        {/* 타이틀 */}
        <Title />

        <MainImage/>
        {/* 사진 꾸미기 */}
        <div className="relative flex justify-center mt-6">
          <div className="w-28 h-28 bg-gray-200 rounded-xl overflow-hidden shadow-lg transform rotate-3">
            <img src="/baby.jpg" alt="주원 사진" className="w-full h-full object-cover" />
          </div>
          <div className="w-28 h-28 bg-gray-200 rounded-xl overflow-hidden shadow-lg transform -rotate-3 -ml-6">
            <img src="/baby2.jpg" alt="주원 사진2" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* 날짜 & 장소 컴포넌트 */}
        <DateLocation 
          date="2025년 7월 5일 (토) 낮 12시" 
          venue="고양 파티플라" 
          address="고양 파티플라"
        />

        {/* 카카오톡 공유 버튼 */}
        <KakaoShare />

        {/* 푸터 (지도 + 연락처 버튼) */}
        <Footer />

        {/* RSVP 컴포넌트 추가 */}
        <RSVP />

        {/* 배경 음악 플레이어 */}
        <BGMPlayer />

        {/* 마스킹 테이프 */}
        <div className="absolute top-0 left-4 bg-yellow-200 w-12 h-4 transform -rotate-6"></div>
        <div className="absolute top-0 right-4 bg-yellow-200 w-12 h-4 transform rotate-6"></div>
      </div>
    </div>
  );
};

export default App;
