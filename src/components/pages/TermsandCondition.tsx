import { useState, useEffect } from 'react';

const TermsAndConditions = () => {
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

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const sections = [
    { id: 'copyright-warning', title: 'Copyright Warning' },
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
    <div className="flex w-full min-h-screen bg-black text-white mt-11">
    
      <div className="w-full lg:w-3/4 p-4 md:p-8">
        <button
          className="bg-neutral-800 text-white py-2 px-4 rounded-md hover:bg-neutral-700 mb-8"
          onClick={() => window.history.back()}
        >
          Back
        </button>

        <h1 className="text-4xl font-bold mb-6">Terms and Conditions</h1>
        <p className="text-gray-400 mb-12">Effective Date: January 2, 2025</p>

        <section id="copyright-warning" className="mb-16">
          <h2 className="text-2xl font-semibold mb-8 pb-2 border-b border-neutral-800">Copyright Warning</h2>
          <div className="space-y-8">
            <div className="bg-red-900/20 border border-red-500/50 rounded-lg p-6">
              <p className="text-gray-400">
                <strong className="text-red-400">IMPORTANT NOTICE:</strong> The images and content used in this project are for educational and non-commercial purposes only. As students developing a movie-related application for academic purposes, we may use copyrighted materials as placeholders. These materials belong to their respective copyright owners, and we do not claim any ownership or rights over them.
              </p>
              <p className="text-gray-400 mt-4">
              This project is not intended for public distribution or commercial use. If you are a copyright owner and have concerns about any content used, please contact us at <strong>[codercyril143@gmail.com]</strong>, and we will address the issue.
              </p>
              <p className="text-gray-400 mt-4">
              Thank you for your understanding and support as we work on this educational project. We appreciate the creativity and effort of original content creators and respect their rights. 
              </p>
            </div>
          </div>
        </section>

        <section id="introduction" className="mb-16">
          <h2 className="text-2xl font-semibold mb-8 pb-2 border-b border-neutral-800">Introduction</h2>
          <div className="space-y-8">
            <div>
              <p className="text-gray-400">
                Welcome to Movie Haven. By accessing or using this platform, you agree to be bound by these Terms and Conditions. If you do not agree to all of these terms, please do not use this service. These terms apply to all visitors, users, and others who access or use the platform.
              </p>
            </div>
          </div>
        </section>

        <section id="disclaimer" className="mb-16">
          <h2 className="text-2xl font-semibold mb-8 pb-2 border-b border-neutral-800">Educational Disclaimer</h2>
          <div className="space-y-8">
            <div>
              <p className="text-gray-400">
                Movie Haven is a college project created solely for educational purposes. This platform is not intended for commercial use and does not host or distribute copyrighted content. All materials and content provided on this platform are for educational and informational purposes only.
              </p>
              <p className="text-gray-400 mt-4">
                The creators of Movie Haven do not claim ownership of any media or content displayed on this platform. Any copyrighted material used is done so under the fair use doctrine for educational purposes. If you believe any content infringes on your copyright, please contact us immediately at support@moviehaven.com.
              </p>
            </div>
          </div>
        </section>

        <section id="agreement" className="mb-16">
          <h2 className="text-2xl font-semibold mb-8 pb-2 border-b border-neutral-800">User Agreement</h2>
          <div className="space-y-8">
            <div>
              <p className="text-gray-400 mb-4">By using Movie Haven, you agree to the following terms:</p>
              <ul className="space-y-4 text-gray-400">
                <li>You must be at least 13 years old to use this platform. If you are under 18, you must have parental or guardian consent to use this service.</li>
                <li>You agree not to engage in any illegal activities or violate any laws while using this platform.</li>
                <li>You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account.</li>
                <li>You agree to provide accurate and complete information when creating an account on Movie Haven.</li>
              </ul>
            </div>
          </div>
        </section>

        {/*ajubbuisdh continue gher */}

        <section id="conduct" className="mb-16">
          <h2 className="text-2xl font-semibold mb-8 pb-2 border-b border-neutral-800">User Conduct</h2>
          <div className="space-y-8">
            <div>
              <p className="text-gray-400">
              Users must behave responsibly and ethically while using our platform, ensuring that their actions do not violate any laws, regulations, or the rights of others. Any form of harassment, abusive behavior, hate speech, fraud, or unauthorized access to restricted areas of the platform is strictly prohibited. 
              </p>
              <p className="text-gray-400 mt-4">
              Users are expected to engage respectfully with others, provide accurate information when required, and refrain from exploiting vulnerabilities or engaging in activities that could compromise the security and integrity of the platform. Any violation of these guidelines may result in account suspension, termination, or legal action, depending on the severity of the misconduct.
              </p>
              <p className="text-gray-400 mt-4">
              Any violation of these guidelines may result in account suspension, termination, or legal action, depending on the severity of the misconduct.
              </p>
            </div>
          </div>
        </section>

        <section id="third-party" className="mb-16">
          <h2 className="text-2xl font-semibold mb-8 pb-2 border-b border-neutral-800">Third-Party Content</h2>
          <div className="space-y-8">
            <div>
              <p className="text-gray-400">
              Our platform may feature content from third-party sources, including but not limited to images, videos, articles, advertisements, and external links. Such content remains the intellectual property of its respective owners, and we do not claim ownership or responsibility for its accuracy, legality, or reliability. 
              </p>
              <p className="text-gray-400 mt-4">
              We strive to ensure that third-party content is appropriate and relevant, but we cannot guarantee its authenticity, and users should exercise their own judgment before interacting with it.
              </p>
              <p className="text-gray-400 mt-4">
              Any disputes or concerns regarding third-party content should be directed to the respective content owner or provider, and we are not liable for any damages or losses incurred as a result of reliance on such material.
              </p>
            </div>
          </div>
        </section>

                              {/*continue here latur 
                              
                                  { id: 'copyright-warning', title: 'Copyright Warning' },
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
                              
                              */}
        


        {/*on the way bro*/}

        <section id="contact" className="mb-16">
          <h2 className="text-2xl font-semibold mb-8 pb-2 border-b border-neutral-800">Contact Information</h2>
          <div className="space-y-8">
            <div>
              <p className="text-gray-400">If you have any questions about these Terms and Conditions, please contact us at:</p>
              <p className="text-gray-400 mt-4">Email: <strong>supportden@moviehaven.com</strong></p>
              <p className="text-gray-400">Address: [University of Science and Technology]</p>
            </div>
          </div>
        </section>

        {/*footer */}

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

      {/* Navigation */}
      <div className="hidden lg:block w-1/4 fixed right-0 top-0 h-screen bg-neutral-900 p-8 overflow-y-auto">
        <div className="sticky mt-16 top-8">
          <h3 className="text-lg font-semibold mb-6">On this page</h3>
          <nav className="space-y-2">
            {sections.map(section => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`block w-full text-left px-4 py-2 rounded transition-colors duration-200 ${
                  activeSection === section.id
                    ? 'bg-neutral-800 text-white'
                    : 'text-gray-400 hover:bg-neutral-800'
                }`}
              >
                {section.title}
              </button>
            ))}
          </nav>
        </div>
      </div>

      <button
        className={`fixed right-8 bottom-8 border border-gray-700 bg-neutral-800 text-white p-4 rounded-full transition-opacity duration-300 hover:bg-neutral-700 ${
          showScrollTop ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={scrollToTop}
      >
        ↑
      </button>
    </div>
  );
};

export default TermsAndConditions;