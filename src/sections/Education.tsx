import { motion } from 'framer-motion';
import { education } from '../data/portfolio';
import SectionHeading from '../components/SectionHeading';

export default function Education() {
  return (
    <section id="education" className="section-shell py-24">
      <SectionHeading index="06" title="Education" description="Academic background." />

      <div className="relative space-y-6 border-l border-white/10 pl-6 sm:pl-8">
        {education.map((item, i) => (
          <motion.div
            key={item.degree}
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="relative"
          >
            <span className="absolute -left-[31px] top-1.5 h-2.5 w-2.5 rounded-full bg-cyan-glow shadow-glow sm:-left-[39px]" />
            <div className="glass rounded-2xl p-5 sm:p-6">
              <div className="flex flex-wrap items-start justify-between gap-2">
                <div>
                  <h3 className="font-display text-lg font-medium">{item.degree}</h3>
                  <p className="text-sm text-muted">
                    {item.institution} · {item.location}
                  </p>
                </div>
                <span className="rounded-full border border-white/10 px-3 py-1 font-mono text-xs text-cyan-glow">
                  {item.period}
                </span>
              </div>
              <p className="mt-2 text-sm text-signal">{item.score}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
