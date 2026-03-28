import { motion } from 'framer-motion';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Geo / 乔治</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Crimson+Text:ital,wght@0,400;0,600;1,400&display=swap" rel="stylesheet" />
      </Head>

      <div className="min-h-screen bg-[#f9f7f4] text-[#2a2a2a] flex items-center justify-center px-6 md:px-12 py-20">
        <motion.main 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="max-w-3xl w-full"
          style={{ fontFamily: "'Crimson Text', Georgia, serif" }}
        >
          {/* 主标题 */}
          <motion.h1 
            className="text-5xl md:text-6xl font-semibold mb-16 tracking-tight"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Geo / 乔治
          </motion.h1>

          {/* 诗意文本块 */}
          <motion.div 
            className="space-y-12 text-lg md:text-xl leading-relaxed text-gray-700"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            style={{ lineHeight: '1.9' }}
          >
            <p className="italic">
              动态视觉设计师<br />
              声音影像艺术家
            </p>

            <p>
              将建筑群的脉搏<br />
              转化为听觉的节奏
            </p>

            <p>
              在光影与声音的交界处<br />
              寻找那种人为的音乐性
            </p>
          </motion.div>

          {/* 底部导航 */}
          <motion.nav 
            className="mt-24 pt-12 border-t border-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <a 
              href="/works" 
              className="inline-block text-sm uppercase tracking-[0.2em] text-gray-600 hover:text-gray-900 transition-colors duration-300"
            >
              Selected Works →
            </a>
          </motion.nav>
        </motion.main>
      </div>
    </>
  );
}
