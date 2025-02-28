const LegalSection = () => {
  return (
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
  );
};

export default LegalSection;