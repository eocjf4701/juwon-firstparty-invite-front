import React, { useState } from "react";
import { motion } from "framer-motion";

const RSVP: React.FC = () => {
  const [rsvp, setRsvp] = useState<"yes" | "no" | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleRsvp = async (response: "yes" | "no") => {
    setRsvp(response);
    setSubmitted(true); 

    // 서버로 RSVP 데이터 전송
    try {
      const res = await fetch("http://localhost:8080/api/rsvp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ response }),
      });
      const data = await res.text();
      console.log("서버 응답:", data);
    } catch (error) {
      console.error("에러 발생:", error);
    }
  };

  return (
    <div className="mt-6 text-center">
      {submitted ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-xl font-bold text-green-500"
        >
          {rsvp === "yes" ? "🎉 참석 감사합니다! 😊" : "😢 아쉽네요! 다음에 꼭 만나요!"}
          <br />
          <button
            onClick={() => setSubmitted(false)} // 다시 응답 수정 가능
            className="mt-4 bg-gray-300 text-gray-700 px-4 py-2 rounded-lg shadow-md hover:bg-gray-400 transition-all"
          >
            응답 수정하기
          </button>
        </motion.div>
      ) : (
        <div className="flex flex-col gap-4">
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
      )}
    </div>
  );
};

export default RSVP;