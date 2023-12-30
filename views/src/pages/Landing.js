import { Container } from 'react-bootstrap';
import Header from '../components/Header';
import Statistics from '../components/Statistics';
import LandingSection from '../components/LandingSection';
const Landing = () => {
  return (
    <Container>
      <Header />
      <Statistics />
      <LandingSection />
    </Container>
  );
};

export default Landing;
