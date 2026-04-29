import React from 'react';

const RULES = [
  {
    section: '1. General Rules',
    items: [
      'All bets placed are final once confirmed. No cancellations will be entertained after a bet is placed.',
      'REDDY247 reserves the right to void any bet that is placed in error, including incorrect odds.',
      'Users must be 18 years of age or older to participate in any betting activity on this platform.',
      'Only one account per person is allowed. Multiple accounts will result in permanent suspension.',
      'REDDY247 reserves the right to limit or close accounts at any time without prior notice.',
    ],
  },
  {
    section: '2. Sports Betting Rules',
    items: [
      'All match odds are subject to change until the bet is confirmed.',
      'In-play bets are settled based on the official result declared by the relevant governing body.',
      'If a match is abandoned before completion, bets will be voided unless otherwise stated.',
      'Results are settled based on official scorecard and no claims will be entertained after settlement.',
      'For cricket: A minimum of 5 overs must be completed for match winner bets to stand.',
    ],
  },
  {
    section: '3. Casino Rules',
    items: [
      'All casino games use certified random number generators to ensure fair play.',
      'Any attempt to manipulate or exploit a game will result in immediate account suspension.',
      'Bonus winnings from casino games are subject to wagering requirements before withdrawal.',
      'REDDY247 reserves the right to void any casino winnings obtained through technical errors.',
    ],
  },
  {
    section: '4. Deposits & Withdrawals',
    items: [
      'Minimum deposit amount is ₹500. Maximum deposit is ₹10,00,000 per transaction.',
      'Withdrawals are processed within 24-48 hours on business days.',
      'Withdrawal requests must meet the minimum amount of ₹1,000.',
      'KYC verification is mandatory before processing any withdrawal.',
      'REDDY247 does not charge any fees for deposits or withdrawals.',
    ],
  },
  {
    section: '5. Bonus & Promotions',
    items: [
      'All bonuses are subject to their individual terms and wagering requirements.',
      'Bonuses cannot be transferred between accounts.',
      'REDDY247 reserves the right to modify, suspend, or cancel any promotion at any time.',
      'Abuse of any promotional offer will result in the cancellation of the bonus and potential account suspension.',
    ],
  },
];

export default function RulesPage() {
  return (
    <div style={{ padding: '20px', paddingBottom: '32px', maxWidth: '800px' }}>
      <h1 style={{ fontSize: '26px', fontWeight: '800', color: 'var(--text-primary)', marginBottom: '8px' }}>Rules & Regulations</h1>
      <p style={{ color: 'var(--text-secondary)', fontSize: '13px', marginBottom: '28px' }}>
        Last updated: January 2026. Please read these rules carefully before participating.
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {RULES.map((rule) => (
          <div key={rule.section} className="content-card" style={{ padding: '20px' }}>
            <h2 style={{ fontSize: '16px', fontWeight: '700', color: 'var(--brand-primary)', marginBottom: '12px', borderBottom: '1px solid var(--border-primary)', paddingBottom: '8px' }}>
              {rule.section}
            </h2>
            <ul style={{ margin: 0, padding: '0 0 0 20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {rule.items.map((item, i) => (
                <li key={i} style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.7 }}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
