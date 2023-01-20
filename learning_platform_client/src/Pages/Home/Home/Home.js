import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummaryCard from '../../Shared/NewsSummaryCart/NewsSummaryCard';

const Home = () => {
  const allnews = useLoaderData()
  //console.log(allnews)
  return (
    <div className='griding'>
      {
        allnews.map(news => <NewsSummaryCard  
          key={news._id}
          news={news} >
          </NewsSummaryCard>)
      }
    </div>
  );
};

export default Home;<h2>This is homre</h2>