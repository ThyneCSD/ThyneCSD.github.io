import { useEffect, useRef } from "react";

// A calm, ambient space drifting widget - no game over, no score pressure.
// Asteroids drift slowly, ship floats gently. Click/hover to interact.
export default function AsteroidGame() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let W = canvas.width = canvas.offsetWidth;
    let H = canvas.height = canvas.offsetHeight;

    const resize = () => {
      W = canvas.width = canvas.offsetWidth;
      H = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener("resize", resize);

    // Ship state — starts centered, drifts slowly
    const ship = {
      x: W / 2, y: H / 2,
      angle: -Math.PI / 2,
      vx: 0.3, vy: -0.1,
    };
    const bullets = [];
    const particles = [];

    // Sparse, slow asteroids
    const asteroids = Array.from({ length: 6 }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      radius: 14 + Math.random() * 28,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      angle: 0,
      rot: (Math.random() - 0.5) * 0.008,
      vertices: Array.from({ length: 8 }, () => 0.75 + Math.random() * 0.5),
    }));

    // Mouse tracking for gentle steering
    let mouse = { x: W / 2, y: H / 2 };
    const onMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    const onClick = () => {
      // Fire a small gentle bullet
      bullets.push({
        x: ship.x + Math.cos(ship.angle) * 14,
        y: ship.y + Math.sin(ship.angle) * 14,
        vx: Math.cos(ship.angle) * 3 + ship.vx,
        vy: Math.sin(ship.angle) * 3 + ship.vy,
        life: 90,
      });
    };
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("click", onClick);

    const spawnParticle = (x, y) => {
      for (let i = 0; i < 5; i++) {
        const a = Math.random() * Math.PI * 2;
        const spd = 0.5 + Math.random() * 1.5;
        particles.push({ x, y, vx: Math.cos(a) * spd, vy: Math.sin(a) * spd, life: 1 });
      }
    };

    let animId;
    const loop = () => {
      animId = requestAnimationFrame(loop);

      // Dark, slightly transparent fill for gentle trail effect
      ctx.fillStyle = "rgba(2, 6, 23, 0.5)";
      ctx.fillRect(0, 0, W, H);

      // Gently steer ship toward mouse
      const targetAngle = Math.atan2(mouse.y - ship.y, mouse.x - ship.x);
      let dAngle = targetAngle - ship.angle;
      while (dAngle > Math.PI) dAngle -= Math.PI * 2;
      while (dAngle < -Math.PI) dAngle += Math.PI * 2;
      ship.angle += dAngle * 0.02; // very gentle turn

      // Very gentle thrust toward mouse when hovering
      const dist = Math.hypot(mouse.x - ship.x, mouse.y - ship.y);
      if (dist > 30) {
        ship.vx += Math.cos(ship.angle) * 0.02;
        ship.vy += Math.sin(ship.angle) * 0.02;
      }
      // Light damping — ship drifts lazily
      ship.vx *= 0.992;
      ship.vy *= 0.992;
      ship.x = (ship.x + ship.vx + W) % W;
      ship.y = (ship.y + ship.vy + H) % H;

      // Draw ship
      ctx.save();
      ctx.translate(ship.x, ship.y);
      ctx.rotate(ship.angle);
      ctx.strokeStyle = "rgba(16,185,129,0.8)";
      ctx.lineWidth = 1.5;
      ctx.shadowColor = "#10b981";
      ctx.shadowBlur = 8;
      ctx.beginPath();
      ctx.moveTo(12, 0);
      ctx.lineTo(-8, -6);
      ctx.lineTo(-5, 0);
      ctx.lineTo(-8, 6);
      ctx.closePath();
      ctx.stroke();
      ctx.restore();

      // Bullets
      for (let i = bullets.length - 1; i >= 0; i--) {
        const b = bullets[i];
        b.x = (b.x + b.vx + W) % W;
        b.y = (b.y + b.vy + H) % H;
        b.life--;
        if (b.life <= 0) { bullets.splice(i, 1); continue; }
        const alpha = b.life / 90;
        ctx.beginPath();
        ctx.arc(b.x, b.y, 1.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(16,185,129,${alpha})`;
        ctx.shadowColor = "#10b981";
        ctx.shadowBlur = 6;
        ctx.fill();
      }

      // Asteroids
      for (const a of asteroids) {
        a.x = (a.x + a.vx + W) % W;
        a.y = (a.y + a.vy + H) % H;
        a.angle += a.rot;

        ctx.save();
        ctx.translate(a.x, a.y);
        ctx.rotate(a.angle);
        ctx.beginPath();
        const n = a.vertices.length;
        for (let i = 0; i < n; i++) {
          const ang = (i / n) * Math.PI * 2;
          const r = a.radius * a.vertices[i];
          i === 0 ? ctx.moveTo(Math.cos(ang) * r, Math.sin(ang) * r)
                  : ctx.lineTo(Math.cos(ang) * r, Math.sin(ang) * r);
        }
        ctx.closePath();
        ctx.strokeStyle = "rgba(148,163,184,0.25)";
        ctx.lineWidth = 1;
        ctx.stroke();
        ctx.restore();

        // Gentle bullet-asteroid interaction (no game over, just fade)
        for (let j = bullets.length - 1; j >= 0; j--) {
          const b = bullets[j];
          if (Math.hypot(b.x - a.x, b.y - a.y) < a.radius) {
            spawnParticle(a.x, a.y);
            bullets.splice(j, 1);
            // Nudge asteroid gently instead of destroying it
            a.vx += (Math.random() - 0.5) * 0.3;
            a.vy += (Math.random() - 0.5) * 0.3;
            break;
          }
        }
      }

      // Particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx; p.y += p.vy; p.life -= 0.03;
        if (p.life <= 0) { particles.splice(i, 1); continue; }
        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.5 * p.life, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(96,165,250,${p.life * 0.8})`;
        ctx.fill();
      }
    };

    loop();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("mousemove", onMouseMove);
      canvas.removeEventListener("click", onClick);
    };
  }, []);

  return (
    <div className="relative w-full mt-4 group">
      <p className="text-[10px] font-mono text-zinc-700 tracking-widest uppercase mb-2">// hover to explore · click to fire</p>
      <canvas
        ref={canvasRef}
        className="w-full h-40 rounded-2xl border border-white/[0.04] cursor-crosshair"
        style={{ background: "rgb(2,6,23)" }}
      />
    </div>
  );
}
