import React, { useState } from "react";

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [isShaking, setIsShaking] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim()) {
      setIsShaking(true);
      setTimeout(() => setIsShaking(false), 500); // Reset shaking after 500ms
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsModalOpen(true);
    }, 1500); // Simulating network delay
  };

  return (
    <main className="relative py-20 md:py-32 px-4 ">
      {/* Dark Overlay when Modal is Open */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 z-40"
          onClick={() => setIsModalOpen(false)}
        ></div>
      )}

      <div className="max-w-7xl pt-60 mx-auto flex flex-col items-center justify-center">
        <div className="text-center max-w-3xl">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8">
            World's first <span className="text-[#8eb486]">Green</span> AI
          </h1>
          <div className="w-full pt-20 max-w-xl mx-auto">
            <form
              className={`flex flex-col md:flex-row gap-4 transition ${
                isShaking ? "animate-shake" : ""
              }`}
              onSubmit={handleSubmit}
            >
              <input
                type="email"
                placeholder="name@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-3 rounded-lg bg-gray-100 border-none focus:outline-none "
              />
              <button
                type="submit"
                className="px-6 py-3 bg-[#8eb486] text-white rounded-lg font-medium hover:bg-opacity-90 transition-colors flex items-center justify-center"
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  "Join the waitlist"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Thank You Modal - Bottom Center */}
      {isModalOpen && (
        <div className="fixed bottom-10 left-1/2 transform -translate-x-1/2 z-50">
          <div className="bg-[#8eb486] text-white px-6 py-4 rounded-lg flex items-center gap-4 shadow-lg">
            <h2 className="text-sm font-bold">Thank You!</h2>
            <button
              onClick={() => setIsModalOpen(false)}
              className="text-white text-sm font-bold"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {/* CSS Animation for shaking effect */}
      <style jsx>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-5px); }
          50% { transform: translateX(5px); }
          75% { transform: translateX(-5px); }
        }
        .animate-shake {
          animation: shake 0.3s ease-in-out;
        }
      `}</style>
    </main>
  );
};

export default Hero;
