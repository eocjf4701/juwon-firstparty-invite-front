import { useState } from "react";

function App() {
  const [rsvp, setRsvp] = useState(null);

  const handleRsvp = (response) => {
    setRsvp(response);
    // Spring Boot API로 RSVP 응답 전송
    fetch("http://localhost:8080/api/rsvp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ response }),
    });
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-3xl font-bold text-gray-800">우리 애기 돌잔치에 초대합니다! 🎉</h1>
        <p className="text-gray-600 mt-2">📍 장소: 서울 강남구 어딘가</p>
        <p className="text-gray-600">📅 날짜: 2025년 4월 20일 (일) 오후 6시</p>

        {rsvp === null ? (
          <div className="mt-4 flex gap-4">
            <button onClick={() => handleRsvp("yes")} className="px-4 py-2 bg-blue-500 text-white rounded">
              참석할게요!
            </button>
            <button onClick={() => handleRsvp("no")} className="px-4 py-2 bg-gray-400 text-white rounded">
              못 갈 것 같아요
            </button>
          </div>
        ) : (
          <p className="mt-4 font-bold text-lg text-green-500">
            {rsvp === "yes" ? "참석 감사합니다! 😊" : "아쉽네요 😢"}
          </p>
        )}
      </div>
    </div>
  );
}

export default App;
