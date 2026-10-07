export const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      skills: ['C#', 'JavaScript', 'TypeScript', 'Python', 'Java', 'C', 'C++']
    },
    {
      title: 'Game Development',
      skills: ['Unity', 'AssetBundles', 'Android builds', 'FSM AI', 'Gameplay Systems', 'UI Systems']
    },
    {
      title: 'Web Technologies',
      skills: ['Next.js', 'React', 'Tailwind CSS', 'HTML5', 'CSS3', 'Bootstrap', 'WordPress']
    },
    {
      title: 'Tools & Platforms',
      skills: ['Git', 'Firebase', 'Vercel', 'Hostinger', 'Oracle Cloud (OCI)']
    }
  ];

  return (
    <section id="skills" className="section" style={{ background: 'rgba(255,255,255,0.01)' }}>
      <div className="container">
        <h2 className="heading-secondary">
          Technical <span className="text-gradient">Skills</span>
        </h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
          {skillCategories.map((category, index) => (
            <div key={index} className="glass-panel" style={{ padding: '2rem' }}>
              <h3 style={{ marginBottom: '1.5rem', fontSize: '1.25rem', color: 'var(--text-primary)', borderBottom: '1px solid var(--glass-border)', paddingBottom: '0.75rem' }}>
                {category.title}
              </h3>
              
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                {category.skills.map((skill, i) => (
                  <div key={i} style={{
                    background: 'var(--glass-bg)',
                    border: '1px solid var(--glass-border)',
                    padding: '0.5rem 1rem',
                    borderRadius: '8px',
                    fontSize: '0.9rem',
                    color: 'var(--text-secondary)',
                    transition: 'all 0.3s ease',
                    cursor: 'default'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.color = 'white';
                    e.currentTarget.style.borderColor = 'rgba(99, 102, 241, 0.5)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.color = 'var(--text-secondary)';
                    e.currentTarget.style.borderColor = 'var(--glass-border)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
