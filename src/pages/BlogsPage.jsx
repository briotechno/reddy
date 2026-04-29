import React from 'react';
import { Link } from 'react-router-dom';

const BLOG_POSTS = [
  { id: 1, category: 'Cricket', title: 'IPL 2025: Top 5 Players to Watch This Season', date: 'Jan 14, 2026', readTime: '5 min', excerpt: 'With IPL 2025 just around the corner, we break down the top performers and dark horses to bet on this season.' },
  { id: 2, category: 'Football', title: 'Premier League Title Race 2025: Who Will Win?', date: 'Jan 13, 2026', readTime: '7 min', excerpt: 'A comprehensive analysis of the Premier League title race, with odds and predictions for the remaining games.' },
  { id: 3, category: 'Tennis', title: 'Australian Open 2025: Betting Tips and Predictions', date: 'Jan 12, 2026', readTime: '6 min', excerpt: 'Our expert analysis of the Australian Open 2025, including who we think will take home the Grand Slam title.' },
  { id: 4, category: 'Casino', title: 'Top 10 Live Casino Games to Play in 2025', date: 'Jan 11, 2026', readTime: '4 min', excerpt: 'Discover the most exciting live casino games trending right now, from Lightning Roulette to Crazy Time.' },
  { id: 5, category: 'Tips', title: 'Bankroll Management: A Beginner\'s Guide', date: 'Jan 10, 2026', readTime: '8 min', excerpt: 'Learn how to manage your betting bankroll effectively to maximize profits and minimize losses.' },
  { id: 6, category: 'Cricket', title: 'India vs Australia: T20 Series Preview', date: 'Jan 9, 2026', readTime: '5 min', excerpt: 'Complete preview of the upcoming India vs Australia T20 series, with match predictions and best bets.' },
  { id: 7, category: 'Strategy', title: 'Understanding Odds: Decimal vs Fractional vs American', date: 'Jan 8, 2026', readTime: '6 min', excerpt: 'A complete guide to understanding different odds formats and how to calculate potential winnings.' },
  { id: 8, category: 'Horse Racing', title: 'Royal Ascot 2025: Early Runners and Riders', date: 'Jan 7, 2026', readTime: '5 min', excerpt: 'Early selections and ante-post tips for the prestigious Royal Ascot 2025 meeting.' },
];

const CAT_COLORS = {
  Cricket: '#22c55e', Football: '#3b82f6', Tennis: '#f59e0b',
  Casino: '#ec4899', Tips: '#8b5cf6', Strategy: '#6366f1',
  'Horse Racing': '#f97316',
};

export default function BlogsPage() {
  const [activeCategory, setActiveCategory] = React.useState('All');
  const categories = ['All', ...new Set(BLOG_POSTS.map(p => p.category))];

  const filtered = activeCategory === 'All' ? BLOG_POSTS : BLOG_POSTS.filter(p => p.category === activeCategory);

  return (
    <div style={{ padding: '16px', paddingBottom: '24px' }}>
      <h1 style={{ fontSize: '24px', fontWeight: '800', color: 'var(--text-primary)', marginBottom: '4px' }}>Blogs & News</h1>
      <p style={{ color: 'var(--text-muted)', fontSize: '13px', marginBottom: '20px' }}>Latest betting tips, predictions, and sports news</p>

      {/* Category Filter */}
      <div style={{ display: 'flex', gap: '6px', overflowX: 'auto', marginBottom: '20px' }} className="no-scrollbar">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            style={{
              background: activeCategory === cat ? 'var(--brand-primary)' : 'var(--bg-secondary)',
              color: activeCategory === cat ? '#fff' : 'var(--text-secondary)',
              border: `1px solid ${activeCategory === cat ? 'var(--brand-primary)' : 'var(--border-primary)'}`,
              borderRadius: '20px', padding: '5px 14px',
              fontSize: '12px', fontWeight: '600', cursor: 'pointer',
              whiteSpace: 'nowrap', transition: 'all 0.2s',
            }}
          >{cat}</button>
        ))}
      </div>

      {/* Blog Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '16px' }}>
        {filtered.map((post) => (
          <div key={post.id} className="content-card" style={{ cursor: 'pointer', transition: 'transform 0.2s' }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
          >
            {/* Image area */}
            <div style={{
              aspectRatio: '16/8', background: `linear-gradient(135deg, ${CAT_COLORS[post.category] || '#e58c1f'}20, var(--bg-tertiary))`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              borderBottom: '1px solid var(--border-primary)',
            }}>
              <i className="bi bi-newspaper" style={{ fontSize: '40px', color: CAT_COLORS[post.category] || 'var(--brand-primary)', opacity: 0.6 }}></i>
            </div>
            <div style={{ padding: '14px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <span style={{
                  background: `${CAT_COLORS[post.category] || 'var(--brand-primary)'}20`,
                  color: CAT_COLORS[post.category] || 'var(--brand-primary)',
                  fontSize: '10px', fontWeight: '700', padding: '2px 8px', borderRadius: '4px',
                }}>{post.category}</span>
                <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>{post.date}</span>
                <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>· {post.readTime} read</span>
              </div>
              <h3 style={{ margin: '0 0 8px', fontSize: '14px', fontWeight: '700', color: 'var(--text-primary)', lineHeight: 1.4 }}>{post.title}</h3>
              <p style={{ margin: '0 0 12px', fontSize: '12px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{post.excerpt}</p>
              <Link to={`/blogs/${post.id}`} style={{ color: 'var(--brand-primary)', fontSize: '12px', fontWeight: '600', textDecoration: 'none' }}>
                Read More <i className="bi bi-arrow-right-short"></i>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
