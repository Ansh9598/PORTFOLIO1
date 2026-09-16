import { useState } from 'react';

type Cell = 'X' | 'O' | null;

const LINES = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8],
  [0, 3, 6], [1, 4, 7], [2, 5, 8],
  [0, 4, 8], [2, 4, 6],
];

function getWinner(board: Cell[]): { winner: Cell; line: number[] | null } {
  for (const line of LINES) {
    const [a, b, c] = line;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return { winner: board[a], line };
    }
  }
  return { winner: null, line: null };
}

export default function TicTacToe() {
  const [board, setBoard] = useState<Cell[]>(Array(9).fill(null));
  const [turn, setTurn] = useState<'X' | 'O'>('X');
  const [scores, setScores] = useState({ X: 0, O: 0, draws: 0 });

  const { winner, line } = getWinner(board);
  const isDraw = !winner && board.every((c) => c !== null);

  function handleClick(i: number) {
    if (board[i] || winner) return;
    const next = [...board];
    next[i] = turn;
    setBoard(next);

    const result = getWinner(next);
    if (result.winner) {
      setScores((s) => ({ ...s, [result.winner as 'X' | 'O']: s[result.winner as 'X' | 'O'] + 1 }));
    } else if (next.every((c) => c !== null)) {
      setScores((s) => ({ ...s, draws: s.draws + 1 }));
    }
    setTurn(turn === 'X' ? 'O' : 'X');
  }

  function reset() {
    setBoard(Array(9).fill(null));
    setTurn('X');
  }

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex gap-6 font-mono text-xs text-muted">
        <span>X wins: <span className="text-cyan-glow">{scores.X}</span></span>
        <span>Draws: <span className="text-cyan-glow">{scores.draws}</span></span>
        <span>O wins: <span className="text-cyan-glow">{scores.O}</span></span>
      </div>

      <div className="grid grid-cols-3 gap-2">
        {board.map((cell, i) => (
          <button
            key={i}
            onClick={() => handleClick(i)}
            className={`flex h-20 w-20 items-center justify-center rounded-xl border text-3xl font-display transition-colors ${
              line?.includes(i)
                ? 'border-cyan-glow/60 bg-cyan-glow/10 text-cyan-glow'
                : 'border-white/10 bg-white/5 text-ink hover:border-cyan-glow/30'
            }`}
          >
            {cell}
          </button>
        ))}
      </div>

      <p className="h-5 text-sm text-muted">
        {winner ? `${winner} wins!` : isDraw ? "It's a draw." : `${turn}'s turn`}
      </p>

      <button
        onClick={reset}
        className="rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-ink hover:border-cyan-glow/40 hover:text-cyan-glow"
      >
        Reset board
      </button>
    </div>
  );
}