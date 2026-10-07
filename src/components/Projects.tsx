import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

export const Projects = () => {
  const projects = [
    {
      title: 'Web-Based Automated Timetable Scheduler',
      date: '2026',
      tags: ['MERN', 'LLM', 'Optimization', 'React'],
      description: 'Built a MERN-stack platform that automates college scheduling using LLM-augmented constraint optimization, applying a Simulated Annealing algorithm to produce conflict-free timetables.',
      color: '#6366f1' // Indigo
    },
    {
      title: 'Smash Karts Clone',
      date: 'Aug 2025',
      tags: ['Unity', 'C#', 'FSM AI', 'WebGL'],
      description: 'Developed a single-player 3D combat racer featuring finite-state-machine AI opponents, rocket combat, health and respawn systems, and pickups. Published as a WebGL build.',
      color: '#ec4899' // Pink
    }
  ];

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="heading-secondary">
          Featured <span className="text-gradient">Projects</span>
        </h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
          {projects.map((project, index) => (
            <div key={index} className="glass-panel" style={{ 
              padding: '2rem',
              display: 'flex',
              flexDirection: 'column',
              position: 'relative',
              overflow: 'hidden'
            }}>
              {/* Top Accent Line */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '4px',
                background: project.color
              }}></div>
              
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 600 }}>{project.title}</h3>
                <div style={{ display: 'flex', gap: '0.75rem' }}>
                  <a href="#" style={{ color: 'var(--text-secondary)', transition: 'color 0.3s' }} onMouseOver={(e) => e.currentTarget.style.color = 'white'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}>
                    <FaGithub size={20} />
                  </a>
                  <a href="#" style={{ color: 'var(--text-secondary)', transition: 'color 0.3s' }} onMouseOver={(e) => e.currentTarget.style.color = 'white'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}>
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
              
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', flexGrow: 1 }}>
                {project.description}
              </p>
              
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: 'auto' }}>
                {project.tags.map(tag => (
                  <span key={tag} style={{
                    fontSize: '0.75rem',
                    padding: '0.25rem 0.75rem',
                    background: 'rgba(255, 255, 255, 0.05)',
                    borderRadius: '4px',
                    color: project.color
                  }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
