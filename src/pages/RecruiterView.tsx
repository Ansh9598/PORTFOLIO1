import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Download, Mail, Phone, MapPin } from 'lucide-react';
import {
  profile,
  skills,
  education,
  experience,
  projects,
  achievements,
} from '../data/portfolio';

export default function RecruiterView() {
  return (
    <div className="section-shell min-h-screen pb-24 pt-28">
      <Link
        to="/"
        className="mb-8 inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-cyan-glow"
      >
        <ArrowLeft size={15} /> Back to full portfolio
      </Link>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="glass rounded-2xl p-6 sm:p-10"
      >
        <div className="flex flex-wrap items-start justify-between gap-6 border-b border-white/10 pb-6">
          <div>
            <h1 className="font-display text-3xl font-medium">{profile.name}</h1>
            <p className="mt-1 text-muted">{profile.title}</p>
            <div className="mt-3 flex flex-wrap gap-4 text-sm text-muted">
              <span className="flex items-center gap-1.5">
                <MapPin size={14} /> {profile.location}
              </span>
              <a href={`mailto:${profile.email}`} className="flex items-center gap-1.5 hover:text-cyan-glow">
                <Mail size={14} /> {profile.email}
              </a>
              <a href={`tel:${profile.phone}`} className="flex items-center gap-1.5 hover:text-cyan-glow">
                <Phone size={14} /> {profile.phone}
              </a>
            </div>
          </div>
          <a
            href={profile.resumePath}
            download
            className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-cyan-glow to-violet-glow px-4 py-2.5 text-sm font-medium text-[#05070d]"
          >
            <Download size={15} /> Resume
          </a>
        </div>

        <section className="border-b border-white/10 py-6">
          <h2 className="eyebrow mb-2">Professional summary</h2>
          <p className="max-w-3xl text-sm leading-relaxed text-muted">{profile.summary}</p>
        </section>

        <section className="border-b border-white/10 py-6">
          <h2 className="eyebrow mb-3">Technical skills</h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((group) => (
              <div key={group.label}>
                <p className="text-xs font-medium text-ink">{group.label}</p>
                <p className="mt-1 text-sm text-muted">{group.items.join(', ')}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="border-b border-white/10 py-6">
          <h2 className="eyebrow mb-3">Education</h2>
          <div className="space-y-3">
            {education.map((item) => (
              <div key={item.degree} className="flex flex-wrap items-center justify-between gap-2 text-sm">
                <div>
                  <span className="text-ink">{item.degree}</span>
                  <span className="text-muted"> — {item.institution}, {item.location}</span>
                </div>
                <div className="flex items-center gap-3 font-mono text-xs text-muted">
                  <span>{item.period}</span>
                  <span className="text-signal">{item.score}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="border-b border-white/10 py-6">
          <h2 className="eyebrow mb-3">Experience</h2>
          {experience.map((item) => (
            <div key={item.org} className="text-sm">
              <p className="text-ink">
                {item.role} — {item.org} <span className="text-muted">({item.period})</span>
              </p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-muted">
                {item.responsibilities.map((r) => (
                  <li key={r}>{r}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section className="border-b border-white/10 py-6">
          <h2 className="eyebrow mb-3">Top projects</h2>
          <div className="grid gap-3 sm:grid-cols-3">
            {projects.map((p) => (
              <div key={p.id} className="rounded-xl border border-white/10 bg-white/5 p-4">
                <p className="font-mono text-[11px] text-cyan-glow">{p.category}</p>
                <p className="mt-1 text-sm font-medium text-ink">{p.title}</p>
                <p className="mt-1 text-xs text-muted">{p.technologies.join(', ')}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-6">
          <h2 className="eyebrow mb-3">Achievements</h2>
          <ul className="space-y-1 text-sm text-muted">
            {achievements.map((a) => (
              <li key={a.title}>
                <span className="text-ink">{a.title}</span> — {a.detail}
              </li>
            ))}
          </ul>
        </section>
      </motion.div>
    </div>
  );
}
