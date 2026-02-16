import { useState } from 'react';
import { useNavigate } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import RomanticLayout from '@/components/layout/RomanticLayout';
import KissOverlay from '@/components/effects/KissOverlay';
import { Sparkles } from 'lucide-react';

export default function Page2() {
  const [showKiss, setShowKiss] = useState(false);
  const navigate = useNavigate();

  const handleAnswer = () => {
    setShowKiss(true);
    setTimeout(() => {
      navigate({ to: '/page3' });
    }, 1500);
  };

  return (
    <RomanticLayout>
      {showKiss && <KissOverlay />}
      
      <div className="flex flex-col items-center justify-center min-h-screen px-4 py-12 text-center relative z-10">
        <div className="mb-8 animate-float">
          <img 
            src="/assets/generated/kiss-icon.dim_512x512.png" 
            alt="Kiss"
            className="w-32 h-32 md:w-40 md:h-40 mx-auto drop-shadow-2xl"
          />
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl max-w-3xl mb-12 border-4 border-romantic-primary/20">
          <Sparkles className="w-16 h-16 mx-auto mb-6 text-romantic-accent animate-pulse" />
          
          <p className="text-2xl md:text-3xl font-semibold text-romantic-primary mb-10 leading-relaxed">
            In your point of view, your boyfriend is really hot, cute, and sexy? 😌✨
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={handleAnswer}
              size="lg"
              className="text-2xl px-12 py-8 rounded-full bg-romantic-accent hover:bg-romantic-accent/90 text-white shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 font-bold"
            >
              Yes! 💕
            </Button>
            <Button
              onClick={handleAnswer}
              size="lg"
              className="text-2xl px-12 py-8 rounded-full bg-romantic-primary hover:bg-romantic-primary/90 text-white shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 font-bold"
            >
              Obviously! 😘
            </Button>
          </div>
        </div>

        <div className="text-8xl animate-bounce-slow">
          💋
        </div>
      </div>
    </RomanticLayout>
  );
}
