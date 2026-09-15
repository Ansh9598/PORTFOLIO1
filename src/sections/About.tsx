import { motion } from 'framer-motion';
import { MapPin, Mail, Phone } from 'lucide-react';
import { profile } from '../data/portfolio';
import SectionHeading from '../components/SectionHeading';

export default function About() {
  const facts = [
    { icon: MapPin, label: profile.location },
    { icon: Mail, label: profile.email },
    { icon: Phone, label: profile.phone },
  ];

  return (
    <section id="about" className="section-shell py-24">
      <SectionHeading index="01" title="About" description="A quick summary of who I am and how I work." />

      <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-xl text-lg leading-relaxed text-muted"
        >
          {profile.summary}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="glass flex flex-col gap-4 rounded-2xl p-6"
        >
          {facts.map((fact) => (
            <div key={fact.label} className="flex items-center gap-3 text-sm">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 text-cyan-glow">
                <fact.icon size={15} />
              </span>
              {fact.label}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
