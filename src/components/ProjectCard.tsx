import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { Project } from '../data/portfolio';

interface Props {
  project: Project;
  onOpen: () => void;
}

export default function ProjectCard({ project, onOpen }: Props) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.35 }}
      whileHover={{ y: -4 }}
      className="glass group flex h-full flex-col rounded-2xl p-5 transition-shadow hover:shadow-glow"
    >
      <div className="mb-3 flex items-center justify-between">
        <span className="rounded-full border border-white/10 px-2.5 py-0.5 font-mono text-[11px] text-cyan-glow">
          {project.category}
        </span>
      </div>

      <h3 className="font-display text-lg font-medium leading-snug">{project.title}</h3>
      <p className="mt-2 text-sm text-muted">{project.description}</p>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {project.technologies.map((t) => (
          <span key={t} className="rounded-md bg-white/5 px-2 py-1 text-[11px] text-muted">
            {t}
          </span>
        ))}
      </div>

      <div className="mt-auto flex items-center gap-2 pt-5">
        <button
          onClick={onOpen}
          className="flex-1 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium text-ink transition-colors hover:border-cyan-glow/40 hover:text-cyan-glow"
        >
          View details
        </button>
        <a
          href={project.github ?? undefined}
          target={project.github ? '_blank' : undefined}
          rel="noreferrer"
          aria-disabled={!project.github}
          title={project.github ? 'Open GitHub repository' : 'GitHub link not added yet'}
          onClick={(e) => !project.github && e.preventDefault()}
          className={`flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 ${
            project.github ? 'hover:border-cyan-glow/40 hover:text-cyan-glow' : 'cursor-not-allowed opacity-40'
          }`}
        >
          <Github size={15} />
        </a>
        <a
          href={project.demo ?? undefined}
          target={project.demo ? '_blank' : undefined}
          rel="noreferrer"
          aria-disabled={!project.demo}
          title={project.demo ? 'Open live demo' : 'Live demo not added yet'}
          onClick={(e) => !project.demo && e.preventDefault()}
          className={`flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 ${
            project.demo ? 'hover:border-cyan-glow/40 hover:text-cyan-glow' : 'cursor-not-allowed opacity-40'
          }`}
        >
          <ExternalLink size={15} />
        </a>
      </div>
    </motion.div>
  );
}
