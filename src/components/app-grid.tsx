"use client"
import Image from "next/image"
import { motion } from "framer-motion"

const images = [
  "https://framerusercontent.com/images/DluJryXGyTqDXiRnDpJdmkoSbOU.png",
  "https://framerusercontent.com/images/wPXXd95jZIk3zRQtU2enBhy2g8.png?scale-down-to=512",
  "https://framerusercontent.com/images/VK7tmBzTRU7cEgNp1WcXO7kHYuA.png",
  // repeat for smooth loop
  "https://framerusercontent.com/images/DluJryXGyTqDXiRnDpJdmkoSbOU.png",
  "https://framerusercontent.com/images/wPXXd95jZIk3zRQtU2enBhy2g8.png?scale-down-to=512",
  "https://framerusercontent.com/images/VK7tmBzTRU7cEgNp1WcXO7kHYuA.png",
]

// 👇 replace this with your actual QR code image
const qrCode = "https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=trade-app"

export default function AppGrid() {
  return (
    <section
      id="app"
      className="relative overflow-hidden py-24 text-center text-white"
    >
      {/* dark gradient background */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-br from-black via-purple-750 to-black" />
      <div className="absolute top-10 left-1/4 h-72 w-72 rounded-full bg-purple-400/20 blur-3xl -z-10" />
      <div className="absolute bottom-10 right-1/4 h-72 w-72 rounded-full bg-fuchsia-300/20 blur-3xl -z-10" />

      <div className="container-section relative">
        <h2 className="text-3xl font-bold sm:text-4xl bg-gradient-to-r from-purple-300 to-fuchsia-400 bg-clip-text text-transparent">
          Trade Anytime, Anywhere
        </h2>

        {/* QR code in front */}
        <div className="relative mt-16 flex justify-center">
          <div className="relative z-10 rounded-2xl border border-purple-400/30 bg-black/60 p-6 shadow-lg backdrop-blur">
            <Image
              src={qrCode}
              alt="QR Code"
              width={250}
              height={250}
              className="rounded-lg"
            />
            <p className="mt-4 text-sm text-gray-300">
              Scan to download our trading app
            </p>
          </div>

          {/* scrolling images behind */}
          <div className="absolute top-1/2 left-0 z-0 w-full -translate-y-1/2 overflow-hidden">
            <motion.div
              className="flex w-[200%] gap-10"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            >
              {images.map((src, i) => (
                <Image
                  key={i}
                  src={src}
                  alt={`bg-img-${i}`}
                  width={400}
                  height={300}
                  className="h-48 w-auto rounded-xl border border-purple-400/20 object-cover opacity-70"
                />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
