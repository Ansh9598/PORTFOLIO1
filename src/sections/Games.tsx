import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import SnakeGame from '../game/SnakeGame';
import TicTacToe from '../game/TicTacToe';
import MemoryMatch from '../game/MemoryMatch';
import { cn } from '../utils/cn';

const tabs = [
  { id: 'snake', label: 'Snake', component: SnakeGame },
  { id: 'tictactoe', label: 'Tic-Tac-Toe', component: TicTacToe },
  { id: 'memory', label: 'Memory Match', component: MemoryMatch },
] as const;

export default function Games() {
  const [active, setActive] = useState<(typeof tabs)[number]['id']>('snake');
  const ActiveGame = tabs.find((t) => t.id === active)!.component;

  return (
    <section id="games" className="section-shell py-24">
      <SectionHeading
        index="05"
        title="Playground"
        description="A few small games I built for fun — no framework, just React state and a canvas."
      />

      <div className="mb-6 flex flex-wrap gap-2">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActive(tab.id)}
            className={cn(
              'rounded-full border px-4 py-1.5 text-xs font-mono transition-colors',
              active === tab.id
                ? 'border-cyan-glow/50 bg-cyan-glow/10 text-cyan-glow'
                : 'border-white/10 bg-white/5 text-muted hover:text-ink'
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <motion.div
        key={active}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="glass flex justify-center rounded-2xl p-6 sm:p-10"
      >
        <ActiveGame />
      </motion.div>
    </section>
  );
}