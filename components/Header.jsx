const Header = () => {
  return (
    <>
      <div className="container">
        <style jsx>{`
          .navbar-logo {
            font-size: 2.6rem;
            font-family: "Inter", sans-serif;
            color: #2b2b2c;
            font-weight: 600;
            text-decoration: none;
          }
          .navbar-nav {
            margin: 10px 0px;
          }
          .nav-item {
            margin: 0px 10px;
          }
          .nav-link {
            font-size: 1.6rem;
            font-family: "Inter", sans-serif;
            color: #141432 !important;
            font-weight: 400;
          }
          .nav-link:hover {
            color: #524fed !important;
          }
          .btn-nav {
            font-size: 1.6rem;
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
          <a className="navbar-logo" href="#">
            Crypto Gods
          </a>
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
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Products
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Clients
                </a>
              </li>
              <button className="nav-item btn-nav btn__outlined" href="#">
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
