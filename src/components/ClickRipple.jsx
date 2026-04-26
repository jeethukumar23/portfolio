import { useState, useEffect } from 'react';
import './ClickRipple.css';

export default function ClickRipple() {
  const [ripples, setRipples] = useState([]);

  useEffect(() => {
    const handleClick = (e) => {
      const { clientX, clientY } = e;
      const ripple = {
        id: Date.now() + Math.random(),
        x: clientX,
        y: clientY,
      };

      setRipples((prev) => [...prev, ripple]);

      // Remove ripple after animation completes
      setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== ripple.id));
      }, 600);
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return (
    <>
      {ripples.map((ripple) => (
        <div
          key={ripple.id}
          className="click-ripple"
          style={{
            left: `${ripple.x}px`,
            top: `${ripple.y}px`,
          }}
        />
      ))}
    </>
  );
}
