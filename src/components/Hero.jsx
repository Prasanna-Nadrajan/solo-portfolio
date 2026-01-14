import React, { useState, useEffect, useRef } from "react";

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [displayText, setDisplayText] = useState("PRASANNA");

  const intervalRef = useRef(null);
  const originalText = "PRASANNA";
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*";

  // Use your local asset path here
  const heroImagePlaceholder = "src/assets/hero_portrait.jpg";

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  // Hashing/Scramble Logic
  const handleHover = () => {
    let iteration = 0;

    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setDisplayText((prev) =>
        prev
          .split("")
          .map((_, index) => {
            if (index < iteration) {
              return originalText[index];
            }
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("")
      );

      if (iteration >= originalText.length) {
        clearInterval(intervalRef.current);
      }

      iteration += 1 / 3; // Speed of resolving letters
    }, 30);
  };

  const scrollProgress = Math.min(scrollY / 600, 1);
  const hiImTranslate = -100 + 100 * scrollProgress;
  const prasannaTranslate = 100 - 100 * scrollProgress;
  const imageScale = 1 + scrollProgress * 0.2;
  const imageRotate = scrollProgress * 5;
  const subtitleOpacity = 1 - scrollProgress * 1.5;

  const mouseParallaxX = (mousePos.x / window.innerWidth - 0.5) * 20;
  const mouseParallaxY = (mousePos.y / window.innerHeight - 0.5) * 20;

  return (
    <section className="hero-container">
      <div className="sticky-wrapper">
        {/* Animated Grid Background */}
        <div
          className="grid-bg"
          style={{
            transform: `translate(${mouseParallaxX * 0.5}px, ${
              mouseParallaxY * 0.5
            }px)`,
          }}
        />

        {/* Animated gradient orbs */}
        <div
          className="orb orb-1"
          style={{
            transform: `translate(${mouseParallaxX}px, ${mouseParallaxY}px) scale(${
              1 + scrollProgress * 0.3
            })`,
          }}
        />
        <div
          className="orb orb-2"
          style={{
            transform: `translate(${-mouseParallaxX}px, ${-mouseParallaxY}px)`,
          }}
        />

        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className={`particle particle-${i % 3}`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${15 + Math.random() * 10}s`,
              opacity: 0.6 - scrollProgress * 0.3,
              transform: `translate(${mouseParallaxX * (i % 3) * 0.2}px, ${
                mouseParallaxY * (i % 3) * 0.2
              }px)`,
            }}
          />
        ))}

        {/* Subtitle */}
        <p className="hero-subtitle" style={{ opacity: subtitleOpacity }}>
          A Product Designer, who loves to travel!
        </p>

        {/* Background "HI! I'M" */}
        <div
          className="bg-text"
          style={{
            transform: `translate(calc(-50% + ${hiImTranslate}vw), -50%)`,
          }}
        >
          HI! I'M
        </div>

        {/* Rotating Rings */}
        <div className="ring ring-outer" />
        <div className="ring ring-inner" />

        {/* Image Portrait */}
        <div
          className="image-frame"
          style={{
            transform: `scale(${imageScale}) rotate(${imageRotate}deg)`,
          }}
        >
          <img
            src={heroImagePlaceholder}
            alt="Prasanna Portrait"
            className="portrait-img"
            style={{
              filter: `grayscale(${100 - scrollProgress * 100}%) brightness(${
                0.9 + scrollProgress * 0.2
              }) contrast(1.1)`,
            }}
            onError={(e) => {
              e.target.src =
                "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=800";
            }}
          />
          <div
            className="image-glow"
            style={{ opacity: scrollProgress * 0.6 }}
          />
        </div>

        {/* Foreground Name with Scramble/Hashing Effect */}
        <h1
          className="name-text"
          onMouseEnter={handleHover}
          style={{
            transform: `translate(calc(-50% + ${prasannaTranslate}vw), -50%)`,
            textShadow: `0 0 ${20 + scrollProgress * 30}px rgba(139, 92, 246, ${
              scrollProgress * 0.5
            }), 0 0 ${40 + scrollProgress * 60}px rgba(236, 72, 153, ${
              scrollProgress * 0.3
            })`,
            cursor: "default",
          }}
        >
          {displayText}
        </h1>

        {/* Decorative parallax lines */}
        <div
          className="decor-line decor-l"
          style={{ width: `${40 + scrollProgress * 60}px` }}
        />
        <div
          className="decor-line decor-r"
          style={{ width: `${40 + scrollProgress * 60}px` }}
        />

        {/* Corner accents */}
        <div
          className="corner corner-tl"
          style={{ opacity: 0.5 + scrollProgress * 0.5 }}
        />
        <div
          className="corner corner-tr"
          style={{ opacity: 0.5 + scrollProgress * 0.5 }}
        />

        {/* Scroll indicator */}
        <div
          className="scroll-indicator"
          style={{ opacity: 1 - scrollProgress * 2 }}
        >
          <div className="mouse-icon">
            <div className="wheel" />
          </div>
        </div>
      </div>

      <style>{`
        .hero-container { height: 200vh; width: 100vw; position: relative; background: #000; }
        .sticky-wrapper { position: sticky; top: 0; height: 100vh; display: flex; flex-direction: column; justify-content: center; align-items: center; overflow: hidden; }
        
        .grid-bg { position: absolute; inset: 0; background-image: linear-gradient(rgba(139, 92, 246, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(139, 92, 246, 0.03) 1px, transparent 1px); background-size: 50px 50px; opacity: 0.5; transition: transform 0.3s ease-out; }
        
        .orb { position: absolute; border-radius: 50%; filter: blur(80px); opacity: 0.5; }
        .orb-1 { width: 600px; height: 600px; background: radial-gradient(circle, rgba(139, 92, 246, 0.15), transparent 70%); top: 20%; left: 10%; animation: float 8s ease-in-out infinite; }
        .orb-2 { width: 500px; height: 500px; background: radial-gradient(circle, rgba(236, 72, 153, 0.12), transparent 70%); bottom: 10%; right: 15%; animation: float 10s ease-in-out infinite reverse; }

        .particle { position: absolute; width: 4px; height: 4px; border-radius: 50%; }
        .particle-0 { background: rgba(139, 92, 246, 0.6); animation: particle-float-0 infinite; }
        .particle-1 { background: rgba(236, 72, 153, 0.5); animation: particle-float-1 infinite; }
        .particle-2 { background: rgba(255, 255, 255, 0.4); animation: particle-float-2 infinite; }

        .hero-subtitle { position: absolute; top: 12%; left: 50%; transform: translateX(-50%); z-index: 5; font-size: clamp(0.7rem, 1.2vw, 0.9rem); color: rgba(255, 255, 255, 0.6); font-weight: 300; letter-spacing: 0.5em; text-transform: uppercase; transition: opacity 0.3s ease; }
        
        .bg-text { position: absolute; top: 42%; left: 50%; font-size: clamp(8rem, 24vw, 38rem); font-weight: 900; color: #0a0a0a; z-index: 0; white-space: nowrap; pointer-events: none; line-height: 1; letter-spacing: -0.02em; transition: transform 0.1s ease-out; }
        
        .ring { position: absolute; border-radius: 999px; z-index: 0; }
        .ring-outer { width: clamp(340px, 30vw, 540px); height: clamp(500px, 44vw, 790px); border: 1px solid rgba(236, 72, 153, 0.15); animation: rotate 30s linear infinite reverse; }
        .ring-inner { width: clamp(300px, 26vw, 480px); height: clamp(440px, 38vw, 700px); border: 1px solid rgba(139, 92, 246, 0.2); animation: rotate 20s linear infinite; }

        .image-frame { position: relative; z-index: 1; width: clamp(260px, 22vw, 420px); height: clamp(380px, 32vw, 620px); border-radius: 999px; overflow: hidden; border: 2px solid rgba(255, 255, 255, 0.15); box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5); transition: transform 0.1s ease-out; }
        .portrait-img { width: 100%; height: 100%; object-fit: cover; }
        .image-glow { position: absolute; inset: 0; background: radial-gradient(circle, rgba(139, 92, 246, 0.3), transparent 70%); mix-blend-mode: screen; }

        .name-text { position: absolute; top: 76%; left: 50%; font-size: clamp(4rem, 16vw, 14rem); font-family: 'Play', sans-serif; color: #fff; z-index: 2; white-space: nowrap; margin: 0; line-height: 0.8; text-transform: uppercase; letter-spacing: 0.02em; transition: transform 0.1s ease-out; }
        
        .decor-line { position: absolute; top: 50%; height: 2px; transition: width 0.3s ease; }
        .decor-l { left: 5%; background: linear-gradient(90deg, rgba(139, 92, 246, 0.4), transparent); box-shadow: 0 0 10px rgba(139, 92, 246, 0.5); }
        .decor-r { right: 5%; background: linear-gradient(-90deg, rgba(236, 72, 153, 0.4), transparent); box-shadow: 0 0 10px rgba(236, 72, 153, 0.5); }

        .corner { position: absolute; width: 40px; height: 40px; }
        .corner-tl { top: 10%; left: 10%; border-top: 2px solid rgba(139, 92, 246, 0.3); border-left: 2px solid rgba(139, 92, 246, 0.3); }
        .corner-tr { top: 10%; right: 10%; border-top: 2px solid rgba(236, 72, 153, 0.3); border-right: 2px solid rgba(236, 72, 153, 0.3); }

        .scroll-indicator { position: absolute; bottom: 5%; left: 50%; transform: translateX(-50%); transition: opacity 0.3s ease; }
        .mouse-icon { width: 30px; height: 50px; border: 2px solid rgba(255, 255, 255, 0.3); border-radius: 15px; display: flex; justify-content: center; padding: 8px; }
        .wheel { width: 4px; height: 10px; background: rgba(255, 255, 255, 0.5); border-radius: 2px; animation: scroll-anim 2s infinite; }

        @keyframes float { 0%, 100% { transform: translateY(0) translateX(0); } 33% { transform: translateY(-30px) translateX(20px); } 66% { transform: translateY(-15px) translateX(-15px); } }
        @keyframes rotate { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes scroll-anim { 0% { transform: translateY(0); opacity: 0; } 50% { opacity: 1; } 100% { transform: translateY(15px); opacity: 0; } }
        @keyframes particle-float-0 { 0%, 100% { transform: translate(0,0); } 50% { transform: translate(30px, -100px); } }
        @keyframes particle-float-1 { 0%, 100% { transform: translate(0,0); } 50% { transform: translate(-40px, -110px); } }
        @keyframes particle-float-2 { 0%, 100% { transform: translate(0,0); } 50% { transform: translate(50px, -90px); } }
      `}</style>
    </section>
  );
};

export default Hero;
