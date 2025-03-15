import { useState } from "react";
import { motion } from "framer-motion";

// RSVP 상태 타입 정의
type RsvpStatus = "yes" | "no" | null;

const App: React.FC = () => {
  const [rsvp, setRsvp] = useState<RsvpStatus>(null);

  const handleRsvp = (response: RsvpStatus) => {
    setRsvp(response);

    fetch("http://localhost:8080/api/rsvp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ response }),
    })
      .then((res) => res.text())
      .then((data) => console.log("서버 응답:", data))
      .catch((err) => console.error("에러 발생:", err));
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-pink-100 to-blue-100">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-md mx-4 bg-white p-6 rounded-3xl shadow-2xl text-center"
      >
        {/* 타이틀 */}
        <h1 className="text-3xl font-bold text-gray-800">주원이의 첫번째 생일에 초대합니다! 🎉</h1>
        <p className="text-gray-600 mt-3 text-lg">📍 <strong>꽃마을로 4 퍼스트타워 804호, 파티플라</strong></p>
        <p className="text-gray-600">📅 <strong>2025년 7월 5일(일) 낮 12시</strong></p>

        {/* RSVP 버튼 */}
        {rsvp === null ? (
          <div className="mt-6 flex flex-col gap-4">
            <motion.button
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.1 }}
              onClick={() => handleRsvp("yes")}
              className="px-6 py-3 w-full bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600 transition-all"
            >
              ✅ 참석할게요!
            </motion.button>
            <motion.button
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.1 }}
              onClick={() => handleRsvp("no")}
              className="px-6 py-3 w-full bg-gray-400 text-white rounded-lg shadow-lg hover:bg-gray-500 transition-all"
            >
              ❌ 못 갈 것 같아요
            </motion.button>
          </div>
        ) : (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-6 text-xl font-bold text-green-500"
          >
            {rsvp === "yes" ? "참석 감사합니다! 😊" : "아쉽네요 😢"}
          </motion.p>
        )}
      </motion.div>
    </div>
  );
};

export default App;
