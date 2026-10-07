import { GraduationCap, Award, Users } from 'lucide-react';

export const Education = () => {
  return (
    <section id="education" className="section">
      <div className="container">
        <h2 className="heading-secondary">
          Education & <span className="text-gradient">Leadership</span>
        </h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          
          {/* Education Column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div className="glass-panel" style={{ padding: '2rem', flexGrow: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                <div style={{ padding: '0.75rem', background: 'rgba(99, 102, 241, 0.1)', borderRadius: '12px', color: 'var(--accent-color)' }}>
                  <GraduationCap size={24} />
                </div>
                <h3 style={{ fontSize: '1.5rem' }}>Education</h3>
              </div>
              
              <div style={{ marginBottom: '1.5rem' }}>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 600 }}>B.E. in Information Technology</h4>
                <p style={{ color: 'var(--accent-color)', marginBottom: '0.25rem' }}>Matrusri Engineering College</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
                  <span>CGPA: 7.43</span>
                  <span>Completed 2026</span>
                </div>
              </div>
              
              <div>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 600 }}>Higher Secondary (10+2) & 10th</h4>
                <p style={{ color: 'var(--accent-color)', marginBottom: '0.25rem' }}>The Hyderabad Public School</p>
                <div style={{ display: 'flex', justifyContent: 'flex-end', color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
                  <span>Completed</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column: Leadership & Certifications */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            
            {/* Leadership */}
            <div className="glass-panel" style={{ padding: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                <div style={{ padding: '0.75rem', background: 'rgba(236, 72, 153, 0.1)', borderRadius: '12px', color: '#ec4899' }}>
                  <Users size={24} />
                </div>
                <h3 style={{ fontSize: '1.5rem' }}>Leadership</h3>
              </div>
              
              <div>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 600 }}>President</h4>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                  <span style={{ color: '#ec4899' }}>TechTycoons IT Club</span>
                  <span style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>2025 - 2026</span>
                </div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                  Organized 3+ technical events and a small-scale hackathon attended by 50+ participants; led the redevelopment of the club website.
                </p>
              </div>
            </div>
            
            {/* Certifications */}
            <div className="glass-panel" style={{ padding: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                <div style={{ padding: '0.75rem', background: 'rgba(168, 85, 247, 0.1)', borderRadius: '12px', color: '#a855f7' }}>
                  <Award size={24} />
                </div>
                <h3 style={{ fontSize: '1.5rem' }}>Certifications</h3>
              </div>
              
              <ul style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                  <span style={{ color: '#a855f7', marginTop: '2px' }}>▹</span>
                  Oracle Cloud Infrastructure (OCI) Foundations Associate
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                  <span style={{ color: '#a855f7', marginTop: '2px' }}>▹</span>
                  Web Development Course — Apna College
                </li>
              </ul>
            </div>
            
          </div>
          
        </div>
      </div>
    </section>
  );
};
