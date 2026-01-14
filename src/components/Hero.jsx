import React from 'react';

const Hero = () => {
    // Replace with your local asset path: import heroImage from '../assets/hero-portrait.png';
    const heroImagePlaceholder = "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=800";

    return (
        <section style={{
            height: '100vh',
            width: '100vw',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
            backgroundColor: '#000',
        }}>
            {/* 1. Subtitle - Positioned at the top */}
            <p style={{
                position: 'absolute',
                top: '12%',
                left: '50%',
                transform: 'translateX(-50%)',
                zIndex: 5,
                fontSize: 'clamp(0.7rem, 1.2vw, 0.9rem)',
                color: 'rgba(255, 255, 255, 0.6)',
                fontWeight: 400,
                letterSpacing: '0.4em',
                textTransform: 'uppercase',
                textAlign: 'center',
                width: '100%'
            }}>
                A Product Designer, who loves to travel!
            </p>

            {/* 2. Background "HI! I'M" */}
            <div style={{
                position: 'absolute',
                top: '42%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                fontSize: 'clamp(8rem, 24vw, 38rem)',
                fontWeight: '900',
                color: '#0a0a0a',
                zIndex: 0,
                whiteSpace: 'nowrap',
                pointerEvents: 'none',
                lineHeight: 1,
                letterSpacing: '-0.06em',
                userSelect: 'none'
            }}>
                HI! I'M
            </div>

            {/* 3. Image container - Full Pill Shape */}
            <div style={{
                position: 'relative',
                zIndex: 1,
                width: 'clamp(260px, 22vw, 420px)',
                height: 'clamp(380px, 32vw, 620px)',
                borderRadius: '999px',
                overflow: 'hidden',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
            }}>
                <img
                    src={heroImagePlaceholder}
                    alt="Prasanna Portrait"
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        filter: 'grayscale(100%) brightness(0.9) contrast(1.1)'
                    }}
                />
            </div>

            {/* 4. Foreground Name - Lowered overlap */}
            <h1 style={{
                position: 'absolute',
                top: '76%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                fontSize: 'clamp(4rem, 16vw, 14rem)',
                fontFamily: "'Archivo Black', sans-serif",
                color: '#fff',
                zIndex: 2,
                whiteSpace: 'nowrap',
                margin: 0,
                lineHeight: 0.8,
                textTransform: 'uppercase',
                letterSpacing: '-0.02em',
                textAlign: 'center'
            }}>
                PRASANNA
            </h1>

            {/* Decorative side lines */}
            <div style={{ position: 'absolute', left: '5%', top: '50%', height: '1px', width: '40px', background: 'rgba(255,255,255,0.1)' }} />
            <div style={{ position: 'absolute', right: '5%', top: '50%', height: '1px', width: '40px', background: 'rgba(255,255,255,0.1)' }} />
        </section>
    );
};

export default Hero;