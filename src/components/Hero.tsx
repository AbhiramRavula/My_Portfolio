import { ChevronRight, Download } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="section" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '100px' }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
        
        <div className="animate-fade-in">
          <p style={{ color: 'var(--accent-color)', fontWeight: 600, marginBottom: '1rem', letterSpacing: '2px', textTransform: 'uppercase' }}>
            Software Engineer & Developer
          </p>
          <h1 className="heading-primary">
            Hi, I'm <br />
            <span className="text-gradient">Abhiram Ravula</span>
          </h1>
          <p className="text-subtle" style={{ marginBottom: '2rem', maxWidth: '500px' }}>
            2026 Information Technology graduate. I specialize in building scalable web applications with Next.js & React, and crafting immersive game experiences using Unity & C#.
          </p>
          
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="#projects" className="btn btn-primary">
              View Work <ChevronRight size={18} />
            </a>
            <a href="mailto:abhiramravula7@gmail.com" className="btn btn-secondary">
              Contact Me <Download size={18} />
            </a>
          </div>
        </div>

        <div className="animate-fade-in delay-200" style={{ position: 'relative' }}>
          <div className="glass-panel" style={{ padding: '2rem', position: 'relative', zIndex: 2 }}>
            <h3 style={{ marginBottom: '1.5rem', fontSize: '1.25rem' }}>Core Technologies</h3>
            
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
              {['Unity', 'C#', 'Next.js', 'React', 'TypeScript', 'Tailwind CSS'].map(tech => (
                <span key={tech} style={{
                  padding: '0.5rem 1rem',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid var(--glass-border)',
                  borderRadius: '20px',
                  fontSize: '0.875rem'
                }}>
                  {tech}
                </span>
              ))}
            </div>
            
            <div style={{ marginTop: '2rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                <span>Game Development</span>
                <span>85%</span>
              </div>
              <div style={{ width: '100%', height: '6px', background: 'var(--glass-border)', borderRadius: '3px', overflow: 'hidden' }}>
                <div style={{ width: '85%', height: '100%', background: 'var(--accent-gradient)' }}></div>
              </div>
            </div>
            
            <div style={{ marginTop: '1.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                <span>Frontend Web Dev</span>
                <span>90%</span>
              </div>
              <div style={{ width: '100%', height: '6px', background: 'var(--glass-border)', borderRadius: '3px', overflow: 'hidden' }}>
                <div style={{ width: '90%', height: '100%', background: 'var(--accent-gradient)' }}></div>
              </div>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div style={{
            position: 'absolute',
            top: '-20px',
            right: '-20px',
            width: '100px',
            height: '100px',
            background: 'var(--accent-gradient)',
            filter: 'blur(50px)',
            opacity: 0.5,
            zIndex: 1
          }}></div>
        </div>
        
      </div>
    </section>
  );
};
