import React from 'react';
import { EventsTable } from '../components/EventsTable';

const HORSE_INPLAY = [
  { inPlay: true, score: 'R3', over: 'Running', team1: 'Thunderbolt', team2: 'Golden Arrow', o1b: '2.80', o1bs: '1,200', o1l: '2.90', o1ls: '380', o2b: '-', o2l: '-', o3b: '-', o3l: '-' },
];

const HORSE_UPCOMING = [
  { inPlay: false, date: '18-01', time: '2:30 PM', team1: 'Royal Flush', team2: 'Desert Storm', o1b: '3.10', o1bs: '800', o1l: '3.25', o1ls: '220', o2b: '-', o2l: '-', o3b: '-', o3l: '-' },
  { inPlay: false, date: '18-01', time: '4:00 PM', team1: 'Silver Bullet', team2: 'Black Magic', o1b: '1.90', o1bs: '2,100', o1l: '1.95', o1ls: '580', o2b: '-', o2l: '-', o3b: '-', o3l: '-' },
  { inPlay: false, date: '19-01', time: '1:00 PM', team1: 'Iron Duke', team2: 'Star Runner', o1b: '2.40', o1bs: '1,500', o1l: '2.48', o1ls: '400', o2b: '-', o2l: '-', o3b: '-', o3l: '-' },
];

export default function HorseRacingPage() {
  return (
    <div style={{ padding: '8px', paddingBottom: '16px' }}>
      <EventsTable title="Horse Racing" showLive={true} events={HORSE_INPLAY} />
      <EventsTable title="Horse Racing" showLive={false} events={HORSE_UPCOMING} />
    </div>
  );
}
