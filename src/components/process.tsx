"use client"
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

export default function Process() {

    return  (

    <section className="relative overflow-hidden bg-gradient-to-br from-black via-purple-950 to-black text-white">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-1/3 h-72 w-72 rounded-full bg-purple-600/30 blur-3xl" />
        <div className="absolute bottom-20 right-1/4 h-72 w-72 rounded-full bg-fuchsia-500/30 blur-3xl" />
      </div>

      <div className="container-section py-16 md:py-24">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <span className="text-xs uppercase tracking-widest text-purple-400">
              Our Process
            </span>
            <h1 className="mt-4 text-4xl font-extrabold leading-tight sm:text-6xl bg-gradient-to-r from-purple-300 to-fuchsia-400 bg-clip-text text-transparent">
              Become an Abcd Pro <br className="hidden sm:block" /> in Seconds
            </h1>
            <p className="mt-4 text-lg text-gray-300">
              Sign up. Fund. Trade. All within a seamless experience.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button
                size="lg"
                className="rounded-xl bg-gradient-to-r from-purple-600 to-fuchsia-600 px-6 py-3 text-base font-semibold shadow-lg hover:opacity-90 transition"
              >
                Open FREE Account
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-xl border-purple-400/40 bg-white/10 text-white backdrop-blur hover:bg-purple-900/40 transition"
              >
                Compare Plans
              </Button>
            </div>
          </div>
          <motion.ul
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-100px' }}
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: {
                opacity: 1,
                y: 0,
                transition: { staggerChildren: 0.15 },
              },
            }}
            className="grid gap-5"
          >
            {[
              { n: '01', t: 'Register your account' },
              { n: '02', t: 'KYC Verification' },
              { n: '03', t: 'Deposit Funds' },
              { n: '04', t: 'Start Trading & Earn Profits' },
            ].map((s) => (
              <motion.li
                key={s.n}
                variants={{
                  hidden: { opacity: 0, y: 15 },
                  show: { opacity: 1, y: 0 },
                }}
                whileHover={{ scale: 1.03 }}
                transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                className="flex items-start gap-4 rounded-2xl border border-purple-400/30 bg-gradient-to-br from-purple-900/40 to-black/60 p-6 shadow-md hover:shadow-purple-500/20"
              >
                <span className="text-3xl font-bold text-purple-400 tabular-nums">
                  {s.n}
                </span>
                <div>
                  <p className="text-sm text-gray-400">Step {s.n}</p>
                  <h3 className="text-lg font-semibold text-white">{s.t}</h3>
                </div>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  )
}