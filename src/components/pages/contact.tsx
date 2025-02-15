/*TEMPORARY */
/*TEMPORARY */
/*TEMPORARY */
/*TEMPORARY */
/*TEMPORARY */
/*TEMPORARY */
/*TEMPORARY */

const ContactUs = () => {

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
        className="bg-orange-500 text-white py-3 px-7 mt-6 text-base rounded-md cursor-pointer transition-all duration-300 hover:bg-orange-600 active:scale-95 mb-5"
        onClick={() => window.history.back()}
      >
        ←
      </button>

      {/* Page Title */}
      <h1 className="text-center text-4xl font-bold text-orange-500 mb-4">Contact Us</h1>
      <p className="text-center text-base text-gray-400 mb-8">
        Have questions, feedback, or just want to chat about movies? We’d love to hear from you!
      </p>

      {/* Why Contact Us? */}
      <section className="mb-8 p-6 rounded-lg w-full">
        <h2 className="text-2xl text-orange-500 border-b-2 border-orange-500 pb-2 mb-4">Why Contact Us?</h2>
        <p>
          At **Movie Haven**, we value our community and are always happy to connect with fellow movie lovers. Whether you need **support, have business inquiries, or just want to share your thoughts**, our team is ready to assist you.
        </p>
      </section>

      {/* Support & Help */}
      <section className="mb-8 p-6 rounded-lg w-full">
        <h2 className="text-2xl text-orange-500 border-b-2 border-orange-500 pb-2 mb-4">Support & Help</h2>
        <p>
          If you're experiencing any **technical issues**, have **questions about our content**, or need **general assistance**, please reach out. Our support team is available to help with:
        </p>
        <ul className="list-disc pl-6 leading-relaxed">
          <li>Technical support for accessing content</li>
          <li>Issues with account registration (if applicable)</li>
          <li>General questions about our platform</li>
        </ul>
      </section>

      {/* Frequently Asked Questions (FAQs) */}
      <section className="mb-8 p-6 rounded-lg w-full">
        <h2 className="text-2xl text-orange-500 border-b-2 border-orange-500 pb-2 mb-4">FAQs - Frequently Asked Questions</h2>
        <div className="mb-4">
          <h3 className="text-xl text-white">📌 How do I get started?</h3>
          <p className="text-gray-400">
            Simply explore our platform! If you need recommendations, check out our featured movie lists.
          </p>
        </div>
        <div className="mb-4">
          <h3 className="text-xl text-white">📌 Can I contribute to Movie Haven?</h3>
          <p className="text-gray-400">
            Absolutely! We welcome guest contributions, movie reviews, and insightful discussions.
          </p>
        </div>
        <div className="mb-4">
          <h3 className="text-xl text-white">📌 Is this a paid platform?</h3>
          <p className="text-gray-400">
            No! Movie Haven is a **free**, non-commercial platform for film lovers.
          </p>
        </div>
      </section>

      {/* Business Inquiries */}
      <section className="mb-8 p-6 rounded-lg w-full">
        <h2 className="text-2xl text-orange-500 border-b-2 border-orange-500 pb-2 mb-4">Business & Collaboration</h2>
        <p>
          If you are a **filmmaker, educator, or business** looking to collaborate with us, we’d love to chat!
        </p>
        <p className="mt-2">
          📩 <strong>Email:</strong> <span className="text-gray-400">business@moviehaven.com</span>
        </p>
      </section>

      {/* Feedback & Suggestions */}
      <section className="mb-8 p-6 rounded-lg w-full">
        <h2 className="text-2xl text-orange-500 border-b-2 border-orange-500 pb-2 mb-4">Feedback & Suggestions</h2>
        <p>
          We love **hearing from our users**! If you have any suggestions, ideas, or feedback, let us know! Your thoughts help us improve and grow.
        </p>
        <p className="mt-2">
          📩 <strong>Email:</strong> <span className="text-gray-400">feedback@moviehaven.com</span>
        </p>
      </section>

      {/* Social Media Links */}
      <section className="mb-8 p-6 rounded-lg w-full">
        <h2 className="text-2xl text-orange-500 border-b-2 border-orange-500 pb-2 mb-4">Connect With Us</h2>
        <p>Follow us on social media to stay updated with our latest content and discussions!</p>
        <ul className="list-disc pl-6 leading-relaxed mt-2">
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
      </section>

      {/* Contact Information */}
      <section className="mb-8 p-6 rounded-lg w-full">
        <h2 className="text-2xl text-orange-500 border-b-2 border-orange-500 pb-2 mb-4">Get in Touch</h2>
        <p>If you prefer traditional communication, here’s how you can reach us:</p>
        <p className="mt-2">
          📍 <strong>Address:</strong> [Your College/University Address]
        </p>
        <p className="mt-2">
          📞 <strong>Phone:</strong> +1 (555) 123-4567
        </p>
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

export default ContactUs;
