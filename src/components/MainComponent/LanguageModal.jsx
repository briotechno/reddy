import React, { useState, useEffect } from 'react';

const languages = [
  { name: 'English', code: 'EN' },
  { name: 'हिंदी', code: 'HI' },
  { name: 'मराठी', code: 'MR' },
  { name: 'ગુજરાતી', code: 'GU' },
  { name: 'ಕನ್ನಡ', code: 'KN' },
  { name: 'తెలుగు', code: 'TE' },
  { name: 'বাংলা', code: 'BN' },
  { name: 'Español', code: 'ES' },
];

export const LanguageModal = ({ onClose, currentLang = 'EN', onSelect }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Small timeout to ensure the transition triggers after mounting
    const timer = setTimeout(() => setIsVisible(true), 10);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    // Wait for the transition duration before calling the actual onClose
    setTimeout(onClose, 300);
  };

  return (
    <div 
      onClick={handleClose}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0,0,0,0.8)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 2000,
        padding: '20px',
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 0.3s ease-out',
        backdropFilter: 'blur(4px)'
      }}
    >
      <div 
        onClick={(e) => e.stopPropagation()} // Prevent click from bubbling up to overlay
        style={{
          background: '#1f1f23',
          width: '100%',
          maxWidth: '600px',
          borderRadius: '12px',
          position: 'relative',
          padding: '30px',
          color: '#fff',
          boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
          transform: isVisible ? 'scale(1) translateY(0)' : 'scale(0.95) translateY(20px)',
          transition: 'transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.3s ease-out',
          opacity: isVisible ? 1 : 0,
        }}
      >
        <button 
          onClick={handleClose}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            background: '#000',
            border: 'none',
            color: '#fff',
            width: '28px',
            height: '28px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            fontSize: '18px',
            transition: 'transform 0.2s'
          }}
          onMouseOver={(e) => e.target.style.transform = 'scale(1.1)'}
          onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
        >
          &times;
        </button>

        <h2 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '10px' }}>Select Language</h2>
        <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.7)', marginBottom: '30px' }}>
          Choose your preferred language from the list below:
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '15px',
          marginBottom: '40px'
        }}>
          {languages.map((lang) => (
            <div 
              key={lang.code}
              onClick={() => onSelect(lang.code)}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '12px 16px',
                borderRadius: '8px',
                cursor: 'pointer',
                background: currentLang === lang.code ? 'rgba(255,255,255,0.05)' : 'transparent',
                border: currentLang === lang.code ? '1px solid var(--brand-primary)' : '1px solid rgba(255,255,255,0.05)',
                transition: 'all 0.2s',
                transform: currentLang === lang.code ? 'scale(1.02)' : 'scale(1)'
              }}
              onMouseOver={(e) => {
                if (currentLang !== lang.code) e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
              }}
              onMouseOut={(e) => {
                if (currentLang !== lang.code) e.currentTarget.style.background = 'transparent';
              }}
            >
              <span style={{ fontSize: '15px', fontWeight: currentLang === lang.code ? '600' : '400' }}>
                {lang.name} ({lang.code})
              </span>
              {currentLang === lang.code && (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--brand-primary)" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              )}
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px' }}>
          <button 
            onClick={handleClose}
            style={{
              padding: '10px 24px',
              borderRadius: '8px',
              border: '1px solid rgba(255,255,255,0.2)',
              background: 'transparent',
              color: '#fff',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'background 0.2s'
            }}
            onMouseOver={(e) => e.target.style.background = 'rgba(255,255,255,0.05)'}
            onMouseOut={(e) => e.target.style.background = 'transparent'}
          >
            Cancel
          </button>
          <button 
            onClick={handleClose}
            style={{
              padding: '10px 32px',
              borderRadius: '8px',
              border: 'none',
              background: 'var(--brand-primary)',
              color: '#000',
              fontWeight: '700',
              cursor: 'pointer',
              transition: 'opacity 0.2s'
            }}
            onMouseOver={(e) => e.target.style.opacity = '0.9'}
            onMouseOut={(e) => e.target.style.opacity = '1'}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};
