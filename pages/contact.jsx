import Footer from '../components/Footer';

const Contact = () => {
    return (
        <div>
            <h5>Contact</h5>
        </div>
    );
};

export default Contact;

//sent layout to app.js
Contact.getLayout = function getLayout(page) {
  return (
    <>
      
        {page}
        <Footer />
    </>
  )
}