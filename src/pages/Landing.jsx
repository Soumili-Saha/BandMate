import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// ✅ Import assets the correct way
import loginIcon from "../assets/icons/loginicon.svg";
import bandImage from "../assets/band image.jpg"; // Rename the file to avoid space if needed

export default function Landing() {
  const [scrollY, setScrollY] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const smoothScrollTo = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleLoginClick = () => {
    navigate("/Login");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50 text-gray-800 font-serif overflow-x-hidden">
      {/* Floating particles */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-20 left-20 w-2 h-2 bg-purple-300 rounded-full opacity-60 animate-pulse" />
        <div className="absolute top-40 right-32 w-1 h-1 bg-pink-400 rounded-full opacity-40 animate-bounce" />
        <div className="absolute bottom-40 left-32 w-3 h-3 bg-blue-200 rounded-full opacity-30 animate-ping" />
        <div className="absolute top-60 right-20 w-2 h-2 bg-purple-200 rounded-full opacity-50 animate-pulse" />
      </div>

      {/* HEADER SECTION */}
      <section className="bg-gradient-to-br from-white via-blue-50 to-orange-50 py-8 relative">
        <div className="absolute top-10 left-20 text-orange-300/40 text-3xl animate-bounce">🎸</div>
        <div className="absolute top-20 right-32 text-blue-300/40 text-2xl animate-pulse">🥁</div>
        <div className="absolute bottom-10 left-32 text-red-300/40 text-2xl animate-bounce">🎤</div>
        <div className="absolute top-32 right-20 text-orange-400/30 text-xl animate-pulse">♪</div>
        <div className="absolute bottom-20 right-40 text-blue-400/30 text-xl animate-bounce">♫</div>

        <div className="container mx-auto px-6 md:px-8 z-10 relative">
          <div className="flex flex-col md:flex-row justify-between items-start">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-3">
                <span className="font-[cursive] bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">Band</span>
                <span className="ml-2 text-gray-800">Mate</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600">
                find your sound,<br />
                <span className="text-orange-600 font-medium">join the band.</span>
              </p>
            </div>
            <div className="flex space-x-4 mt-6 md:mt-0">
              <button
                onClick={() => smoothScrollTo("idea-section")}
                className="border-2 border-orange-400 text-orange-600 px-6 py-2 rounded-full hover:bg-orange-500 hover:text-white transition font-semibold"
              >
                How it works
              </button>
              <button
                onClick={handleLoginClick}
                className="flex items-center space-x-2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 rounded-full hover:from-orange-600 hover:to-red-600 transition font-semibold"
              >
                <img src={loginIcon} alt="login" className="w-5 h-5 invert" />
                <span>Log in</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* HERO IMAGE SECTION */}
      <section className="py-16 bg-gradient-to-br from-blue-50 via-white to-orange-50 relative">
        <div className="absolute top-8 left-16 text-blue-300/30 text-2xl animate-bounce">♪</div>
        <div className="absolute top-20 right-24 text-orange-300/30 text-xl animate-pulse">♫</div>
        <div className="absolute bottom-12 left-24 text-red-300/30 text-2xl animate-bounce">🎼</div>

        <div className="container mx-auto px-6 md:px-8 text-center">
          <div className="max-w-4xl mx-auto mb-12 bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-blue-100/50">
            <img src={bandImage} alt="Band Performance" className="w-full h-auto rounded-2xl shadow-lg" />
          </div>

          <div className="max-w-4xl mx-auto mb-12 bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-2xl border border-blue-100/50">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-8">
              {["🎸", "🥁", "🎤", "🎹"].map((emoji, i) => (
                <div key={i} className="text-center group">
                  <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-pink-500 rounded-full flex items-center justify-center text-4xl mb-4 mx-auto group-hover:animate-bounce shadow-lg">
                    {emoji}
                  </div>
                  <p className="text-base font-semibold text-gray-700 text-center">
                    {["Guitarist", "Drummer", "Vocalist", "Keyboardist"][i]}
                  </p>
                </div>
              ))}
            </div>
            <h2 className="text-3xl font-bold mb-4 text-gray-800">
              Connect with <span className="text-orange-600">Musicians</span> Near You
            </h2>
            <p className="text-xl text-gray-600">
              From raw ideas to polished performances — find your next music partner here
            </p>
          </div>
        </div>
      </section>

      {/* IDEA SECTION */}
      <section id="idea-section" className="py-20 md:py-24 bg-gradient-to-br from-orange-50/30 via-white to-blue-50/20">
        <div className="container mx-auto px-6 md:px-8 text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-16 bg-gradient-to-r from-orange-800 via-red-700 to-blue-800 bg-clip-text text-transparent">
            A match finder for musicians
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {[
              {
                title: "Find Your Band",
                text: "Ever wanted to form a music band but found it too hard to find fellow band members? Here's a solution to it! A Tinder for musicians.",
                icon: "🎸",
                color: "from-orange-400 to-red-500"
              },
              {
                title: "Smart Matching",
                text: "Artists can swipe through a list of others and send requests to the ones they find impressive for their band.",
                icon: "💫",
                color: "from-blue-400 to-purple-500"
              },
              {
                title: "Get Gigs",
                text: "It'll also have a feature that will find gigs for the bands, which would mainly benefit those who are recently starting in this field.",
                icon: "🎤",
                color: "from-red-400 to-pink-500"
              }
            ].map((card, i) => (
              <div
                key={i}
                className="group bg-white/90 backdrop-blur-sm p-10 rounded-3xl shadow-xl border border-orange-100/50 hover:shadow-2xl transform hover:-translate-y-3 hover:scale-105 transition duration-500"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${card.color} rounded-full flex items-center justify-center text-3xl mb-6 group-hover:animate-bounce mx-auto`}>
                  {card.icon}
                </div>
                <h3 className="text-2xl font-bold mb-6 text-gray-800 group-hover:text-orange-700 transition">{card.title}</h3>
                <p className="text-lg text-gray-700 group-hover:text-gray-800 transition">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <section className="py-20 bg-gradient-to-r from-orange-600 via-red-600 to-blue-600 text-white relative">
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        <div className="container mx-auto px-6 md:px-8 text-center relative z-10">
          <h3 className="text-4xl font-bold mb-6 bg-gradient-to-r from-yellow-200 to-orange-200 bg-clip-text text-transparent">
            Ready to find your sound?
          </h3>
          <p className="text-2xl text-orange-100 mb-10 font-light">
            Join thousands of musicians already making music together
          </p>
          <button
            onClick={handleLoginClick}
            className="bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-12 py-5 rounded-full text-xl font-bold shadow-lg hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105 transition-all"
          >
            Get Started Now
          </button>
        </div>
      </section>
    </div>
  );
}