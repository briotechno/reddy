import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Header from './components/Header';
import LeftSidebar from './components/LeftSidebar';
import SportSidebar from './components/SportSidebar';
import Betslip from './components/Betslip';
import MobileBottomNav from './components/MobileBottomNav';
import WhatsAppButton from './components/WhatsAppButton';
import Footer from './components/Footer';

// Main Pages
import HomePage from './pages/HomePage';
import CricketPage from './pages/CricketPage';
import FootballPage from './pages/FootballPage';
import TennisPage from './pages/TennisPage';
import HorseRacingPage from './pages/HorseRacingPage';
import GreyhoundRacingPage from './pages/GreyhoundRacingPage';
import SportsPage from './pages/SportsPage';
import CasinoGamePage from './pages/CasinoGamePage';
import BlogsPage from './pages/BlogsPage';
import ResponsibleGamingPage from './pages/ResponsibleGamingPage';
import RulesPage from './pages/RulesPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import NotFound from './pages/NotFound';

// AfterLogin Pages
import AfterLoginLayout from './pages/AfterLogin/AfterLoginLayout';
import AccountOverview from './pages/AfterLogin/AccountOverview';
import DepositPage from './pages/AfterLogin/DepositPage';
import WithdrawalPage from './pages/AfterLogin/WithdrawalPage';
import BetHistoryPage from './pages/AfterLogin/BetHistoryPage';
import SettingsPage from './pages/AfterLogin/SettingsPage';
import OpenBetsPage from './pages/AfterLogin/OpenBetsPage';
import AccountStatementPage from './pages/AfterLogin/AccountStatementPage';
import ProfitLossPage from './pages/AfterLogin/ProfitLossPage';
import BonusStatementPage from './pages/AfterLogin/BonusStatementPage';
import BonusPage from './pages/AfterLogin/BonusPage';
import CampaignsPage from './pages/AfterLogin/CampaignsPage';
import ChangePasswordPage from './pages/AfterLogin/ChangePasswordPage';
import LosebackPage from './pages/AfterLogin/LosebackPage';
import ReferEarnPage from './pages/AfterLogin/ReferEarnPage';
import TimeSettingPage from './pages/AfterLogin/TimeSettingPage';
import TransactionsPage from './pages/AfterLogin/TransactionsPage';
import TransferStatementPage from './pages/AfterLogin/TransferStatementPage';

// Casino pages that use full-width layout (no left sidebar)
const CASINO_PATHS = ['/live-casino','/slots','/crash-games','/fishing-games','/aura','/aviator','/indian-card-games'];
const SPORT_PATHS = ['/cricket','/football','/tennis','/horse-racing','/greyhound-racing','/basketball','/kabaddi'];

function AppLayout() {
  const location = useLocation();
  const isCasinoPage = CASINO_PATHS.includes(location.pathname);
  const isSportPage = SPORT_PATHS.includes(location.pathname);

  return (
    <div className="app-container">
      <Header />
      <div className="main-layout">
        <div className="content-wrapper">
          {/* Sport pages use sport-specific sidebar; casino pages hide sidebar */}
          {!isCasinoPage && (isSportPage ? <SportSidebar /> : <LeftSidebar />)}
          <main className={`center-content page-container${isCasinoPage ? ' casino-fullwidth' : ''}`}>
            <Routes>
              {/* ── Main Pages ── */}
              <Route path="/" element={<HomePage />} />

              {/* Sports */}
              <Route path="/cricket" element={<CricketPage />} />
              <Route path="/football" element={<FootballPage />} />
              <Route path="/tennis" element={<TennisPage />} />
              <Route path="/horse-racing" element={<HorseRacingPage />} />
              <Route path="/greyhound-racing" element={<GreyhoundRacingPage />} />
              <Route path="/basketball" element={<SportsPage sport="Basketball" />} />
              <Route path="/kabaddi" element={<SportsPage sport="Kabaddi" />} />
              <Route path="/sports" element={<SportsPage sport="All Sports" />} />
              <Route path="/sportsbook" element={<CasinoGamePage pageKey="sportsbook" />} />

              {/* Casino / Games — full-width */}
              <Route path="/live-casino" element={<CasinoGamePage pageKey="live-casino" />} />
              <Route path="/slots" element={<CasinoGamePage pageKey="slots" />} />
              <Route path="/crash-games" element={<CasinoGamePage pageKey="crash-games" />} />
              <Route path="/fishing-games" element={<CasinoGamePage pageKey="fishing-games" />} />
              <Route path="/aura" element={<CasinoGamePage pageKey="aura" />} />
              <Route path="/aviator" element={<CasinoGamePage pageKey="aviator" />} />
              <Route path="/indian-card-games" element={<CasinoGamePage pageKey="indian-card-games" />} />

              {/* Info Pages */}
              <Route path="/blogs" element={<BlogsPage />} />
              <Route path="/blogs-news" element={<BlogsPage />} />
              <Route path="/responsible-gaming" element={<ResponsibleGamingPage />} />
              <Route path="/rules" element={<RulesPage />} />
              <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
              <Route path="/bonus" element={<BonusPage />} />
              <Route path="/download-apk" element={<NotFound />} />

              {/* ── AfterLogin Pages ── */}
              <Route path="/AfterLogin" element={<AfterLoginLayout />}>
                <Route index element={<AccountOverview />} />
                <Route path="Deposit" element={<DepositPage />} />
                <Route path="Withdrawal" element={<WithdrawalPage />} />
                <Route path="BetHistory" element={<BetHistoryPage />} />
                <Route path="OpenBets" element={<OpenBetsPage />} />
                <Route path="AccountStatement" element={<AccountStatementPage />} />
                <Route path="ProfitLoss" element={<ProfitLossPage />} />
                <Route path="BonusStatement" element={<BonusStatementPage />} />
                <Route path="Bonus" element={<BonusPage />} />
                <Route path="Campaigns" element={<CampaignsPage />} />
                <Route path="ChangePassword" element={<ChangePasswordPage />} />
                <Route path="Loseback" element={<LosebackPage />} />
                <Route path="ReferEarn" element={<ReferEarnPage />} />
                <Route path="Settings" element={<SettingsPage />} />
                <Route path="TimeSetting" element={<TimeSettingPage />} />
                <Route path="Transactions" element={<TransactionsPage />} />
                <Route path="TransferStatement" element={<TransferStatementPage />} />
              </Route>

              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Betslip />
        </div>
      </div>
      <Footer />
      <MobileBottomNav />
      <WhatsAppButton />
    </div>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <AppLayout />
    </AuthProvider>
  );
}
