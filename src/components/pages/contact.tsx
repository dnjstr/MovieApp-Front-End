import { useState, useEffect } from 'react';

const ContactUs = () => {
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
    { id: 'why-contact', title: 'Why Contact Us' },
    { id: 'support', title: 'Support & Help' },
    { id: 'faqs', title: 'Frequently Asked Questions' },
    { id: 'business', title: 'Business & Collaboration' },
    { id: 'feedback', title: 'Feedback & Suggestions' },
    { id: 'social', title: 'Connect With Us' },
    { id: 'contact-info', title: 'Get in Touch' }
  ];

  return (
    <div className="flex w-full min-h-screen bg-black text-white">
      <div className="w-full lg:w-3/4 p-4 md:p-8">
        <button
          className="bg-orange-600 border border-gray-900 text-white py-2 px-4 rounded-md hover:bg-orange-800 mb-8"
          onClick={() => window.history.back()}
        >
          Back
        </button>

        <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
        <p className="text-gray-400 mb-12">
          Have questions, feedback, or just want to chat about movies? We'd love to hear from you!
        </p>

        <section id="why-contact" className="mb-16">
          <h2 className="text-2xl font-semibold mb-8 pb-2 border-b border-orange-800">Why Contact Us</h2>
          
          <div className="space-y-8">
            <div>
              <p className="text-gray-400">
                At Movie Haven, we value our community and are always happy to connect with fellow movie lovers. 
                Whether you need support, have business inquiries, or just want to share your thoughts, 
                our team is ready to assist you.
              </p>
            </div>
          </div>
        </section>

        <section id="support" className="mb-16">
          <h2 className="text-2xl font-semibold mb-8 pb-2 border-b border-orange-800">Support & Help</h2>
          
          <div className="space-y-8">
            <div>
              <p className="text-gray-400">
                If you're experiencing any technical issues, have questions about our content, 
                or need general assistance, please reach out. Our support team is available to help with:
              </p>
              <ul className="list-disc pl-6 mt-4 text-gray-400">
                <li>Technical support for accessing content</li>
                <li>Issues with account registration (if applicable)</li>
                <li>General questions about our platform</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="faqs" className="mb-16">
          <h2 className="text-2xl font-semibold mb-8 pb-2 border-b border-orange-800">Frequently Asked Questions</h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl mb-3">How do I get started?</h3>
              <p className="text-gray-400">
                Simply explore our platform! If you need recommendations, check out our featured movie lists.
              </p>
            </div>

            <div>
              <h3 className="text-xl mb-3">Can I contribute to Movie Haven?</h3>
              <p className="text-gray-400">
                Absolutely! We welcome guest contributions, movie reviews, and insightful discussions.
              </p>
            </div>

            <div>
              <h3 className="text-xl mb-3">Is this a paid platform?</h3>
              <p className="text-gray-400">
                No! Movie Haven is a free, non-commercial platform for film lovers.
              </p>
            </div>
          </div>
        </section>

        <section id="business" className="mb-16">
          <h2 className="text-2xl font-semibold mb-8 pb-2 border-b border-orange-800">Business & Collaboration</h2>
          
          <div className="space-y-8">
            <div>
              <p className="text-gray-400">
                If you are a filmmaker, educator, or business looking to collaborate with us, we'd love to chat!
              </p>
              <p className="text-gray-400 mt-4">
                <strong>Email:</strong> business@moviehaven.com
              </p>
            </div>
          </div>
        </section>

        <section id="feedback" className="mb-16">
          <h2 className="text-2xl font-semibold mb-8 pb-2 border-b border-orange-800">Feedback & Suggestions</h2>
          
          <div className="space-y-8">
            <div>
              <p className="text-gray-400">
                We love hearing from our users! If you have any suggestions, ideas, or feedback, let us know! 
                Your thoughts help us improve and grow.
              </p>
              <p className="text-gray-400 mt-4">
                <strong>Email:</strong> feedback@moviehaven.com
              </p>
            </div>
          </div>
        </section>

        <section id="social" className="mb-16">
          <h2 className="text-2xl font-semibold mb-8 pb-2 border-b border-orange-800">Connect With Us</h2>
          
          <div className="space-y-8">
            <div>
              <p className="text-gray-400">
                Follow us on social media to stay updated with our latest content and discussions!
              </p>
              <ul className="list-disc pl-6 mt-4 text-gray-400">
                <li>
                  <strong>Twitter:</strong> <a href="https://twitter.com/moviehaven" className="text-blue-400">twitter.com/moviehaven</a>
                </li>
                <li>
                  <strong>Instagram:</strong> <a href="https://instagram.com/moviehaven" className="text-pink-400">instagram.com/moviehaven</a>
                </li>
                <li>
                  <strong>Facebook:</strong> <a href="https://facebook.com/moviehaven" className="text-blue-500">facebook.com/moviehaven</a>
                </li>
                <li>
                  <strong>YouTube:</strong> <a href="https://youtube.com/moviehaven" className="text-red-500">youtube.com/moviehaven</a>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section id="contact-info" className="mb-16">
          <h2 className="text-2xl font-semibold mb-8 pb-2 border-b border-orange-800">Get in Touch</h2>
          
          <div className="space-y-8">
            <div>
              <p className="text-gray-400">
                If you prefer traditional communication, here's how you can reach us:
              </p>
              <p className="text-gray-400 mt-4">
                <strong>Address:</strong> [Your College/University Address]
              </p>
              <p className="text-gray-400 mt-2">
                <strong>Phone:</strong> +1 (555) 123-4567
              </p>
            </div>
          </div>
        </section>

        <footer className="text-center text-sm text-gray-500 mt-16 pb-8">
          <p className="mb-5">Last Updated: February 15, 2025</p>
          <a 
            href="#" 
            className="text-blue-400 hover:text-blue-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            Need help? Contact Customer Service
          </a>
        </footer>
      </div>

      <div className="hidden lg:block w-1/4 fixed right-0 top-0 h-screen bg-neutral-900 p-8 overflow-y-auto">
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

      <button
        className={`fixed stbutton bottom-8 border border-gray-700 bg-orange-600 text-white p-4 rounded-full transition-opacity duration-300 hover:bg-orange-800 ${
          showScrollTop ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={scrollToTop}
      >
        ↑
      </button>
    </div>
  );
};

export default ContactUs;