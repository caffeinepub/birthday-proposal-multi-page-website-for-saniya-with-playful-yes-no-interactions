import { useEffect, useState } from 'react';

export default function KissOverlay() {
  const [kisses, setKisses] = useState<Array<{ id: number; x: number; y: number }>>([]);

  useEffect(() => {
    const newKisses = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
    }));
    setKisses(newKisses);
  }, []);

  return (
    <div className="fixed inset-0 z-50 pointer-events-none overflow-hidden">
      {kisses.map((kiss) => (
        <div
          key={kiss.id}
          className="absolute text-5xl animate-kiss-particle"
          style={{
            left: `${kiss.x}%`,
            top: `${kiss.y}%`,
            animationDelay: `${Math.random() * 0.5}s`,
          }}
        >
          💋
        </div>
      ))}
      
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-9xl animate-kiss-scale">
          💋💕💋
        </div>
      </div>

      {/* Kiss icon from generated assets */}
      <div className="absolute inset-0 flex items-center justify-center">
        <img 
          src="/assets/generated/kiss-icon.dim_512x512.png" 
          alt="Kiss"
          className="w-64 h-64 animate-kiss-bounce opacity-80"
        />
      </div>
    </div>
  );
}
