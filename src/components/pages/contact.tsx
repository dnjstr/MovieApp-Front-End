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
    { id: 'business', title: 'Business & Collaboration' },
    { id: 'feedback', title: 'Feedback & Suggestions' },
    { id: 'social', title: 'Connect With Us' },
    { id: 'contact-info', title: 'Get in Touch' }
  ];

  return (
    <div className="flex w-full relative min-h-screen bg-black text-white z-10">
      <div className='nav-links-bg absolute w-full h-full'></div>
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
          At Movie Haven, we believe that great cinema experiences are meant to be shared. 
          Our team is dedicated to fostering meaningful connections with our community members 
          and providing exceptional support whenever you need it.
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
              <p className="text-gray-400 mt-4">
                We understand that each interaction is an opportunity to improve our platform and enhance your 
                movie discovery experience. Your questions, concerns, and ideas matter to us because they help 
                shape the future of Movie Haven. Our dedicated team members are passionate film enthusiasts 
                themselves, which means they understand your perspective and can provide insightful assistance.
              </p>
              <p className="text-gray-400 mt-4">
                Unlike other platforms that might treat customer service as an afterthought, we consider 
                it a cornerstone of our community. We're committed to responding promptly, addressing your 
                concerns thoroughly, and going the extra mile to ensure you have the best possible experience 
                with Movie Haven.
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
                <li>Technical support for accessing content and navigating our platform</li>
                <li>Issues with account registration, login problems, or profile management</li>
                <li>Questions about our recommendation algorithms and how to get better personalized suggestions</li>
                <li>Assistance with search functionality and finding specific films or collections</li>
                <li>Help with community features including comments, reviews, and user interactions</li>
                <li>Guidance on using our watchlist and other tracking features</li>
                <li>Support for accessibility features and alternative viewing options</li>
              </ul>
              <p className="text-gray-400 mt-6">
                Our support team operates with a response time goal of 24 hours or less for most inquiries, 
                though we typically respond much faster during business hours. For urgent matters, we recommend 
                using the live chat feature available on our platform during peak hours.
              </p>
              <p className="text-gray-400 mt-4">
                We've also developed a comprehensive knowledge base that addresses many common questions and 
                provides step-by-step tutorials for navigating various features. Before reaching out, you might 
                want to check if your question has already been answered in our support documentation.
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
                Movie Haven offers various partnership opportunities designed to connect authentic cinema content 
                with our engaged community of film enthusiasts.
              </p>
              <p className="text-gray-400 mt-4">
                For <strong>filmmakers</strong>, we offer spotlight features for independent productions, 
                interviews with creative teams, and exclusive behind-the-scenes content that helps audiences 
                connect more deeply with your work. We especially value highlighting diverse voices and 
                perspectives that might not receive adequate attention in mainstream channels.
              </p>
              <p className="text-gray-400 mt-4">
                <strong>Educational institutions</strong> can partner with us for collaborative projects, 
                student showcases, and special academic analyses of significant films or movements in cinema history. 
                We've worked with film schools to develop educational content that benefits both students and our 
                broader community of movie lovers.
              </p>
              <p className="text-gray-400 mt-4">
                <strong>Film festivals</strong> can leverage our platform to reach dedicated cinema enthusiasts, 
                with opportunities for festival coverage, filmmaker interviews, and special features on selected entries. 
                We're particularly interested in helping smaller regional festivals connect with appropriate audiences.
              </p>
              <p className="text-gray-400 mt-4">
                <strong>Email:</strong> business@moviehaven.com
              </p>
              <p className="text-gray-400 mt-2">
                Please note that all potential collaborations are evaluated based on their relevance to our community 
                and alignment with our mission to foster meaningful engagement with cinema. We typically respond to 
                business inquiries within 3-5 business days.
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
                Your thoughts help us improve and grow. Movie Haven has evolved significantly based on community 
                input, and we consider user feedback to be an essential component of our development process.
              </p>
              <p className="text-gray-400 mt-4">
                Whether you've noticed a bug that needs fixing, have an idea for a new feature that would enhance 
                your experience, or want to suggest improvements to existing functionality, we're eager to hear 
                from you. Our development team reviews all feedback and prioritizes changes based on community need 
                and technical feasibility.
              </p>
              <p className="text-gray-400 mt-4">
                We also conduct quarterly user surveys and occasional focus groups to gather more structured feedback 
                on specific aspects of our platform. If you're interested in participating in these deeper research 
                initiatives, you can opt in through your account settings.
              </p>
              <p className="text-gray-400 mt-4">
                Some of our most popular features—including themed collections, the "similar viewers enjoyed" 
                recommendation system, and our community discussion forums—began as user suggestions. Your idea 
                could be the next major improvement to Movie Haven!
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
                Follow us on social media to stay updated with our latest content and discussions! Our social 
                channels are not just announcement platforms—they're extensions of our community where we share 
                exclusive content, host live discussions with filmmakers, and highlight exceptional contributions 
                from community members.
              </p>
              <p className="text-gray-400 mt-4">
                Each of our social platforms offers a slightly different focus: Twitter features quick film insights 
                and industry news; Instagram showcases visually striking moments in cinema with thoughtful analysis; 
                Facebook hosts our most in-depth discussions and event announcements; and YouTube offers video essays, 
                interviews, and collaborative content with filmmakers and critics.
              </p>
              <ul className="list-disc pl-6 mt-4 text-gray-400">
                <li>
                  <strong>Twitter:</strong> <a href="https://twitter.com" className="text-blue-400">twitter.com/moviehaven</a> 
                  — Daily updates, quick polls, and conversation starters about current cinema trends
                </li>
                <li>
                  <strong>Instagram:</strong> <a href="https://instagram.com" className="text-pink-400">instagram.com/moviehaven</a> 
                  — Visual explorations of cinematography, iconic scenes, and behind-the-scenes moments
                </li>
                <li>
                  <strong>Facebook:</strong> <a href="https://facebook.com" className="text-blue-500">facebook.com/moviehaven</a> 
                  — In-depth articles, community discussions, and event announcements
                </li>
                <li>
                  <strong>YouTube:</strong> <a href="https://youtube.com" className="text-red-500">youtube.com/moviehaven</a> 
                  — Video essays, filmmaker interviews, and analysis of significant works and movements
                </li>
              </ul>
              <p className="text-gray-400 mt-4">
                We also host monthly live events across our social platforms, including director Q&As, 
                watch parties for classic films, and panel discussions on cinema trends. Follow us to 
                receive notifications about upcoming events and opportunities to participate.
              </p>
            </div>
          </div>
        </section>

        <section id="contact-info" className="mb-16">
          <h2 className="text-2xl font-semibold mb-8 pb-2 border-b border-orange-800">Get in Touch</h2>
          
          <div className="space-y-8">
            <div>
              <p className="text-gray-400">
                If you prefer traditional communication, here's how you can reach us. While email and our online 
                contact forms are typically the fastest ways to receive a response, we understand that some matters 
                are better discussed through other channels.
              </p>
              <p className="text-gray-400 mt-4">
                Our physical office serves as both our headquarters and a community space where we occasionally 
                host screenings, discussions, and special events. If you're in the area, we welcome you to attend 
                one of our public events—details are posted on our social media channels and in our monthly newsletter.
              </p>
              <p className="text-gray-400 mt-4">
                <strong>Address:</strong> [Your College/University Address]
              </p>
              <p className="text-gray-400 mt-2">
                <strong>Phone:</strong> +1 (555) 123-4567 (Available Monday-Friday, 9AM-5PM Pacific Time)
              </p>
              <p className="text-gray-400 mt-4">
                For general inquiries that don't fit into our other contact categories, you can reach us at 
                hello@moviehaven.com. This inbox is monitored daily, and we strive to respond to all messages 
                within two business days.
              </p>
              <p className="text-gray-400 mt-4">
                If you're a member of the press seeking information about Movie Haven for a story, please 
                contact our media relations team at press@moviehaven.com with details about your publication 
                and deadline. We're happy to provide information, statements, or arrange interviews with our team.
              </p>
              <p className="text-gray-400 mt-4">
                <strong>Urgent Support:</strong> For time-sensitive issues requiring immediate attention, 
                we offer a priority support line available during extended hours (7AM-10PM Pacific Time, seven days a week). 
                Please call +1 (555) 987-6543 for urgent technical issues or account-related matters that can't wait 
                for our standard response times. This service is reserved for genuinely urgent matters.
              </p>
              <p className="text-gray-400 mt-4">
                <strong>Accessibility Support:</strong> We're committed to making Movie Haven accessible to all film enthusiasts. 
                If you have specific accessibility needs or encounter barriers while using our platform, please contact our 
                dedicated accessibility team at accessibility@moviehaven.com. We actively work to implement improvements based 
                on user feedback and adhere to WCAG guidelines.
              </p>
              <p className="text-gray-400 mt-4">
                <strong>Regional Representatives:</strong> Movie Haven maintains regional community representatives in major 
                film centers around the world, including Los Angeles, New York, London, Tokyo, Mumbai, and Sydney. These representatives 
                can provide localized support and facilitate connections with regional film communities. To connect with your 
                regional representative, please email regions@moviehaven.com with your location in the subject line.
              </p>
              <p className="text-gray-400 mt-4">
                We value every communication we receive and are committed to providing thoughtful, helpful responses to all inquiries. 
                Your engagement helps us build a stronger, more vibrant community of film enthusiasts, and we look forward to 
                connecting with you through whichever channel works best for your needs.
              </p>
            </div>
          </div>
        </section>

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

      <div className="hidden lg:block w-1/4 fixed right-0 top-0 h-screen bg-neutral-900 p-8 overflow-y-auto bg-opacity-30 border-l border-gray-700">
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

      {/* desktop scrol top*/}
      <button
        className={`fixed lg:block hidden stbutton bottom-8 border border-gray-700 bg-orange-600 text-white p-4 rounded-full transition-opacity duration-300 hover:bg-orange-800 ${
          showScrollTop ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={scrollToTop}
      >
        ↑
      </button>
      {/* mobile scroll top*/}
      <button
        className={`fixed lg:hidden block right-8  bottom-8 border border-gray-700 bg-orange-600 text-white p-4 rounded-full transition-opacity duration-300 hover:bg-orange-800 ${
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