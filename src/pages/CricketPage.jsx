import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { EventsTable } from '../components/EventsTable';

const CRICKET_INPLAY = [
  { inPlay: true, score: '1/0', over: '1 Ov', team1: 'Chattogram Royals', team2: 'Rajshahi Warriors', o1b: '2.24', o1bs: '1,482', o1l: '2.28', o1ls: '22', o2b: '-', o2l: '-', o3b: '1.79', o3bs: '15', o3l: '1.80', o3ls: '1,844' },
  { inPlay: true, score: '85/3', over: '18.2 Ov', team1: 'Mumbai Indians', team2: 'Delhi Capitals', o1b: '1.30', o1bs: '5,200', o1l: '1.32', o1ls: '890', o2b: '-', o2l: '-', o3b: '3.85', o3bs: '420', o3l: '3.95', o3ls: '80' },
];

const CRICKET_UPCOMING = [
  { inPlay: false, date: '18-01', time: '1:00 PM', team1: 'India', team2: 'New Zealand', o1b: '1.32', o1bs: '1,359', o1l: '1.33', o1ls: '1,827', o2b: '-', o2l: '-', o3b: '4.00', o3bs: '1,223', o3l: '4.20', o3ls: '427' },
  { inPlay: false, date: '19-01', time: '7:30 PM', team1: 'England', team2: 'Australia', o1b: '2.10', o1bs: '3,100', o1l: '2.14', o1ls: '540', o2b: '4.60', o2l: '-', o2bs: '290', o3b: '1.85', o3bs: '2,900', o3l: '1.88', o3ls: '1,100' },
  { inPlay: false, date: '20-01', time: '3:30 PM', team1: 'Pakistan', team2: 'Sri Lanka', o1b: '1.65', o1bs: '2,800', o1l: '1.68', o1ls: '900', o2b: '-', o2l: '-', o3b: '2.42', o3bs: '880', o3l: '2.48', o3ls: '370' },
  { inPlay: false, date: '20-01', time: '7:00 PM', team1: 'Bangladesh', team2: 'West Indies', o1b: '1.90', o1bs: '1,500', o1l: '1.94', o1ls: '330', o2b: '-', o2l: '-', o3b: '2.10', o3bs: '700', o3l: '2.15', o3ls: '200' },
  { inPlay: false, date: '21-01', time: '9:30 AM', team1: 'South Africa', team2: 'Zimbabwe', o1b: '1.20', o1bs: '4,000', o1l: '1.22', o1ls: '1,800', o2b: '-', o2l: '-', o3b: '6.50', o3bs: '500', o3l: '7.00', o3ls: '120' },
];

const COMPETITIONS = [
  'Twenty20 Big Bash', 'Bangladesh Premier League', 'ICC Champions Trophy',
  'IPL 2025', 'India vs New Zealand', 'The Hundred', 'PSL 2025',
  'Lanka Premier League', 'SA20', 'ILT20',
];

export default function CricketPage() {
  const [activeTab, setActiveTab] = useState('inplay');
  const [openComp, setOpenComp] = useState(null);

  return (
    <div style={{ paddingBottom: '16px' }}>
      {/* Mobile Tabs */}
      <div className="d-flex d-lg-none" style={{ gap: '4px', padding: '8px', borderBottom: '1px solid var(--border-primary)' }}>
        {['inplay', 'competitions'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            style={{
              flex: 1, padding: '8px', border: 'none', borderRadius: '6px',
              background: activeTab === tab ? 'var(--brand-primary)' : 'var(--bg-secondary)',
              color: activeTab === tab ? '#fff' : 'var(--text-secondary)',
              fontWeight: '700', fontSize: '12px', cursor: 'pointer', textTransform: 'capitalize',
            }}
          >
            {tab === 'inplay' ? 'In Play' : 'Competitions'}
          </button>
        ))}
      </div>

      <div style={{ padding: '8px' }}>
        {/* In Play Section */}
        <EventsTable
          title="Cricket"
          showLive={true}
          events={CRICKET_INPLAY}
          innerLink="/cricket/match"
        />

        {/* Competitions (Desktop sidebar) */}
        <div className="d-none d-lg-block" style={{ marginBottom: '12px' }}>
          <div style={{ border: '1px solid var(--border-primary)', borderRadius: '8px', overflow: 'hidden' }}>
            <div style={{ padding: '8px 12px', background: 'var(--bg-secondary)', borderBottom: '1px solid var(--border-primary)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span style={{ fontWeight: '700', color: 'var(--text-primary)' }}>Competitions</span>
            </div>
            {COMPETITIONS.map((comp) => (
              <div
                key={comp}
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  padding: '10px 16px', borderBottom: '1px solid var(--border-primary)',
                  cursor: 'pointer', transition: 'background 0.2s',
                  background: openComp === comp ? 'var(--bg-hover)' : 'transparent',
                }}
                onClick={() => setOpenComp(openComp === comp ? null : comp)}
              >
                <span style={{ fontSize: '13px', color: 'var(--text-primary)', fontWeight: '500' }}>{comp}</span>
                <i className={`bi bi-chevron-${openComp === comp ? 'down' : 'right'}`} style={{ color: 'var(--brand-primary)', fontSize: '12px' }}></i>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Events */}
        <EventsTable
          title="Cricket"
          showLive={false}
          events={CRICKET_UPCOMING}
          innerLink="/cricket/match"
        />
      </div>
    </div>
  );
}
