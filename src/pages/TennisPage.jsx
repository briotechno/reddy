import React from 'react';
import { EventsTable } from '../components/EventsTable';

const TENNIS_INPLAY = [
  { inPlay: true, score: '6-4, 3-2', over: 'Set 2', team1: 'Djokovic N.', team2: 'Alcaraz C.', o1b: '1.52', o1bs: '3,200', o1l: '1.55', o1ls: '780', o2b: '-', o2l: '-', o3b: '2.62', o3bs: '1,500', o3l: '2.70', o3ls: '380' },
];

const TENNIS_UPCOMING = [
  { inPlay: false, date: '19-01', time: '2:00 PM', team1: 'Sinner J.', team2: 'Medvedev D.', o1b: '1.80', o1bs: '4,500', o1l: '1.84', o1ls: '1,200', o2b: '-', o2l: '-', o3b: '2.10', o3bs: '2,800', o3l: '2.16', o3ls: '700' },
  { inPlay: false, date: '19-01', time: '5:00 PM', team1: 'Swiatek I.', team2: 'Sabalenka A.', o1b: '1.68', o1bs: '3,800', o1l: '1.72', o1ls: '950', o2b: '-', o2l: '-', o3b: '2.30', o3bs: '2,000', o3l: '2.36', o3ls: '550' },
  { inPlay: false, date: '20-01', time: '11:00 AM', team1: 'Federer R.', team2: 'Nadal R.', o1b: '1.95', o1bs: '5,000', o1l: '1.98', o1ls: '1,400', o2b: '-', o2l: '-', o3b: '1.95', o3bs: '4,200', o3l: '1.99', o3ls: '1,100' },
  { inPlay: false, date: '20-01', time: '3:30 PM', team1: 'Zverev A.', team2: 'Tsitsipas S.', o1b: '1.75', o1bs: '2,900', o1l: '1.78', o1ls: '720', o2b: '-', o2l: '-', o3b: '2.18', o3bs: '1,700', o3l: '2.24', o3ls: '450' },
];

export default function TennisPage() {
  return (
    <div style={{ padding: '8px', paddingBottom: '16px' }}>
      <EventsTable title="Tennis" showLive={true} events={TENNIS_INPLAY} />
      <EventsTable title="Tennis" showLive={false} events={TENNIS_UPCOMING} />
    </div>
  );
}
