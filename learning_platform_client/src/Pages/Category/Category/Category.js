import { useLoaderData } from "react-router-dom";
import NewsSummaryCard from "../../Shared/NewsSummaryCart/NewsSummaryCard";
import './Category.css'

const Category = () => {
   
  const categories = useLoaderData()

  return (
    <div className='bridding'>
     {
      categories.map(categoryNews => <NewsSummaryCard key={categoryNews._id} news={categoryNews}></NewsSummaryCard>)
     }
    </div>
  );
};

export default Category;