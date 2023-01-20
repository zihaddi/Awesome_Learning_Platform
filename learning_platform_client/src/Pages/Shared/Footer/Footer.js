import React from "react";
import './Footer.css'
const Footer = () => {
  return (
    // <div className="d-flex justify-content-center  mt-5 mb-4">
    //   <small>copyright@2022 Zihad Jamil</small>
    // </div>
   
     <div className=" mb-0 mt-4 p-5 background fonting">
  <footer className="py-1 background2">
    <div className="row">
      

      <div className="col-6 col-md-4 mb-0">
        <h3>ZLearning Hub</h3>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted"> Level-4, 34, Awal Centre, Banani, Dhaka</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted"> Official: abc.com</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted"> Helpline : 01322810873 (Available : Sat - Thu, 10:00 AM to 5:00 PM)</a></li>
          
        </ul>
      </div>

      <div className="col-6 col-md-3 mb-0">
        
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Blog</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Success</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">About Us</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Terms and Conditions</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Privacy & App Privacy Policy</a></li>
        </ul>
      </div>

      <div className="col-md-4 offset-md-1 mb-0">
        <form>
          <h5>Subscribe to our ZLearning Site</h5>
          <p>Ask us if you have any query.</p>
          <div className="d-flex flex-column flex-sm-row w-100 gap-2">
            <label for="newsletter1" className="visually-hidden">Email address</label>
            <input id="newsletter1" type="text" className="form-control" placeholder="Email address"/>
            <button className="btn btn-primary" type="button">Subscribe</button>
          </div>
        </form>
      </div>
    </div>

    <div className="d-flex flex-column flex-sm-row justify-content-between py-0 my-0 border-top ">
      <p className="text-center">&copy; 2022 Zlearning Hub-Faysal Jamil Zihad.</p>
      <ul className="list-unstyled d-flex">
        <li className="ms-3"><a className="link-dark" href="#"><svg className="bi" width="24" height="24"></svg></a></li>
        <li className="ms-3"><a className="link-dark" href="#"><svg className="bi" width="24" height="24"></svg></a></li>
        <li className="ms-3"><a className="link-dark" href="#"><svg className="bi" width="24" height="24"></svg></a></li>
      </ul>
    </div>
  </footer>
</div>
   
  );
};

export default Footer;
