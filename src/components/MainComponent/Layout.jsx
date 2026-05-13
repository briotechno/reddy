import React from 'react';
import { Header } from './Header';
import { LeftComponent } from './LeftComponent';
import { BetSlip } from './BetSlip';

export const Layout = ({ children }) => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
      backgroundColor: '#18181b',
      color: '#ffffff',
      overflowX: 'hidden'
    }}>
      {/* Top Header */}
      <Header />

      <div style={{
        display: 'flex',
        flex: 1,
        width: '100%',
        maxWidth: '1600px',
        margin: '0 auto',
        position: 'relative'
      }}>
        {/* Left Component — Hidden on Tablet/Mobile */}
        <div className="d-none d-lg-block" style={{ 
          flex: 2,
          flexShrink: 0,
          // borderRight: '1px solid #333',
          paddingTop: '16px',
          paddingBottom: '16px',
          paddingLeft: '16px',
          position: 'sticky',
          top: '110px', // Header height + some space
          height: 'calc(100vh - 110px)',
          overflowY: 'auto'
        }}>
          <LeftComponent />
        </div>

        {/* Middle Content */}
        <main style={{
          flex: 6,
          padding: '20px',
          minWidth: 0 // Prevent flex item from overflowing
        }}>
          {children}
        </main>

        {/* Right BetSlip — Hidden on Tablet/Mobile */}
        <div className="d-none d-lg-block" style={{
          flex: 3,
          paddingTop: '16px',
          paddingBottom: '16px',
          paddingRight: '16px',
          flexShrink: 0,
          // borderLeft: '1px solid #333'
        }}>
          <BetSlip />
        </div>
      </div>
    </div>
  );
};
