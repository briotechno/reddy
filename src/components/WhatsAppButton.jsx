import React from 'react';

export default function WhatsAppButton() {
  return (
    <div className="whatsapp-container" id="whatsappBtn">
      <a
        href="https://wa.me/917000000000"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-btn"
        aria-label="Contact Support on WhatsApp"
      >
        <i className="bi bi-whatsapp"></i>
      </a>
      <div className="whatsapp-text">Chat with Support</div>
    </div>
  );
}
