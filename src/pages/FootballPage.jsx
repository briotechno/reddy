import React from 'react';
import { EventsTable } from '../components/EventsTable';

const FOOTBALL_INPLAY = [
  { inPlay: true, score: '1-0', over: "62'", team1: 'Manchester City', team2: 'Arsenal', o1b: '1.44', o1bs: '8,200', o1l: '1.46', o1ls: '2,100', o2b: '5.40', o2bs: '900', o2l: '5.60', o2ls: '300', o3b: '7.80', o3bs: '450', o3l: '8.20', o3ls: '110' },
  { inPlay: true, score: '2-2', over: "78'", team1: 'Liverpool', team2: 'Chelsea', o1b: '2.60', o1bs: '3,400', o1l: '2.66', o1ls: '780', o2b: '3.70', o2bs: '550', o2l: '3.85', o2ls: '220', o3b: '2.90', o3bs: '1,800', o3l: '2.98', o3ls: '450' },
];

const FOOTBALL_UPCOMING = [
  { inPlay: false, date: '18-01', time: '8:00 PM', team1: 'Real Madrid', team2: 'Barcelona', o1b: '2.20', o1bs: '12,000', o1l: '2.24', o1ls: '3,500', o2b: '3.60', o2bs: '4,000', o2l: '3.70', o2ls: '1,200', o3b: '3.30', o3bs: '5,500', o3l: '3.40', o3ls: '1,800' },
  { inPlay: false, date: '19-01', time: '3:00 PM', team1: 'Bayern Munich', team2: 'Dortmund', o1b: '1.75', o1bs: '9,000', o1l: '1.78', o1ls: '2,800', o2b: '4.10', o2bs: '2,200', o2l: '4.20', o2ls: '700', o3b: '4.50', o3bs: '3,000', o3l: '4.65', o3ls: '900' },
  { inPlay: false, date: '19-01', time: '5:30 PM', team1: 'PSG', team2: 'Marseille', o1b: '1.55', o1bs: '7,500', o1l: '1.57', o1ls: '2,200', o2b: '4.80', o2bs: '1,800', o2l: '4.95', o2ls: '550', o3b: '5.20', o3bs: '2,100', o3l: '5.40', o3ls: '620' },
  { inPlay: false, date: '20-01', time: '9:30 PM', team1: 'Juventus', team2: 'Inter Milan', o1b: '2.40', o1bs: '6,000', o1l: '2.46', o1ls: '1,500', o2b: '3.50', o2bs: '3,200', o2l: '3.60', o2ls: '900', o3b: '2.90', o3bs: '4,800', o3l: '2.98', o3ls: '1,300' },
];

export default function FootballPage() {
  return (
    <div style={{ padding: '8px', paddingBottom: '16px' }}>
      <EventsTable title="Football" showLive={true} events={FOOTBALL_INPLAY} />
      <EventsTable title="Football" showLive={false} events={FOOTBALL_UPCOMING} />
    </div>
  );
}
