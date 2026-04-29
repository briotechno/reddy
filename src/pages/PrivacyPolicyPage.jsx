import React from 'react';

export default function PrivacyPolicyPage() {
  const sections = [
    { title: 'Information We Collect', content: 'We collect information you provide directly, such as name, email, phone number, and date of birth during registration. We also collect transaction data and usage information when you interact with our platform.' },
    { title: 'How We Use Your Information', content: 'We use your information to provide and improve our services, process transactions, send promotional communications (with your consent), comply with legal obligations, and prevent fraudulent activities.' },
    { title: 'Cookies', content: 'We use cookies to improve the effectiveness and usability of the Platform for our Users. Cookies help us assign each visitor a unique random number as a User Identification to understand individual interests. You can disable cookies in your browser settings, however this may affect your experience on our platform.' },
    { title: 'Data Sharing', content: 'We may share your information with trusted third-party service providers who assist us in operating our website and conducting our business, so long as those parties agree to keep this information confidential. We will not sell, distribute, or lease your personal information to third parties unless we have your permission or are required by law.' },
    { title: 'Data Security', content: 'All information gathered on our Platform is securely stored within controlled databases behind firewalls. Access is password-protected and strictly limited on a need-to-know basis. We use SSL encryption for all data transmission.' },
    { title: 'Your Rights', content: 'You have the right to access, update, or delete your personal information at any time. You may request account deactivation by contacting our support team. You can also opt out of marketing communications at any time.' },
    { title: 'Retention of Data', content: 'Your personal information may be retained until the relevant purposes for its use are no longer applicable, or until we are no longer required by applicable law to retain it.' },
    { title: 'Contact Us', content: 'Any questions or clarifications with respect to this Privacy Policy or any complaints, comments, concerns, or feedback can be sent to us via WhatsApp support or through the Contact Us page.' },
  ];

  return (
    <div style={{ padding: '20px', paddingBottom: '32px', maxWidth: '800px' }}>
      <h1 style={{ fontSize: '26px', fontWeight: '800', color: 'var(--text-primary)', marginBottom: '8px' }}>Privacy Policy</h1>
      <p style={{ color: 'var(--text-secondary)', fontSize: '13px', marginBottom: '28px' }}>
        Last updated: January 2026. This policy explains how REDDY247 collects, uses, and protects your personal information.
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {sections.map((sec, i) => (
          <div key={sec.title} className="content-card" style={{ padding: '20px' }}>
            <h2 style={{ fontSize: '15px', fontWeight: '700', color: 'var(--brand-primary)', marginBottom: '10px' }}>
              {i + 1}. {sec.title}
            </h2>
            <p style={{ margin: 0, fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.8 }}>{sec.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
