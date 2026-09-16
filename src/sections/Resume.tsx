import { motion } from 'framer-motion';
import { FileText, Download, Eye } from 'lucide-react';
import { profile } from '../data/portfolio';
import SectionHeading from '../components/SectionHeading';

export default function Resume() {
  return (
    <section id="resume" className="section-shell py-24">
      <SectionHeading index="08" title="Resume" description="A one-page summary of my background." />

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="glass flex flex-col items-start gap-6 rounded-2xl p-8 sm:flex-row sm:items-center sm:justify-between"
      >
        <div className="flex items-center gap-4">
          <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 text-cyan-glow">
            <FileText size={20} />
          </span>
          <div>
            <h3 className="font-display text-lg font-medium">Ansh_Uttam_Resume.pdf</h3>
            <p className="text-sm text-muted">Add the file at {profile.resumePath} to activate these buttons.</p>
          </div>
        </div>
        <div className="flex gap-3">
          <a
            href={profile.resumePath}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-medium text-ink transition-colors hover:border-cyan-glow/40 hover:text-cyan-glow"
          >
            <Eye size={15} /> View Resume
          </a>
          <a
            href={profile.resumePath}
            download
            className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-cyan-glow to-violet-glow px-4 py-2.5 text-sm font-medium text-[#05070d]"
          >
            <Download size={15} /> Download Resume
          </a>
        </div>
      </motion.div>
    </section>
  );
}
