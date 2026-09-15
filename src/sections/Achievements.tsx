import { motion } from 'framer-motion';
import { Trophy } from 'lucide-react';
import { achievements } from '../data/portfolio';
import SectionHeading from '../components/SectionHeading';

export default function Achievements() {
  return (
    <section id="achievements" className="section-shell py-24">
      <SectionHeading index="06" title="Achievements" description="A couple of milestones along the way." />

      <div className="grid gap-4 sm:grid-cols-2">
        {achievements.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="glass flex items-start gap-4 rounded-2xl p-6"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-glow/20 to-violet-glow/20 text-cyan-glow">
              <Trophy size={18} />
            </span>
            <div>
              <h3 className="font-display text-base font-medium">{item.title}</h3>
              <p className="mt-1 text-sm text-muted">{item.detail}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
