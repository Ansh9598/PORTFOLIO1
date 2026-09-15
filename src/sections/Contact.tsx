import { motion } from 'framer-motion';
import { Mail, Phone, Github, Linkedin } from 'lucide-react';
import { profile } from '../data/portfolio';
import SectionHeading from '../components/SectionHeading';
import ContactForm from '../components/ContactForm';

export default function Contact() {
  const links = [
    { icon: Mail, label: profile.email, href: `mailto:${profile.email}` },
    { icon: Phone, label: profile.phone, href: `tel:${profile.phone.replace(/-/g, '')}` },
    { icon: Github, label: 'GitHub', href: profile.social.github || null },
    { icon: Linkedin, label: 'LinkedIn', href: profile.social.linkedin || null },
  ];

  return (
    <section id="contact" className="section-shell py-24">
      <SectionHeading index="08" title="Contact" description="Have an opportunity or a question? Send a message." />

      <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass flex flex-col gap-4 rounded-2xl p-6"
        >
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href ?? undefined}
              onClick={(e) => !link.href && e.preventDefault()}
              className={`flex items-center gap-3 rounded-lg px-2 py-1.5 text-sm transition-colors ${
                link.href ? 'text-ink hover:text-cyan-glow' : 'cursor-not-allowed text-muted opacity-50'
              }`}
              title={link.href ? undefined : 'Link not added yet'}
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5">
                <link.icon size={15} />
              </span>
              {link.label}
            </a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <ContactForm />
        </motion.div>
      </div>
    </section>
  );
}
