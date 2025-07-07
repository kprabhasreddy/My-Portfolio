import styled from 'styled-components';
// import MouseScrollIcon from './assets/MouseScrollIcon';
import { motion } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { useInView } from 'framer-motion';
import { FaTwitter, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 2rem 3rem;
  background: transparent;
  z-index: 100;
`;

const NavList = styled.ul`
  display: flex;
  gap: 2rem;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const NavItem = styled.li`
  font-size: 1.1rem;
  font-weight: 500;
  cursor: pointer;
  color: #222;
  transition: color 0.2s;
  &:hover {
    color: #646cff;
  }
`;

const Section = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0 10vw;
  scroll-snap-align: start;
`;

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'work', label: 'Work' },
  { id: 'contact', label: 'Contact' },
];

function App() {
  const [active, setActive] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const offsets = navItems.map(item => {
        const el = document.getElementById(item.id);
        if (!el) return { id: item.id, top: 0 };
        const rect = el.getBoundingClientRect();
        return { id: item.id, top: Math.abs(rect.top) };
      });
      const sorted = offsets.sort((a, b) => a.top - b.top);
      setActive(sorted[0].id);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Nav>
        <NavList>
          {navItems.map(item => (
            <motion.li
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              style={{ position: 'relative', listStyle: 'none', cursor: 'pointer' }}
              animate={active === item.id ? { color: '#646cff', scale: 1.1 } : { color: '#222', scale: 1 }}
              transition={{ type: 'spring', stiffness: 400, damping: 30 }}
            >
              {item.label}
              {active === item.id && (
                <motion.div
                  layoutId="nav-underline"
                  style={{
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    bottom: -4,
                    height: 3,
                    borderRadius: 2,
                    background: '#646cff',
                  }}
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
            </motion.li>
          ))}
        </NavList>
      </Nav>
      <main style={{scrollSnapType: 'y mandatory'}}>
        <Section id="home" style={{position: 'relative', justifyContent: 'center', alignItems: 'center'}}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            style={{ textAlign: 'left', maxWidth: 600 }}
          >
            <h1 style={{ fontSize: '2.8rem', margin: 0, fontWeight: 700 }}>
              Hi, my name is <span style={{ color: '#646cff' }}>David</span>.<br />
              I love creating beautiful user experiences.
            </h1>
          </motion.div>
          <div style={{position: 'absolute', left: '50%', bottom: '40px', transform: 'translateX(-50%)'}}>
            <MouseScrollIcon />
          </div>
        </Section>
        <Section id="about">
          <AnimatedAbout />
        </Section>
        <Section id="work">
          <AnimatedWork />
        </Section>
        <Section id="contact">
          <AnimatedContact />
        </Section>
      </main>
    </>
  );
}

// Animated About Section
function AnimatedAbout() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1 }}
      style={{ maxWidth: 600 }}
    >
      <h2 style={{ fontSize: '2rem', marginBottom: 8 }}>ABOUT</h2>
      <p style={{ fontSize: '1.2rem', margin: '0 0 1.5rem 0' }}>
        At the age of 15, David first came in touch with UX Design and app development. During his 4 years of military service, programming has always been a passion of his. Now, after professional coaching, David is looking for new challenges to work as a web developer.
      </p>
      <ul style={{ padding: 0, listStyle: 'none', display: 'flex', gap: '2rem', fontSize: '1.1rem', margin: 0 }}>
        <li><b>Name:</b> David</li>
        <li><b>Age:</b> 23</li>
        <li><b>From:</b> Germany</li>
      </ul>
      <div style={{ marginTop: '1.5rem' }}>
        <b>SKILLS</b>
        <ul style={{ padding: 0, listStyle: 'none', display: 'flex', gap: '1.5rem', margin: '0.5rem 0 0 0' }}>
          <li>UX Design</li>
          <li>App Development</li>
          <li>Web Development</li>
        </ul>
      </div>
    </motion.div>
  );
}

// Animated Work Section
function AnimatedWork() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1 }}
      style={{ maxWidth: 700 }}
    >
      <h2 style={{ fontSize: '2rem', marginBottom: 8 }}>SOME THINGS I'VE WORKED ON</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', marginTop: '2rem' }}>
        {[1,2,3].map((i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 * i }}
            style={{ background: '#f5f5f5', borderRadius: 12, padding: '1.5rem 2rem', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}
          >
            <h3 style={{ margin: 0, fontWeight: 600 }}>Project {i}</h3>
            <p style={{ margin: '0.5rem 0 0 0', color: '#444' }}>Short description of project {i} goes here. This is a placeholder for your work showcase.</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

// Animated Contact Section
function AnimatedContact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1 }}
      style={{ maxWidth: 500 }}
    >
      <h2 style={{ fontSize: '2rem', marginBottom: 8 }}>CONTACT ME</h2>
      <form style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', marginTop: '2rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          <label htmlFor="name">Name :</label>
          <input id="name" name="name" type="text" placeholder="Please enter your name." style={{ padding: '0.7rem', borderRadius: 6, border: '1px solid #ccc', fontSize: '1rem' }} required />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          <label htmlFor="email">Email :</label>
          <input id="email" name="email" type="email" placeholder="Please enter a valid email address." style={{ padding: '0.7rem', borderRadius: 6, border: '1px solid #ccc', fontSize: '1rem' }} required />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          <label htmlFor="message">Message :</label>
          <textarea id="message" name="message" placeholder="Please enter your message." rows={4} style={{ padding: '0.7rem', borderRadius: 6, border: '1px solid #ccc', fontSize: '1rem' }} required />
        </div>
        <button type="submit" style={{ padding: '0.8rem', borderRadius: 8, background: '#646cff', color: '#fff', fontWeight: 600, fontSize: '1.1rem', border: 'none', cursor: 'pointer', marginTop: '0.5rem' }}>
          Submit
        </button>
      </form>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, delay: 0.5 }}
        style={{ display: 'flex', gap: '1.5rem', marginTop: '2.5rem', justifyContent: 'center' }}
      >
        <SocialIcon href="https://twitter.com" target="_blank" aria-label="Twitter">
          <FaTwitter />
        </SocialIcon>
        <SocialIcon href="https://github.com" target="_blank" aria-label="GitHub">
          <FaGithub />
        </SocialIcon>
        <SocialIcon href="https://linkedin.com" target="_blank" aria-label="LinkedIn">
          <FaLinkedin />
        </SocialIcon>
        <SocialIcon href="mailto:your@email.com" aria-label="Email">
          <FaEnvelope />
        </SocialIcon>
      </motion.div>
      <motion.footer
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 1, delay: 1 }}
        style={{ marginTop: '3rem', textAlign: 'center', fontSize: '0.95rem', color: '#888' }}
      >
        <div style={{ marginBottom: 4 }}>© David Heckhoff</div>
        <a href="#" style={{ color: '#646cff', marginRight: 12 }}>Legal Notice</a>
        <a href="#" style={{ color: '#646cff' }}>Privacy Policy</a>
      </motion.footer>
    </motion.div>
  );
}

// SocialIcon styled-component
const SocialIcon = styled.a`
  font-size: 1.75rem;
  color: #222;
  background: #fff;
  border-radius: 50%;
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 8px rgba(0,0,0,0.06);
  transition: background 0.2s, color 0.2s, transform 0.2s;
  &:hover {
    background: #646cff;
    color: #fff;
    transform: translateY(-4px) scale(1.08);
  }
`;

export default App;
