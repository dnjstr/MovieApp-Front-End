
const Footer = () => {
  return (
    <footer className="bg-gray-9d00 text-gray-300 py-12">
      <div className="max-w-full mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">



          <div className="flex justify-between px-8 ">
            <div className="space-y-2 pr-16">
              <h3 className="font-semibold text-white mb-4">Quick Links</h3>
              <div className="space-y-2">
                <a href="/about" className="block text-sm whitespace-nowrap 
                hover:text-white transition-colors">About Us</a>
                <a href="/terms" className="block text-sm whitespace-nowrap 
                hover:text-white transition-colors">Terms of Service</a>
                <a href="/contact" className="block text-sm whitespace-nowrap 
                hover:text-white transition-colors">Contact</a>
              </div>
            </div>
            
            <div className=" "> 
              <h3 className="font-semibold text-white mb-4">Genres</h3>
              <div className="grid grid-cols-2 gap-x-10 gap-y-2 ">
                <a href="/genre/adult" className="text-sm whitespace-nowrap 
                hover:text-orange-400 transition-colors">📂 Adult</a>
                <a href="/genre/horror" className="text-sm whitespace-nowrap 
                hover:text-orange-400 transition-colors">📂 Horror</a>
                <a href="/genre/comedy" className="text-sm whitespace-nowrap 
                hover:text-orange-400 transition-colors">📂 Comedy</a>
                <a href="/genre/drama" className="text-sm whitespace-nowrap 
                hover:text-orange-400 transition-colors">📂 Drama</a>
                <a href="/genre/romance" className="text-sm whitespace-nowrap 
                hover:text-orange-400 transition-colors">📂 Romance</a>
                <a href="/genre/mystery" className="text-sm whitespace-nowrap 
                hover:text-orange-400 transition-colors">📂 Action</a>
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

          <div className="flex justify-center md:justify-end ">
            <img 
              src="/Logo.png" 
              alt="Haven Movie Logo" 
              className=" h-14 w-auto object-contain"
            />
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