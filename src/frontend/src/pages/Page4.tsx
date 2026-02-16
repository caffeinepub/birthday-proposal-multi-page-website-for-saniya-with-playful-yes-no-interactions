import RomanticLayout from '@/components/layout/RomanticLayout';
import { Heart, Sparkles } from 'lucide-react';

export default function Page4() {
  return (
    <RomanticLayout>
      <div className="flex flex-col items-center justify-center min-h-screen px-4 py-12 text-center relative z-10">
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 md:p-16 shadow-2xl max-w-3xl border-4 border-romantic-primary/20 animate-fade-in">
          <div className="flex justify-center gap-6 mb-8">
            <Heart className="w-16 h-16 text-romantic-accent animate-pulse" />
            <Sparkles className="w-16 h-16 text-romantic-primary animate-bounce" />
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-10 text-romantic-primary">
            Do you really like this?? 🥹
          </h2>

          <div className="bg-romantic-accent/10 rounded-2xl p-8 md:p-12 border-2 border-romantic-accent/30 mb-8">
            <p className="text-3xl md:text-4xl font-bold text-romantic-accent mb-4">
              Never leave me 🥺❤️
            </p>
            <div className="flex justify-center gap-3 text-5xl mt-6">
              <span className="animate-bounce">💖</span>
              <span className="animate-bounce-delay">💕</span>
              <span className="animate-bounce">💗</span>
            </div>
          </div>

          <div className="text-6xl animate-pulse">
            😭💕
          </div>

          <p className="mt-8 text-xl md:text-2xl text-romantic-primary/80 italic">
            You mean everything to me...
          </p>
        </div>
      </div>
    </RomanticLayout>
  );
}
