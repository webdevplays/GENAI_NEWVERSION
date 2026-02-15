
import React, { useEffect, useRef } from 'react';

export const MatrixRain: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$+-*/=%\"'#&_(),.;:?!\\|{}<>[]^~ｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝ";
    
    // Multiple layers for 3D effect: [fontSize, speedFactor, opacity]
    const layers = [
      { fontSize: 10, speed: 0.5, opacity: 0.1, drops: [] as number[] },
      { fontSize: 16, speed: 1.0, opacity: 0.3, drops: [] as number[] },
      { fontSize: 24, speed: 1.8, opacity: 0.6, drops: [] as number[] }
    ];

    layers.forEach(layer => {
      const columns = canvas.width / layer.fontSize;
      for (let x = 0; x < columns; x++) {
        layer.drops[x] = Math.random() * -100;
      }
    });

    const draw = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.15)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      layers.forEach(layer => {
        ctx.font = `${layer.fontSize}px monospace`;
        
        for (let i = 0; i < layer.drops.length; i++) {
          const text = characters.charAt(Math.floor(Math.random() * characters.length));
          
          // Purple color: rgba(191, 0, 255, opacity)
          ctx.fillStyle = `rgba(191, 0, 255, ${layer.opacity})`;
          ctx.fillText(text, i * layer.fontSize, layer.drops[i] * layer.fontSize);

          if (layer.drops[i] * layer.fontSize > canvas.height && Math.random() > 0.975) {
            layer.drops[i] = 0;
          }

          layer.drops[i] += layer.speed;
        }
      });
    };

    const interval = setInterval(draw, 33);

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      // Re-init drops for new resolution
      layers.forEach(layer => {
        const columns = canvas.width / layer.fontSize;
        layer.drops = [];
        for (let x = 0; x < columns; x++) {
          layer.drops[x] = Math.random() * -100;
        }
      });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 grayscale-[0.3]"
    />
  );
};
