const Account = () => {
  return (
    <section id="contact" className="mb-16">
    <h2 className="text-2xl font-semibold mb-8 pb-2 border-b ">Contact Information</h2>
    <div className="space-y-8">
      <div>
        <p className="text-gray-400">
          We value your feedback, questions, and concerns regarding these Terms and Conditions, as well as any other inquiries related to our services. If you need assistance, 
          clarification, or wish to report any issues, please feel free to contact us using the information provided below. Our team is committed to responding as promptly as possible 
          and addressing your concerns effectively.
        </p>
      </div>

      <div>
        <h3 className="text-lg font-semibold ">General Inquiries</h3>
        <p className="text-gray-400 mt-2">
          For general questions regarding our services, policies, or any other related matters, please reach out to us via email or mail. We strive to provide accurate and helpful 
          responses to all inquiries in a timely manner.
        </p>
      </div>

      <div>
        <h3 className="text-lg font-semibold ">Support & Assistance</h3>
        <p className="text-gray-400 mt-2">
          If you require technical assistance, need help navigating our platform, or are experiencing issues with your account, our dedicated support team is available to help. 
          Please include relevant details in your inquiry, such as your account information (if applicable) and a brief description of the issue, to ensure we can assist you efficiently.
        </p>
      </div>

      <div>
        <h3 className="text-lg font-semibold ">Legal & Compliance</h3>
        <p className="text-gray-400 mt-2">
          For matters related to legal inquiries, privacy concerns, compliance with applicable laws, or formal requests regarding our terms, please direct your communications to 
          our legal department. We take all legal inquiries seriously and will review and respond accordingly.
        </p>
      </div>

      <div>
        <h3 className="text-lg font-semibold ">How to Reach Us</h3>
        <p className="text-gray-400 mt-2">You can contact us through the following channels:</p>
        <ul className="text-gray-400 mt-4 list-disc list-inside">
          <li><strong>Email:</strong> <a href="mailto:supportden@moviehaven.com" className="text-blue-600 hover:underline">supportden@moviehaven.com</a></li>
          <li><strong>Mailing Address:</strong> University of Science and Technology, [Street Address, City, Country, ZIP Code]</li>
          <li><strong>Phone:</strong> [Insert Phone Number] (Available during business hours)</li>
          <li><strong>Live Chat:</strong> Visit our website at <a href="https://www.moviehaven.com" className="text-blue-600 hover:underline">www.moviehaven.com</a> for real-time assistance.</li>
          <li><strong>Support Ticket:</strong> Submit a request through our online support portal for a faster response.</li>
        </ul>
      </div>

      <div>
        <h3 className="text-lg font-semibold ">Response Time</h3>
        <p className="text-gray-400 mt-2">
          Our team is dedicated to providing prompt responses. While response times may vary depending on the complexity of the inquiry, we typically respond to emails within 
          24 to 48 hours. For urgent matters, we recommend contacting us via phone or live chat for faster assistance.
        </p>
      </div>

      <div>
        <h3 className="text-lg font-semibold ">Business Hours</h3>
        <p className="text-gray-400 mt-2">
          Our customer support team is available during the following business hours:
        </p>
        <ul className="text-gray-400 mt-4 list-disc list-inside">
          <li><strong>Monday - Friday:</strong> 9:00 AM - 6:00 PM (Local Time)</li>
          <li><strong>Saturday - Sunday:</strong> Limited support available via email</li>
          <li><strong>Public Holidays:</strong> Responses may be delayed</li>
        </ul>
      </div>

      <div>
        <h3 className="text-lg font-semibold ">Additional Information</h3>
        <p className="text-gray-400 mt-2">
          Please ensure that all communications include relevant details to help us address your request efficiently. If you are contacting us regarding an issue with our platform, 
          providing screenshots or a detailed description of the problem will allow us to resolve the matter more effectively. We appreciate your patience and cooperation.
        </p>
      </div>
    </div>
  </section>
  );
};

export default Account;