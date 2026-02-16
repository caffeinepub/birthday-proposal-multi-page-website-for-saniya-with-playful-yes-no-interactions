import { useEffect } from 'react';
import { useNavigate } from '@tanstack/react-router';
import RomanticLayout from '@/components/layout/RomanticLayout';
import { Heart, Sparkles, Gift } from 'lucide-react';

export default function Page3() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate({ to: '/page4' });
    }, 4000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <RomanticLayout>
      <div className="flex flex-col items-center justify-center min-h-screen px-4 py-12 text-center relative z-10">
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 md:p-16 shadow-2xl max-w-4xl border-4 border-romantic-primary/20 animate-fade-in">
          <div className="flex justify-center gap-6 mb-8">
            <Gift className="w-12 h-12 text-romantic-accent animate-bounce" />
            <Heart className="w-12 h-12 text-romantic-primary animate-pulse" />
            <Sparkles className="w-12 h-12 text-romantic-accent animate-bounce" />
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-8 text-romantic-primary">
            Happy Birthday My Love! 🎉
          </h1>

          <div className="space-y-6 text-xl md:text-2xl text-romantic-primary/90 leading-relaxed mb-10">
            <p className="animate-fade-in-delay">
              On this special day, I want you to know how incredibly blessed I am to have you in my life. 💖
            </p>
            <p className="animate-fade-in-delay-2">
              May your life be filled with endless happiness, boundless love, radiant smiles, and pure joy. ✨
            </p>
            <p className="animate-fade-in-delay-3">
              You are my world, my everything, my reason to smile every single day. 🌹
            </p>
          </div>

          <div className="bg-romantic-accent/10 rounded-2xl p-6 md:p-8 border-2 border-romantic-accent/30">
            <p className="text-3xl md:text-4xl font-bold text-romantic-accent animate-pulse">
              I love you so much, my ardhangani! ❤️
            </p>
          </div>

          <div className="mt-8 flex justify-center gap-4">
            <span className="text-5xl animate-float">💕</span>
            <span className="text-5xl animate-float-delay">💖</span>
            <span className="text-5xl animate-float">💝</span>
          </div>
        </div>
      </div>
    </RomanticLayout>
  );
}
