import Business from './content/contacts/Business';
import ContactInfo from './content/contacts/ContactInfo';
import Feedback from './content/contacts/Feedback';
import Social from './content/contacts/Social';
import Support from './content/contacts/Support';
import WhyContact from './content/contacts/WhyContact';
import FooterLayout from './reusable/footerpage/FooterLayout';

const ContactUs = () => {
  const sections = [
    { id: 'why-contact', title: 'Why Contact Us' },
    { id: 'support', title: 'Support & Help' },
    { id: 'business', title: 'Business & Collaboration' },
    { id: 'feedback', title: 'Feedback & Suggestions' },
    { id: 'social', title: 'Connect With Us' },
    { id: 'contact-info', title: 'Get in Touch' }
  ];

  return (
    <FooterLayout
      title="Contact Us"
      description="Have questions, feedback, or just want to chat about movies? We'd love to hear from you! At Movie Haven, 
      we believe that great cinema experiences are meant to be shared. Our team is dedicated to fostering meaningful connections with our 
      community members and providing exceptional support whenever you need it."
      sections={sections}
    >
      <WhyContact/>
      <Support />
      <Business />
      <Feedback />
      <Social />
      <ContactInfo />
    </FooterLayout>
  );
};

export default ContactUs;