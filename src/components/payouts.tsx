"use client"
import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Button } from '@/components/ui/button';

function useCounter(to: number, durationMs = 5000, trigger: boolean) {
    const [value, setValue] = useState(0);

    useEffect(() => {
        if (!trigger) return;
        const start = performance.now();
        let raf = 0;
        const step = (now: number) => {
            const p = Math.min(1, (now - start) / durationMs);
            setValue(Math.floor(p * to));
            if (p < 1) raf = requestAnimationFrame(step);
        }
        raf = requestAnimationFrame(step);
        return () => cancelAnimationFrame(raf);
    }, [to, durationMs, trigger]);

    return value;
};

const Payouts = () => {
    
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const amount = useCounter(999999, 5000, isInView);
    
    return (

        <section id="payouts" className="relative overflow-hidden py-20 text-center text-white">
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-black via-purple-950 to-black" />
            <div className="absolute top-20 left-1/4 h-72 w-72 rounded-full bg-purple-600/30 blur-3xl" />
            <div className="absolute bottom-20 right-1/4 h-72 w-72 rounded-full bg-fuchsia-500/30 blur-3xl" />

            <div ref={ref} className="container-section relative mx-auto max-w-4xl">
                <span className="text-xs uppercase tracking-widest text-purple-400">
                    Payouts
                </span>
                <h2 className="mt-3 text-3xl font-bold sm:text-4xl bg-gradient-to-r from-purple-300 to-fuchsia-400 bg-clip-text text-transparent">
                    <h2>We have Paid Out Over $1M to Traders</h2>
                </h2>
                <p className="mt-2 text-gray-300">
                    Your Trust is Our Fuel — Power Up with Abcd
                </p>

                <motion.div
                    initial={{ scale: 0.95, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="mt-8 rounded-2xl border border-purple-500/30 bg-black/40 p-10 shadow-lg backdrop-blur"
                >
                    <div className="text-5xl font-extrabold tabular-nums sm:text-6xl text-purple-300">
                        ${amount.toLocaleString()}+
                    </div>
                    <div className="mt-6 flex justify-center">
                        <Button size="lg"
                            className="rounded-xl bg-gradient-to-r from-purple-600 to-fuchsia-600 px-8 py-3 text-base font-semibold shadow-lg hover:opacity-90 transition"
                        >
                            Are you Next?
                        </Button>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Payouts;
