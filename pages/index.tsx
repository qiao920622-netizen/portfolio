import { useState } from 'react';
import { motion } from 'framer-motion';
import Head from 'next/head';

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#f9f7f4] flex flex-col items-center justify-center overflow-hidden font-serif">
      <Head>
        <title>Geo / 乔治</title>
      </Head>

      {/* 极简标题层 */}
      <motion.div 
        className="z-10 text-center cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <h1 className="text-6xl tracking-tighter mb-4 text-[#1a1a1a]">Geo</h1>
        <p className="text-sm uppercase tracking-[0.3em] text-gray-500">Visual & Sound Art</p>
      </motion.div>

      {/* 沉浸式视觉背景层 */}
      <motion.div 
        className="absolute inset-0 bg-[#e5e2de] opacity-0 transition-opacity duration-1000"
        animate={{ opacity: isHovered ? 0.3 : 0 }}
      />
      
      {/* 底部极简导航 */}
      <footer className="absolute bottom-12 w-full text-center">
        <a href="/works" className="text-xs uppercase tracking-widest text-[#1a1a1a] opacity-60 hover:opacity-100 transition-opacity">
          View Selected Works
        </a>
      </footer>
    </div>
  );
}
