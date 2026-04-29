// Navigation links data for top nav bar and mobile sidebar

export const topNavLinks = [
  { title: 'Home', href: '/', icon: 'home' },
  { title: 'SportsBook(80+)', href: '/sportsbook', icon: 'trophy' },
  { title: 'Cricket', href: '/cricket', icon: 'cricket' },
  { title: 'Football', href: '/football', icon: 'football' },
  { title: 'Tennis', href: '/tennis', icon: 'tennis' },
  { title: 'Horse Racing', href: '/horse-racing', icon: 'horse' },
  { title: 'Greyhound Racing', href: '/greyhound-racing', icon: 'dog' },
  { title: 'Aura', href: '/aura', icon: 'aura' },
  { title: 'Live Casino', href: '/live-casino', icon: 'casino' },
  { title: 'Slots', href: '/slots', icon: 'slots' },
  { title: 'crash-games', href: '/crash-games', icon: 'crash' },
  { title: 'fishing-games', href: '/fishing-games', icon: 'fish' },
];

export const sidebarLinks = [
  { category: 'QUICK ACCESS', items: [
    { title: 'Promos & Bonus', href: '/bonus', icon: 'bi-gift-fill' },
  ]},
  { category: 'SPORTS', items: [
    { title: 'Cricket', href: '/cricket', icon: 'bi-dribbble' },
    { title: 'Football', href: '/football', icon: 'bi-dribbble' },
    { title: 'Tennis', href: '/tennis', icon: 'bi-dribbble' },
    { title: 'Horse Racing', href: '/horse-racing', icon: 'bi-dribbble' },
    { title: 'Greyhound Racing', href: '/greyhound-racing', icon: 'bi-dribbble' },
    { title: 'Basketball', href: '/basketball', icon: 'bi-dribbble' },
    { title: 'Kabaddi', href: '/kabaddi', icon: 'bi-dribbble' },
  ]},
  { category: 'CASINO', items: [
    { title: 'Aviator', href: '/aviator', icon: 'bi-airplane-fill' },
    { title: 'Indian Card Games', href: '/aura', icon: 'bi-suit-heart-fill' },
    { title: 'Sportsbook', href: '/sportsbook', icon: 'bi-trophy-fill' },
    { title: 'Live Casino', href: '/live-casino', icon: 'bi-dice-5-fill' },
    { title: 'Slot Games', href: '/slots', icon: 'bi-grid-3x3-gap-fill' },
    { title: 'Crash Games', href: '/crash-games', icon: 'bi-lightning-charge-fill' },
  ]},
  { category: 'OTHERS', items: [
    { title: 'Offers', href: '/bonus', icon: 'bi-gift' },
    { title: 'Download APK', href: '/download-apk', icon: 'bi-android2' },
    { title: 'Blogs & News', href: '/blogs', icon: 'bi-newspaper' },
    { title: 'Responsible Gaming', href: '/responsible-gaming', icon: 'bi-shield-check' },
    { title: 'Privacy Policy', href: '/privacy-policy', icon: 'bi-lock' },
    { title: 'Rules & Regulations', href: '/rules', icon: 'bi-file-text' },
  ]},
];

export const mobileBottomNavLinks = [
  { title: 'Home', href: '/', icon: 'bi-house-fill' },
  { title: 'Sports', href: '/cricket', icon: 'bi-trophy-fill' },
  { title: 'Casino', href: '/live-casino', icon: 'bi-dice-5-fill' },
  { title: 'Slots', href: '/slots', icon: 'bi-grid-3x3-gap-fill' },
  { title: 'Account', href: '/AfterLogin', icon: 'bi-person-fill' },
];
