import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FolderKanban,
  User,
  Gamepad2,
  FileText,
  Github,
  Linkedin,
  Mail,
  LayoutGrid,
} from 'lucide-react';
import { profile } from '../data/portfolio';
import { cn } from '../utils/cn';

interface DockItem {
  id: string;
  label: string;
  icon: React.ElementType;
  action: () => void;
  // Background tile classes + icon color, styled after a colorful app-icon dock
  tile: string;
  iconColor: string;
}

export default function FloatingDock() {
  const [hovered, setHovered] = useState<string | null>(null);
  const navigate = useNavigate();
  const location = useLocation();

  function scrollTo(id: string) {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }), 100);
      return;
    }
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }

  const items: DockItem[] = [
    {
      id: 'projects',
      label: 'Projects',
      icon: FolderKanban,
      action: () => scrollTo('projects'),
      tile: 'bg-gradient-to-b from-sky-400 to-blue-600',
      iconColor: 'text-white',
    },
    {
      id: 'about',
      label: 'About',
      icon: User,
      action: () => scrollTo('about'),
      tile: 'bg-gradient-to-b from-blue-400 to-indigo-600',
      iconColor: 'text-white',
    },
    {
      id: 'skills',
      label: 'Skills',
      icon: Gamepad2,
      action: () => scrollTo('skills'),
      tile: 'bg-gradient-to-b from-emerald-400 to-green-600',
      iconColor: 'text-white',
    },
    {
      id: 'resume',
      label: 'Resume',
      icon: FileText,
      action: () => scrollTo('resume'),
      tile: 'bg-gradient-to-b from-white to-slate-200',
      iconColor: 'text-slate-700',
    },
    {
      id: 'github',
      label: 'GitHub',
      icon: Github,
      action: () => profile.social.github && window.open(profile.social.github, '_blank'),
      tile: 'bg-gradient-to-b from-slate-700 to-slate-900',
      iconColor: 'text-white',
    },
    {
      id: 'linkedin',
      label: 'LinkedIn',
      icon: Linkedin,
      action: () => profile.social.linkedin && window.open(profile.social.linkedin, '_blank'),
      tile: 'bg-gradient-to-b from-sky-500 to-blue-700',
      iconColor: 'text-white',
    },
    {
      id: 'contact',
      label: 'Contact',
      icon: Mail,
      action: () => scrollTo('contact'),
      tile: 'bg-gradient-to-b from-violet-400 to-purple-600',
      iconColor: 'text-white',
    },
    {
      id: 'recruiter',
      label: 'Recruiter View',
      icon: LayoutGrid,
      action: () => navigate('/recruiter'),
      tile: 'bg-gradient-to-b from-slate-300 to-slate-500',
      iconColor: 'text-white',
    },
  ];

  return (
    <motion.div
      initial={{ y: 80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.6, duration: 0.6, ease: 'easeOut' }}
      className="fixed bottom-5 left-1/2 z-40 hidden -translate-x-1/2 md:block"
    >
      <div className="glass flex items-end gap-1.5 rounded-2xl px-3 py-2.5 shadow-dock">
        {items.map((item) => {
          const Icon = item.icon;
          const isHovered = hovered === item.id;
          return (
            <div key={item.id} className="relative flex flex-col items-center">
              {isHovered && (
                <motion.span
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute -top-9 whitespace-nowrap rounded-md border border-white/10 bg-[#0b0f19] px-2 py-1 font-mono text-[11px] text-ink shadow-lg"
                >
                  {item.label}
                </motion.span>
              )}
              <motion.button
                onMouseEnter={() => setHovered(item.id)}
                onMouseLeave={() => setHovered(null)}
                onClick={item.action}
                whileHover={{ scale: 1.18, y: -6 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                aria-label={item.label}
                className={cn(
                  'flex h-11 w-11 items-center justify-center rounded-xl shadow-lg shadow-black/30 ring-1 ring-white/10 transition-shadow hover:ring-cyan-glow/40',
                  item.tile
                )}
              >
                <Icon size={18} className={item.iconColor} />
              </motion.button>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}
