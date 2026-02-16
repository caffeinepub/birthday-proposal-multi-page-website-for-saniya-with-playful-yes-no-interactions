import { useEffect, useState } from 'react';

export default function CelebrationOverlay() {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; emoji: string }>>([]);

  useEffect(() => {
    const emojis = ['💕', '💖', '💗', '💝', '💓', '🎉', '✨', '🎊', '💐', '🌹'];
    const newParticles = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      emoji: emojis[Math.floor(Math.random() * emojis.length)],
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="fixed inset-0 z-50 pointer-events-none overflow-hidden">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute text-4xl animate-celebration-particle"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            animationDelay: `${Math.random() * 0.5}s`,
          }}
        >
          {particle.emoji}
        </div>
      ))}
      
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-8xl animate-celebration-scale">
          🎉💖🎊
        </div>
      </div>
    </div>
  );
}
