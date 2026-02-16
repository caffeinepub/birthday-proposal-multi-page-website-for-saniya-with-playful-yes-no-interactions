import { useState } from 'react';
import { useNavigate } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import RomanticLayout from '@/components/layout/RomanticLayout';
import CelebrationOverlay from '@/components/effects/CelebrationOverlay';
import { Heart } from 'lucide-react';

const noTexts = [
  'No',
  'Really? 🥺',
  'Are you sure? 💔',
  'Think again... 💖',
  'Please reconsider 🌹',
  'Last chance! 💕',
  'You sure about that? 😢',
  'My heart is breaking... 💔',
];

export default function Page1() {
  const [noClickCount, setNoClickCount] = useState(0);
  const [showCelebration, setShowCelebration] = useState(false);
  const navigate = useNavigate();

  const handleYes = () => {
    setShowCelebration(true);
    setTimeout(() => {
      navigate({ to: '/page2' });
    }, 1500);
  };

  const handleNo = () => {
    setNoClickCount((prev) => (prev + 1) % noTexts.length);
  };

  return (
    <RomanticLayout>
      {showCelebration && <CelebrationOverlay />}
      
      <div className="flex flex-col items-center justify-center min-h-screen px-4 py-12 text-center relative z-10">
        <div className="mb-8 animate-float">
          <img 
            src="/assets/generated/cake-kawaii.dim_512x512.png" 
            alt="Birthday Cake"
            className="w-32 h-32 md:w-40 md:h-40 mx-auto drop-shadow-2xl"
          />
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-4 text-romantic-primary animate-fade-in">
          Happy Birthday
        </h1>
        <h2 className="text-6xl md:text-8xl font-bold mb-8 text-romantic-accent animate-fade-in-delay">
          Saniya 🎂
        </h2>

        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl max-w-2xl mb-12 border-4 border-romantic-primary/20">
          <Heart className="w-16 h-16 mx-auto mb-6 text-romantic-accent animate-pulse" />
          <p className="text-3xl md:text-4xl font-semibold text-romantic-primary mb-8">
            Will you marry me? 💍
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={handleYes}
              size="lg"
              className="text-2xl px-12 py-8 rounded-full bg-romantic-accent hover:bg-romantic-accent/90 text-white shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 font-bold"
            >
              Yes! 💖
            </Button>
            <Button
              onClick={handleNo}
              size="lg"
              variant="outline"
              className="text-2xl px-12 py-8 rounded-full border-4 border-romantic-primary text-romantic-primary hover:bg-romantic-primary/10 shadow-xl transform hover:scale-105 transition-all duration-300 font-bold"
            >
              {noTexts[noClickCount]}
            </Button>
          </div>
        </div>

        <div className="flex gap-4 animate-bounce-slow">
          <img 
            src="/assets/generated/hearts-stickers.dim_512x512.png" 
            alt="Hearts"
            className="w-16 h-16 opacity-80"
          />
        </div>
      </div>
    </RomanticLayout>
  );
}
