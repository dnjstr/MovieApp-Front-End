import React, { useEffect } from 'react';

const FAQ = () => {

    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="w-full min-h-screen p-[50px] md:p-[2%] font-sans box-border bg-black text-white">
      
      {/* Back Button */}
      <button
        className="bg-orange-500 text-white py-3 px-7 mt-4 text-base rounded-md cursor-pointer transition-all duration-300 hover:bg-orange-600 active:scale-95 mb-5"
        onClick={() => window.history.back()}
      >
        ←
      </button>

      {/* Page Title */}
      <h1 className="text-center text-4xl font-bold text-orange-500 mb-4">Frequently Asked Questions</h1>
      <p className="text-center text-base text-gray-400 mb-8">
        Got questions? We’ve got answers! Check out our FAQ below.
      </p>

      {/* General Questions */}
      <section className="mb-8 p-6 rounded-lg w-full">
        <h2 className="text-2xl text-orange-500 border-b-2 border-orange-500 pb-2 mb-4">📌 General Questions</h2>

        <div className="mb-4">
          <h3 className="text-xl text-white">What is Movie Haven?</h3>
          <p className="text-gray-400">
            Movie Haven is an online platform where film lovers can discover, discuss, and enjoy curated movie recommendations.
          </p>
        </div>

        <div className="mb-4">
          <h3 className="text-xl text-white">Is Movie Haven free to use?</h3>
          <p className="text-gray-400">
            Yes! Our platform is completely free. No subscriptions, no hidden fees—just pure movie love.
          </p>
        </div>

        <div className="mb-4">
          <h3 className="text-xl text-white">Do I need an account to use Movie Haven?</h3>
          <p className="text-gray-400">
            No, you can browse without an account. However, creating one allows you to save favorites and interact with the community.
          </p>
        </div>
      </section>

      {/* Technical & Support Questions */}
      <section className="mb-8 p-6 rounded-lg w-full">
        <h2 className="text-2xl text-orange-500 border-b-2 border-orange-500 pb-2 mb-4">💻 Technical & Support Questions</h2>

        <div className="mb-4">
          <h3 className="text-xl text-white">I'm having trouble accessing the site. What should I do?</h3>
          <p className="text-gray-400">
            First, try refreshing the page. If the problem persists, clear your cache or try a different browser. If all else fails, contact us at <span className="text-orange-400">support@moviehaven.com</span>.
          </p>
        </div>

        <div className="mb-4">
          <h3 className="text-xl text-white">The site is loading slowly. How can I fix this?</h3>
          <p className="text-gray-400">
            Check your internet connection and ensure your browser is updated. If you still experience issues, try disabling browser extensions.
          </p>
        </div>

        <div className="mb-4">
          <h3 className="text-xl text-white">Does Movie Haven have a mobile app?</h3>
          <p className="text-gray-400">
            Not yet, but we're working on it! Stay tuned for updates.
          </p>
        </div>
      </section>

      {/* Movie Recommendations */}
      <section className="mb-8 p-6 rounded-lg w-full">
        <h2 className="text-2xl text-orange-500 border-b-2 border-orange-500 pb-2 mb-4">🎬 Movie Recommendations</h2>

        <div className="mb-4">
          <h3 className="text-xl text-white">How do I find movie recommendations?</h3>
          <p className="text-gray-400">
            Our homepage features curated recommendations. You can also explore by genre, mood, or popularity.
          </p>
        </div>

        <div className="mb-4">
          <h3 className="text-xl text-white">Can I request a movie to be featured?</h3>
          <p className="text-gray-400">
            Yes! Send us your suggestions at <span className="text-orange-400">suggestions@moviehaven.com</span>, and we’ll consider adding it.
          </p>
        </div>

        <div className="mb-4">
          <h3 className="text-xl text-white">Do you offer TV show recommendations?</h3>
          <p className="text-gray-400">
            Right now, we focus on movies, but we may include TV shows in the future!
          </p>
        </div>
      </section>

      {/* Account & Profile Questions */}
      <section className="mb-8 p-6 rounded-lg w-full">
        <h2 className="text-2xl text-orange-500 border-b-2 border-orange-500 pb-2 mb-4">👤 Account & Profile</h2>

        <div className="mb-4">
          <h3 className="text-xl text-white">How do I create an account?</h3>
          <p className="text-gray-400">
            If our platform supports accounts, you'll see a "Sign Up" option on the homepage. Just follow the instructions!
          </p>
        </div>

        <div className="mb-4">
          <h3 className="text-xl text-white">I forgot my password. What should I do?</h3>
          <p className="text-gray-400">
            Click on "Forgot Password?" on the login page and follow the steps to reset your password.
          </p>
        </div>

        <div className="mb-4">
          <h3 className="text-xl text-white">Can I delete my account?</h3>
          <p className="text-gray-400">
            Yes. If you wish to delete your account, please contact us at <span className="text-orange-400">support@moviehaven.com</span>.
          </p>
        </div>
      </section>

      {/* Contact & Support */}
      <section className="mb-8 p-6 rounded-lg w-full">
        <h2 className="text-2xl text-orange-500 border-b-2 border-orange-500 pb-2 mb-4">📧 Contact & Support</h2>

        <div className="mb-4">
          <h3 className="text-xl text-white">How can I contact Movie Haven?</h3>
          <p className="text-gray-400">
            You can email us at <span className="text-orange-400">contact@moviehaven.com</span>. You can also check our <a href="/contact" className="text-blue-400">Contact Us</a> page.
          </p>
        </div>

        <div className="mb-4">
          <h3 className="text-xl text-white">Do you have social media accounts?</h3>
          <p className="text-gray-400">
            Yes! Follow us on <a href="https://twitter.com/moviehaven" className="text-blue-400">Twitter</a>, <a href="https://instagram.com/moviehaven" className="text-pink-400">Instagram</a>, and <a href="https://facebook.com/moviehaven" className="text-blue-500">Facebook</a>.
          </p>
        </div>
      </section>

      <button
        className="bg-orange-500 text-white py-3 px-5 text-base rounded-full cursor-pointer transition-all duration-300 hover:bg-orange-600 active:scale-95 fixed right-6 bottom-6"
        onClick={scrollToTop}
      >
        ↑ 
      </button>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-500 mt-10">
        <p>Last Updated: [02/15/2025]</p>
      </footer>
      
    </div>
  );
};

export default FAQ;
