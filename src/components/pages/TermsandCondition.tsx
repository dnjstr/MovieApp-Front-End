import { useEffect } from 'react';

const TermsandCondition = () => {

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
        <div>
        </div>
      {/* Back Button */}
      <button
        className="bg-orange-500 text-white py-3 px-7 mt-6 text-base rounded-md cursor-pointer transition-all duration-300 hover:bg-orange-600 active:scale-95 mb-5"
        onClick={() => window.history.back()}
      >
        ← 
      </button>

      <h1 className="text-center text-4xl font-bold text-orange-500 mb-4">Terms and Conditions</h1>
      <p className="text-center text-base text-gray-400 mb-8">Effective Date: [01/02/1993]</p>

      {/* Introduction */}
      <section className="mb-8 p-6 rounded-lg  w-full">
        <p>
          Welcome to <strong>Movie Haven</strong>. By accessing or using this platform, you agree to be bound by these Terms and Conditions. If you do not agree to all of these terms, please do not use this service. These terms apply to all visitors, users, and others who access or use the platform.
        </p>
      </section>

      {/* Educational Disclaimer */}
      <section className="mb-8 p-6  rounded-lg w-full">
        <h2 className="text-2xl text-orange-500 border-b-2 border-orange-500 pb-2 mb-4"> Educational Disclaimer</h2>
        <p>
          <strong>Movie Haven</strong> is a <strong>college project</strong> created solely for <strong>educational purposes</strong>. This platform is not intended for commercial use and does not host or distribute copyrighted content. All materials and content provided on this platform are for educational and informational purposes only.
        </p>
        <p>
          The creators of <strong>Movie Haven</strong> do not claim ownership of any media or content displayed on this platform. Any copyrighted material used is done so under the fair use doctrine for educational purposes. If you believe any content infringes on your copyright, please contact us immediately at <strong>support@moviehaven.com</strong>.
        </p>
      </section>

      {/* User Agreement */}
      <section className="mb-8 p-6 rounded-lg w-full">
        <h2 className="text-2xl text-orange-500 border-b-2 border-orange-500 pb-2 mb-4"> User Agreement</h2>
        <p>
          By using <strong>Movie Haven</strong>, you agree to the following terms:
        </p>
        <ul className="list-disc pl-6 leading-relaxed">
          <li>You must be at least <strong>13 years old</strong> to use this platform. If you are under 18, you must have parental or guardian consent to use this service.</li>
          <li>You agree not to engage in any illegal activities or violate any laws while using this platform.</li>
          <li>You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account.</li>
          <li>You agree to provide accurate and complete information when creating an account on <strong>Movie Haven</strong>.</li>
        </ul>
      </section>

      {/* User Conduct */}
      <section className="mb-8 p-6  rounded-lg w-full">
        <h2 className="text-2xl text-orange-500 border-b-2 border-orange-500 pb-2 mb-4"> User Conduct</h2>
        <p>
          Users of <strong>Movie Haven</strong> are expected to adhere to the following guidelines:
        </p>
        <ul className="list-disc pl-6 leading-relaxed">
          <li>Do not upload, share, or distribute any copyrighted material without proper authorization.</li>
          <li>Do not post or transmit any content that is harmful, offensive, abusive, or violates the rights of others.</li>
          <li>Do not attempt to hack, disrupt, or manipulate the platform or its users.</li>
          <li>Do not use the platform for any commercial purposes without prior written consent from <strong>Movie Haven</strong>.</li>
        </ul>
      </section>

      {/* Third-Party Content */}
      <section className="mb-8 p-6  rounded-lg w-full">
        <h2 className="text-2xl text-orange-500 border-b-2 border-orange-500 pb-2 mb-4"> Third-Party Content</h2>
        <p>
          <strong>Movie Haven</strong> may contain links to third-party websites or services that are not owned or controlled by us. We do not endorse or assume responsibility for the content, privacy policies, or practices of any third-party sites or services. You acknowledge and agree that <strong>Movie Haven</strong> shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods, or services available on or through any third-party websites or services.
        </p>
      </section>

      {/* Disclaimer of Liability */}
      <section className="mb-8 p-6  rounded-lg w-full">
        <h2 className="text-2xl text-orange-500 border-b-2 border-orange-500 pb-2 mb-4"> Disclaimer of Liability</h2>
        <p>
          <strong>Movie Haven</strong> is provided on an "AS IS" and "AS AVAILABLE" basis. We do not guarantee the following:
        </p>
        <ul className="list-disc pl-6 leading-relaxed">
          <li>The accuracy, completeness, or reliability of any content on the platform.</li>
          <li>That the platform will be error-free, uninterrupted, or available at all times.</li>
          <li>That the platform will be free from viruses, malware, or other harmful components.</li>
        </ul>
        <p>
          You agree that your use of the platform is at your sole risk. We disclaim all warranties, express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, and non-infringement.
        </p>
      </section>

      {/* Limitation of Liability */}
      <section className="mb-8 p-6 b rounded-lg w-full">
        <h2 className="text-2xl text-orange-500 border-b-2 border-orange-500 pb-2 mb-4"> Limitation of Liability</h2>
        <p>
          To the maximum extent permitted by law, <strong>Movie Haven</strong> and its creators shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to:
        </p>
        <ul className="list-disc pl-6 leading-relaxed">
          <li>Loss of profits, revenue, or data.</li>
          <li>Business interruption or loss of business opportunities.</li>
          <li>Damages arising from the use or inability to use the platform.</li>
        </ul>
        <p>
          In no event shall our total liability to you for all claims arising out of or related to your use of the platform exceed the amount paid by you, if any, for accessing the platform.
        </p>
      </section>

      {/* Termination Policy */}
      <section className="mb-8 p-6 rounded-lg w-full">
        <h2 className="text-2xl text-orange-500 border-b-2 border-orange-500 pb-2 mb-4"> Termination Policy</h2>
        <p>
          We reserve the right to terminate or suspend your access to <strong>Movie Haven</strong> at any time, without prior notice or liability, for any reason, including but not limited to a breach of these Terms and Conditions. Upon termination, your right to use the platform will immediately cease.
        </p>
      </section>

      {/* Governing Law */}
      <section className="mb-8 p-6  rounded-lg w-full">
        <h2 className="text-2xl text-orange-500 border-b-2 border-orange-500 pb-2 mb-4"> Governing Law</h2>
        <p>
          These Terms and Conditions shall be governed by and construed in accordance with the laws of [Your Country/State], without regard to its conflict of law provisions. Any disputes arising under or in connection with these terms shall be subject to the exclusive jurisdiction of the courts located in [Your Country/State].
        </p>
      </section>

      {/* Modification of Terms */}
      <section className="mb-8 p-6  rounded-lg w-full">
        <h2 className="text-2xl text-orange-500 border-b-2 border-orange-500 pb-2 mb-4"> Modification of Terms</h2>
        <p>
          We reserve the right to modify or replace these Terms and Conditions at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion. By continuing to access or use the platform after any revisions become effective, you agree to be bound by the revised terms.
        </p>
      </section>

      {/* Intellectual Property */}
      <section className="mb-8 p-6  rounded-lg w-full">
        <h2 className="text-2xl text-orange-500 border-b-2 border-orange-500 pb-2 mb-4"> Intellectual Property</h2>
        <p>
          All content on <strong>Movie Haven</strong>, including but not limited to text, graphics, logos, images, and software, is the property of <strong>Movie Haven</strong> or its licensors and is protected by intellectual property laws. You may not reproduce, distribute, modify, or create derivative works of any content without our express written permission.
        </p>
      </section>

      {/* Privacy Policy */}
      <section className="mb-8 p-6  rounded-lg w-full">
        <h2 className="text-2xl text-orange-500 border-b-2 border-orange-500 pb-2 mb-4"> Privacy Policy</h2>
        <p>
          Your privacy is important to us. Please review our <a href="[Link to Privacy Policy]" target="_blank" className="text-orange-500 hover:underline">Privacy Policy</a> to understand how we collect, use, and protect your personal information. By using <strong>Movie Haven</strong>, you agree to the collection and use of your information in accordance with our Privacy Policy.
        </p>
      </section>

      {/* Dispute Resolution */}
      <section className="mb-8 p-6  rounded-lg w-full">
        <h2 className="text-2xl text-orange-500 border-b-2 border-orange-500 pb-2 mb-4"> Dispute Resolution</h2>
        <p>
          Any disputes arising out of or related to these Terms and Conditions or your use of the platform shall be resolved through binding arbitration in accordance with the rules of [Arbitration Organization]. The arbitration shall be conducted in [Location], and the language of the arbitration shall be English. Each party shall bear its own costs and expenses related to the arbitration.
        </p>
      </section>

      {/* Entire Agreement */}
      <section className="mb-8 p-6  rounded-lg w-full">
        <h2 className="text-2xl text-orange-500 border-b-2 border-orange-500 pb-2 mb-4">Entire Agreement</h2>
        <p>
          These Terms and Conditions constitute the entire agreement between you and <strong>Movie Haven</strong> regarding your use of the platform and supersede all prior agreements and understandings, whether written or oral. If any provision of these terms is found to be invalid or unenforceable, the remaining provisions will remain in full force and effect.
        </p>
      </section>

      {/* Severability */}
      <section className="mb-8 p-6 rounded-lg w-full">
        <h2 className="text-2xl text-orange-500 border-b-2 border-orange-500 pb-2 mb-4"> Severability</h2>
        <p>
          If any provision of these Terms and Conditions is found to be invalid or unenforceable by a court of competent jurisdiction, the remaining provisions will remain in full force and effect. The invalid or unenforceable provision shall be replaced by a valid and enforceable provision that most closely achieves the intent of the original provision.
        </p>
      </section>

      {/* Contact Information */}
      <section className="mb-8 p-6 rounded-lg w-full">
        <h2 className="text-2xl text-orange-500 border-b-2 border-orange-500 pb-2 mb-4"> Contact Information</h2>
        <p>If you have any questions about these Terms and Conditions, please contact us at:</p>
        <p>Email: <strong>support@moviehaven.com</strong></p>
        <p>Address: [Your College/University Address]</p>
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

export default TermsandCondition;