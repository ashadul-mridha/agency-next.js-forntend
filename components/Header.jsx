import Link from "next/link";

const Header = () => {
  return (
    <>
      <div className="container">
        <style jsx>{`
          .navbar-logo {
            font-size: 26px;
            font-family: "Inter", sans-serif;
            color: #2b2b2c;
            font-weight: 600;
            text-decoration: none;
          }
          .navbar-nav {
            margin: 10px 0px;
          }
          .single-nav {
            margin: 0px 10px;
          }
          .nav-text {
            font-size: 16px;
            font-family: "Inter", sans-serif;
            color: #141432 !important;
            font-weight: 400;
            text-decoration: none;
          }
          .nav-text:hover {
            color: #524fed !important;
          }
          .btn-nav {
            font-size: 16px;
            font-weight: 600;
            border-radius: 2px;
            text-decoration: none;
            font-family: "Inter", sans-serif;
            padding: 12px 25px;
          }
          .btn__outlined {
            background: none;
            border: 2px solid currentColor;
            color: #524fed;
            border-radius: 10px;
          }
          .btn__outlined:hover {
            background: #524fed;
            border-color: #524fed;
            color: #fff;
          }
        `}</style>
        <nav className="navbar navbar-expand-lg navbar-light">
          <Link href={"/"}>
            <a className="navbar-logo">Developer</a>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav align-items-center ms-auto">
              <li className="single-nav">
                <Link href="/">
                  <a className="nav-text">Home</a>
                </Link>
              </li>
              <li className="single-nav">
                <Link href="#service">
                  <a className="nav-text">Services</a>
                </Link>
              </li>
              <li className="single-nav">
                <Link href="#testmonial">
                  <a className="nav-text">Testmonial</a>
                </Link>
              </li>
              <li className="single-nav">
                <Link href="#project">
                  <a className="nav-text">Projects</a>
                </Link>
              </li>
              <li className="single-nav">
                <Link href="#about">
                  <a className="nav-text">About Us</a>
                </Link>
              </li>
              <button className="single-nav btn-nav btn__outlined" href="#">
                Contact Us
              </button>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
