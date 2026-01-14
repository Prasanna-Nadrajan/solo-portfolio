import React, { useState, useRef } from 'react';
import { Home, Briefcase, User, FileText, Mail } from 'lucide-react';

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
        transition: 'transform 0.2s cubic-bezier(0.33, 1, 0.68, 1)',
        transform: `translate(${position.x}px, ${position.y}px)`,
        display: 'inline-block'
      }}
    >
      {children}
    </div>
  );
};

const Navbar = () => {
  const navItems = [
    { icon: <Home size={22} />, label: 'Home', link: '#' },
    { icon: <Briefcase size={22} />, label: 'Work', link: '#work' },
    { icon: <User size={22} />, label: 'About', link: '#about' },
    { icon: <FileText size={22} />, label: 'Resume', link: '#' },
    { icon: <Mail size={22} />, label: 'Contact', link: '#contact' },
  ];

  return (
    <nav className="liquid-nav">
      {navItems.map((item, index) => (
        <MagneticWrapper key={index}>
          <div className="nav-item-container">
            <a href={item.link} className="nav-icon-link">
              {item.icon}
              <span className="tooltip">{item.label}</span>
            </a>
          </div>
        </MagneticWrapper>
      ))}

      <style>{`
        .liquid-nav {
          position: fixed;
          bottom: 2.5rem;
          left: '50%';
          transform: translateX(-50%);
          z-index: 1000;
          display: flex;
          gap: 0.8rem;
          padding: 0.8rem 1.2rem;
          background: rgba(20, 20, 20, 0.4);
          backdrop-filter: blur(20px) saturate(180%);
          border-radius: 2.5rem;
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
          left: 50%;
        }

        .nav-icon-link {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 50px;
          height: 50px;
          color: rgba(255, 255, 255, 0.5);
          text-decoration: none;
          border-radius: 50%;
          transition: color 0.3s ease, background 0.3s ease;
          position: relative;
        }

        .nav-icon-link:hover {
          background: rgba(255, 255, 255, 0.08);
          color: #fff;
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
        }

        .nav-item-container:hover .tooltip {
          opacity: 1;
          visibility: visible;
          transform: translateX(-50%) translateY(0);
        }

        .tooltip::after {
          content: '';
          position: absolute;
          top: 100%;
          left: 50%;
          margin-left: -6px;
          border-width: 6px;
          border-style: solid;
          border-color: #fff transparent transparent transparent;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;