import React, { useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link, useLoaderData } from 'react-router-dom';
import { FaStar , FaEye} from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import Pdf from "react-to-pdf";

const ref = React.createRef();
const News = () => {
  
  const news = useLoaderData()
 // console.log(news)
 const loadCheckoutToast = () => toast(`Got The Premium Access of ! ${news[0]?.title}`);
  //console.log(news[0])
  return (
    <div >
       <Card className='mt-3'>
      <Card.Header className='d-flex justify-content-between align-items-center'>
        <div className='d-flex '>
        <Card.Title>{news[0]?.title}</Card.Title>
        </div>
        <div>
        <Pdf targetRef={ref} filename="code-example.pdf">
        {({ toPdf }) => <button className='btn btn-primary' onClick={toPdf}>Download</button>}
      </Pdf>
        </div>
      </Card.Header>
      <div ref={ref}>
      <Card.Body className='d-flex' >
        
        <Card.Img  className='bggg me-3' src={news[0]?.image_url} />
        <Card.Text>
          <p>{news[0]?.details}</p>
          <div className='d-flex justify-content-center mt-4'>
          <Link  to={`/premium/${news[0].category_id}`}><Button onClick={loadCheckoutToast} variant="primary">Get Premium Access</Button><ToastContainer></ToastContainer></Link>
          
          </div>
        </Card.Text>
      </Card.Body>
      <Card.Footer className="d-flex justify-content-between align-items-center">
         <div>
            {/* {news} */}
            <FaStar className='text-warning me-2'></FaStar>
            {/* {news.rating.number} */}
          </div>  
          <div>
            <FaEye className='text-dark me-2'></FaEye>
            {news[0]?.total_view}
          </div>
      </Card.Footer>
      </div>
     <div className='d-flex justify-content-center mb-2'>
     
     </div>
    </Card>
    </div>
  );
};

export default News;