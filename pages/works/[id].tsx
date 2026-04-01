import Link from 'next/link';
import Head from 'next/head';
import { useRouter } from 'next/router';

const worksData: Record<string, { title: string; year: string; category: string; client: string; description: string }> = {
  'work-01': {
    title: 'Project 01',
    year: '2024',
    category: 'Sound & Visual',
    client: 'Self-initiated',
    description: 'A generative audiovisual system that translates architectural rhythms into sonic patterns. Built with Max/MSP and custom visual processing pipeline.',
  },
  'work-02': {
    title: 'Project 02',
    year: '2024',
    category: 'Interactive',
    client: 'Self-initiated',
    description: 'Interactive installation exploring the boundary between sound and image through real-time data mapping and generative composition.',
  },
  'work-03': {
    title: 'Project 03',
    year: '2023',
    category: 'Generative',
    client: 'Self-initiated',
    description: 'Generative visual system driven by sound analysis. Each performance produces a unique visual artifact determined by acoustic input.',
  },
};

export default function WorkDetail() {
  const router = useRouter();
  const { id } = router.query;
  const work = worksData[id as string];

  if (!work) return null;

  return (
    <>
      <Head>
        <title>{work.title} — Geo</title>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;700;900&display=swap" rel="stylesheet" />
      </Head>

      <div style={{ background: '#fff', minHeight: '100vh', fontFamily: "'Inter', sans-serif" }}>
        {/* Nav */}
        <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '32px 48px', borderBottom: '1px solid #eee' }}>
          <Link href="/" style={{ fontWeight: 700, fontSize: '18px', letterSpacing: '0.05em', color: '#000', textDecoration: 'none' }}>GEO</Link>
          <Link href="/works" style={{ fontSize: '14px', color: '#888', textDecoration: 'none', letterSpacing: '0.1em', textTransform: 'uppercase' }}>← Works</Link>
        </nav>

        {/* 全宽大图 */}
        <div style={{ background: '#e8e8e8', width: '100%', aspectRatio: '16/9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <span style={{ fontSize: '80px', fontWeight: 900, color: 'rgba(0,0,0,0.08)', letterSpacing: '-0.05em' }}>
            {work.title.split(' ')[1]}
          </span>
        </div>

        {/* 内容区 */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '80px', padding: '80px 48px', maxWidth: '1200px' }}>
          {/* 左栏：元信息 */}
          <div>
            <h1 style={{ fontSize: '32px', fontWeight: 900, letterSpacing: '-0.02em', margin: '0 0 32px' }}>{work.title}</h1>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {[
                { label: 'Year', value: work.year },
                { label: 'Category', value: work.category },
                { label: 'Client', value: work.client },
              ].map(item => (
                <div key={item.label}>
                  <p style={{ fontSize: '11px', color: '#888', letterSpacing: '0.15em', textTransform: 'uppercase', margin: '0 0 4px' }}>{item.label}</p>
                  <p style={{ fontSize: '15px', color: '#000', margin: 0 }}>{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 右栏：描述 */}
          <div>
            <p style={{ fontSize: '20px', lineHeight: 1.7, color: '#333', margin: 0 }}>{work.description}</p>
          </div>
        </div>
      </div>
    </>
  );
}
