import { useEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import * as THREE from 'three';
import {
  Linkedin, Github, Mail, Phone, Code, BookOpen, Layers, Briefcase,
  ExternalLink, ArrowRight, Star, ChevronDown, Sparkles, Zap, Palette,
  Cpu, Database, Cloud, Server, Smartphone, Globe
} from 'lucide-react';

const featuredProjects = [
  {
    name: 'FitPro',
    technologies: ['React.js', 'Redux', 'Firebase'],
    github: 'https://github.com/Sirohi01/FitPro-Demo1',
    description: 'Personalized gym & fitness management platform with workout plans, YouTube integrations, and dashboards.',
    color: 'linear-gradient(135deg, #ec4899, #8b5cf6)'
  },
  {
    name: 'KaloDash',
    technologies: ['React.js', 'Redux', 'Firebase'],
    github: 'https://github.com/Sirohi01/Sirohi-CaloDash',
    description: 'Calorie & fitness management dashboard to track health metrics, water intake, and body measurements.',
    color: 'linear-gradient(135deg, #10b981, #0d9488)'
  },
  {
    name: 'Hospital Management System',
    technologies: ['React.js', 'Vite', 'CSS3'],
    github: 'https://github.com/Sirohi01/Manish_Sirohi_Portfolio',
    description: 'A responsive hospital management system with modules for Patients, Doctors, Staff, and Billing.',
    color: 'linear-gradient(135deg, #3b82f6, #06b6d4)'
  },
  {
    name: 'Crop Yield Prediction System',
    technologies: ['Python', 'KNN', 'Pandas'],
    github: 'https://github.com/Sirohi01/Crop-Prediction',
    description: 'An ML model predicting crop yields based on factors like soil pH, rainfall, and humidity.',
    color: 'linear-gradient(135deg, #f59e0b, #ea580c)'
  },
  {
    name: 'Leaves Disease Detection System',
    technologies: ['TensorFlow', 'CNN', 'OpenCV'],
    github: 'https://github.com/Sirohi01/Sirohi-Leaves-Disease-Detection-System',
    description: 'A deep learning model for plant disease detection and analysis.',
    color: 'linear-gradient(135deg, #10b981, #059669)'
  },
];

const otherProjects = [
  { name: 'User Management App', technologies: ['React.js', 'Node.js', 'Express'], github: 'https://github.com/Sirohi01/User-Management-React-Application', description: 'A full-stack application for user management.', color: 'linear-gradient(135deg, #8b5cf6, #7c3aed)' },
  { name: 'Sirohi-clothing', technologies: ['React.js', 'CSS'], github: 'https://github.com/Sirohi01/sirohi_clothing', description: 'E-commerce website for a clothing brand.', color: 'linear-gradient(135deg, #f43f5e, #db2777)' },
  { name: 'Sirohi-Food-Blog', technologies: ['HTML', 'CSS', 'JS'], github: 'https://github.com/Sirohi01/Sirohi-Food-Blog-Website', description: 'A blog website dedicated to food and recipes.', color: 'linear-gradient(135deg, #eab308, #f59e0b)' },
  { name: 'Three.js Demo', technologies: ['Three.js', 'HTML'], github: 'https://github.com/Sirohi01/Three.js_Demo', description: 'A simple demonstration of a 3D scene.', color: 'linear-gradient(135deg, #6366f1, #3b82f6)' },
  { name: 'Tic-Tac-Toe', technologies: ['HTML', 'CSS', 'JS'], github: 'https://github.com/Sirohi01/Tic-Tac-Toe', description: 'A classic game of Tic-Tac-Toe.', color: 'linear-gradient(135deg, #84cc16, #16a34a)' },
  { name: 'Currency Converter', technologies: ['React.js', 'API'], github: 'https://github.com/Sirohi01/Currency-Converter', description: 'A web app to convert different currencies in real-time.', color: 'linear-gradient(135deg, #06b6d4, #0284c7)' },
  { name: 'React Weather App', technologies: ['React.js', 'API'], github: 'https://github.com/Sirohi01/react-weather', description: 'A weather application that fetches data using a public API.', color: 'linear-gradient(135deg, #0ea5e9, #06b6d4)' },
];

const skillsData = [
  {
    title: "Programming Languages",
    icon: <Code size={24} style={{color: '#60a5fa'}} />,
    items: ['Python', 'JavaScript (ES6+)', 'C++', 'SQL'],
    color: 'linear-gradient(135deg, #3b82f6, #06b6d4)'
  },
  {
    title: "Frontend Frameworks",
    icon: <Palette size={24} style={{color: '#c084fc'}} />,
    items: ['React.js', 'React Native', 'Redux', 'Vite'],
    color: 'linear-gradient(135deg, #8b5cf6, #ec4899)'
  },
  {
    title: "Backend Technologies",
    icon: <Server size={24} style={{color: '#4ade80'}} />,
    items: ['Node.js', 'Express.js', 'REST APIs', 'GraphQL'],
    color: 'linear-gradient(135deg, #10b981, #0d9488)'
  },
  {
    title: "Databases & Cloud",
    icon: <Database size={24} style={{color: '#fb923c'}} />,
    items: ['Firebase', 'MongoDB', 'PostgreSQL', 'AWS'],
    color: 'linear-gradient(135deg, #f97316, #ea580c)'
  },
  {
    title: "AI/ML Tools",
    icon: <Cpu size={24} style={{color: '#f87171'}} />,
    items: ['TensorFlow', 'Keras', 'OpenCV', 'Scikit-learn', 'Pandas', 'NumPy'],
    color: 'linear-gradient(135deg, #ef4444, #f43f5e)'
  },
  {
    title: "DevOps & Others",
    icon: <Zap size={24} style={{color: '#fbbf24'}} />,
    items: ['Git', 'Docker', 'Linux', 'Jupyter Notebook', 'Postman'],
    color: 'linear-gradient(135deg, #eab308, #f59e0b)'
  }
];

const Skills = ({ title, items, icon, color }) => (
  <div style={{
    borderRadius: '1rem',
    padding: '1.5rem',
    backdropFilter: 'blur(12px)',
    transition: 'all 0.3s ease',
    background: `${color}20`,
    border: '1px solid rgba(255, 255, 255, 0.1)',
    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  }} onMouseEnter={(e) => {
    e.currentTarget.style.transform = 'scale(1.05)';
  }} onMouseLeave={(e) => {
    e.currentTarget.style.transform = 'scale(1)';
  }}>
    <div style={{display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem'}}>
      {icon}
      <h3 style={{fontSize: '1.25rem', fontWeight: '700', color: 'rgb(255, 255, 255)'}}>{title}</h3>
    </div>
    <ul style={{display: 'flex', flexWrap: 'wrap', gap: '0.5rem'}}>
      {items.map((item, index) => (
        <li key={index} style={{
          padding: '0.25rem 0.75rem',
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          borderRadius: '9999px',
          fontSize: '0.875rem',
          color: 'rgb(255, 255, 255)',
          backdropFilter: 'blur(4px)'
        }}>
          {item}
        </li>
      ))}
    </ul>
  </div>
);

const Section = ({ icon, title, children, id }) => (
  <section id={id} style={{marginBottom: '4rem', position: 'relative'}}>
    <div style={{display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem'}}>
      <div style={{
        padding: '0.5rem',
        background: 'linear-gradient(135deg, #22d3ee, #3b82f6)',
        borderRadius: '0.5rem'
      }}>
        {icon}
      </div>
      <h2 style={{
        fontSize: '2.25rem',
        fontWeight: '700',
        background: 'linear-gradient(135deg, #22d3ee, #3b82f6)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text'
      }}>
        {title}
      </h2>
    </div>
    {children}
  </section>
);

const FloatingParticles = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const currentMount = mountRef.current;
    if (!currentMount) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, currentMount.clientWidth / currentMount.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    currentMount.appendChild(renderer.domElement);

    // Create particles with different colors
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 500;
    
    const posArray = new Float32Array(particlesCount * 3);
    const colorArray = new Float32Array(particlesCount * 3);
    
    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 10;
      colorArray[i] = Math.random();
    }
    
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colorArray, 3));
    
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.05,
      vertexColors: true,
      transparent: true,
      opacity: 0.8
    });
    
    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    camera.position.z = 5;

    const animate = function () {
      requestAnimationFrame(animate);
      
      particlesMesh.rotation.x += 0.001;
      particlesMesh.rotation.y += 0.001;
      
      renderer.render(scene, camera);
    };

    const handleResize = () => {
      camera.aspect = currentMount.clientWidth / currentMount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    };

    window.addEventListener('resize', handleResize);
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      currentMount.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} style={{
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 0,
    opacity: 0.3
  }} />;
};

const App = () => {
  const mountRef = useRef(null);
  const [activeSection, setActiveSection] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const currentMount = mountRef.current;
    if (!currentMount) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, currentMount.clientWidth / currentMount.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    currentMount.appendChild(renderer.domElement);

    // Create a more interesting geometry
    const geometry = new THREE.IcosahedronGeometry(2, 1);
    const material = new THREE.MeshPhongMaterial({ 
      color: 0x00ffff, 
      wireframe: true, 
      transparent: true, 
      opacity: 0.2,
      shininess: 100
    });
    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    // Add some lights
    const ambientLight = new THREE.AmbientLight(0x404040);
    scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0x00ffff, 0.5);
    directionalLight.position.set(1, 1, 1);
    scene.add(directionalLight);
    
    const directionalLight2 = new THREE.DirectionalLight(0xff00ff, 0.5);
    directionalLight2.position.set(-1, -1, -1);
    scene.add(directionalLight2);

    camera.position.z = 5;

    const animate = function () {
      requestAnimationFrame(animate);
      sphere.rotation.x += 0.005;
      sphere.rotation.y += 0.005;
      renderer.render(scene, camera);
    };

    const handleResize = () => {
      camera.aspect = currentMount.clientWidth / currentMount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    };

    window.addEventListener('resize', handleResize);
    animate();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    document.querySelectorAll('section').forEach(section => {
      observer.observe(section);
    });

    return () => {
      window.removeEventListener('resize', handleResize);
      currentMount.removeChild(renderer.domElement);
      observer.disconnect();
    };
  }, []);

  return (
    <div style={{
      fontFamily: 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',
      color: 'rgb(229, 231, 235)',
      background: 'linear-gradient(135deg, rgb(17, 24, 39), rgb(76, 29, 149), rgb(30, 64, 175))',
      minHeight: '100vh',
      position: 'relative',
      overflowX: 'hidden'
    }}>
      <div ref={mountRef} style={{
        position: 'fixed',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        zIndex: 0,
        opacity: 0.4
      }}></div>
      <FloatingParticles />
      
      {/* Navigation */}
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 20,
        backgroundColor: 'rgba(17, 24, 39, 0.8)',
        backdropFilter: 'blur(12px)',
        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        padding: '1rem 1.5rem'
      }}>
        <div style={{
          maxWidth: '72rem',
          marginLeft: 'auto',
          marginRight: 'auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <a href="#" style={{
            fontSize: '1.5rem',
            fontWeight: '700',
            background: 'linear-gradient(135deg, #22d3ee, #3b82f6)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            MS
          </a>
          
          {/* Mobile menu button */}
          <button 
            style={{
              display: 'block',
              padding: '0.5rem',
              borderRadius: '0.5rem',
              backgroundColor: 'rgb(31, 41, 55)'
            }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg style={{width: '1.5rem', height: '1.5rem'}} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
          
          <ul style={{
            display: isMenuOpen ? 'flex' : 'none',
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            backgroundColor: 'rgb(17, 24, 39)',
            padding: '1rem',
            flexDirection: 'column',
            gap: '1.5rem',
            transition: 'all 0.3s ease',
            opacity: isMenuOpen ? 1 : 0,
            transform: isMenuOpen ? 'translateY(0)' : 'translateY(-100%)'
          }}>
            <li><a href="#about" style={{
              fontWeight: '600',
              transition: 'color 0.2s',
              color: activeSection === 'about' ? 'rgb(34, 211, 238)' : 'rgb(209, 213, 219)'
            }} onMouseEnter={(e) => e.target.style.color = 'rgb(34, 211, 238)'}
                   onMouseLeave={(e) => e.target.style.color = activeSection === 'about' ? 'rgb(34, 211, 238)' : 'rgb(209, 213, 219)'}>About</a></li>
            <li><a href="#projects" style={{
              fontWeight: '600',
              transition: 'color 0.2s',
              color: activeSection === 'projects' ? 'rgb(34, 211, 238)' : 'rgb(209, 213, 219)'
            }} onMouseEnter={(e) => e.target.style.color = 'rgb(34, 211, 238)'}
                   onMouseLeave={(e) => e.target.style.color = activeSection === 'projects' ? 'rgb(34, 211, 238)' : 'rgb(209, 213, 219)'}>Projects</a></li>
            <li><a href="#experience" style={{
              fontWeight: '600',
              transition: 'color 0.2s',
              color: activeSection === 'experience' ? 'rgb(34, 211, 238)' : 'rgb(209, 213, 219)'
            }} onMouseEnter={(e) => e.target.style.color = 'rgb(34, 211, 238)'}
                   onMouseLeave={(e) => e.target.style.color = activeSection === 'experience' ? 'rgb(34, 211, 238)' : 'rgb(209, 213, 219)'}>Experience</a></li>
            <li><a href="#contact" style={{
              fontWeight: '600',
              transition: 'color 0.2s',
              color: activeSection === 'contact' ? 'rgb(34, 211, 238)' : 'rgb(209, 213, 219)'
            }} onMouseEnter={(e) => e.target.style.color = 'rgb(34, 211, 238)'}
                   onMouseLeave={(e) => e.target.style.color = activeSection === 'contact' ? 'rgb(34, 211, 238)' : 'rgb(209, 213, 219)'}>Contact</a></li>
          </ul>
        </div>
      </nav>

      <div style={{
        position: 'relative',
        zIndex: 10,
        maxWidth: '72rem',
        marginLeft: 'auto',
        marginRight: 'auto',
        padding: '5rem 1rem'
      }}>
        <header style={{textAlign: 'center', padding: '5rem 0', position: 'relative'}}>
          <div style={{
            position: 'absolute',
            top: '-5rem',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '18rem',
            height: '18rem',
            backgroundColor: 'rgb(168, 85, 247)',
            borderRadius: '9999px',
            mixBlendMode: 'soft-light',
            filter: 'blur(48px)',
            opacity: 0.2,
            animation: 'blob 7s infinite'
          }}></div>
          <div style={{
            position: 'absolute',
            top: '10rem',
            right: '5rem',
            width: '18rem',
            height: '18rem',
            backgroundColor: 'rgb(6, 182, 212)',
            borderRadius: '9999px',
            mixBlendMode: 'soft-light',
            filter: 'blur(48px)',
            opacity: 0.2,
            animation: 'blob 7s infinite 2s'
          }}></div>
          <div style={{
            position: 'absolute',
            bottom: '10rem',
            left: '5rem',
            width: '18rem',
            height: '18rem',
            backgroundColor: 'rgb(59, 130, 246)',
            borderRadius: '9999px',
            mixBlendMode: 'soft-light',
            filter: 'blur(48px)',
            opacity: 0.2,
            animation: 'blob 7s infinite 4s'
          }}></div>
          
          <h1 style={{fontSize: '3rem', fontWeight: '800', marginBottom: '1rem', lineHeight: '1.25'}}>
            <span style={{color: 'rgb(255, 255, 255)'}}>Manish Kumar </span>
            <span style={{
              background: 'linear-gradient(135deg, #22d3ee, #3b82f6)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>Sirohi</span>
          </h1>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            backgroundColor: 'rgba(31, 41, 55, 0.6)',
            backdropFilter: 'blur(12px)',
            borderRadius: '9999px',
            padding: '0.5rem 1rem',
            marginBottom: '1.5rem',
            border: '1px solid rgba(34, 211, 238, 0.3)'
          }}>
            <span style={{
              width: '0.5rem',
              height: '0.5rem',
              backgroundColor: 'rgb(34, 211, 238)',
              borderRadius: '9999px',
              marginRight: '0.5rem',
              animation: 'pulse 2s infinite'
            }}></span>
            <p style={{fontSize: '1.125rem', fontWeight: '600', color: 'rgb(207, 250, 254)'}}>
              Full Stack Developer | Frontend Engineer
            </p>
          </div>
          <p style={{fontSize: '1.25rem', color: 'rgb(209, 213, 219)', maxWidth: '56rem', margin: '0 auto 2rem'}}>
            Crafting digital experiences with modern technologies and innovative solutions
          </p>
          <div style={{display: 'flex', justifyContent: 'center', gap: '1.5rem', color: 'rgb(209, 213, 219)', marginBottom: '3rem'}}>
            <a href="https://github.com/Sirohi01" target="_blank" rel="noopener noreferrer" style={{
              padding: '0.75rem',
              backgroundColor: 'rgba(31, 41, 55, 0.6)',
              backdropFilter: 'blur(12px)',
              borderRadius: '9999px',
              transition: 'all 0.3s ease',
              transform: 'translateY(0)'
            }} onMouseEnter={(e) => {
              e.target.style.backgroundColor = 'rgb(34, 211, 238)';
              e.target.style.color = 'rgb(255, 255, 255)';
              e.target.style.transform = 'translateY(-0.25rem)';
            }} onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'rgba(31, 41, 55, 0.6)';
              e.target.style.color = 'rgb(209, 213, 219)';
              e.target.style.transform = 'translateY(0)';
            }}>
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/manish-kumar-sirohi-593268217/" target="_blank" rel="noopener noreferrer" style={{
              padding: '0.75rem',
              backgroundColor: 'rgba(31, 41, 55, 0.6)',
              backdropFilter: 'blur(12px)',
              borderRadius: '9999px',
              transition: 'all 0.3s ease',
              transform: 'translateY(0)'
            }} onMouseEnter={(e) => {
              e.target.style.backgroundColor = 'rgb(59, 130, 246)';
              e.target.style.color = 'rgb(255, 255, 255)';
              e.target.style.transform = 'translateY(-0.25rem)';
            }} onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'rgba(31, 41, 55, 0.6)';
              e.target.style.color = 'rgb(209, 213, 219)';
              e.target.style.transform = 'translateY(0)';
            }}>
              <Linkedin size={24} />
            </a>
            <a href="mailto:manishsirohi023@gmail.com" style={{
              padding: '0.75rem',
              backgroundColor: 'rgba(31, 41, 55, 0.6)',
              backdropFilter: 'blur(12px)',
              borderRadius: '9999px',
              transition: 'all 0.3s ease',
              transform: 'translateY(0)'
            }} onMouseEnter={(e) => {
              e.target.style.backgroundColor = 'rgb(239, 68, 68)';
              e.target.style.color = 'rgb(255, 255, 255)';
              e.target.style.transform = 'translateY(-0.25rem)';
            }} onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'rgba(31, 41, 55, 0.6)';
              e.target.style.color = 'rgb(209, 213, 219)';
              e.target.style.transform = 'translateY(0)';
            }}>
              <Mail size={24} />
            </a>
            <a href="tel:+919568259784" style={{
              padding: '0.75rem',
              backgroundColor: 'rgba(31, 41, 55, 0.6)',
              backdropFilter: 'blur(12px)',
              borderRadius: '9999px',
              transition: 'all 0.3s ease',
              transform: 'translateY(0)'
            }} onMouseEnter={(e) => {
              e.target.style.backgroundColor = 'rgb(34, 197, 94)';
              e.target.style.color = 'rgb(255, 255, 255)';
              e.target.style.transform = 'translateY(-0.25rem)';
            }} onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'rgba(31, 41, 55, 0.6)';
              e.target.style.color = 'rgb(209, 213, 219)';
              e.target.style.transform = 'translateY(0)';
            }}>
              <Phone size={24} />
            </a>
          </div>
          <a href="#about" style={{
            display: 'inline-flex',
            alignItems: 'center',
            color: 'rgb(34, 211, 238)',
            animation: 'bounce 2s infinite'
          }}>
            <span style={{marginRight: '0.5rem'}}>Explore my work</span>
            <ChevronDown />
          </a>
        </header>

        <main style={{maxWidth: '72rem', margin: '0 auto'}}>
          <Section id="about" icon={<BookOpen style={{color: 'rgb(255, 255, 255)'}} size={24} />} title="About Me">
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr',
              gap: '2rem',
              marginBottom: '3rem'
            }}>
              <div style={{
                background: 'linear-gradient(135deg, rgb(31, 41, 55), rgb(17, 24, 39))',
                borderRadius: '1rem',
                padding: '2rem',
                border: '1px solid rgba(34, 211, 238, 0.2)',
                boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
              }}>
                <h3 style={{fontSize: '1.5rem', fontWeight: '700', color: 'rgb(255, 255, 255)', marginBottom: '1rem'}}>Who I Am</h3>
                <p style={{fontSize: '1.125rem', color: 'rgb(209, 213, 219)', lineHeight: '1.75'}}>
                  Innovative and results-driven Full Stack Web Developer with expertise in modern frontend and backend technologies. 
                  Skilled in React.js, Redux, and scalable web architectures with proven success in healthcare, fitness, and data-driven projects. 
                  Adept at transforming requirements into robust technical solutions, ensuring responsive UI/UX and optimized performance. 
                  Experienced in both mobile development and machine learning applications.
                </p>
              </div>
              <div style={{
                background: 'linear-gradient(135deg, rgb(31, 41, 55), rgb(17, 24, 39))',
                borderRadius: '1rem',
                padding: '2rem',
                border: '1px solid rgba(168, 85, 247, 0.2)',
                boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
              }}>
                <h3 style={{fontSize: '1.5rem', fontWeight: '700', color: 'rgb(255, 255, 255)', marginBottom: '1rem'}}>My Approach</h3>
                <p style={{fontSize: '1.125rem', color: 'rgb(209, 213, 219)', lineHeight: '1.75'}}>
                  I believe in creating solutions that are not only functional but also delightful to use. 
                  My development process focuses on clean code, performance optimization, and user-centered design. 
                  I'm constantly learning new technologies and methodologies to stay at the forefront of web development.
                </p>
                <div style={{display: 'flex', alignItems: 'center', marginTop: '1.5rem', color: 'rgb(34, 211, 238)'}}>
                  <Zap style={{marginRight: '0.5rem'}} size={20} />
                  <span>Always learning, always building</span>
                </div>
              </div>
            </div>
            
            <h3 style={{fontSize: '1.5rem', fontWeight: '700', color: 'rgb(255, 255, 255)', marginBottom: '2rem', textAlign: 'center'}}>Skills & Technologies</h3>
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr',
              gap: '1.5rem'
            }}>
              {skillsData.map((skill, index) => (
                <Skills
                  key={index}
                  title={skill.title}
                  items={skill.items}
                  icon={skill.icon}
                  color={skill.color}
                />
              ))}
            </div>
          </Section>

          <Section id="projects" icon={<Layers style={{color: 'rgb(255, 255, 255)'}} size={24} />} title="Projects">
            <h3 style={{fontSize: '1.5rem', fontWeight: '700', color: 'rgb(255, 255, 255)', marginBottom: '2rem'}}>Featured Projects</h3>
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr',
              gap: '2rem',
              marginBottom: '4rem'
            }}>
              {featuredProjects.map((project, index) => (
                <a 
                  key={index} 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  style={{
                    display: 'block',
                    borderRadius: '1rem',
                    padding: '2rem',
                    backdropFilter: 'blur(12px)',
                    transition: 'all 0.3s ease',
                    background: `${project.color}10`,
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                  }} onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.02)';
                    e.currentTarget.style.boxShadow = '0 25px 50px -12px rgba(0, 0, 0, 0.25)';
                  }} onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)';
                  }}
                >
                  <div style={{display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem', color: 'rgb(255, 255, 255)'}}>
                    <Star size={24} style={{color: '#fbbf24'}} fill="currentColor" />
                    <h4 style={{fontSize: '1.5rem', fontWeight: '700'}}>{project.name}</h4>
                  </div>
                  <p style={{color: 'rgb(209, 213, 219)', marginBottom: '1.5rem'}}>{project.description}</p>
                  <div style={{display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem'}}>
                    {project.technologies.map((tech, i) => (
                      <span 
                        key={i} 
                        style={{
                          padding: '0.25rem 0.75rem',
                          backgroundColor: 'rgba(255, 255, 255, 0.1)',
                          color: 'rgb(255, 255, 255)',
                          fontSize: '0.875rem',
                          borderRadius: '9999px',
                          backdropFilter: 'blur(4px)'
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div style={{display: 'flex', alignItems: 'center', color: 'rgb(34, 211, 238)', fontWeight: '500'}}>
                    <span>View on GitHub</span>
                    <ArrowRight size={18} style={{marginLeft: '0.5rem'}} />
                  </div>
                </a>
              ))}
            </div>

            <h3 style={{fontSize: '1.5rem', fontWeight: '700', color: 'rgb(255, 255, 255)', marginBottom: '2rem'}}>Other Projects</h3>
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr',
              gap: '1.5rem'
            }}>
              {otherProjects.map((project, index) => (
                <a 
                  key={index} 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  style={{
                    display: 'block',
                    borderRadius: '1rem',
                    padding: '1.5rem',
                    backdropFilter: 'blur(12px)',
                    transition: 'all 0.3s ease',
                    background: `${project.color}10`,
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
                  }} onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.02)';
                    e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)';
                  }} onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)';
                  }}
                >
                  <div style={{display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem'}}>
                    <Code size={20} style={{color: 'rgb(255, 255, 255)'}} />
                    <h4 style={{fontSize: '1.25rem', fontWeight: '700', color: 'rgb(255, 255, 255)'}}>{project.name}</h4>
                  </div>
                  <p style={{fontSize: '0.875rem', color: 'rgb(209, 213, 219)', marginBottom: '1rem'}}>{project.description}</p>
                  <div style={{display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1rem'}}>
                    {project.technologies.slice(0, 3).map((tech, i) => (
                      <span 
                        key={i} 
                        style={{
                          padding: '0.25rem 0.5rem',
                          backgroundColor: 'rgba(255, 255, 255, 0.1)',
                          color: 'rgb(255, 255, 255)',
                          fontSize: '0.75rem',
                          borderRadius: '9999px',
                          backdropFilter: 'blur(4px)'
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span style={{
                        padding: '0.25rem 0.5rem',
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        color: 'rgb(255, 255, 255)',
                        fontSize: '0.75rem',
                        borderRadius: '9999px',
                        backdropFilter: 'blur(4px)'
                      }}>
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                  <div style={{display: 'flex', alignItems: 'center', color: 'rgb(34, 211, 238)', fontSize: '0.875rem', fontWeight: '500'}}>
                    <span>View Project</span>
                    <ArrowRight size={16} style={{marginLeft: '0.25rem'}} />
                  </div>
                </a>
              ))}
            </div>
          </Section>

          <Section id="experience" icon={<Briefcase style={{color: 'rgb(255, 255, 255)'}} size={24} />} title="Work Experience">
            <div style={{position: 'relative', paddingLeft: '2rem', borderLeft: '2px solid rgba(34, 211, 238, 0.3)'}}>
              <div style={{position: 'absolute', width: '1rem', height: '1rem', backgroundColor: 'rgb(34, 211, 238)', borderRadius: '9999px', top: '0.5rem', left: '-0.5rem'}}></div>
              <div style={{
                marginBottom: '3rem',
                padding: '1.5rem',
                borderRadius: '1rem',
                background: 'linear-gradient(135deg, rgb(31, 41, 55), rgb(17, 24, 39))',
                border: '1px solid rgba(34, 211, 238, 0.2)',
                boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                transition: 'all 0.3s ease',
              }} onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.01)'}
                   onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                <h3 style={{fontSize: '1.25rem', fontWeight: '700', color: 'rgb(255, 255, 255)'}}>Frontend Developer</h3>
                <p style={{fontSize: '1.125rem', color: 'rgb(207, 250, 254)', marginBottom: '0.25rem'}}>Bterai Technologies | <span style={{fontSize: '0.875rem', color: 'rgb(156, 163, 175)'}}>Jun 2025 - Present</span></p>
                <ul style={{marginTop: '1rem', color: 'rgb(209, 213, 219)'}}>
                  <li style={{display: 'flex', alignItems: 'flex-start', marginBottom: '0.5rem'}}>
                    <Sparkles size={16} style={{color: 'rgb(34, 211, 238)', marginRight: '0.5rem', marginTop: '0.25rem', flexShrink: 0}} />
                    <span>Developed and maintained applications for Cold Storage and Makoons School using React.js & Tailwind CSS.</span>
                  </li>
                  <li style={{display: 'flex', alignItems: 'flex-start', marginBottom: '0.5rem'}}>
                    <Sparkles size={16} style={{color: 'rgb(34, 211, 238)', marginRight: '0.5rem', marginTop: '0.25rem', flexShrink: 0}} />
                    <span>Optimized performance via Vite chunking, reducing load times.</span>
                  </li>
                  <li style={{display: 'flex', alignItems: 'flex-start', marginBottom: '0.5rem'}}>
                    <Sparkles size={16} style={{color: 'rgb(34, 211, 238)', marginRight: '0.5rem', marginTop: '0.25rem', flexShrink: 0}} />
                    <span>Engineered PDF generation with react-rerender.</span>
                  </li>
                  <li style={{display: 'flex', alignItems: 'flex-start'}}>
                    <Sparkles size={16} style={{color: 'rgb(34, 211, 238)', marginRight: '0.5rem', marginTop: '0.25rem', flexShrink: 0}} />
                    <span>Collaborated with UI/UX teams for responsive design.</span>
                  </li>
                </ul>
              </div>
              
              <div style={{position: 'absolute', width: '1rem', height: '1rem', backgroundColor: 'rgb(34, 211, 238)', borderRadius: '9999px', top: '0.5rem', left: '-0.5rem'}}></div>
              <div style={{
                padding: '1.5rem',
                borderRadius: '1rem',
                background: 'linear-gradient(135deg, rgb(31, 41, 55), rgb(17, 24, 39))',
                border: '1px solid rgba(168, 85, 247, 0.2)',
                boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                transition: 'all 0.3s ease',
              }} onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.01)'}
                   onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                <h3 style={{fontSize: '1.25rem', fontWeight: '700', color: 'rgb(255, 255, 255)'}}>Mobile App Developer</h3>
                <p style={{fontSize: '1.125rem', color: 'rgb(207, 250, 254)', marginBottom: '0.25rem'}}>LeaveCode Technologies Pvt. Ltd. | <span style={{fontSize: '0.875rem', color: 'rgb(156, 163, 175)'}}>Sep 2024 - Apr 2025</span></p>
                <ul style={{marginTop: '1rem', color: 'rgb(209, 213, 219)'}}>
                  <li style={{display: 'flex', alignItems: 'flex-start', marginBottom: '0.5rem'}}>
                    <Sparkles size={16} style={{color: 'rgb(168, 85, 247)', marginRight: '0.5rem', marginTop: '0.25rem', flexShrink: 0}} />
                    <span>Developed cross-platform trash management app (AppLaChain) with React Native, Redux & Firebase.</span>
                  </li>
                  <li style={{display: 'flex', alignItems: 'flex-start', marginBottom: '0.5rem'}}>
                    <Sparkles size={16} style={{color: 'rgb(168, 85, 247)', marginRight: '0.5rem', marginTop: '0.25rem', flexShrink: 0}} />
                    <span>Implemented React Navigation & real-time Firestore integration.</span>
                  </li>
                  <li style={{display: 'flex', alignItems: 'flex-start', marginBottom: '0.5rem'}}>
                    <Sparkles size={16} style={{color: 'rgb(168, 85, 247)', marginRight: '0.5rem', marginTop: '0.25rem', flexShrink: 0}} />
                    <span>Integrated REST APIs with Axios for faster data fetches.</span>
                  </li>
                  <li style={{display: 'flex', alignItems: 'flex-start'}}>
                    <Sparkles size={16} style={{color: 'rgb(168, 85, 247)', marginRight: '0.5rem', marginTop: '0.25rem', flexShrink: 0}} />
                    <span>Optimized UI for smooth Android/iOS performance.</span>
                  </li>
                </ul>
              </div>
            </div>
          </Section>

          <Section id="contact" icon={<Mail style={{color: 'rgb(255, 255, 255)'}} size={24} />} title="Contact">
            <div style={{
              borderRadius: '1rem',
              padding: '2rem',
              background: 'linear-gradient(135deg, rgb(31, 41, 55), rgb(17, 24, 39))',
              border: '1px solid rgba(34, 211, 238, 0.2)',
              boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
            }}>
              <p style={{fontSize: '1.25rem', color: 'rgb(209, 213, 219)', marginBottom: '2rem', textAlign: 'center'}}>
                I'm always open to new opportunities and collaborations. Feel free to reach out!
              </p>
              <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '2rem', marginBottom: '3rem'}}>
                <a 
                  href="mailto:manishsirohi023@gmail.com" 
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    padding: '1rem',
                    background: 'rgba(34, 211, 238, 0.1)',
                    backdropFilter: 'blur(12px)',
                    borderRadius: '0.75rem',
                    border: '1px solid rgba(34, 211, 238, 0.3)',
                    transition: 'all 0.3s ease',
                  }} onMouseEnter={(e) => {
                    e.target.style.background = 'rgba(34, 211, 238, 0.2)';
                  }} onMouseLeave={(e) => {
                    e.target.style.background = 'rgba(34, 211, 238, 0.1)';
                  }}
                >
                  <Mail style={{color: 'rgb(34, 211, 238)'}} size={24} />
                  <span style={{color: 'rgb(209, 213, 219)'}}>manishsirohi023@gmail.com</span>
                </a>
                <a 
                  href="tel:+919568259784" 
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    padding: '1rem',
                    background: 'rgba(168, 85, 247, 0.1)',
                    backdropFilter: 'blur(12px)',
                    borderRadius: '0.75rem',
                    border: '1px solid rgba(168, 85, 247, 0.3)',
                    transition: 'all 0.3s ease',
                  }} onMouseEnter={(e) => {
                    e.target.style.background = 'rgba(168, 85, 247, 0.2)';
                  }} onMouseLeave={(e) => {
                    e.target.style.background = 'rgba(168, 85, 247, 0.1)';
                  }}
                >
                  <Phone style={{color: 'rgb(168, 85, 247)'}} size={24} />
                  <span style={{color: 'rgb(209, 213, 219)'}}>+91-9568259784</span>
                </a>
              </div>
              
              <div style={{textAlign: 'center'}}>
                <h3 style={{fontSize: '1.5rem', fontWeight: '700', color: 'rgb(255, 255, 255)', marginBottom: '1.5rem'}}>Let's Connect</h3>
                <div style={{display: 'flex', justifyContent: 'center', gap: '1.5rem'}}>
                  <a href="https://github.com/Sirohi01" target="_blank" rel="noopener noreferrer" style={{
                    padding: '1rem',
                    backgroundColor: 'rgba(55, 65, 81, 0.5)',
                    borderRadius: '9999px',
                    transition: 'all 0.3s ease',
                    transform: 'translateY(0)'
                  }} onMouseEnter={(e) => {
                    e.target.style.backgroundColor = 'rgb(34, 211, 238)';
                    e.target.style.transform = 'translateY(-0.25rem)';
                  }} onMouseLeave={(e) => {
                    e.target.style.backgroundColor = 'rgba(55, 65, 81, 0.5)';
                    e.target.style.transform = 'translateY(0)';
                  }}>
                    <Github size={28} />
                  </a>
                  <a href="https://www.linkedin.com/in/manish-kumar-sirohi-593268217/" target="_blank" rel="noopener noreferrer" style={{
                    padding: '1rem',
                    backgroundColor: 'rgba(55, 65, 81, 0.5)',
                    borderRadius: '9999px',
                    transition: 'all 0.3s ease',
                    transform: 'translateY(0)'
                  }} onMouseEnter={(e) => {
                    e.target.style.backgroundColor = 'rgb(59, 130, 246)';
                    e.target.style.transform = 'translateY(-0.25rem)';
                  }} onMouseLeave={(e) => {
                    e.target.style.backgroundColor = 'rgba(55, 65, 81, 0.5)';
                    e.target.style.transform = 'translateY(0)';
                  }}>
                    <Linkedin size={28} />
                  </a>
                  <a href="mailto:manishsirohi023@gmail.com" style={{
                    padding: '1rem',
                    backgroundColor: 'rgba(55, 65, 81, 0.5)',
                    borderRadius: '9999px',
                    transition: 'all 0.3s ease',
                    transform: 'translateY(0)'
                  }} onMouseEnter={(e) => {
                    e.target.style.backgroundColor = 'rgb(239, 68, 68)';
                    e.target.style.transform = 'translateY(-0.25rem)';
                  }} onMouseLeave={(e) => {
                    e.target.style.backgroundColor = 'rgba(55, 65, 81, 0.5)';
                    e.target.style.transform = 'translateY(0)';
                  }}>
                    <Mail size={28} />
                  </a>
                </div>
              </div>
            </div>
          </Section>
        </main>

        <footer style={{textAlign: 'center', padding: '3rem 0', color: 'rgb(156, 163, 175)'}}>
          <p>Designed and built with ❤️ by Manish Kumar Sirohi</p>
          <p style={{marginTop: '0.5rem'}}>© {new Date().getFullYear()} All rights reserved</p>
        </footer>
      </div>

      <style>
        {`
          @keyframes blob {
            0% {
              transform: translate(0px, 0px) scale(1);
            }
            33% {
              transform: translate(30px, -50px) scale(1.1);
            }
            66% {
              transform: translate(-20px, 20px) scale(0.9);
            }
            100% {
              transform: translate(0px, 0px) scale(1);
            }
          }
          @keyframes bounce {
            0%, 20%, 50%, 80%, 100% {
              transform: translateY(0);
            }
            40% {
              transform: translateY(-10px);
            }
            60% {
              transform: translateY(-5px);
            }
          }
          @keyframes pulse {
            0%, 100% {
              opacity: 1;
            }
            50% {
              opacity: 0.5;
            }
          }
        `}
      </style>
    </div>
  );
};

const root = createRoot(document.getElementById('root'));
root.render(<App />);

export default App;