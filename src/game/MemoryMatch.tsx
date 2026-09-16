import { useEffect, useState } from 'react';

const SYMBOLS = ['🐍', '🚀', '⚡', '💻', '🎯', '🔧'];

function shuffledDeck() {
  const deck = [...SYMBOLS, ...SYMBOLS].map((symbol, i) => ({
    id: i,
    symbol,
    flipped: false,
    matched: false,
  }));
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
  return deck;
}

export default function MemoryMatch() {
  const [deck, setDeck] = useState(shuffledDeck);
  const [selected, setSelected] = useState<number[]>([]);
  const [moves, setMoves] = useState(0);
  const [locked, setLocked] = useState(false);

  const won = deck.every((card) => card.matched);

  useEffect(() => {
    if (selected.length !== 2) return;
    setLocked(true);
    setMoves((m) => m + 1);
    const [a, b] = selected;

    const timeout = setTimeout(() => {
      setDeck((prev) => {
        const match = prev[a].symbol === prev[b].symbol;
        return prev.map((card, i) => {
          if (i !== a && i !== b) return card;
          return { ...card, matched: match, flipped: match };
        });
      });
      setSelected([]);
      setLocked(false);
    }, 650);

    return () => clearTimeout(timeout);
  }, [selected]);

  function handleFlip(i: number) {
    if (locked || deck[i].flipped || deck[i].matched || selected.length === 2) return;
    setDeck((prev) => prev.map((card, idx) => (idx === i ? { ...card, flipped: true } : card)));
    setSelected((prev) => [...prev, i]);
  }

  function reset() {
    setDeck(shuffledDeck());
    setSelected([]);
    setMoves(0);
  }

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex gap-6 font-mono text-xs text-muted">
        <span>Moves: <span className="text-cyan-glow">{moves}</span></span>
        <span>Pairs: <span className="text-cyan-glow">{deck.filter((c) => c.matched).length / 2}/{SYMBOLS.length}</span></span>
      </div>

      <div className="grid grid-cols-4 gap-2">
        {deck.map((card, i) => (
          <button
            key={card.id}
            onClick={() => handleFlip(i)}
            className={`flex h-16 w-16 items-center justify-center rounded-xl border text-2xl transition-all duration-200 ${
              card.flipped || card.matched
                ? 'border-cyan-glow/40 bg-cyan-glow/10'
                : 'border-white/10 bg-white/5 hover:border-cyan-glow/30'
            }`}
          >
            {(card.flipped || card.matched) ? card.symbol : ''}
          </button>
        ))}
      </div>

      <p className="h-5 text-sm text-muted">{won ? `Solved in ${moves} moves! 🎉` : 'Find every matching pair.'}</p>

      <button
        onClick={reset}
        className="rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-ink hover:border-cyan-glow/40 hover:text-cyan-glow"
      >
        Shuffle & restart
      </button>
    </div>
  );
}