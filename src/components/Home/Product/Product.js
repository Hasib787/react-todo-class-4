import React from 'react';
import './Product.css';
const Product = (props) => {

    console.log(props);
    const {nayok, naika} = props;
    
      return (
        <div className='person'>
          <h3>Name: {nayok}</h3>
          <h5>Profession: {naika} </h5>
        </div> 
      );
};

export default Product;