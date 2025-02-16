import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-9d00 text-gray-300 py-12">
      <div className="max-w-full mx-auto">
        <div className="grid grid-cols-1 lgx:grid-cols-3 gap-8 ">

          <div className="flex justify-between px-8 ">
            <div className="space-y-2 pr-16">
              <h3 className="font-semibold text-white mb-4">Quick Links</h3>
              <div className="space-y-2">
                <Link to="/about" className="block text-sm whitespace-nowrap 
                hover:text-white transition-colors">
                  About Us
                </Link>
                <Link to="/TermsandCondition" className="block text-sm whitespace-nowrap 
                hover:text-white transition-colors">
                  Terms of Service
                </Link>
                <Link to="/contact" className="block text-sm whitespace-nowrap 
                hover:text-white transition-colors">
                  Contact
                </Link>
                <Link to="/faq" className="block text-sm whitespace-nowrap 
                hover:text-white transition-colors">
                  FAQ
                </Link>
                </div>
            </div>
            
            <div className=" "> 
              <h3 className="font-semibold text-white mb-4">Genres</h3>
              <div className="flex gap-5 ">
          <div className="flex flex-col space-y-2">
            <a href="/genre" className="text-sm whitespace-nowrap
            hover:text-orange-400 transition-colors">📂 Adult</a>
            <a href="/genre" className="text-sm whitespace-nowrap
            hover:text-orange-400 transition-colors">📂 Horror</a>
            <a href="/genre" className="text-sm whitespace-nowrap
            hover:text-orange-400 transition-colors">📂 Comedy</a>
            <a href="/genre" className="text-sm whitespace-nowrap
            hover:text-orange-400 transition-colors">📂 Drama</a>
          </div>
          <div className="flex flex-col space-y-2">
            <a href="/genre" className="text-sm whitespace-nowrap
            hover:text-orange-400 transition-colors">📂 Romance</a>
            <a href="/genre" className="text-sm whitespace-nowrap
            hover:text-orange-400 transition-colors">📂 Action</a>
            <a href="/genre" className="text-sm whitespace-nowrap
            hover:text-orange-400 transition-colors">📂 Musical</a>
            <a href="/genre" className="text-sm whitespace-nowrap
            hover:text-orange-400 transition-colors">📂 Mystery</a>
          </div>
              </div>
            </div>
          </div>

          <div className="text-center space-y-1  ">
            <h3 className="font-semibold text-white mb-2">Contact Us</h3>
            <div className="space-y-3 flex flex-col items-center ">
              <a 
          href="https://web.telegram.org/"
          className="w-48 px-6 py-1 bg-blue-600 text-white rounded-full 
          hover:bg-blue-700 transition-colors"
              >
          ▶️ Join Telegram
              </a>
              <a 
          href="https://www.reddit.com/"
          className="w-48 px-6 py-1 bg-orange-600 text-white rounded-full 
          hover:bg-orange-700 transition-colors"
              >
          🐽 Join Reddit
              </a>
              <a 
          href="https://x.com"
          className="w-48 px-6 py-1 bg-sky-500 text-white rounded-full 
          hover:bg-sky-600 transition-colors"
              >
          🐤 Join Twitter
              </a>
            </div>
          </div>

          <div className="flex justify-center md:justify-center ">
            <Link to="/">
              <img 
                src="/Logo.png" 
                alt="Haven Movie Logo" 
                className=" h-14 w-auto object-contain"
              />
            </Link>
            
          </div>
        </div>

        <div className="mt-12 bg-red-50s0 pt-8 border-t 
        border-gray-800 text-center text-sm">
          <p>© 2025 Haven Movie. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;