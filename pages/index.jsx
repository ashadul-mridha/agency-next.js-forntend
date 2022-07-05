import Header from '../components/Header'
import Aboutus from '../components/Home/Aboutus';
import FeedBack from '../components/Home/FeedBack';
import HeroSection from '../components/Home/HeroSection';
import Testmonial from '../components/Home/Testmonial';
import TopNavBar from '../components/TopNavBar'

export default function Home() {
  return (
    <>
      <HeroSection />
      <Testmonial />
      <Aboutus />
      <FeedBack />
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
