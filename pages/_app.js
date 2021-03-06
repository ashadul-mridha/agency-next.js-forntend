import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// swiper slider 
import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function MyApp({ Component, pageProps }) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page);

  //if layout found
  if (getLayout) {
    return getLayout(<Component {...pageProps} />)
  }

  //if there are not layout found here
  return (<Component {...pageProps} />)
}
