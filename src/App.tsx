import { useState } from "react";
import { motion } from "framer-motion";

const App: React.FC = () => {
  const [rsvp, setRsvp] = useState<"yes" | "no" | null>(null);

  const handleRsvp = (response: "yes" | "no") => {
    setRsvp(response);
    fetch("http://localhost:8080/api/rsvp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ response }),
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-purple-100 p-4">
      <div className="relative bg-white max-w-md w-full p-6 rounded-3xl shadow-xl transform rotate-2">
        {/* 타이틀 */}
        <h1 className="text-center text-3xl font-bold text-purple-600 mb-2">
          우리 아기의 첫 번째 생일! 🎉
        </h1>
        <p className="text-center text-gray-600">
          소중한 순간을 함께하고 싶어요.  
        </p>

        {/* 날짜 & 장소 */}
        <div className="mt-4 text-center text-gray-700">
          📍 <strong>서울 강남구 어딘가</strong>  
          <br />
          📅 <strong>2025년 4월 20일 (일) 오후 6시</strong>
        </div>

        {/* 사진 꾸미기 */}
        <div className="relative flex justify-center mt-6">
          <div className="w-28 h-28 bg-gray-200 rounded-xl overflow-hidden shadow-lg transform rotate-3">
            <img src="/baby.jpg" alt="아기 사진" className="w-full h-full object-cover" />
          </div>
          <div className="w-28 h-28 bg-gray-200 rounded-xl overflow-hidden shadow-lg transform -rotate-3 -ml-6">
            <img src="/baby2.jpg" alt="아기 사진2" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* RSVP 버튼 */}
        {rsvp === null ? (
          <div className="mt-6 flex flex-col gap-4">
            <motion.button
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.1 }}
              onClick={() => handleRsvp("yes")}
              className="px-6 py-3 w-full bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition-all"
            >
              ✅ 참석할게요!
            </motion.button>
            <motion.button
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.1 }}
              onClick={() => handleRsvp("no")}
              className="px-6 py-3 w-full bg-gray-400 text-white rounded-lg shadow-md hover:bg-gray-500 transition-all"
            >
              ❌ 못 갈 것 같아요
            </motion.button>
          </div>
        ) : (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-6 text-xl font-bold text-green-500 text-center"
          >
            {rsvp === "yes" ? "참석 감사합니다! 😊" : "아쉽네요 😢"}
          </motion.p>
        )}

        {/* 마스킹 테이프 */}
        <div className="absolute top-0 left-4 bg-yellow-200 w-12 h-4 transform -rotate-6"></div>
        <div className="absolute top-0 right-4 bg-yellow-200 w-12 h-4 transform rotate-6"></div>
      </div>
    </div>
  );
};

export default App;
