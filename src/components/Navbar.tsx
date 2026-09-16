import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Search, LayoutGrid } from 'lucide-react';
import { profile } from '../data/portfolio';
import { Theme } from '../hooks/useTheme';
import { useClock } from '../hooks/useClock';
import ThemeToggle from './ThemeToggle';
import { cn } from '../utils/cn';

interface Props {
  theme: Theme;
  onToggleTheme: () => void;
  onOpenPalette: () => void;
}

const links = [
  { label: 'Finder', to: '/#home' },
  { label: 'Projects', to: '/#projects' },
  { label: 'About', to: '/#about' },
  { label: 'Games', to: '/games' },
  { label: 'Contact', to: '/#contact' },
];

export default function Navbar({ theme, onToggleTheme, onOpenPalette }: Props) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const time = useClock();
  const location = useLocation();
  const navigate = useNavigate();

  function goTo(hash: string) {
    setMobileOpen(false);
    if (hash === '/games') {
      navigate('/games');
      return;
    }
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const id = hash.replace('/#', '');
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }, 80);
      return;
    }
    const id = hash.replace('/#', '');
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <header className="fixed inset-x-0 top-0 z-40">
      <div className="section-shell mt-3">
        <div className="glass flex items-center justify-between rounded-2xl px-4 py-3 shadow-dock sm:px-5">
          <button
            onClick={() => goTo('/#home')}
            className="flex items-center gap-2 font-display text-sm font-semibold tracking-tight"
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-glow to-violet-glow text-[13px] font-bold text-[#05070d]">
              AU
            </span>
            <span className="hidden sm:inline">Ansh Uttam</span>
          </button>

          <nav className="hidden items-center gap-1 md:flex">
            {links.map((link) => (
              <button
                key={link.label}
                onClick={() => goTo(link.to)}
                className="rounded-lg px-3 py-1.5 text-sm text-muted transition-colors hover:bg-white/5 hover:text-ink"
              >
                {link.label}
              </button>
            ))}
            <Link
              to="/recruiter"
              className={cn(
                'ml-1 flex items-center gap-1.5 rounded-lg border border-cyan-glow/30 px-3 py-1.5 text-sm text-cyan-glow transition-colors hover:bg-cyan-glow/10',
                location.pathname === '/recruiter' && 'bg-cyan-glow/10'
              )}
            >
              <LayoutGrid size={14} />
              Recruiter View
            </Link>
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={onOpenPalette}
              aria-label="Open command palette"
              title="Search (Ctrl/Cmd + K)"
              className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-muted transition-colors hover:border-cyan-glow/40 hover:text-cyan-glow sm:flex"
            >
              <Search size={14} />
              <span className="font-mono">⌘K</span>
            </button>
            <span className="hidden font-mono text-xs text-muted lg:inline">{time} IST</span>
            <ThemeToggle theme={theme} onToggle={onToggleTheme} />
            <button
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 md:hidden"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={16} /> : <Menu size={16} />}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="glass mt-2 flex flex-col gap-1 rounded-2xl p-3 md:hidden">
            {links.map((link) => (
              <button
                key={link.label}
                onClick={() => goTo(link.to)}
                className="rounded-lg px-3 py-2 text-left text-sm text-muted hover:bg-white/5 hover:text-ink"
              >
                {link.label}
              </button>
            ))}
            <Link
              to="/recruiter"
              onClick={() => setMobileOpen(false)}
              className="rounded-lg px-3 py-2 text-left text-sm text-cyan-glow hover:bg-cyan-glow/10"
            >
              Recruiter View
            </Link>
            <button
              onClick={() => {
                setMobileOpen(false);
                onOpenPalette();
              }}
              className="flex items-center gap-2 rounded-lg px-3 py-2 text-left text-sm text-muted hover:bg-white/5 hover:text-ink"
            >
              <Search size={14} /> Search
            </button>
          </div>
        )}
      </div>
      <p className="sr-only">{profile.name} — {profile.title}</p>
    </header>
  );
}
