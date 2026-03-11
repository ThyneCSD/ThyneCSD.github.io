import { useEffect, useRef } from 'react';

export default function Starfield() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;
    const particles = []; // Explosion particles on click

    const setDimensions = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setDimensions();
    window.addEventListener('resize', setDimensions);

    // Create stars
    const stars = Array.from({ length: 300 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 1.8,
      speedX: (Math.random() - 0.5) * 0.1,
      speedY: (Math.random() - 0.5) * 0.1,
      baseOpacity: Math.random(),
      flickerSpeed: Math.random() * 0.04,
    }));

    // Mouse parallax
    let mouseX = canvas.width / 2;
    let mouseY = canvas.height / 2;
    let targetX = mouseX;
    let targetY = mouseY;

    const handleMouseMove = (e) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };

    // Click: find nearby stars and explode them
    const handleClick = (e) => {
      const clickX = e.clientX;
      const clickY = e.clientY;
      const RADIUS = 60; // Click radius to catch stars

      stars.forEach(star => {
        const dx = (canvas.width / 2 - mouseX) * (star.size * 0.02);
        const dy = (canvas.height / 2 - mouseY) * (star.size * 0.02);
        const sx = star.x + dx;
        const sy = star.y + dy;
        if (Math.hypot(sx - clickX, sy - clickY) < RADIUS) {
          // Spawn explosion particles from this star
          const colors = ['#60a5fa', '#a78bfa', '#34d399', '#f472b6', '#fbbf24'];
          const color = colors[Math.floor(Math.random() * colors.length)];
          for (let i = 0; i < 14; i++) {
            const angle = (i / 14) * Math.PI * 2;
            const speed = 1 + Math.random() * 3;
            particles.push({
              x: sx, y: sy,
              vx: Math.cos(angle) * speed,
              vy: Math.sin(angle) * speed,
              life: 1,
              color,
              size: 1 + Math.random() * 2,
            });
          }
          // Teleport the star to a new random position after exploding
          star.x = Math.random() * canvas.width;
          star.y = Math.random() * canvas.height;
        }
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('click', handleClick);

    const render = () => {
      animId = requestAnimationFrame(render);
      mouseX += (targetX - mouseX) * 0.05;
      mouseY += (targetY - mouseY) * 0.05;

      ctx.fillStyle = '#020617';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw stars with parallax
      stars.forEach(star => {
        star.x += star.speedX;
        star.y += star.speedY;
        if (star.x > canvas.width) star.x = 0;
        if (star.x < 0) star.x = canvas.width;
        if (star.y > canvas.height) star.y = 0;
        if (star.y < 0) star.y = canvas.height;

        const dx = (canvas.width / 2 - mouseX) * (star.size * 0.02);
        const dy = (canvas.height / 2 - mouseY) * (star.size * 0.02);
        const opacity = star.baseOpacity + Math.sin(Date.now() * star.flickerSpeed) * 0.3;

        ctx.beginPath();
        ctx.arc(star.x + dx, star.y + dy, star.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(200, 220, 255, ${Math.max(0, opacity)})`;
        ctx.fill();
      });

      // Draw explosion particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.vx *= 0.96;
        p.vy *= 0.96;
        p.life -= 0.025;
        if (p.life <= 0) { particles.splice(i, 1); continue; }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * p.life, 0, Math.PI * 2);
        ctx.fillStyle = p.color + Math.floor(p.life * 255).toString(16).padStart(2, '0');
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 6;
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', setDimensions);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-50 pointer-events-none cursor-crosshair"
      style={{ pointerEvents: 'none' }}
    />
  );
}
