import React, { useContext } from "react";
import Container from "../Container";
import Button from "../Button";
import products from "../../assets/products";
import { Link } from 'react-scroll';
import LightGallery from "lightgallery/react";

// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

// import plugins if you need
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import { CartContext } from "../../contexts/CartContext";

const Products = () => {
  const {cart, setCart} = useContext(CartContext)

  const handleAddToCart = (product) => {
      setCart([...cart, { ...product, productQuantity: 1 }])
  };


  return (
    <Container className="mt-24">
      <p className="text-center text-primary text-2xl mb-6 font-bold">বিশেষ ১০% ছাড় বিশুদ্ধ এবং স্বাস্থ্যকর আচারে!</p>
      

      {/* Products */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-5">
        {/* product card */}

        {products.map((product) => (
          <div key={product.id} className="flex flex-col justify-between p-3 bg-white rounded-lg">
            <div>
              <LightGallery speed={500} plugins={[lgThumbnail, lgZoom]}>
                <a href={product.photo}>
                  <figure className="rounded-lg overflow-hidden aspect-square">
                    <img
                      className="w-full h-full object-cover object-center"
                      src={product.photo}
                      alt=""
                    />
                  </figure>
                </a>
              </LightGallery>

              <h3 className="sm:text-lg font-medium mt-3 text-text">
                {product.name} ({product.quantity})
              </h3>
            </div>
            <div className="space-y-2 mt-2">
              <p className="text-secondary text-[20px] leading-none font-bold">
                ৳ {product.price}{" "}
                <span className="text-base line-through text-gray-700">
                  ৳ {product.regularPrice}
                </span>
              </p>
              <Link to="order" onClick={()=>handleAddToCart(product)} smooth={true} duration={1500} offset={-80}><Button className="w-full">অর্ডার করুন</Button></Link>
              
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Products;
