import React, { useEffect, useState } from "react";

export default function Landing() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const smoothScrollTo = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50 text-gray-800 font-serif overflow-x-hidden">
      {/* Floating particles background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-2 h-2 bg-purple-300 rounded-full opacity-60 animate-pulse"></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-pink-400 rounded-full opacity-40 animate-bounce"></div>
        <div className="absolute bottom-40 left-32 w-3 h-3 bg-blue-200 rounded-full opacity-30 animate-ping"></div>
        <div className="absolute top-60 right-20 w-2 h-2 bg-purple-200 rounded-full opacity-50 animate-pulse"></div>
      </div>

      {/* HEADER SECTION */}
      <section className="bg-gradient-to-br from-white via-blue-50 to-orange-50 text-gray-800 py-8 relative overflow-hidden">
        {/* Musical elements scattered background */}
        <div className="absolute top-10 left-20 text-orange-300/40 text-3xl animate-bounce">🎸</div>
        <div className="absolute top-20 right-32 text-blue-300/40 text-2xl animate-pulse">🥁</div>
        <div className="absolute bottom-10 left-32 text-red-300/40 text-2xl animate-bounce">🎤</div>
        <div className="absolute top-32 right-20 text-orange-400/30 text-xl animate-pulse">♪</div>
        <div className="absolute bottom-20 right-40 text-blue-400/30 text-xl animate-bounce">♫</div>
        
        <div className="container mx-auto px-8 relative z-10">
          <div className="flex justify-between items-start">
            {/* Left: Title & Tagline - Leftmost */}
            <div className="flex-shrink-0">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-3 transform hover:scale-105 transition-transform duration-300">
                <span className="font-[cursive] bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                  Band
                </span>
                <span className="font-normal text-gray-800 ml-2">Mate</span>
              </h1>
              <p className="text-lg md:text-xl leading-snug font-light text-gray-600 animate-fade-in">
                find your sound,<br />
                <span className="text-orange-600 font-medium">join the band.</span>
              </p>
            </div>

            {/* Right: Buttons - Rightmost with more spacing */}
            <div className="flex space-x-6 ml-auto">
              <button
                onClick={() => smoothScrollTo("idea-section")}
                className="group border-2 border-orange-400 text-orange-600 px-8 py-3 rounded-full hover:bg-orange-500 hover:text-white transition-all duration-500 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <span className="group-hover:animate-pulse">How it works</span>
              </button>
              <button
                className="flex items-center justify-center space-x-3 bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-3 rounded-full hover:from-orange-600 hover:to-red-600 transition-all duration-500 font-semibold text-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105"
              >
                <img src="/src/assets/icons/loginicon.svg" alt="login" className="w-5 h-5 filter brightness-0 invert" />
                <span>Log in</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* HERO ILLUSTRATION SECTION */}
      <section className="py-16 bg-gradient-to-br from-blue-50 via-white to-orange-50 relative">
        {/* Musical elements floating */}
        <div className="absolute top-8 left-16 text-blue-300/30 text-2xl animate-bounce">♪</div>
        <div className="absolute top-20 right-24 text-orange-300/30 text-xl animate-pulse">♫</div>
        <div className="absolute bottom-12 left-24 text-red-300/30 text-2xl animate-bounce">🎼</div>
        
        <div className="container mx-auto px-8 text-center">
          {/* Band image */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-blue-100/50">
              <img 
                src="/src/assets/band image.jpg" 
                alt="Band Performance" 
                className="w-full h-auto object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>
          
          {/* Illustration-style band section */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-2xl border border-blue-100/50">
              <div className="flex justify-center items-center space-x-8 mb-8">
                {/* Musicians representation */}
                <div className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center text-2xl mb-2 group-hover:animate-bounce">🎸</div>
                  <p className="text-sm font-medium text-gray-600">Guitarist</p>
                </div>
                <div className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-2xl mb-2 group-hover:animate-bounce">🥁</div>
                  <p className="text-sm font-medium text-gray-600">Drummer</p>
                </div>
                <div className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-400 to-pink-500 rounded-full flex items-center justify-center text-2xl mb-2 group-hover:animate-bounce">🎤</div>
                  <p className="text-sm font-medium text-gray-600">Vocalist</p>
                </div>
                <div className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-full flex items-center justify-center text-2xl mb-2 group-hover:animate-bounce">🎹</div>
                  <p className="text-sm font-medium text-gray-600">Keyboardist</p>
                </div>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Connect with <span className="text-orange-600">Musicians</span> Near You
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                From raw ideas to polished performances — find your next music partner here
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* IDEA SECTION */}
      <section id="idea-section" className="py-20 md:py-24 bg-gradient-to-br from-orange-50/30 via-white to-blue-50/20 relative">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-orange-400 via-red-400 to-blue-400 opacity-10"></div>
        </div>
        
        <div className="container mx-auto px-8 relative z-10">
          <h2 className="text-5xl md:text-7xl font-bold mb-16 text-center bg-gradient-to-r from-orange-800 via-red-700 to-blue-800 bg-clip-text text-transparent animate-fade-in">
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
            ].map((card, index) => (
              <div 
                key={index}
                className="group bg-white/90 backdrop-blur-sm p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 border border-orange-100/50"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${card.color} rounded-full flex items-center justify-center text-3xl mb-6 group-hover:animate-bounce mx-auto`}>
                  {card.icon}
                </div>
                <h3 className="text-2xl font-bold mb-6 text-gray-800 group-hover:text-orange-700 transition-colors duration-300 text-center">
                  {card.title}
                </h3>
                <p className="text-lg leading-relaxed text-gray-700 group-hover:text-gray-800 transition-colors duration-300 text-center">
                  {card.text}
                </p>
                <div className="mt-6 w-0 group-hover:w-full h-1 bg-gradient-to-r from-orange-500 to-red-500 transition-all duration-500 mx-auto rounded-full"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER SECTION */}
      <section className="py-20 bg-gradient-to-r from-orange-600 via-red-600 to-blue-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
        <div className="container mx-auto px-8 text-center relative z-10">
          <h3 className="text-4xl font-bold mb-6 bg-gradient-to-r from-yellow-200 to-orange-200 bg-clip-text text-transparent">
            Ready to find your sound?
          </h3>
          <p className="text-2xl text-orange-100 mb-10 font-light">Join thousands of musicians already making music together</p>
          <button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-12 py-5 rounded-full text-xl font-bold shadow-lg hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105 transition-all duration-300">
            Get Started Now
          </button>
        </div>
      </section>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
}