
import { motion } from 'framer-motion'

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
}) {
  const centered = align === 'center'

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55 }}
      className={`mb-12 max-w-2xl ${
        centered ? 'mx-auto text-center' : 'text-left'
      }`}
    >
      {eyebrow && (
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-violet-300">
          {eyebrow}
        </p>
      )}
      <h2 className="display-font text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="muted mt-4 text-sm leading-7 sm:text-base">
          {description}
        </p>
      )}
    </motion.div>
  )
}
