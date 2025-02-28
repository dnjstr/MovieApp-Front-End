const Contact = () => {
  return (
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
  );
};

export default Contact;