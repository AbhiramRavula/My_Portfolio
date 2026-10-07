import { Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export const Footer = () => {
  return (
    <footer style={{ 
      borderTop: '1px solid var(--glass-border)', 
      background: 'rgba(5, 5, 5, 0.5)',
      padding: '3rem 0',
      marginTop: '4rem'
    }}>
      <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}>
        
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700 }}>
          <span className="text-gradient">Abhiram Ravula</span>
        </h2>
        
        <div style={{ display: 'flex', gap: '1.5rem' }}>
          <a href="https://github.com/AbhiramRavula" target="_blank" rel="noreferrer" style={{
            padding: '0.75rem',
            background: 'var(--glass-bg)',
            border: '1px solid var(--glass-border)',
            borderRadius: '50%',
            color: 'var(--text-secondary)',
            transition: 'all 0.3s ease',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.color = 'white';
            e.currentTarget.style.borderColor = 'var(--accent-color)';
            e.currentTarget.style.transform = 'translateY(-3px)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.color = 'var(--text-secondary)';
            e.currentTarget.style.borderColor = 'var(--glass-border)';
            e.currentTarget.style.transform = 'translateY(0)';
          }}>
            <FaGithub size={20} />
          </a>
          
          <a href="https://linkedin.com/in/ravula-abhiram-880b29216" target="_blank" rel="noreferrer" style={{
            padding: '0.75rem',
            background: 'var(--glass-bg)',
            border: '1px solid var(--glass-border)',
            borderRadius: '50%',
            color: 'var(--text-secondary)',
            transition: 'all 0.3s ease',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.color = 'white';
            e.currentTarget.style.borderColor = 'var(--accent-color)';
            e.currentTarget.style.transform = 'translateY(-3px)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.color = 'var(--text-secondary)';
            e.currentTarget.style.borderColor = 'var(--glass-border)';
            e.currentTarget.style.transform = 'translateY(0)';
          }}>
            <FaLinkedin size={20} />
          </a>
          
          <a href="mailto:abhiramravula7@gmail.com" style={{
            padding: '0.75rem',
            background: 'var(--glass-bg)',
            border: '1px solid var(--glass-border)',
            borderRadius: '50%',
            color: 'var(--text-secondary)',
            transition: 'all 0.3s ease',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.color = 'white';
            e.currentTarget.style.borderColor = 'var(--accent-color)';
            e.currentTarget.style.transform = 'translateY(-3px)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.color = 'var(--text-secondary)';
            e.currentTarget.style.borderColor = 'var(--glass-border)';
            e.currentTarget.style.transform = 'translateY(0)';
          }}>
            <Mail size={20} />
          </a>
        </div>
        
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
          &copy; {new Date().getFullYear()} Abhiram Ravula. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
