import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';
// swiper slider 
import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/pagination";
import AppThemeProvider from '../themes/AppThemeProvider';
import AdminContextProvider from '../utils/providers/AdminContextProvider';

export default function MyApp({ Component, pageProps }) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page);

  //if layout found
  if (getLayout) {
    return (
      <AdminContextProvider>
        <AppThemeProvider>
          {getLayout(<Component {...pageProps} />)}
        </AppThemeProvider>
      </AdminContextProvider>
    )
  }

  //if there are not layout found here
  return (
    <>
      <Component {...pageProps} />
    </>
  )
}
