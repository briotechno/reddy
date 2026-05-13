import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';

export const BetSlip = () => {
  const { isLoggedIn, user } = useAuth();
  const [activeTab, setActiveTab] = useState('betslip');
  const [isBalanceExpanded, setIsBalanceExpanded] = useState(false);

  return (
    <div style={{
      background: '#27272a',
      borderRadius: '12px',
      border: '1px solid #545454',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      padding: '12px',
      gap: '12px'
    }}>
      {/* User Balance Section - Only visible if logged in */}
      {isLoggedIn && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
          {/* Header Bar */}
          <div 
            onClick={() => setIsBalanceExpanded(!isBalanceExpanded)}
            style={{ 
              background: 'linear-gradient(90deg, #f59e0b, #fb923c)',
              borderRadius: '8px',
              padding: '10px 15px',
              cursor: 'pointer',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontSize: '10px', fontWeight: '800', color: '#000', opacity: 0.8, letterSpacing: '0.5px', textTransform: 'uppercase' }}>
                Available Credit
              </span>
              <span style={{ fontSize: '18px', fontWeight: '700', color: '#000' }}>
                ₹ 585
              </span>
            </div>
            <i className={`bi bi-chevron-${isBalanceExpanded ? 'up' : 'down'}`} style={{ color: '#000', fontSize: '18px' }}></i>
          </div>

          {/* Expandable Details */}
          <div style={{
            maxHeight: isBalanceExpanded ? '200px' : '0',
            overflow: 'hidden',
            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
            opacity: isBalanceExpanded ? 1 : 0,
            background: 'rgba(0,0,0,0.2)',
            borderRadius: '8px',
            marginTop: isBalanceExpanded ? '4px' : '0'
          }}>
            <div style={{ padding: '8px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div style={{ 
                background: '#e5e7eb', 
                borderRadius: '6px', 
                padding: '8px 12px',
                border: '1px solid #444'
              }}>
                <span style={{ display: 'block', fontSize: '10px', color: '#374151', fontWeight: '700', textTransform: 'uppercase' }}>Balance</span>
                <span style={{ fontSize: '16px', color: '#111827', fontWeight: '700' }}>₹ 585</span>
              </div>
              
              <div style={{ display: 'flex', gap: '8px' }}>
                <div style={{ 
                  flex: 1,
                  background: '#e5e7eb', 
                  borderRadius: '6px', 
                  padding: '8px 12px',
                  border: '1px solid #444'
                }}>
                  <span style={{ display: 'block', fontSize: '10px', color: '#374151', fontWeight: '700', textTransform: 'uppercase' }}>Free Cash</span>
                  <span style={{ fontSize: '16px', color: '#111827', fontWeight: '700' }}>₹ 0.00</span>
                </div>
                <div style={{ 
                  flex: 1,
                  background: '#e5e7eb', 
                  borderRadius: '6px', 
                  padding: '8px 12px',
                  border: '1px solid #444'
                }}>
                  <span style={{ display: 'block', fontSize: '10px', color: '#374151', fontWeight: '700', textTransform: 'uppercase' }}>Net Exposure</span>
                  <span style={{ fontSize: '16px', color: '#111827', fontWeight: '700' }}>₹ 0.00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tabs */}
      <div style={{
        display: 'flex',
        background: 'rgba(0,0,0,0.2)',
        borderRadius: '8px',
        padding: '4px',
        border: '1px solid rgba(255,255,255,0.05)'
      }}>
        <button
          onClick={() => setActiveTab('betslip')}
          style={{
            flex: 1,
            padding: '8px 0',
            borderRadius: '6px',
            border: 'none',
            fontSize: '13px',
            fontWeight: '600',
            background: activeTab === 'betslip' ? 'linear-gradient(90deg, #f59e0b, #fb923c)' : 'transparent',
            color: activeTab === 'betslip' ? '#000' : '#fff',
            transition: 'all 0.2s ease',
            cursor: 'pointer'
          }}
        >
          Betslip
        </button>
        <button
          onClick={() => setActiveTab('openbets')}
          style={{
            flex: 1,
            padding: '8px 0',
            borderRadius: '6px',
            border: 'none',
            fontSize: '13px',
            fontWeight: '600',
            background: activeTab === 'openbets' ? 'linear-gradient(90deg, #f59e0b, #fb923c)' : 'transparent',
            color: activeTab === 'openbets' ? '#000' : '#fff',
            transition: 'all 0.2s ease',
            cursor: 'pointer'
          }}
        >
          Open Bets
        </button>
      </div>

      {/* Content Area */}
      <div style={{
        flex: 1,
        background: '#0a0a0a',
        borderRadius: '10px',
        border: '1px solid #444',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '40px 20px',
        textAlign: 'center'
      }}>
        {activeTab === 'betslip' ? (
          <>
            <div style={{
              width: '60px',
              height: '60px',
              borderRadius: '50%',
              background: 'rgba(245, 158, 11, 0.1)',
              border: '2px solid rgba(245, 158, 11, 0.3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '20px'
            }}>
              <span style={{ fontSize: '24px', color: '#f59e0b', fontWeight: 'bold' }}>!</span>
            </div>

            <h5 style={{ color: '#f59e0b', fontSize: '18px', fontWeight: '700', marginBottom: '10px' }}>
              No Event Selected
            </h5>

            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '13px', lineHeight: '1.5', margin: 0 }}>
              Click on any odds to add a bet to your betslip.
            </p>
          </>
        ) : (
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '14px', lineHeight: '1.5', margin: 0 }}>
            Please login to see your open bets. <span style={{ color: '#f59e0b', fontWeight: 'bold', cursor: 'pointer', textDecoration: 'underline' }}>Login</span>
          </p>
        )}
      </div>

      {/* Footer / Empty Space Fill */}
      <div style={{ height: '100px' }}></div>
    </div>
  );
};
