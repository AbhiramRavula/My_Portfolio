import { Briefcase, Calendar } from 'lucide-react';

export const Experience = () => {
  const experiences = [
    {
      title: 'Unity Developer Intern',
      company: 'SR Edu Technologies Pvt. Ltd., Hyderabad',
      date: 'Jul 2026 - Oct 2026',
      description: [
        'Built gameplay systems and UI in Unity with C#, translating design concepts into playable mobile features.',
        'Engineered a two-project AssetBundle content pipeline allowing lightweight loader apps to download and load runtime content.',
        'Packaged and tested Android APK builds on physical devices, debugging input, UI, and scene-loading issues.'
      ]
    },
    {
      title: 'Frontend Intern',
      company: 'Poditivity',
      date: 'Apr 2025 - Mar 2026',
      description: [
        'Developed multiple responsive web pages using Next.js, TypeScript, and Tailwind CSS.',
        'Collaborated iteratively with designers through review cycles to ensure high-fidelity UI implementation.'
      ]
    },
    {
      title: 'Freelance Web Developer',
      company: 'Kantams Consulting',
      date: '2025',
      description: [
        'Designed and developed a static WordPress website with customized themes, plugins, and forms.',
        'Implemented SEO improvements and successfully deployed the live site on Hostinger.'
      ]
    }
  ];

  return (
    <section id="experience" className="section" style={{ background: 'rgba(255,255,255,0.01)' }}>
      <div className="container">
        <h2 className="heading-secondary">
          <span className="text-gradient">Experience</span>
        </h2>
        
        <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative' }}>
          {/* Vertical Line */}
          <div style={{
            position: 'absolute',
            left: '20px',
            top: '0',
            bottom: '0',
            width: '2px',
            background: 'var(--glass-border)',
            zIndex: 0
          }}></div>

          {experiences.map((exp, index) => (
            <div key={index} className="glass-panel" style={{ 
              position: 'relative',
              marginLeft: '50px',
              marginBottom: '2rem',
              padding: '2rem',
              zIndex: 1
            }}>
              {/* Timeline Dot */}
              <div style={{
                position: 'absolute',
                left: '-39px',
                top: '32px',
                width: '16px',
                height: '16px',
                borderRadius: '50%',
                background: 'var(--accent-color)',
                boxShadow: '0 0 10px var(--accent-color)'
              }}></div>
              
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1rem' }}>
                <div>
                  <h3 style={{ fontSize: '1.25rem', marginBottom: '0.25rem' }}>{exp.title}</h3>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-color)' }}>
                    <Briefcase size={16} />
                    <span style={{ fontWeight: 500 }}>{exp.company}</span>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
                  <Calendar size={16} />
                  <span>{exp.date}</span>
                </div>
              </div>
              
              <ul style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                {exp.description.map((item, i) => (
                  <li key={i} style={{ marginBottom: '0.5rem', position: 'relative', paddingLeft: '1.25rem' }}>
                    <span style={{ position: 'absolute', left: 0, top: '8px', width: '6px', height: '6px', borderRadius: '50%', background: 'var(--glass-border)' }}></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
