import { motion } from 'framer-motion';

interface Props {
  index: string; // e.g. "02"
  title: string;
  description?: string;
}

export default function SectionHeading({ index, title, description }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="mb-10 flex items-start gap-4 sm:mb-14"
    >
      <span className="mt-1 font-mono text-sm text-muted dark:text-muted">{index}</span>
      <div>
        <h2 className="font-display text-3xl font-medium tracking-tight sm:text-4xl">{title}</h2>
        {description && <p className="mt-3 max-w-xl text-muted">{description}</p>}
      </div>
    </motion.div>
  );
}
