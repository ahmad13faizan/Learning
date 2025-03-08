import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart,searchBar } from "../redux/actions";
import { Search, ShoppingCart } from "lucide-react";

const ProductList = () => {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const isProductEmpty= useSelector(state =>state.found )
  console.log(products)

  return (

    <div className="products-container">
    
      <Search /> 
      <input
        type="text"
        name=""
        id=""
        placeholder="Search here"
        
        onChange={(e) => { dispatch ( searchBar(e.target.value ) )}}
      />
  

      <h2>Available Products</h2>
      { products.length===0 && <h2>No products Available</h2> }

      <>{(!isProductEmpty) &&  <h1>Cart Empty</h1>  }  </>
      <div className="products-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <button
              onClick={() => dispatch(addToCart(product))}
              className="add-to-cart"
            >
              <ShoppingCart size={16} /> Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
