import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { Layout } from './components/MainComponent/Layout';

// New Pages from src/pages/Main
import HomePage from './pages/Main/HomePage';
import { SportPage } from './pages/Main/SportPage';
import { LiveCasinoPage } from './pages/Main/LiveCasinoPage';
import { CrashGamesPage } from './pages/Main/CrashGamesPage';
import { SlotGamesPage } from './pages/Main/SlotGamesPage';
import { IplPage } from './pages/Main/IplPage';
import { PromotionPage } from './pages/Main/PromotionPage';
import { DepositPage } from './pages/Main/DepositPage';
import { WithdrawPage } from './pages/Main/WithdrawPage';
import { OfferPage } from './pages/Main/OfferPage';
import { AccountStatementPage } from './pages/Main/AccountStatementPage';
import { SettingPage } from './pages/Main/SettingPage';
import { ChangePasswordPage } from './pages/Main/ChangePasswordPage';
import { OpenBetsPage } from './pages/Main/OpenBetsPage';
import { FavouritesPage } from './pages/Main/FavouritesPage';
import { BlogNewsPage } from './pages/Main/BlogNewsPage';
import { ResponsibleGamblingPage } from './pages/Main/ResponsibleGamblingPage';
import { PrivacyPolicyPage } from './pages/Main/PrivacyPolicyPage';
import { ExclusionPolicyPage } from './pages/Main/ExclusionPolicyPage';
import { RulesRegulationsPage } from './pages/Main/RulesRegulationsPage';

function AppLayout() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sport" element={<SportPage />} />
        <Route path="/live-casino" element={<LiveCasinoPage />} />
        <Route path="/crash-games" element={<CrashGamesPage />} />
        <Route path="/slots" element={<SlotGamesPage />} />
        <Route path="/ipl" element={<IplPage />} />
        <Route path="/promotions" element={<PromotionPage />} />
        <Route path="/deposit" element={<DepositPage />} />
        <Route path="/withdraw" element={<WithdrawPage />} />
        <Route path="/offers" element={<OfferPage />} />
        <Route path="/account-statement" element={<AccountStatementPage />} />
        <Route path="/settings" element={<SettingPage />} />
        <Route path="/change-password" element={<ChangePasswordPage />} />
        <Route path="/open-bets" element={<OpenBetsPage />} />
        <Route path="/favourites" element={<FavouritesPage />} />
        <Route path="/blog-news" element={<BlogNewsPage />} />
        <Route path="/responsible-gambling" element={<ResponsibleGamblingPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/exclusion-policy" element={<ExclusionPolicyPage />} />
        <Route path="/rules-regulations" element={<RulesRegulationsPage />} />
        
        {/* Fallback */}
        <Route path="*" element={<HomePage />} />
      </Routes>
    </Layout>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <AppLayout />
    </AuthProvider>
  );
}
