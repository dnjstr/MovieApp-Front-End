import General from './content/faq/General';
import Technical from './content/faq/Technical';
import Recommendation from './content/faq/Recommendation';
import Account from './content/faq/Account';
import Community from './content/faq/Community';
import Legal from './content/faq/Legal';
import Contact from './content/faq/Contact';
import FooterLayout from './reusable/footerpage/FooterLayout';

const FAQ = () => {
  const sections = [
    { id: 'general', title: 'General Questions' },
    { id: 'technical', title: 'Technical & Support' },
    { id: 'recommendations', title: 'Movie Recommendations' },
    { id: 'account', title: 'Account & Profile' },
    { id: 'community', title: 'Community & Social' },
    { id: 'legal', title: 'Legal & Privacy' },
    { id: 'contact', title: 'Contact & Support' }
  ];

  return (
    <FooterLayout 
      title="Frequently Asked Questions"
      description="Find answers to common questions about Movie Haven. If you can't find what you're looking for, our support team is here to help."
      sections={sections}
    >
      <General />
      <Technical />
      <Recommendation />
      <Account/>
      <Community />
      <Legal/>
      <Contact/>
    </FooterLayout>
  );
};

export default FAQ;