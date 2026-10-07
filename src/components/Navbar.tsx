import { Code2, Mail, Menu, X } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { useState, useEffect } from 'react';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' },
  ];

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      width: '100%',
      zIndex: 50,
      transition: 'all 0.3s ease',
      padding: isScrolled ? '1rem 0' : '1.5rem 0',
      background: isScrolled ? 'rgba(5, 5, 5, 0.8)' : 'transparent',
      backdropFilter: isScrolled ? 'blur(12px)' : 'none',
      borderBottom: isScrolled ? '1px solid var(--glass-border)' : '1px solid transparent'
    }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.25rem', fontWeight: 700 }}>
          <Code2 size={24} color="var(--accent-color)" />
          <span className="text-gradient">Abhiram</span>
        </a>

        {/* Desktop Nav */}
        <ul style={{ gap: '2rem', display: 'none' }} className="desktop-nav">
          {navLinks.map(link => (
            <li key={link.name}>
              <a href={link.href} style={{ color: 'var(--text-secondary)', transition: 'color 0.3s' }}
                 onMouseOver={(e) => e.currentTarget.style.color = 'var(--text-primary)'}
                 onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}>
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop Socials */}
        <div style={{ gap: '1rem', display: 'none' }} className="desktop-socials">
          <a href="https://github.com/AbhiramRavula" target="_blank" rel="noreferrer" style={{ color: 'var(--text-secondary)' }}>
            <FaGithub size={20} />
          </a>
          <a href="https://linkedin.com/in/ravula-abhiram-880b29216" target="_blank" rel="noreferrer" style={{ color: 'var(--text-secondary)' }}>
            <FaLinkedin size={20} />
          </a>
          <a href="mailto:abhiramravula7@gmail.com" style={{ color: 'var(--text-secondary)' }}>
            <Mail size={20} />
          </a>
        </div>

        {/* Mobile Toggle Placeholder (implement later if needed) */}
        <button style={{ background: 'transparent', border: 'none', color: 'var(--text-primary)', cursor: 'pointer' }}
                className="mobile-toggle"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Basic Mobile Menu Inline CSS */}
      <style>{`
        @media (min-width: 768px) {
          .desktop-nav, .desktop-socials { display: flex !important; }
          .mobile-toggle { display: none !important; }
        }
        .mobile-menu {
          display: ${isMobileMenuOpen ? 'flex' : 'none'};
          flex-direction: column;
          position: absolute;
          top: 100%;
          left: 0;
          width: 100%;
          background: rgba(5, 5, 5, 0.95);
          backdrop-filter: blur(12px);
          padding: 1rem 0;
          border-bottom: 1px solid var(--glass-border);
        }
        .mobile-menu a {
          padding: 1rem 1.5rem;
          color: var(--text-primary);
        }
      `}</style>
      
      <div className="mobile-menu">
        {navLinks.map(link => (
          <a key={link.name} href={link.href} onClick={() => setIsMobileMenuOpen(false)}>{link.name}</a>
        ))}
      </div>
    </nav>
  );
};
