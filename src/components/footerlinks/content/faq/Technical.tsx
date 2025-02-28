const TechnicalSection = () => {
  return (
    <section id="technical" className="mb-16">
      <h2 className="text-2xl font-semibold mb-8 pb-2 border-b border-orange-800">Technical & Support</h2>
      
      <div className="space-y-8">
        <div>
          <h3 className="text-xl mb-3">Browser Compatibility</h3>
          <p className="text-gray-400">Movie Haven is optimized for modern browsers including Chrome 
            (version 90+), Firefox (version 88+), Safari (version 14+), and Edge (version 90+). For the best 
            experience, we recommend keeping your browser updated to the latest version. Some features may not 
            work correctly on older browsers or Internet Explorer.</p>
        </div>

        <div>
          <h3 className="text-xl mb-3">Performance Optimization</h3>
          <p className="text-gray-400">If you're experiencing slow loading times, try clearing your 
            browser cache and cookies. We also recommend disabling any ad-blockers or VPNs that might 
            interfere with our service. Our platform is designed to work efficiently with standard internet 
            connections of 10Mbps or higher.</p>
        </div>
      </div>
    </section>
  );
};

export default TechnicalSection;