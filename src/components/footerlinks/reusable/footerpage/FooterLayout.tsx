import { useState, useEffect, ReactNode } from 'react';
import BackButton from '../footerbuttons/BackButton';
import ScrollTopButton from '../footerbuttons/ScrollTopButton';

interface Section {
  id: string;
  title: string;
}

interface PageWithSidebarProps {
  title: string;
  description: string;
  sections: Section[];
  children: ReactNode;
}

const PageWithSidebar = ({ title, description, sections, children }: PageWithSidebarProps) => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      setShowScrollTop(scrolled > 100);
      
      const sections = document.querySelectorAll('section[id]');
      sections.forEach(section => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        if (scrolled >= sectionTop - 100 && scrolled < sectionTop + sectionHeight - 100) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    window.scrollTo(0, 0);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string): void => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 20;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="flex w-full relative min-h-screen bg-black text-white z-10">
      <div className='absolute w-full h-full pointer-events-none'></div>
      <div className="w-full lg:w-3/4 p-4 md:p-8">
        <BackButton />

        <h1 className="text-4xl font-bold mb-6">{title}</h1>
        <p className="text-gray-400 mb-12">{description}</p>

        {children}

        <footer className="text-center text-sm text-gray-500 mt-16 pb-8">
          <p className="mb-5">Last Updated: February 15, 2025</p>
          <a 
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" 
            className="text-blue-400 hover:text-blue-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            Need help? Contact Customer Service
          </a>
        </footer>
      </div>

      <div className="hidden lg:block w-1/4 fixed right-0 top-0 h-screen bg-gray-900 p-8 overflow-y-auto bg-opacity-80 border-l border-gray-700 scrollbar-hide">
        <div className="sticky top-8">
          <h3 className="text-lg font-semibold mb-6">On this page</h3>
          <nav className="space-y-2">
            {sections.map(section => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`block w-full text-left px-4 py-2 rounded transition-colors duration-200 ${
                  activeSection === section.id
                    ? 'bg-orange-600 text-white'
                    : 'text-gray-400 hover:bg-orange-800'
                }`}
              >
                {section.title}
              </button>
            ))}
          </nav>
        </div>
      </div>

      <ScrollTopButton 
        isVisible={showScrollTop} 
        className="fixed stbutton lg:block hidden bottom-8 p-4" 
      />
      <ScrollTopButton 
        isVisible={showScrollTop} 
        className="fixed lg:hidden block right-8 bottom-8 p-4" 
      />
    </div>
  );
};

export default PageWithSidebar;