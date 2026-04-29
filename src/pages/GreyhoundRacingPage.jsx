import React from 'react';
import { EventsTable } from '../components/EventsTable';

const GR_UPCOMING = [
  { inPlay: false, date: '18-01', time: '6:00 PM', team1: 'Track 1 - Race 5', team2: 'Romford Greyhound', o1b: '2.50', o1bs: '900', o1l: '2.60', o1ls: '250', o2b: '-', o2l: '-', o3b: '-', o3l: '-' },
  { inPlay: false, date: '18-01', time: '6:15 PM', team1: 'Track 2 - Race 3', team2: 'Wimbledon Greyhound', o1b: '1.95', o1bs: '1,400', o1l: '2.00', o1ls: '420', o2b: '-', o2l: '-', o3b: '-', o3l: '-' },
  { inPlay: false, date: '19-01', time: '7:30 PM', team1: 'Track 1 - Race 7', team2: 'Crayford Greyhound', o1b: '3.20', o1bs: '600', o1l: '3.35', o1ls: '180', o2b: '-', o2l: '-', o3b: '-', o3l: '-' },
];

export default function GreyhoundRacingPage() {
  return (
    <div style={{ padding: '8px', paddingBottom: '16px' }}>
      <EventsTable title="Greyhound Racing" showLive={false} events={GR_UPCOMING} />
    </div>
  );
}
