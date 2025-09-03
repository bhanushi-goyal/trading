"use client"
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

export default function Navbar() {
    return (
        <motion.header
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur"
        >
            <div className="container-section flex h-16 items-center justify-between">
                <Link href="#" className="font-semibold tracking-tight">Trading Company</Link>
                <nav className="hidden gap-6 text-sm md:flex">
                    <Link href="#process" className="hover:opacity-70">Process</Link>
                    <Link href="#plans" className="hover:opacity-70">Plans</Link>
                    <Link href="#payouts" className="hover:opacity-70">Payouts</Link>
                    <Link href="#app" className="hover:opacity-70">App</Link>
                </nav>
                <div className="flex items-center gap-2">
                    <Button variant="ghost" className="hidden sm:inline-flex">Login</Button>
                    <Button className="btn-primary-gradient">Open FREE Account</Button>
                </div>
            </div>
        </motion.header>
    )
}
