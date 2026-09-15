import { motion } from 'framer-motion';
import { experience } from '../data/portfolio';
import SectionHeading from '../components/SectionHeading';

export default function Experience() {
  return (
    <section id="experience" className="section-shell py-24">
      <SectionHeading index="03" title="Experience" description="Where I've been applying what I learn." />

      <div className="space-y-6">
        {experience.map((item, i) => (
          <motion.div
            key={item.org}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="glass rounded-2xl p-6 sm:p-8"
          >
            <div className="flex flex-wrap items-start justify-between gap-2">
              <div>
                <h3 className="font-display text-xl font-medium">{item.role}</h3>
                <p className="text-sm text-muted">
                  {item.org} · {item.location}
                </p>
              </div>
              <span className="rounded-full border border-white/10 px-3 py-1 font-mono text-xs text-cyan-glow">
                {item.period}
              </span>
            </div>
            <ul className="mt-5 grid gap-2 sm:grid-cols-2">
              {item.responsibilities.map((r) => (
                <li key={r} className="flex items-start gap-2 text-sm text-muted">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-cyan-glow" />
                  {r}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
