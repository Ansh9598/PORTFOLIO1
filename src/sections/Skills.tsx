import { motion } from 'framer-motion';
import { skills } from '../data/portfolio';
import SectionHeading from '../components/SectionHeading';

export default function Skills() {
  return (
    <section id="skills" className="section-shell py-24">
      <SectionHeading index="02" title="Skills" description="Tools and languages I reach for most." />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((group, i) => (
          <motion.div
            key={group.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="glass rounded-2xl p-5"
          >
            <h3 className="font-mono text-xs text-cyan-glow/80">{group.label}</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-lg border border-white/10 bg-white/5 px-2.5 py-1.5 text-sm text-ink"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
