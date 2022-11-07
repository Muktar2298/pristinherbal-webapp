import React from 'react';

import "./PopularCategory.css";
const PopularCategory = (props) => {
  const category = props.category;
//   console.log(category);

  return (
    <div className="popular-category">
      <div>
        <img src={category.img} alt="" />
      </div>
      <div>
        <h5>{category.name}</h5>
      </div>
    </div>
  );
};

export default PopularCategory;
