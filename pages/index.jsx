import Header from '../components/Header'
import HeroSection from '../components/Home/HeroSection';
import Testmonial from '../components/Home/Testmonial';
import TopNavBar from '../components/TopNavBar'

export default function Home() {
  return (
    <>
      <HeroSection />
      <Testmonial />
    </>
  )
}


//sent layout to app.js
Home.getLayout = function getLayout(page) {
  return (
    <>
      <TopNavBar />
      <Header />
      {page}
    </>
  );
}
