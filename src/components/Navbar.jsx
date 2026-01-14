import React, { useState, useRef } from "react";
import {
  Home,
  Briefcase,
  User,
  FileText,
  Mail,
  BookOpen,
  Layers,
  Award,
} from "lucide-react";

const MagneticWrapper = ({ children }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const ref = useRef(null);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { width, height, left, top } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const moveX = (clientX - centerX) * 0.4;
    const moveY = (clientY - centerY) * 0.4;
    setPosition({ x: moveX, y: moveY });
  };

  const handleMouseLeave = () => setPosition({ x: 0, y: 0 });

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transition: "transform 0.2s cubic-bezier(0.33, 1, 0.68, 1)",
        transform: `translate(${position.x}px, ${position.y}px)`,
        display: "inline-block",
      }}
    >
      {children}
    </div>
  );
};

const Navbar = () => {
  const navItems = [
    { icon: <User size={20} />, label: "About", link: "#about" },
    { icon: <Briefcase size={20} />, label: "Projects", link: "#projects" },
    { icon: <BookOpen size={20} />, label: "Blog", link: "#blog" },
    { icon: <Layers size={20} />, label: "Platforms", link: "#platforms" },
    { icon: <Award size={20} />, label: "Experience", link: "#experience" },
    { icon: <FileText size={20} />, label: "Resume", link: "#resume" },
    { icon: <Mail size={20} />, label: "Contact", link: "#contact" },
  ];

  return (
    <nav className="liquid-nav">
      {navItems.map((item, index) => (
        <MagneticWrapper key={index}>
          <div className="nav-item">
            <a href={item.link} className="nav-link">
              <span className="icon-wrapper">{item.icon}</span>
            </a>
            <span className="tooltip">
              {item.label}
              <span className="tooltip-arrow" />
            </span>
          </div>
        </MagneticWrapper>
      ))}

      <style>{`
        .liquid-nav {
          position: fixed;
          bottom: 2.5rem;
          left: 50%;
          transform: translateX(-50%);
          z-index: 1000;
          display: flex;
          gap: 0.8rem;
          padding: 0.8rem 1.2rem;
          background: rgba(20, 20, 20, 0.4);
          backdrop-filter: blur(20px) saturate(180%);
          -webkit-backdrop-filter: blur(20px) saturate(180%);
          border-radius: 2.5rem;
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
          max-width: 95vw;
          box-sizing: border-box;
        }

        .nav-link {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 50px;
          height: 50px;
          color: rgba(255, 255, 255, 0.5);
          text-decoration: none;
          border-radius: 50%;
          transition: all 0.3s ease;
        }

        .nav-link:hover {
          background: rgba(255, 255, 255, 0.08);
          color: #fff !important;
        }
        
        .nav-item:hover .tooltip {
          opacity: 1;
          visibility: visible;
          transform: translateX(-50%) translateY(0);
        }

        .tooltip {
          position: absolute;
          bottom: 70px;
          left: 50%;
          transform: translateX(-50%) translateY(10px);
          background: #fff;
          color: #000;
          padding: 6px 14px;
          border-radius: 10px;
          font-size: 0.8rem;
          font-weight: 600;
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          white-space: nowrap;
          pointer-events: none;
        }

        .tooltip-arrow {
          content: '';
          position: absolute;
          top: 100%;
          left: 50%;
          margin-left: -6px;
          border-width: 6px;
          border-style: solid;
          border-color: #fff transparent transparent transparent;
        }

        /* Mobile Responsive Fixes */
        @media (max-width: 768px) {
          .liquid-nav {
            bottom: 1.5rem;
            gap: 0.3rem;
            padding: 0.5rem 0.8rem;
            border-radius: 2rem;
          }
          
          .nav-link {
            width: 40px;
            height: 40px;
          }

          .icon-wrapper svg {
            width: 18px;
            height: 18px;
          }
          
          /* Tooltips are often finicky on mobile touch, so we hide or adjust them */
          .tooltip {
             display: none; 
          }
        }

        @media (max-width: 400px) {
          .liquid-nav {
            gap: 0.1rem;
            padding: 0.4rem 0.5rem;
          }
          .nav-link {
            width: 36px;
            height: 36px;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
