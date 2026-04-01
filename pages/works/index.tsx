import Link from 'next/link';
import Head from 'next/head';

const works = [
  { id: 'work-01', title: 'Project 01', year: '2024', category: 'Sound & Visual' },
  { id: 'work-02', title: 'Project 02', year: '2024', category: 'Interactive' },
  { id: 'work-03', title: 'Project 03', year: '2023', category: 'Generative' },
  { id: 'work-04', title: 'Project 04', year: '2023', category: 'Sound' },
  { id: 'work-05', title: 'Project 05', year: '2023', category: 'Visual' },
  { id: 'work-06', title: 'Project 06', year: '2022', category: 'Interactive' },
];

export default function Works() {
  return (
    <>
      <Head>
        <title>Works — Geo</title>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;700;900&display=swap" rel="stylesheet" />
      </Head>

      <div style={{ background: '#fff', minHeight: '100vh', fontFamily: "'Inter', sans-serif" }}>
        {/* Nav */}
        <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '32px 48px', borderBottom: '1px solid #eee' }}>
          <Link href="/" style={{ fontWeight: 700, fontSize: '18px', letterSpacing: '0.05em', color: '#000', textDecoration: 'none' }}>GEO</Link>
          <span style={{ fontSize: '14px', color: '#888', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Selected Works</span>
        </nav>

        {/* Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
          gap: '2px',
          padding: '2px'
        }}>
          {works.map((work, i) => (
            <Link key={work.id} href={`/works/${work.id}`} style={{ textDecoration: 'none' }}>
              <div style={{ position: 'relative', background: '#f0f0f0', aspectRatio: '4/3', overflow: 'hidden', cursor: 'pointer' }}>
                {/* 占位图 */}
                <div style={{
                  width: '100%',
                  height: '100%',
                  background: `hsl(${i * 40}, 10%, ${85 + i * 2}%)`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <span style={{ fontSize: '48px', fontWeight: 900, color: 'rgba(0,0,0,0.1)', letterSpacing: '-0.05em' }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>

                {/* Hover overlay */}
                <div className="work-overlay" style={{
                  position: 'absolute', inset: 0,
                  background: 'rgba(0,0,0,0.75)',
                  display: 'flex', flexDirection: 'column',
                  justifyContent: 'flex-end', padding: '24px',
                  opacity: 0, transition: 'opacity 0.2s'
                }}>
                  <p style={{ color: '#888', fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase', margin: '0 0 8px' }}>
                    {work.category} — {work.year}
                  </p>
                  <h2 style={{ color: '#fff', fontSize: '22px', fontWeight: 700, margin: 0 }}>{work.title}</h2>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <style jsx global>{`
        a:hover .work-overlay { opacity: 1 !important; }
      `}</style>
    </>
  );
}
