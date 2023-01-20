import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './LeftSideNav.css'

const LeftSideNav = () => {
  const [categories, setCategories] = useState([]);


  useEffect(() => {
    fetch("https://learning-platform-server-eight.vercel.app/news-categories")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
        // console.log(data)
      });
  }, []);
  return (
    <div className="categorySec">
      <h4 className="categoryStyle">All Categories </h4>
      <div >
      {categories.map((category) => (
        <p key={category.id}>
          <Link  to={`category/${category.id}`}><button className='button-55 w-50 '>{category.name}</button></Link>
        </p>
      ))}
      </div>
    </div>
  );
};

export default LeftSideNav;
<h2>Left Side Nav</h2>;
