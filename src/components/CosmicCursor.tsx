import { useEffect, useState } from 'react';

export function CosmicCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [trails, setTrails] = useState<Array<{ x: number; y: number; id: number }>>([]);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      // Add trail effect
      const newTrail = { x: e.clientX, y: e.clientY, id: Date.now() };
      setTrails(prev => [...prev.slice(-10), newTrail]);
    };

    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  // Remove old trails
  useEffect(() => {
    const timer = setInterval(() => {
      setTrails(prev => prev.slice(-5));
    }, 100);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <div
        className="cosmic-cursor"
        style={{
          left: mousePosition.x - 10,
          top: mousePosition.y - 10,
        }}
      />
      {trails.map((trail, index) => (
        <div
          key={trail.id}
          className="cursor-trail"
          style={{
            left: trail.x - 2,
            top: trail.y - 2,
            opacity: 0.6 - (index * 0.1),
          }}
        />
      ))}
    </>
  );
}