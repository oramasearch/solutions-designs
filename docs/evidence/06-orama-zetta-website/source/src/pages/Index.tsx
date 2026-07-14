import Nav from '../components/zetta/Nav';
import Hero from '../components/zetta/Hero';
import Problem from '../components/zetta/Problem';
import Disciplines from '../components/zetta/Disciplines';
import HowItWorks from '../components/zetta/HowItWorks';
import WhyDifferent from '../components/zetta/WhyDifferent';
import Audiences from '../components/zetta/Audiences';
import Positioning from '../components/zetta/Positioning';
import Foundation from '../components/zetta/Foundation';
import WaitlistCTA from '../components/zetta/WaitlistCTA';
import Footer from '../components/zetta/Footer';

export default function Index() {
  return (
    <>
      <Nav />
      <main className="pb-20 md:pb-0">
        <Hero />
        <Problem />
        <Disciplines />
        <HowItWorks />
        <WhyDifferent />
        <Audiences />
        <Positioning />
        <Foundation />
        <WaitlistCTA eyebrowNum="08" />
      </main>
      <Footer />
    </>
  );
}
