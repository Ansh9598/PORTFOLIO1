import { motion } from 'framer-motion';

const nodes = [
  { x: 60, y: 80 }, { x: 220, y: 40 }, { x: 340, y: 130 },
  { x: 120, y: 220 }, { x: 300, y: 260 }, { x: 400, y: 60 },
  { x: 180, y: 320 }, { x: 40, y: 260 },
];

const edges: Array<[number, number]> = [
  [0, 1], [1, 2], [2, 5], [0, 3], [3, 4], [4, 2], [3, 6], [6, 7], [7, 0], [1, 5],
];

const codeGlyphs = ['{ }', '</>', 'SQL', 'def', '=>', '01'];

export default function NetworkVisual() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-md">
      <svg viewBox="0 0 440 380" className="h-full w-full overflow-visible">
        <defs>
          <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#4ce0d2" />
            <stop offset="100%" stopColor="#7c5cff" />
          </linearGradient>
          <radialGradient id="nodeGlow">
            <stop offset="0%" stopColor="#4ce0d2" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#4ce0d2" stopOpacity="0" />
          </radialGradient>
        </defs>

        {edges.map(([a, b], i) => (
          <motion.line
            key={i}
            x1={nodes[a].x}
            y1={nodes[a].y}
            x2={nodes[b].x}
            y2={nodes[b].y}
            stroke="url(#lineGrad)"
            strokeWidth="1"
            strokeOpacity="0.35"
            strokeDasharray="6 6"
            animate={{ strokeDashoffset: [0, -120] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'linear', delay: i * 0.15 }}
          />
        ))}

        {nodes.map((n, i) => (
          <g key={i}>
            <circle cx={n.x} cy={n.y} r="18" fill="url(#nodeGlow)" opacity="0.5" />
            <motion.circle
              cx={n.x}
              cy={n.y}
              r={i % 3 === 0 ? 5 : 3.5}
              fill={i % 2 === 0 ? '#4ce0d2' : '#7c5cff'}
              animate={{ cy: [n.y, n.y - 8, n.y] }}
              transition={{ duration: 4 + i, repeat: Infinity, ease: 'easeInOut' }}
            />
          </g>
        ))}
      </svg>

      {codeGlyphs.map((glyph, i) => (
        <span
          key={glyph}
          className="animate-float absolute select-none rounded-lg border border-white/10 bg-white/5 px-2 py-1 font-mono text-[11px] text-cyan-glow/80 backdrop-blur-sm"
          style={{
            top: `${[10, 70, 30, 85, 55, 15][i % 6]}%`,
            left: `${[75, 15, 5, 60, 85, 40][i % 6]}%`,
            animationDelay: `${i * 0.7}s`,
          }}
        >
          {glyph}
        </span>
      ))}

      <div className="pointer-events-none absolute -inset-10 -z-10 rounded-full bg-gradient-to-br from-cyan-glow/10 via-transparent to-violet-glow/10 blur-3xl" />
    </div>
  );
}
