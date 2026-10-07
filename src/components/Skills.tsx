import type { ReactNode } from 'react';
import { FaJava, FaPython, FaUnity, FaCubes, FaAndroid, FaBrain, FaGamepad, FaDesktop, FaReact, FaHtml5, FaCss3Alt, FaBootstrap, FaWordpress, FaGitAlt, FaServer, FaDatabase } from 'react-icons/fa';
import { SiJavascript, SiTypescript, SiC, SiCplusplus, SiNextdotjs, SiTailwindcss, SiFirebase, SiVercel } from 'react-icons/si';
import { DiCsharp } from 'react-icons/di';

type Skill = {
  name: string;
  icon: ReactNode;
};

type SkillCategory = {
  title: string;
  skills: Skill[];
};

export const Skills = () => {
  const skillCategories: SkillCategory[] = [
    {
      title: 'Languages',
      skills: [
        { name: 'C#', icon: <DiCsharp /> },
        { name: 'JavaScript', icon: <SiJavascript /> },
        { name: 'TypeScript', icon: <SiTypescript /> },
        { name: 'Python', icon: <FaPython /> },
        { name: 'Java', icon: <FaJava /> },
        { name: 'C', icon: <SiC /> },
        { name: 'C++', icon: <SiCplusplus /> }
      ]
    },
    {
      title: 'Game Development',
      skills: [
        { name: 'Unity', icon: <FaUnity /> },
        { name: 'AssetBundles', icon: <FaCubes /> },
        { name: 'Android builds', icon: <FaAndroid /> },
        { name: 'FSM AI', icon: <FaBrain /> },
        { name: 'Gameplay Systems', icon: <FaGamepad /> },
        { name: 'UI Systems', icon: <FaDesktop /> }
      ]
    },
    {
      title: 'Web Technologies',
      skills: [
        { name: 'Next.js', icon: <SiNextdotjs /> },
        { name: 'React', icon: <FaReact /> },
        { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
        { name: 'HTML5', icon: <FaHtml5 /> },
        { name: 'CSS3', icon: <FaCss3Alt /> },
        { name: 'Bootstrap', icon: <FaBootstrap /> },
        { name: 'WordPress', icon: <FaWordpress /> }
      ]
    },
    {
      title: 'Tools & Platforms',
      skills: [
        { name: 'Git', icon: <FaGitAlt /> },
        { name: 'Firebase', icon: <SiFirebase /> },
        { name: 'Vercel', icon: <SiVercel /> },
        { name: 'Hostinger', icon: <FaServer /> },
        { name: 'Oracle Cloud (OCI)', icon: <FaDatabase /> }
      ]
    }
  ];

  return (
    <section id="skills" className="section" style={{ background: 'rgba(255,255,255,0.01)' }}>
      <div className="container">
        <h2 className="heading-secondary">
          Technical <span className="text-gradient">Skills</span>
        </h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
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
                    padding: '0.6rem 1rem',
                    borderRadius: '8px',
                    fontSize: '0.9rem',
                    color: 'var(--text-secondary)',
                    transition: 'all 0.3s ease',
                    cursor: 'default',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.color = 'white';
                    e.currentTarget.style.borderColor = 'rgba(99, 102, 241, 0.5)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.background = 'rgba(99, 102, 241, 0.1)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.color = 'var(--text-secondary)';
                    e.currentTarget.style.borderColor = 'var(--glass-border)';
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.background = 'var(--glass-bg)';
                  }}
                  >
                    <span style={{ fontSize: '1.1rem', display: 'flex' }}>
                      {skill.icon}
                    </span>
                    {skill.name}
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
