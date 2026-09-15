import { AnimatePresence, motion } from 'framer-motion';
import { X, Github, ExternalLink } from 'lucide-react';
import { Project } from '../data/portfolio';

interface Props {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: Props) {
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 8 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            onClick={(e) => e.stopPropagation()}
            className="glass max-h-[85vh] w-full max-w-lg overflow-y-auto rounded-2xl p-6 shadow-dock sm:p-8"
          >
            <div className="flex items-start justify-between gap-4">
              <span className="rounded-full border border-white/10 px-2.5 py-0.5 font-mono text-[11px] text-cyan-glow">
                {project.category}
              </span>
              <button
                onClick={onClose}
                aria-label="Close"
                className="rounded-full border border-white/10 bg-white/5 p-1.5 hover:text-cyan-glow"
              >
                <X size={15} />
              </button>
            </div>

            <h3 className="mt-4 font-display text-2xl font-medium">{project.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">{project.description}</p>

            <div className="mt-5">
              <h4 className="eyebrow">Technologies</h4>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {project.technologies.map((t) => (
                  <span key={t} className="rounded-md bg-white/5 px-2 py-1 text-xs text-ink">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-5">
              <h4 className="eyebrow">Key features</h4>
              <ul className="mt-2 grid grid-cols-2 gap-2 text-sm text-muted">
                {project.features.map((f) => (
                  <li key={f} className="flex items-center gap-1.5">
                    <span className="h-1 w-1 rounded-full bg-cyan-glow" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 flex gap-3">
              <a
                href={project.github ?? undefined}
                target={project.github ? '_blank' : undefined}
                rel="noreferrer"
                onClick={(e) => !project.github && e.preventDefault()}
                className={`flex flex-1 items-center justify-center gap-2 rounded-lg border border-white/10 px-3 py-2.5 text-sm ${
                  project.github ? 'hover:border-cyan-glow/40 hover:text-cyan-glow' : 'cursor-not-allowed opacity-40'
                }`}
              >
                <Github size={15} /> {project.github ? 'View code' : 'Code link pending'}
              </a>
              <a
                href={project.demo ?? undefined}
                target={project.demo ? '_blank' : undefined}
                rel="noreferrer"
                onClick={(e) => !project.demo && e.preventDefault()}
                className={`flex flex-1 items-center justify-center gap-2 rounded-lg border border-white/10 px-3 py-2.5 text-sm ${
                  project.demo ? 'hover:border-cyan-glow/40 hover:text-cyan-glow' : 'cursor-not-allowed opacity-40'
                }`}
              >
                <ExternalLink size={15} /> {project.demo ? 'Live demo' : 'Demo pending'}
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
