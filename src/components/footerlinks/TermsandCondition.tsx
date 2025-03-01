import { useEffect } from 'react';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import Agreement from './content/TermsandCondition/Agreement';
import AgreementEntire from './content/TermsandCondition/AgreementEntire';
import Conduct from './content/TermsandCondition/Conduct';
import Contact from './content/TermsandCondition/Contact';
import CopyrightWarning from './content/TermsandCondition/CopyrightWarning';
import Disclaimer from './content/TermsandCondition/Disclaimer';
import Dispute from './content/TermsandCondition/Dispute';
import Introduction from './content/TermsandCondition/Introduction';
import Ip from './content/TermsandCondition/Ip';
import Law from './content/TermsandCondition/Law';
import Liability from './content/TermsandCondition/Liability';
import Limitation from './content/TermsandCondition/Limitation';
import Modification from './content/TermsandCondition/Modification';
import Privacy from './content/TermsandCondition/Privacy';
import Severability from './content/TermsandCondition/Severability';
import Termination from './content/TermsandCondition/Termination';
import ThirdParty from './content/TermsandCondition/ThirdParty';
import BackButton from './footerbuttons/BackButton';
import ScrollToTopButton from './footerbuttons/ScrollTopButton';

const TermsAndConditions = () => {
  const queryClient = useQueryClient();

  const { data: scrollData } = useQuery({
    queryKey: ['scrollState'],
    queryFn: () => ({ showScrollTop: false, activeSection: '' }),
    initialData: { showScrollTop: false, activeSection: '' },
  });

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const sections = document.querySelectorAll('section[id]');
      let activeSection = '';

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).offsetHeight;

        if (scrolled >= sectionTop - 100 && scrolled < sectionTop + sectionHeight - 100) {
          activeSection = section.id;
        }
      });

      queryClient.setQueryData(['scrollState'], {
        showScrollTop: scrolled > 100,
        activeSection,
      });
    };

    window.addEventListener('scroll', handleScroll);
    window.scrollTo(0, 0);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [queryClient]);

  const scrollToSection = (sectionId: string): void => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 20;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const sections = [
    { id: 'copyright-warning', title:'Copyright Warning' },
    { id: 'introduction', title: 'Introduction' },
    { id: 'disclaimer', title: 'Educational Disclaimer' },
    { id: 'agreement', title: 'User Agreement' },
    { id: 'conduct', title: 'User Conduct' },
    { id: 'third-party', title: 'Third-Party Content' },
    { id: 'liability', title: 'Disclaimer of Liability' },
    { id: 'limitation', title: 'Limitation of Liability' },
    { id: 'termination', title: 'Termination Policy' },
    { id: 'law', title: 'Governing Law' },
    { id: 'modification', title: 'Modification of Terms' },
    { id: 'ip', title: 'Intellectual Property' },
    { id: 'privacy', title: 'Privacy Policy' },
    { id: 'dispute', title: 'Dispute Resolution' },
    { id: 'agreement-entire', title: 'Entire Agreement' },
    { id: 'severability', title: 'Severability' },
    { id: 'contact', title: 'Contact Information' }
  ];

  return (
    <div className="flex w-full min-h-screen relative bg-black text-white z-10">
      <div className='absolute top-0 left-0 w-full h-full pointer-events-none'></div>
      <div className="w-full lg:w-3/4 p-4 md:p-8">
        <BackButton />

        <h1 className="text-4xl font-bold mb-6">Terms and Service</h1>
        <p className="text-gray-400 mb-12">Effective Date: January 2, 2025</p>

        <CopyrightWarning />
        <Introduction />
        <Disclaimer />
        <Agreement />
        <Conduct />
        <ThirdParty />
        <Liability />
        <Limitation />
        <Termination />
        <Law />
        <Modification />
        <Ip />
        <Privacy />
        <Dispute />
        <AgreementEntire />
        <Severability />
        <Contact />

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
        <div className="sticky mt-8 top-8">
          <h3 className="text-lg font-semibold mb-6">On this page</h3>
          <nav className="space-y-2">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`block w-full text-left px-4 py-2 rounded transition-colors duration-200 ${
                  scrollData?.activeSection === section.id
                    ? 'bg-orange-600 text-white'
                    : 'text-gray-400 hover:bg-orange-800'}`}>
                {section.title}
              </button>
            ))}
          </nav>
        </div>
      </div>

      <ScrollToTopButton 
        isVisible={scrollData?.showScrollTop || false} 
        className=" fixed stbutton lg:block hidden bottom-8 p-4" 
      />

      <ScrollToTopButton 
        isVisible={scrollData?.showScrollTop || false} 
        className="fixed lg:hidden block right-8 bottom-8 p-4" 
      />

    </div>
  );
};

export default TermsAndConditions;