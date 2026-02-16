import { type ReactNode } from 'react';

interface RomanticLayoutProps {
  children: ReactNode;
}

export default function RomanticLayout({ children }: RomanticLayoutProps) {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background with hearts pattern */}
      <div 
        className="fixed inset-0 z-0 opacity-30"
        style={{
          backgroundImage: 'url(/assets/generated/bg-hearts-seamless.dim_1920x1080.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'repeat',
        }}
      />
      
      {/* Gradient overlay */}
      <div className="fixed inset-0 z-0 bg-gradient-to-br from-romantic-bg via-romantic-bg-secondary to-romantic-bg" />
      
      {/* Floating hearts decoration */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="heart-float heart-1">💕</div>
        <div className="heart-float heart-2">💖</div>
        <div className="heart-float heart-3">💗</div>
        <div className="heart-float heart-4">💝</div>
        <div className="heart-float heart-5">💓</div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>

      {/* Footer */}
      <footer className="relative z-10 py-6 text-center text-romantic-primary/60 text-sm">
        <p>© 2026. Built with <span className="text-romantic-accent">💖</span> using <a href="https://caffeine.ai" target="_blank" rel="noopener noreferrer" className="hover:text-romantic-accent transition-colors underline">caffeine.ai</a></p>
      </footer>
    </div>
  );
}
