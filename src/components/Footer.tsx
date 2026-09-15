import { profile } from '../data/portfolio';

export default function Footer() {
  return (
    <footer className="section-shell mb-28 mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/10 py-8 text-xs text-muted sm:flex-row sm:mb-8">
      <span>© {new Date().getFullYear()} {profile.name}. Built from scratch.</span>
      <span className="font-mono">{profile.location}</span>
    </footer>
  );
}
