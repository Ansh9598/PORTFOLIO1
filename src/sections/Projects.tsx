import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { projects, categoryFilters, Category } from '../data/portfolio';
import { Project } from '../data/portfolio';
import SectionHeading from '../components/SectionHeading';
import ProjectCard from '../components/ProjectCard';
import ProjectModal from '../components/ProjectModal';
import { cn } from '../utils/cn';

export default function Projects() {
  const [filter, setFilter] = useState<Category | 'ALL'>('ALL');
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const filtered = filter === 'ALL' ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="section-shell py-24">
      <SectionHeading index="04" title="Projects" description="A few things I've built, end to end." />

      <div className="mb-8 flex flex-wrap gap-2">
        {categoryFilters.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={cn(
              'rounded-full border px-3.5 py-1.5 text-xs font-mono transition-colors',
              filter === cat
                ? 'border-cyan-glow/50 bg-cyan-glow/10 text-cyan-glow'
                : 'border-white/10 bg-white/5 text-muted hover:text-ink'
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((project) => (
            <ProjectCard key={project.id} project={project} onOpen={() => setActiveProject(project)} />
          ))}
        </AnimatePresence>
      </div>

      {filtered.length === 0 && (
        <p className="mt-10 text-center text-sm text-muted">No projects in this category yet.</p>
      )}

      <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
    </section>
  );
}
