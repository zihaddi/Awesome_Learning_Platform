import React from 'react';
import Header from '../Shared/Header/Header';
import Accordion from 'react-bootstrap/Accordion';
import './Blogs.css'
const Blogs = () => {
  return (
    <div className='d-flex justify-content-center'>
       <Accordion className='w-50 '>
      <Accordion.Item eventKey="0">
        <Accordion.Header>4.1 what is cors?</Accordion.Header>
        <Accordion.Body>
        Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>4.2 Why are you using firebase? What other options do you have to implement authentication?</Accordion.Header>
        <Accordion.Body>
        Firebase provides tools to grow your app and business, for startups global enterprises. Get your app up and running quickly securely with fully managed backend infrastructure. For Mobile or Web Apps. Release Apps Confidently. Backed by Google. Customize Your App.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>4.3 How does the private route work?</Accordion.Header>
        <Accordion.Body>
        The react private route component renders child components ( children ) if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>4.4 What is Node? How does Node work?</Accordion.Header>
        <Accordion.Body>
        It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
      {/* <Header></Header> */}
      {/* <div className='displaying-design'>
        <h3>4.1 what is cors?</h3>
        <p>
        Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.
        </p>
        <h3>4.2 Why are you using firebase? What other options do you have to implement authentication?</h3>
        <p>Firebase provides tools to grow your app and business, for startups  global enterprises. Get your app up and running quickly  securely with fully managed backend infrastructure. For Mobile or Web Apps. Release Apps Confidently. Backed by Google. Customize Your App.</p>
        <h3>4.3 How does the private route work?</h3>
        <p>The react private route component renders child components ( children ) if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property</p>
        <h3>4.4 What is Node? How does Node work?</h3>
        <p>It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.</p>
      </div> */}
    </div>
  );
};

export default Blogs;