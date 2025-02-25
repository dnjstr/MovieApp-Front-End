import { useState, useEffect } from 'react';

const AboutUs = () => {
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
    { id: 'story', title: 'Our Story' },
    { id: 'mission', title: 'Our Mission' },
    { id: 'vision', title: 'Our Vision' },
    { id: 'values', title: 'Our Values' },
    { id: 'offers', title: 'What We Offer' },
    { id: 'team', title: 'Meet the Team' },
    { id: 'goals', title: 'Future Goals' },
    { id: 'contact', title: 'Contact Us' }
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

        <h1 className="text-4xl font-bold mb-6">About Us</h1>
        <p className="text-gray-400 mb-12">
          Learn more about our journey, values, and vision.
        </p>

        <section id="story" className="mb-16">
          <h2 className="text-2xl font-semibold mb-8 pb-2 border-b border-orange-800">Our Story</h2>
          <div className="space-y-8">
            <div>
              <p className="text-gray-400">
              Movie Haven started as a college project by students from the University of Science and 
              Technology for our APDev course. Our team—Glen, Den, Cyril, and Sophie—was assigned to 
              create a movie app, and we worked hard to achieve the best grade.
              </p>
              <p className="text-gray-400 mt-4">
              What began as a school assignment soon turned into a passion project. We love movies and 
              storytelling, so we wanted to create a platform where people can explore, learn, and talk 
              about films. Movie Haven is for students, movie lovers, and anyone who enjoys cinema. Our 
              goal is to make learning about movies fun and interesting!
              </p>
            </div>
          </div>
        </section>

        <section id="mission" className="mb-16">
          <h2 className="text-2xl font-semibold mb-8 pb-2 border-b border-orange-800">Our Mission</h2>
          <div className="space-y-8">
            <div>
              <p className="text-gray-400">
              At Movie Haven, our mission is to create a welcoming and educational space where movie 
              lovers can explore, appreciate, and discuss cinema. What started as a simple college 
              project at the University of Science and Technology for our APDev course has grown into 
              a passion-driven initiative. Our team—Glen, Den, Cyril, and Sophie—dedicated countless 
              hours to developing this platform, not just to earn top marks, but to build something 
              meaningful for fellow film enthusiasts.
              </p>
              <p className="text-gray-400 mt-4">
              We believe that movies are more than just entertainment; they are a powerful form of 
              storytelling that reflects culture, history, and human emotions. Our goal is to make 
              learning about films easy, engaging, and accessible to everyone, whether you are a student, 
              a casual viewer, or a dedicated cinephile.
              </p>
              <p className="text-gray-400 mt-4">
              Through Movie Haven, we aim to provide a space where users can discover different 
              genres, understand filmmaking techniques, and appreciate the artistry behind cinema. 
              We encourage discussions, reviews, and insights that help deepen the understanding of 
              movies, from classic masterpieces to modern blockbusters.

              </p>
            </div>
          </div>
        </section>

        <section id="vision" className="mb-16">
          <h2 className="text-2xl font-semibold mb-8 pb-2 border-b border-orange-800">Our Vision</h2>
          <div className="space-y-8">
            <div>
              <p className="text-gray-400">
                We see Movie Haven as a global platform where anyone—students, movie lovers, aspiring filmmakers, and critics—can explore, learn, and 
                discuss the world of cinema. Our goal is to make film education accessible and engaging, helping people appreciate the art of storytelling and filmmaking.
              </p>
              <p className="text-gray-400 mt-4">
                We aspire to inspire the next generation of filmmakers, critics, and enthusiasts by creating a space that encourages curiosity, creativity, 
                and knowledge-sharing. As we grow, we hope to expand our resources, discussions, and community, making Movie Haven a go-to destination for anyone passionate about movies.
              </p>
            </div>
          </div>
        </section>

        <section id="values" className="mb-16">
          <h2 className="text-2xl font-semibold mb-8 pb-2 border-b border-orange-800">Our Values</h2>
          <div className="space-y-8">
            <div>
              <ul className="space-y-4 text-gray-400">
                <li><strong>Passion for Cinema:</strong> We love movies and want to share that passion with the world. Every 
                film has a story to tell, and we aim to celebrate the art of storytelling through our platform.</li>
                <li><strong>Education & Learning:</strong> We believe movies are more than just entertainment; they are a reflection 
                of history, culture, and creativity. Our goal is to help people understand film techniques, storytelling methods, and 
                their impact on society.</li>
                <li><strong>Community & Collaboration:</strong> Movies bring people together, and we want Movie Haven to be a space where 
                film lovers can share ideas, discuss their favorite films, and learn from each other.</li>
                <li><strong>Creativity & Innovation:</strong> The world of cinema is always evolving, and so is Movie Haven. We strive to 
                bring fresh ideas and new ways to explore and appreciate movies</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="offers" className="mb-16">
          <h2 className="text-2xl font-semibold mb-8 pb-2 border-b border-orange-800">What We Offer</h2>
          <div className="space-y-8">
            <div>
              <p className="text-gray-400 mb-4">Our platform provides a range of resources for film enthusiasts, including:</p>
              <ul className="space-y-4 text-gray-400">
                <li><strong>Movie Reviews & Insights:</strong> Thoughtful analyses of classic and contemporary films.</li>
                <li><strong>Film History & Techniques:</strong> Educational content covering different film movements, directors, and cinematography styles.</li>
                <li><strong>Community Discussions:</strong> A space for movie lovers to share opinions, recommendations, and critiques.</li>
                <li><strong>Exclusive Features:</strong> Behind-the-scenes information, interviews, and breakdowns of famous movie scenes.</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="team" className="mb-16">
          <h2 className="text-2xl font-semibold mb-8 pb-2 border-b border-orange-800">Meet the Team</h2>
          <div className="space-y-8">
            <div>
              <p className="text-gray-400">
              We are a team of passionate students from the University of Science and Technology, working together 
              on Movie Haven as part of our APDev course project. Our team—Glen, Den, Cyril, and Sophie—shares a deep love for movies and storytelling.
              </p>
              <p className="text-gray-400 mt-4">
              Each of us brings unique skills and perspectives, from researching film history to curating content and engaging with the community. Though we come from different 
              backgrounds, our common goal is to create a platform where movie lovers can explore, learn, and discuss cinema. Through Movie Haven, we hope to share our passion 
              and make film education fun and accessible for everyone!
              </p>
            </div>
          </div>
        </section>

        <section id="goals" className="mb-16">
          <h2 className="text-2xl font-semibold mb-8 pb-2 border-b border-orange-800">Future Goals</h2>
          <div className="space-y-8">
            <div>
              <p className="text-gray-400 mb-4">While Movie Haven started as a college project, we have big dreams for its future. Our goals include:</p>
              <ul className="space-y-4 text-gray-400">
                <li><strong>Expanding Our Content Library</strong> – We aim to build a vast collection of film-related content, including in-depth reviews, thought-provoking essays, 
                and detailed film analyses. Our goal is to cover a wide range of genres, from classic films to modern blockbusters, independent cinema, and international masterpieces.</li>
    
                <li><strong>Introducing Guest Contributions</strong> – To bring diverse perspectives, we plan to collaborate with film scholars, critics, and industry professionals. Their 
                insights will enrich our platform, providing valuable knowledge on film history, storytelling techniques, and industry trends.</li>
    
                <li><strong>Hosting Interactive Events & Discussions</strong> – We want to create a vibrant community where movie lovers can come together to share their thoughts and ideas. 
                In the future, we plan to organize live discussions, virtual film clubs, watch parties, and Q&A sessions with filmmakers and experts.</li>
                
                <li><strong>Developing Multimedia Content</strong> – To make learning about films more engaging, we will introduce podcasts, video essays, and even online courses. 
                These resources will offer deeper insights into filmmaking, screenwriting, cinematography, and film theory.</li>
                
                <li><strong>Encouraging Community Engagement</strong> – We want Movie Haven to be more than just a website; we want it to be a place where people can 
                connect. In the future, we plan to introduce features such as user-submitted reviews, discussion forums, and interactive polls where users can share 
                their opinions on different movies.</li>
                
                <li><strong>Exploring Partnerships & Collaborations</strong> – To expand our reach, we hope to collaborate with film organizations, schools, and online 
                platforms to bring more valuable content to our audience.</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="contact" className="mb-16">
          <h2 className="text-2xl font-semibold mb-8 pb-2 border-b border-orange-800">Contact Us</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <div>
                <h3 className="text-lg  font-semibold mb-4">Get In Touch</h3>
                <p className="text-gray-400">
                  Have any questions, suggestions, or just want to chat about movies? We'd love to hear from you!  
                  Feel free to reach out to us anytime through email, phone, or social media. Our support team is ready to assist you promptly.
                </p>

                <div className="mt-6 space-y-3">
                  <p className="text-gray-400 flex items-center">
                    <span className="mr-2">📧</span> <strong>Email:</strong> 
                    <a href="mailto:supportden@moviehaven.com" className="text-blue-400 hover:underline ml-2">supportden@moviehaven.com</a>
                  </p>

                  <p className="text-gray-400 flex items-center">
                    <span className="mr-2">📞</span> <strong>Phone:</strong> 
                    <a href="tel:+1234567890" className="text-blue-400 hover:underline ml-2">+63 965 236 4460</a>
                  </p>

                  <p className="text-gray-400 flex items-center">
                    <span className="mr-2">📱</span> <strong>Customer Support:</strong> 
                    <a href="tel:+1800123456" className="text-blue-400 hover:underline ml-2">+63 994 434 4420</a>
                  </p>

                  <p className="text-gray-400 flex items-center">
                    <span className="mr-2">📍</span> <strong>Address:</strong> 
                    <span className="ml-2">University of Science and Technology 
                    <br />Building ICT, 6, Room 28<br />Near SHS, Terminal<br />Cagayan de oro City, Philippines 9000</span>
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-lg  font-semibold mb-4">Working Hours</h3>
                <div className="grid grid-cols-2 gap-2 text-gray-400">
                  <p>Monday - Thursday:</p>
                  <p>9:00 AM - 6:00 PM</p>
                  
                  <p>Friday:</p>
                  <p>9:00 AM - 8:00 PM</p>
                  
                  <p>Saturday:</p>
                  <p>10:00 AM - 4:00 PM</p>
                  
                  <p>Sunday:</p>
                  <p>Closed</p>
                  
                  <p>Holidays:</p>
                  <p>Hours may vary</p>
                </div>
              </div>
            </div>

            {/* Social Media and Subscription */}
            <div className="space-y-8">
              <div>
                <h3 className="text-lg  font-semibold mb-4">Follow Us</h3>
                <p className="text-gray-400 mb-4">Stay updated with our latest releases, events, and promotions!</p>
                <div className="grid grid-cols-2 gap-4">
                  <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-400 hover:text-blue-500 transition-colors">
                    <span className="mr-2 text-lg">Facebook</span>
                  </a>
                  <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-400 hover:text-sky-400 transition-colors">
                    <span className="mr-2 text-lg">Twitter</span>
                  </a>
                  <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-400 hover:text-pink-500 transition-colors">
                    <span className="mr-2 text-lg">Instagram</span>
                  </a>
                  <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-400 hover:text-red-500 transition-colors">
                    <span className="mr-2 text-lg">YouTube</span>
                  </a>
                  <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" 
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="flex items-center text-gray-400 hover:text-blue-600 transition-colors">
                    <span className="mr-2 text-lg">LinkedIn</span>
                  </a>
                  <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" 
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="flex items-center text-gray-400 hover:text-purple-500 transition-colors">
                    <span className="mr-2 text-lg">Discord</span>
                  </a>
                </div>
              </div>

              <div>
                <h3 className="text-lg  font-semibold mb-4">Our Locations</h3>
                <p className="text-gray-400">
                  Main Office: Springfield, MA<br />
                  Regional Offices: Los Angeles, New York, London, Tokyo
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-4">Emergency Support</h3>
                <p className="text-gray-400">
                  For urgent assistance outside regular hours:<br />
                  FB: Den Gwapo KO 143<br />
                  Available 24/7 for bulog user
                </p>
              </div>
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
      <div className="hidden lg:block w-1/4 fixed right-0 top-0 h-screen bg-neutral-900 p-8 overflow-y-auto bg-opacity-50 border-l border-gray-700">
        <div className="sticky mt-8 top-8">
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

export default AboutUs;