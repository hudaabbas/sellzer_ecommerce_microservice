import React from 'react';
import {Link} from 'react-router-dom';
import data from '../data';
// const HomeScreen=() =>{
//     return(
//         <div>HomeScreen</div>
//     )
// }
function HomeScreen (props){
    return <ul className="products">
    {data.products.map(product =>
       <li>
        <div className="product">
        <Link to={'product/' +product._id}>
        <img className="product-image" src={product.image} alt="product"></img></Link>
            <div className="product-name">
                <Link to={'product/' +product._id}>{product.name}</Link>
                {/* <a href="product.html">{product.name}</a> */}
            </div>
            <div className="product-brand">{product.brand}</div>
            <div className="product-price"> ${product.price}</div>
            <div className="product-rating">{product.rating}</div>
        </div>
    </li>)
    }

  </ul>
}
export default HomeScreen;