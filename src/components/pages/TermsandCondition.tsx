import { useEffect } from 'react';
import { useQuery, useQueryClient } from '@tanstack/react-query';

const TermsAndConditions = () => {
  const queryClient = useQueryClient();


  const { data: scrollData } = useQuery({
    queryKey: ['scrollState'],
    queryFn: () => ({ showScrollTop: false, activeSection: '' }),
    initialData: { showScrollTop: false, activeSection: '' },
  });

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const sections = document.querySelectorAll('section[id]');
      let activeSection = '';

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).offsetHeight;

        if (scrolled >= sectionTop - 100 && scrolled < sectionTop + sectionHeight - 100) {
          activeSection = section.id;
        }
      });

      // Update state using React Query
      queryClient.setQueryData(['scrollState'], {
        showScrollTop: scrolled > 100,
        activeSection,
      });
    };

    window.addEventListener('scroll', handleScroll);
    window.scrollTo(0, 0);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [queryClient]);

  const scrollToSection = (sectionId: string): void => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 20;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const sections = [
    { id: 'copyright-warning', title:'Copyright Warning' },
    { id: 'introduction', title: 'Introduction' },
    { id: 'disclaimer', title: 'Educational Disclaimer' },
    { id: 'agreement', title: 'User Agreement' },
    { id: 'conduct', title: 'User Conduct' },
    { id: 'third-party', title: 'Third-Party Content' },
    { id: 'liability', title: 'Disclaimer of Liability' },
    { id: 'limitation', title: 'Limitation of Liability' },
    { id: 'termination', title: 'Termination Policy' },
    { id: 'law', title: 'Governing Law' },
    { id: 'modification', title: 'Modification of Terms' },
    { id: 'ip', title: 'Intellectual Property' },
    { id: 'privacy', title: 'Privacy Policy' },
    { id: 'dispute', title: 'Dispute Resolution' },
    { id: 'agreement-entire', title: 'Entire Agreement' },
    { id: 'severability', title: 'Severability' },
    { id: 'contact', title: 'Contact Information' }
  ];

  return (
    <div className="flex w-full min-h-screen relative bg-black text-white z-10">
      <div className='nav-links-bg absolute top-0 left-0 w-full h-full'></div>
      <div className="w-full lg:w-3/4 p-4 md:p-8">
        <button
          className="bg-orange-600 border border-gray-900 text-white py-2 px-4 rounded-md hover:bg-orange-800 mb-8"
          onClick={() => window.history.back()}
        >
          Back
        </button>

        <h1 className="text-4xl font-bold mb-6">Terms and Service</h1>
        <p className="text-gray-400 mb-12">Effective Date: January 2, 2025</p>

        <section id="copyright-warning" className="mb-16">
          <h2 className="text-2xl font-semibold mb-8 pb-2 border-b border-orange-800">Copyright Warning</h2>
          <div className="space-y-8">
            <div className="bg-red-900/20 border border-red-500/50 rounded-lg p-6">
              <p className="text-gray-400">
                <strong className="text-red-400">IMPORTANT NOTICE:</strong> The images and content used in this project 
                are for educational and non-commercial purposes only. As students developing a movie-related application 
                for academic purposes, we may use copyrighted materials as placeholders. These materials belong to their 
                respective copyright owners, and we do not claim any ownership or rights over them.
              </p>
              <p className="text-gray-400 mt-4">
                This project is not intended for public distribution or commercial use. If you are a copyright owner and have 
                concerns about any content used, please contact us at <strong>[codercyril143@gmail.com]</strong>, and we will address the issue.
              </p>
              <p className="text-gray-400 mt-4">
                Thank you for your understanding and support as we work on this educational project. We appreciate the creativity 
                and effort of original content creators and respect their rights. 
              </p>
            </div>
          </div>
        </section>

        <section id="introduction" className="mb-16">
          <h2 className="text-2xl font-semibold mb-8 pb-2 border-b border-orange-800">Introduction</h2>
          <div className="space-y-8">
            <div>
              <p className="text-gray-400">
                Welcome to Movie Haven. By accessing or using this platform, you agree to be bound by these Terms and Conditions. 
                If you do not agree to all of these terms, please do not use this service. These terms apply to all visitors, users, 
                and others who access or use the platform.
              </p>
            </div>
          </div>
        </section>

        <section id="disclaimer" className="mb-16">
          <h2 className="text-2xl font-semibold mb-8 pb-2 border-b border-orange-800">Educational Disclaimer</h2>
          <div className="space-y-8">
            <div>
              <p className="text-gray-400">
                Movie Haven is a college project created solely for educational purposes. This platform is not intended for 
                commercial use and does not host or distribute copyrighted content. All materials and content provided on this 
                platform are for educational and informational purposes only.
              </p>
              <p className="text-gray-400 mt-4">
                The creators of Movie Haven do not claim ownership of any media or content displayed on this platform. Any copyrighted 
                material used is done so under the fair use doctrine for educational purposes. If you believe any content infringes on 
                your copyright, please contact us immediately at support@moviehaven.com.
              </p>
            </div>
          </div>
        </section>

        <section id="agreement" className="mb-16">
          <h2 className="text-2xl font-semibold mb-8 pb-2 border-b border-orange-800">User Agreement</h2>
          <div className="space-y-8">
            <div>
              <p className="text-gray-400 mb-4">By using Movie Haven, you agree to the following terms:</p>
              <ul className="space-y-4 text-gray-400">
                <li>You must be at least 13 years old to use this platform. If you are under 18, you must have parental or guardian consent to use this service.</li>
                <li>You agree not to engage in any illegal activities or violate any laws while using this platform.</li>
                <li>You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account.</li>
                <li>You agree to provide accurate and complete information when creating an account on Movie Haven.</li>
              </ul>
            </div>
          </div>
        </section>


        <section id="conduct" className="mb-16">
          <h2 className="text-2xl font-semibold mb-8 pb-2 border-b border-orange-800">User Conduct</h2>
          <div className="space-y-8">
            <div>
              <p className="text-gray-400">
              Users must behave responsibly and ethically while using our platform, ensuring that their actions do not violate any 
              laws, regulations, or the rights of others. Any form of harassment, abusive behavior, hate speech, fraud, or unauthorized 
              access to restricted areas of the platform is strictly prohibited. 
              </p>
              <p className="text-gray-400 mt-4">
              Users are expected to engage respectfully with others, provide accurate information when required, and refrain from 
              exploiting vulnerabilities or engaging in activities that could compromise the security and integrity of the platform. 
              Any violation of these guidelines may result in account suspension, termination, or legal action, depending on the severity of the misconduct.
              </p>
              <p className="text-gray-400 mt-4">
              Any violation of these guidelines may result in account suspension, termination, or legal action, depending on the severity of the misconduct.
              </p>
            </div>
          </div>
        </section>

        <section id="third-party" className="mb-16">
          <h2 className="text-2xl font-semibold mb-8 pb-2 border-b border-orange-800">Third-Party Content</h2>
          <div className="space-y-8">
            <div>
              <p className="text-gray-400">
              Our platform may feature content from third-party sources, including but not limited to images, videos, articles, advertisements, 
              and external links. Such content remains the intellectual property of its respective owners, and we do not claim ownership or responsibility for its accuracy, legality, or reliability. 
              </p>
              <p className="text-gray-400 mt-4">
              We strive to ensure that third-party content is appropriate and relevant, but we cannot guarantee its authenticity, and users 
              should exercise their own judgment before interacting with it. Any disputes or concerns regarding third-party content should be directed to the respective content owner or provider, and we 
              are not liable for any damages or losses incurred as a result of reliance on such material.
              </p>
            </div>
          </div>
        </section>

        <section id="liability" className="mb-16">
          <h2 className="text-2xl font-semibold mb-8 pb-2 border-b border-orange-800">Disclaimer of Liability</h2>
          <div className="space-y-8">
            <div>
              <p className="text-gray-400">
              We provide our services on an "as is" and "as available" basis, without any warranties or guarantees of any kind, whether 
              expressed or implied. While we strive to maintain accuracy and reliability, we do not guarantee that our platform will always be 
              free of errors, interruptions, security breaches, or technical issues. 
              </p>
              <p className="text-gray-400 mt-4">
              Users acknowledge that any reliance on the content, features, or services provided by our platform is at their own risk. We 
              disclaim all liability for any inaccuracies, malfunctions, lost data, unauthorized access, or any damages arising from the use of 
              our platform, and we do not take responsibility for the actions, omissions, or content of third parties.
              </p>
            </div>
          </div>
        </section>

        <section id="limitation" className="mb-16">
          <h2 className="text-2xl font-semibold mb-8 pb-2 border-b border-orange-800">Limitation of Liability</h2>
          <div className="space-y-8">
            <div>
              <p className="text-gray-400">
              To the fullest extent permitted by law, we shall not be liable for any direct, indirect, incidental, consequential, 
              special, or punitive damages that arise from the use or inability to use our services, even if we have been advised of the possibility of such damages. 
              </p>
              <p className="text-gray-400 mt-4">
              This includes, but is not limited to, loss of profits, data corruption, service interruptions, security breaches, 
              unauthorized access, or any other consequences resulting from the use of our platform. In cases where liability cannot 
              be fully excluded, our total liability shall not exceed the amount paid by the user, if any, for accessing our services. 
              By using our platform, users acknowledge and agree to these limitations.
              </p>
            </div>
          </div>
        </section>

        <section id="termination" className="mb-16">
          <h2 className="text-2xl font-semibold mb-8 pb-2 border-b border-orange-800">Termination Policy</h2>
          <div className="space-y-8">
            <div>
              <p className="text-gray-400">
              We reserve the right to suspend, restrict, or terminate access to our platform at our sole discretion, with or without prior notice, 
              if we determine that a user has violated our terms, engaged in prohibited activities, or posed a threat to the integrity and safety of our services. 
              </p>
              <p className="text-gray-400 mt-4">
              This includes, but is not limited to, fraudulent behavior, unauthorized access, abuse of services, illegal 
              activities, or any other misconduct that disrupts the proper functioning of our platform. Users whose accounts are 
              terminated for violations may be permanently banned from accessing our services, and in severe cases, legal action may 
              be pursued against them.
              </p>
            </div>
          </div>
        </section>

        <section id="termination" className="mb-16">
          <h2 className="text-2xl font-semibold mb-8 pb-2 border-b border-orange-800">Termination Policy</h2>
          <div className="space-y-8">
            <div>
              <p className="text-gray-400">
              We reserve the right to suspend, restrict, or terminate access to our platform at our sole discretion, with or without prior notice, 
              if we determine that a user has violated our terms, engaged in prohibited activities, or posed a threat to the integrity and safety of our services. 
              </p>
              <p className="text-gray-400 mt-4">
              This includes, but is not limited to, fraudulent behavior, unauthorized access, abuse of services, illegal 
              activities, or any other misconduct that disrupts the proper functioning of our platform. Users whose accounts are 
              terminated for violations may be permanently banned from accessing our services, and in severe cases, legal action may 
              be pursued against them.
              </p>
            </div>
          </div>
        </section>

        <section id="law" className="mb-16">
          <h2 className="text-2xl font-semibold mb-8 pb-2 border-b border-orange-800">Governing Law</h2>
          <div className="space-y-8">
            <div>
              <p className="text-gray-400">
              These terms and conditions shall be governed by and interpreted in accordance with the laws of the applicable jurisdiction. Any disputes, claims, or legal 
              matters arising from the use of our platform shall be handled in accordance with the governing law, and users agree to submit to the exclusive jurisdiction 
              of the courts within the applicable region. 
              </p>
              <p className="text-gray-400 mt-4">
              If any provisions of these terms are found to be inconsistent with local laws, they shall be modified only to the extent necessary 
              to comply with such laws while preserving the original intent of the agreement.
              </p>
            </div>
          </div>
        </section>

        <section id="modification" className="mb-16">
          <h2 className="text-2xl font-semibold mb-8 pb-2 border-b border-orange-800">Modification of Terms</h2>
          <div className="space-y-8">
            <div>
              <p className="text-gray-400">
              We reserve the right to update, modify, or change these terms at any time to reflect changes in our services, regulatory requirements, or business practices. 
              Any modifications will become effective immediately upon being posted on our platform, and continued use of our services after such updates constitutes acceptance of the revised terms. 
              </p>
              <p className="text-gray-400 mt-4">
              Users are responsible for reviewing these terms periodically to stay informed of any changes. If a user 
              does not agree to the updated terms, they must discontinue their use of our platform.
              </p>
            </div>
          </div>
        </section>

        <section id="ip" className="mb-16">
          <h2 className="text-2xl font-semibold mb-8 pb-2 border-b border-orange-800">Intellectual Property</h2>
          <div className="space-y-8">
            <div>
              <p className="text-gray-400">
              All trademarks, logos, brand names, software, graphics, text, images, and other content available on our platform are 
              the exclusive intellectual property of our company or their respective owners. Unauthorized use, reproduction, modification, 
              distribution, or exploitation of any intellectual property without explicit permission is strictly prohibited and may result in legal action.
              </p>
              <p className="text-gray-400 mt-4">
              Users may not copy, alter, or use our intellectual property for personal or commercial gain without obtaining proper authorization. 
              Any infringement of intellectual property rights will be taken seriously, and appropriate measures will be implemented to protect the interests of rightful owners.
              </p>
            </div>
          </div>
        </section>

        <section id="privacy" className="mb-16">
          <h2 className="text-2xl font-semibold mb-8 pb-2 border-b border-orange-800">Privacy Policy</h2>
          <div className="space-y-8">
            <div>
              <p className="text-gray-400">
              We are committed to protecting user privacy and ensuring that personal data is handled with care and in compliance with applicable 
              data protection laws. Our privacy policy outlines how we collect, use, store, and safeguard user information, including personal details, browsing activity, and communication preferences.
              </p>
              <p className="text-gray-400 mt-4">
              We do not sell or share user data with third parties without consent, except as required by law or to provide essential services. 
              Users have the right to access, modify, or delete their personal information as outlined in our privacy policy. 
              By using our platform, users acknowledge and agree to our data handling practices.

              </p>
            </div>
          </div>
        </section>

        <section id="dispute" className="mb-16">
          <h2 className="text-2xl font-semibold mb-8 pb-2 border-b border-orange-800">Dispute Resolution</h2>
          <div className="space-y-8">
            <div>
              <p className="text-gray-400">
              In the event of a dispute between users and our platform, we encourage resolution through direct communication and 
              negotiation to reach a fair and amicable outcome. If a resolution cannot be reached through informal means, disputes 
              may be subject to formal arbitration, mediation, or legal proceedings, as determined by the governing law. 
              </p>
              <p className="text-gray-400 mt-4">
              Users agree that any legal claims must be brought forth within the applicable jurisdiction and in accordance with the 
              dispute resolution process specified in these terms. By using our platform, users waive the right to participate in class-action 
              lawsuits and agree to resolve disputes individually.

              </p>
            </div>
          </div>
        </section>

        <section id="agreement-entire" className="mb-16">
          <h2 className="text-2xl font-semibold mb-8 pb-2 border-b border-orange-800">Entire Agreement</h2>
          <div className="space-y-8">
            <div>
              <p className="text-gray-400">
              These terms and conditions constitute the entire agreement between the user and our platform, superseding any prior agreements, 
              discussions, or understandings, whether written or verbal. No other representations, promises, or conditions shall be binding unless 
              explicitly stated in this agreement. Any failure to enforce a specific provision of these terms does not constitute a waiver of our rights, 
              and all provisions remain valid and enforceable unless otherwise stated.
              </p>
            </div>
          </div>
        </section>

        <section id="severability" className="mb-16">
          <h2 className="text-2xl font-semibold mb-8 pb-2 border-b border-orange-800">Severability</h2>
          <div className="space-y-8">
            <div>
              <p className="text-gray-400">
                If any provision, clause, or portion of these terms is determined to be unlawful, invalid, or otherwise unenforceable under applicable law, such provision shall be deemed modified 
                to the minimum extent necessary to make it enforceable while maintaining its original intent as closely as possible. If such modification is not feasible, the provision shall be deemed 
                severed from these terms, and the remaining provisions shall continue to be valid, binding, and enforceable to the fullest extent permitted by law.
              </p>
            </div>
            <div>
              <p className="text-gray-400">
                The determination that any part of these terms is unenforceable shall not affect the validity or enforceability of any other provisions. The parties agree that they would have 
                entered into this agreement and each provision therein, even if they had foreseen that certain provisions might later be deemed invalid or unenforceable. In such cases, 
                the remaining provisions shall be interpreted in a manner that best fulfills the original intent and purpose of the agreement.
              </p>
            </div>
            <div>
              <p className="text-gray-400">
                Furthermore, if any provision is found to be unenforceable due to its scope, duration, or other factors, it shall be enforced to the maximum extent permitted under applicable law. 
                No waiver of any provision, term, or condition by either party shall be considered a further or continuing waiver of such provision or any other term. Each provision of these terms 
                operates independently, ensuring that the agreement remains functional and legally binding, even if modifications or severances are required to comply with applicable laws.
              </p>
            </div>
          </div>
        </section>


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

        {/* Footer */}
        <footer className="text-center text-sm text-gray-500 mt-16 pb-8">
          <p className="mb-5">Last Updated: February 15, 2025</p>
          <a
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            className="text-blue-400 hover:text-blue-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            Need help? Contact Customer Service
          </a>
        </footer>
      </div>

      {/* Navigation */}
      <div className="hidden lg:block w-1/4 fixed right-0 top-0 h-screen bg-neutral-900 p-8 overflow-y-auto bg-opacity-30 border-l border-gray-700">
        <div className="sticky mt-8 top-8">
          <h3 className="text-lg font-semibold mb-6">On this page</h3>
          <nav className="space-y-2">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`block w-full text-left px-4 py-2 rounded transition-colors duration-200 ${
                  scrollData?.activeSection === section.id
                    ? 'bg-orange-600 text-white'
                    : 'text-gray-400 hover:bg-orange-800'
                }`}
              >
                {section.title}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        className={`fixed stbutton bottom-8 border border-gray-600 bg-orange-700 text-white p-4 rounded-full transition-opacity duration-300 hover:bg-orange-800 ${
          scrollData?.showScrollTop ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={scrollToTop}
      >
        ↑
      </button>
    </div>
  );
};

export default TermsAndConditions;
