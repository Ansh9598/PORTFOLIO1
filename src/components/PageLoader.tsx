import { motion, AnimatePresence } from 'framer-motion';

interface Props {
  loading: boolean;
}

export default function PageLoader({ loading }: Props) {
  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-4 bg-[#05070d]"
        >
          <motion.span
            initial={{ letterSpacing: '0.1em', opacity: 0.6 }}
            animate={{ letterSpacing: '0.3em', opacity: 1 }}
            transition={{ duration: 1.1, repeat: Infinity, repeatType: 'reverse' }}
            className="font-mono text-xs text-cyan-glow"
          >
            BOOTING PORTFOLIO OS
          </motion.span>
          <div className="h-px w-40 overflow-hidden bg-white/10">
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: '100%' }}
              transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
              className="h-full w-1/2 bg-gradient-to-r from-transparent via-cyan-glow to-transparent"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
