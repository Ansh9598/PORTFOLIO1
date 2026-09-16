import { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  Home,
  User,
  Cpu,
  Gamepad2,
  Briefcase,
  FolderKanban,
  GraduationCap,
  FileText,
  Mail,
  LayoutGrid,
  Sun,
  Search,
} from 'lucide-react';
import { Theme } from '../hooks/useTheme';

interface Props {
  open: boolean;
  onClose: () => void;
  theme: Theme;
  onToggleTheme: () => void;
}

interface Command {
  id: string;
  label: string;
  icon: React.ElementType;
  run: () => void;
  keywords?: string;
}

export default function CommandPalette({ open, onClose, onToggleTheme }: Props) {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  function scrollTo(id: string) {
    onClose();
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }), 100);
      return;
    }
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }

  const commands: Command[] = useMemo(
    () => [
      { id: 'home', label: 'Go Home', icon: Home, run: () => scrollTo('home') },
      { id: 'about', label: 'About', icon: User, run: () => scrollTo('about') },
      { id: 'skills', label: 'Skills', icon: Cpu, run: () => scrollTo('skills') },
      { id: 'projects', label: 'Projects', icon: FolderKanban, run: () => scrollTo('projects') },
      {
        id: 'games',
        label: 'Games',
        icon: Gamepad2,
        run: () => {
          onClose();
          navigate('/games');
        },
      },
      { id: 'experience', label: 'Experience', icon: Briefcase, run: () => scrollTo('experience') },
      { id: 'education', label: 'Education', icon: GraduationCap, run: () => scrollTo('education') },
      { id: 'resume', label: 'Resume', icon: FileText, run: () => scrollTo('resume') },
      { id: 'contact', label: 'Contact', icon: Mail, run: () => scrollTo('contact') },
      {
        id: 'recruiter',
        label: 'Recruiter View',
        icon: LayoutGrid,
        run: () => {
          onClose();
          navigate('/recruiter');
        },
      },
      {
        id: 'theme',
        label: 'Toggle Theme',
        icon: Sun,
        run: () => {
          onToggleTheme();
          onClose();
        },
      },
    ],
    [location.pathname]
  );

  const filtered = commands.filter((c) =>
    (c.label + ' ' + (c.keywords ?? '')).toLowerCase().includes(query.toLowerCase())
  );

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    setActiveIndex(0);
  }, [query, open]);

  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setActiveIndex((i) => Math.min(i + 1, filtered.length - 1));
      }
      if (e.key === 'ArrowUp') {
        e.preventDefault();
        setActiveIndex((i) => Math.max(i - 1, 0));
      }
      if (e.key === 'Enter') {
        filtered[activeIndex]?.run();
      }
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, filtered, activeIndex]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-start justify-center bg-black/60 px-4 pt-24 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: -16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
            onClick={(e) => e.stopPropagation()}
            className="glass w-full max-w-lg overflow-hidden rounded-2xl shadow-dock"
          >
            <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
              <Search size={16} className="text-muted" />
              <input
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Type a command…"
                className="w-full bg-transparent text-sm text-ink outline-none placeholder:text-muted"
              />
              <kbd className="rounded border border-white/10 px-1.5 py-0.5 font-mono text-[10px] text-muted">
                esc
              </kbd>
            </div>
            <ul className="max-h-80 overflow-y-auto p-2">
              {filtered.length === 0 && (
                <li className="px-3 py-6 text-center text-sm text-muted">No matching command.</li>
              )}
              {filtered.map((cmd, i) => {
                const Icon = cmd.icon;
                return (
                  <li key={cmd.id}>
                    <button
                      onClick={cmd.run}
                      onMouseEnter={() => setActiveIndex(i)}
                      className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left text-sm transition-colors ${
                        i === activeIndex ? 'bg-cyan-glow/10 text-cyan-glow' : 'text-ink hover:bg-white/5'
                      }`}
                    >
                      <Icon size={15} />
                      {cmd.label}
                    </button>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
