import Story from './content/about/Story';
import Mission from './content/about/Mission';
import Vision from './content/about/Vision';
import Values from './content/about/Values';
import Offers from './content/about/Offers';
import Team from './content/about/Team';
import Goals from './content/about/Goals';
import Contact from './content/about/Contact';
import FooterLayout from './reusable/footerpage/FooterLayout';

const AboutUs = () => {
  const sections = [
    { id: 'story', title: 'Our Story' },
    { id: 'mission', title: 'Our Mission' },
    { id: 'vision', title: 'Our Vision' },
    { id: 'values', title: 'Our Values' },
    { id: 'offers', title: 'What We Offer' },
    { id: 'team', title: 'Meet the Team' },
    { id: 'goals', title: 'Future Goals' },
    { id: 'contact', title: 'Contact Us' }
  ];

  return (
    <FooterLayout
      title="About Us"
      description="Learn more about our journey, values, and vision."
      sections={sections}
    >
      <Story />
      <Mission />
      <Vision />
      <Values />
      <Offers />
      <Team />  
      <Goals />
      <Contact />
    </FooterLayout>
  );
};

export default AboutUs;