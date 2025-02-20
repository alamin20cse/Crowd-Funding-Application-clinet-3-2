const Footer = () => {
    return (
      <footer className="footer bg-neutral text-gray-200 flex flex-col md:flex-row p-10 gap-10 lg:justify-between justify-center ">
        <nav>
          <h6 className="footer-title">Campaign Management</h6>
          <a className="link link-hover">Fundraising Ideas</a>
          <a className="link link-hover">Marketing Strategies</a>
          <a className="link link-hover">Customer Support</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Campaign</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    );
  };
  
  export default Footer;
  