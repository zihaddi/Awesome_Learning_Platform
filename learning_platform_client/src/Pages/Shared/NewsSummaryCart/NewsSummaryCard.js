import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image'
import { FaBookmark , FaShareAlt ,FaStar , FaEye} from "react-icons/fa";
import './NewsSummaryCard.css'

const NewsSummaryCard = ({news}) => {
  //console.log(news)
  return (
    <div >
       <Card className='mt-3 '>
      <Card.Header className='d-flex justify-content-between align-items-center'>
      <Card.Title>{news?.title}</Card.Title>
      </Card.Header>
      <Card.Body>
        
        <Card.Img className='bggg' src={news?.image_url} />
        <Card.Text>
          {news.details.length > 100? <p>{news.details.slice(1,100)}  <Link to={`/news/${news.category_id}`}>Read More ....</Link></p> : 
          <p>{news.details}</p>}
        </Card.Text>
      </Card.Body>
      <Card.Footer className="d-flex justify-content-between align-items-center">
         <div>
            {/* {news} */}
            <FaStar className='text-warning me-2'></FaStar>
            {news.rating.number}
          </div>  
          <div>
            <FaEye className='text-dark me-2'></FaEye>
            {news.total_view}
          </div>
      </Card.Footer>
    </Card>
    </div>
  );
};

export default NewsSummaryCard;