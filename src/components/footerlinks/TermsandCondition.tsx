import Agreement from './content/TermsandCondition/Agreement';
import AgreementEntire from './content/TermsandCondition/AgreementEntire';
import Conduct from './content/TermsandCondition/Conduct';
import Contact from './content/TermsandCondition/Contact';
import CopyrightWarning from './content/TermsandCondition/CopyrightWarning';
import Disclaimer from './content/TermsandCondition/Disclaimer';
import Dispute from './content/TermsandCondition/Dispute';
import Introduction from './content/TermsandCondition/Introduction';
import Ip from './content/TermsandCondition/Ip';
import Law from './content/TermsandCondition/Law';
import Liability from './content/TermsandCondition/Liability';
import Limitation from './content/TermsandCondition/Limitation';
import Modification from './content/TermsandCondition/Modification';
import Privacy from './content/TermsandCondition/Privacy';
import Severability from './content/TermsandCondition/Severability';
import Termination from './content/TermsandCondition/Termination';
import ThirdParty from './content/TermsandCondition/ThirdParty';
import FooterLayout from './reusable/footerpage/FooterLayout';

const TermsAndConditions = () => {
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
    <FooterLayout
      title="Terms and Service"
      description="Effective Date: January 2, 2025."
      sections={sections}
    >

        <CopyrightWarning />
        <Introduction />
        <Disclaimer />
        <Agreement />
        <Conduct />
        <ThirdParty />
        <Liability />
        <Limitation />
        <Termination />
        <Law />
        <Modification />
        <Ip />
        <Privacy />
        <Dispute />
        <AgreementEntire />
        <Severability />
        <Contact />

    </FooterLayout>
  );    
};

export default TermsAndConditions;