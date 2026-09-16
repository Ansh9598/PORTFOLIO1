import { useEffect, useRef, useState, useCallback } from 'react';

const GRID = 18;
const CELL = 18;
const SIZE = GRID * CELL;
const INITIAL_SNAKE = [{ x: 8, y: 9 }, { x: 7, y: 9 }, { x: 6, y: 9 }];
const INITIAL_DIR = { x: 1, y: 0 };

function randomFood(snake: { x: number; y: number }[]) {
  let food: { x: number; y: number };
  do {
    food = { x: Math.floor(Math.random() * GRID), y: Math.floor(Math.random() * GRID) };
  } while (snake.some((s) => s.x === food.x && s.y === food.y));
  return food;
}

export default function SnakeGame() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const snakeRef = useRef(INITIAL_SNAKE);
  const dirRef = useRef(INITIAL_DIR);
  const nextDirRef = useRef(INITIAL_DIR);
  const foodRef = useRef(randomFood(INITIAL_SNAKE));
  const [score, setScore] = useState(0);
  const [best, setBest] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [running, setRunning] = useState(false);

  const reset = useCallback(() => {
    snakeRef.current = INITIAL_SNAKE.map((s) => ({ ...s }));
    dirRef.current = INITIAL_DIR;
    nextDirRef.current = INITIAL_DIR;
    foodRef.current = randomFood(snakeRef.current);
    setScore(0);
    setGameOver(false);
    setRunning(true);
  }, []);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      const map: Record<string, { x: number; y: number }> = {
        ArrowUp: { x: 0, y: -1 },
        ArrowDown: { x: 0, y: 1 },
        ArrowLeft: { x: -1, y: 0 },
        ArrowRight: { x: 1, y: 0 },
        w: { x: 0, y: -1 },
        s: { x: 0, y: 1 },
        a: { x: -1, y: 0 },
        d: { x: 1, y: 0 },
      };
      const next = map[e.key];
      if (!next) return;
      e.preventDefault();
      const cur = dirRef.current;
      if (next.x === -cur.x && next.y === -cur.y) return;
      nextDirRef.current = next;
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => {
    if (!running) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const interval = setInterval(() => {
      dirRef.current = nextDirRef.current;
      const snake = snakeRef.current;
      const head = { x: snake[0].x + dirRef.current.x, y: snake[0].y + dirRef.current.y };

      const hitWall = head.x < 0 || head.y < 0 || head.x >= GRID || head.y >= GRID;
      const hitSelf = snake.some((s) => s.x === head.x && s.y === head.y);

      if (hitWall || hitSelf) {
        setRunning(false);
        setGameOver(true);
        setBest((b) => Math.max(b, score));
        return;
      }

      const newSnake = [head, ...snake];
      if (head.x === foodRef.current.x && head.y === foodRef.current.y) {
        foodRef.current = randomFood(newSnake);
        setScore((s) => s + 1);
      } else {
        newSnake.pop();
      }
      snakeRef.current = newSnake;

      ctx.fillStyle = '#0b0f19';
      ctx.fillRect(0, 0, SIZE, SIZE);
      ctx.fillStyle = '#7c5cff';
      ctx.fillRect(foodRef.current.x * CELL, foodRef.current.y * CELL, CELL - 2, CELL - 2);
      newSnake.forEach((seg, i) => {
        ctx.fillStyle = i === 0 ? '#4ce0d2' : 'rgba(76,224,210,0.6)';
        ctx.fillRect(seg.x * CELL, seg.y * CELL, CELL - 2, CELL - 2);
      });
    }, 110);

    return () => clearInterval(interval);
  }, [running, score]);

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex w-full max-w-[324px] items-center justify-between font-mono text-xs text-muted">
        <span>Score: <span className="text-cyan-glow">{score}</span></span>
        <span>Best: <span className="text-cyan-glow">{best}</span></span>
      </div>

      <div className="relative">
        <canvas
          ref={canvasRef}
          width={SIZE}
          height={SIZE}
          className="rounded-xl border border-white/10"
        />
        {!running && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 rounded-xl bg-black/70 backdrop-blur-sm">
            <p className="text-sm text-ink">{gameOver ? 'Game over!' : 'Snake'}</p>
            <button
              onClick={reset}
              className="rounded-lg bg-gradient-to-r from-cyan-glow to-violet-glow px-4 py-2 text-xs font-medium text-[#05070d]"
            >
              {gameOver ? 'Play again' : 'Start'}
            </button>
          </div>
        )}
      </div>
      <p className="text-xs text-muted">Use arrow keys or WASD to move.</p>
    </div>
  );
}