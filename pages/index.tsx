import Link from 'next/link';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Geo</title>
        <meta name="description" content="跨媒介创作者" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;700;900&display=swap" rel="stylesheet" />
      </Head>

      <div style={{ background: '#0a0a0a', minHeight: '100vh', fontFamily: "'Inter', sans-serif", color: '#fff' }}>
        {/* Nav */}
        <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '32px 48px', position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100 }}>
          <img src="/geo_logo.png" alt="Geo" style={{ height: '36px', width: 'auto', filter: 'invert(1)' }} />
          <Link href="/works" style={{ color: '#fff', textDecoration: 'none', fontSize: '14px', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Works</Link>
        </nav>

        {/* Hero */}
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '0 48px 80px' }}>
          {/* 大标题背景装饰 */}
          <div style={{ position: 'absolute', top: '50%', left: 0, right: 0, transform: 'translateY(-50%)', overflow: 'hidden', pointerEvents: 'none' }}>
            <div style={{
              fontSize: 'clamp(120px, 22vw, 300px)',
              fontWeight: 900,
              lineHeight: 0.85,
              color: 'transparent',
              WebkitTextStroke: '1px rgba(255,255,255,0.06)',
              letterSpacing: '-0.04em',
              padding: '0 40px',
              userSelect: 'none'
            }}>
              GEO
            </div>
          </div>

          {/* 底部内容 */}
          <div style={{ position: 'relative', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: '40px' }}>
            <div>
              <h1 style={{ fontSize: 'clamp(48px, 8vw, 100px)', fontWeight: 900, lineHeight: 1, letterSpacing: '-0.03em', margin: 0 }}>
                GEO
              </h1>
              <p style={{ fontSize: '14px', color: '#888', letterSpacing: '0.15em', textTransform: 'uppercase', marginTop: '16px' }}>
                跨媒介创作者
              </p>
            </div>

            <div style={{ maxWidth: '400px', textAlign: 'right' }}>
              <p style={{ fontSize: '15px', lineHeight: 1.7, color: '#aaa', margin: '0 0 32px' }}>
                工作涵盖声音、视觉、交互与生成系统。具备工程背景与综合设计能力，从创意构思、系统搭建到最终呈现，完成兼具逻辑性、可实施性与审美控制力的整体方案。
              </p>
              <Link href="/works" style={{
                display: 'inline-block',
                background: '#ff5c00',
                color: '#fff',
                textDecoration: 'none',
                padding: '14px 32px',
                fontSize: '13px',
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase'
              }}>
                View Works →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
