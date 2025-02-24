import { useState, useEffect } from 'react';

const FAQ = () => {
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
    { id: 'general', title: 'General Questions' },
    { id: 'technical', title: 'Technical & Support' },
    { id: 'recommendations', title: 'Movie Recommendations' },
    { id: 'account', title: 'Account & Profile' },
    { id: 'community', title: 'Community & Social' },
    { id: 'legal', title: 'Legal & Privacy' },
    { id: 'contact', title: 'Contact & Support' }
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

        <h1 className="text-4xl font-bold mb-6">Frequently Asked Questions</h1>
        <p className="text-gray-400 mb-12">
          Find answers to common questions about Movie Haven. If you can't find what 
          you're looking for, our support team is here to help.
        </p>

        <section id="general" className="mb-16">
          <h2 className="text-2xl font-semibold mb-8 pb-2 border-b border-orange-800">General Questions</h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl mb-3">What is Movie Haven?</h3>
              <p className="text-gray-400">Movie Haven is your premier destination for cinematic
                 discovery and discussion. We're a community-driven platform that combines sophisticated
                  movie recommendations with social features, creating a unique space for film enthusiasts
                   to explore, share, and discuss their passion for cinema.</p>
            </div>

            <div>
              <h3 className="text-xl mb-3">How does Movie Haven work?</h3>
              <p className="text-gray-400">Our platform utilizes advanced algorithms and community input to
                 provide personalized movie recommendations. We analyze viewing patterns, user ratings, and critical
                  reviews to suggest films that align with your interests. Beyond recommendations, we offer curated
                   lists, themed collections, and community discussions to enhance your movie-watching experience.</p>
            </div>

            <div>
              <h3 className="text-xl mb-3">What makes Movie Haven different?</h3>
              <p className="text-gray-400">Unlike traditional movie databases, we focus on creating meaningful
                 connections between films and viewers. Our platform combines data-driven recommendations with
                  human curation, ensuring a balance between discovery and quality. We also emphasize community
                   engagement, allowing users to contribute their insights and participate in discussions.</p>
            </div>

            <div>
              <h3 className="text-xl mb-3">Does John Cyril have a girlfriend?</h3>
              <p className="text-gray-400">Currently, John Cyril does not have a girlfriend because he is busy 
                developing the Haven Movie app with his team. However, he is available and open to a relationship. 
                You can contact him on Facebool (John Cyril Espina) if you want a fubu or talk to him in person. he’s usually at the terminal 
                since that’s his usual hangout spot.</p>
            </div>

          </div>
        </section>

        <section id="technical" className="mb-16">
          <h2 className="text-2xl font-semibold mb-8 pb-2 border-b border-orange-800">Technical & Support</h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl mb-3">Browser Compatibility</h3>
              <p className="text-gray-400">Movie Haven is optimized for modern browsers including Chrome 
                (version 90+), Firefox (version 88+), Safari (version 14+), and Edge (version 90+). For the best 
                experience, we recommend keeping your browser updated to the latest version. Some features may not 
                work correctly on older browsers or Internet Explorer.</p>
            </div>

            <div>
              <h3 className="text-xl mb-3">Performance Optimization</h3>
              <p className="text-gray-400">If you're experiencing slow loading times, try clearing your 
                browser cache and cookies. We also recommend disabling any ad-blockers or VPNs that might 
                interfere with our service. Our platform is designed to work efficiently with standard internet 
                connections of 10Mbps or higher.</p>
            </div>
          </div>
        </section>

        <section id="recommendations" className="mb-16">
          <h2 className="text-2xl font-semibold mb-8 pb-2 border-b border-orange-800">Movie Recommendations</h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl mb-3">How are recommendations generated?</h3>
              <p className="text-gray-400">Our recommendation system uses a combination of collaborative 
                filtering, content-based analysis, and machine learning algorithms. We analyze factors such as genre 
                preferences, viewing history, ratings, and similar users' behaviors to suggest movies you're likely to enjoy.</p>
            </div>

            <div>
              <h3 className="text-xl mb-3">Personalized Recommendations</h3>
              <p className="text-gray-400">The more you interact with Movie Haven, the better our 
                recommendations become. Rate movies, add them to your watchlist, and participate in discussions to 
                help us understand your preferences better.</p>
            </div>
          </div>
        </section>

        <section id="account" className="mb-16">
          <h2 className="text-2xl font-semibold mb-8 pb-2 border-b border-orange-800">Account & Profile</h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl mb-3">Account Management</h3>
              <p className="text-gray-400">Your Movie Haven account is your personal hub for all things cinema. Customize 
                your profile, manage your watchlist, and connect with other movie enthusiasts. We provide robust privacy controls 
                to ensure you share only what you want to share.</p>
            </div>
          </div>
        </section>

        <section id="community" className="mb-16">
          <h2 className="text-2xl font-semibold mb-8 pb-2 border-b border-orange-800">Community & Social</h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl mb-3">Community Guidelines</h3>
              <p className="text-gray-400">Our community thrives on respectful discussion and shared passion for cinema. 
                We maintain strict guidelines to ensure a positive environment for all members. Participate in discussions, 
                share reviews, and connect with fellow movie enthusiasts.</p>
            </div>
          </div>
        </section>

        <section id="legal" className="mb-16">
          <h2 className="text-2xl font-semibold mb-8 pb-2 border-b border-orange-800">Legal & Privacy</h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl mb-3">Privacy Policy</h3>
              <p className="text-gray-400">We take your privacy seriously. Your personal information is protected with 
                industry-standard security measures. We're transparent about data collection and usage, and you have full control over your data.</p>
            </div>

            <div>
              <h3 className="text-xl mb-3">Commitment to Privacy</h3>
              <p className="text-gray-400">We take your privacy seriously and implement industry-standard security measures to safeguard 
                your personal data. Our goal is to provide a safe and secure experience while ensuring that your information remains protected 
                from unauthorized access, misuse, or disclosure.</p>
            </div>

            <div>
              <h3 className="text-xl mb-3">Information We Collect</h3>
              <p className="text-gray-400">We may collect personal information that you voluntarily provide when using our services, 
                such as your name, email address, phone number, and payment details. Additionally, we may gather non-personal data, 
                such as device information, browser type, and website usage statistics, to enhance your experience and improve our services.</p>
            </div>

            <div>
              <h3 className="text-xl mb-3">Data Security and Protection</h3>
              <p className="text-gray-400">We utilize advanced security measures, including encryption and secure servers, to ensure that your personal 
                information remains confidential and protected from potential threats. Our security protocols are regularly updated to align with industry 
                best practices.</p>
            </div>

          </div>
        </section>

        <section id="contact" className="mb-16">
          <h2 className="text-2xl font-semibold mb-8 pb-2 border-b border-orange-800">Contact & Support</h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl mb-3">Customer Support Hours</h3>
              <p className="text-gray-400">Our support team is available Monday through Friday, 9 AM to 6 PM EST. 
                During these hours, we typically respond to inquiries within 2-4 hours. For after-hours support, please consult 
                our comprehensive help center or leave a message for next-day response.</p>
            </div>

            <div>
              <h3 className="text-xl mb-3">Contact Methods</h3>
              <p className="text-gray-400">You can reach us through various channels including email support, our contact form, 
                or our social media platforms. For urgent matters, we recommend using our dedicated support email: support@moviehaven.com.</p>
            </div>

            <div>
              <h3 className="text-xl mb-3">After-Hours Support</h3>
              <p className="text-gray-400">If you need help outside of our regular support hours, we encourage you to explore our comprehensive Help 
                Center, which contains answers to frequently asked questions, troubleshooting guides, and helpful resources.
                For urgent matters, you can leave a message, and our team will prioritize your request for a response on the next business day.</p>
            </div>

            <div>
              <h3 className="text-xl mb-3">Community Forum & User Discussions</h3>
              <p className="text-gray-400">We encourage you to visit our community forum where customers share their experiences, solutions, 
                and tips. Many issues are discussed and resolved by other users who may have encountered similar situations. This can be a helpful 
                resource, especially for technical inquiries.</p>
            </div>

            <div>
              <h3 className="text-xl mb-3">Our commitment to customer service</h3>
              <p className="text-gray-400">Providing clear and helpful responses, fast issue resolution, personalized assistance, and a 
                friendly, professional approach in every interaction. Your satisfaction is our top priority, and we continuously strive to improve our support services to 
                better meet your needs. If you need assistance, feel free to contact us—we are always here to help!</p>
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

      {/*navigation*/}
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

      {/* scrol top*/}
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

export default FAQ;