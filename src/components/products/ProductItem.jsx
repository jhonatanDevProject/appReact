import React from "react";
import { Link } from "react-router-dom";
import { useShop } from "../../context/shop-context";
import { AiFillHeart } from "react-icons/ai";

const ProductItem = ({ item }) => {
  const { toggleFavorite, addToCart } = useShop();
  const { id, name, img, desc, price, isFavorite } = item;

  return (
    <div className="flex flex-col h-full p-3 border-2 border-solid rounded-md shadow-xl border-slate-200">
      {/* info */}
      <div className="overflow-hidden w-full h-[130px] md:h-[200px] mb-5 rounded-md group select-none">
        <img className="img-cover" src={img} alt="product-img" />
      </div>
      <div className="flex flex-col flex-1 gap-1 mb-2 lg:mb-5">
        <h1 className="text-xs font-semibold text-blue-500 capitalize md:font-bold md:text-base lg:text-xl">
          {name}
        </h1>
        <p className="hidden font-medium md:block md:text-xs lg:text-sm text-slate-600">
          {desc}
        </p>
      </div>
      {/* action */}
      <div className="flex flex-col gap-3 mt-auto">
        <div className="flex items-center justify-between">
         
        
        </div>
        <Link to={`/product/${id}`}>
          <button className="w-full py-2 text-xs font-medium text-white capitalize transition-all bg-blue-500 border-2 border-transparent border-solid rounded-md md:font-semibold md:py-3 md:text-base btn-shinny-1">
           Ver informacion 
          </button>
        </Link>
       
      </div>
    </div>
  );
};

export default ProductItem;
