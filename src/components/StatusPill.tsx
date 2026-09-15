import { profile } from '../data/portfolio';

export default function StatusPill() {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-signal/30 bg-signal/10 px-3 py-1.5 text-xs text-signal">
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-signal opacity-75" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-signal" />
      </span>
      {profile.availability}
    </div>
  );
}
