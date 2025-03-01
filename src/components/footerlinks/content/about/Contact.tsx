const Contact = () => {
    return (
        
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

    );
  };
  
  export default Contact;