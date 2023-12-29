import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { AiFillStar, AiFillYoutube } from "react-icons/ai";
import { useShop } from "../context/shop-context";

const ProductDetails = () => {
  const { id } = useParams();
  const { products } = useShop();

  const product = products.find((item) => {
    return item.id === parseInt(id);
  });

  const { name, img, url } = product;

  const openYouTubePage = () => {
    window.open(url, "_blank");
  };

  useEffect(() => {
    // Ajusta la posición de desplazamiento a la parte superior al montar el componente
    window.scrollTo(0, 0);
  }, []); // El segundo argumento [] asegura que useEffect solo se ejecute una vez después del montaje del componente

  return (
    <section className="my-32 page-container">
      <div className="grid items-center gap-5 p-5 border-2 border-blue-300 border-solid rounded-md shadow-md lg:grid-cols-2 ">
        <div className="relative overflow-hidden w-full h-[300px] md:h-[400px] rounded-md group">
          <img className="img-cover" src={img} alt="product-img" />
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="text-xl font-bold text-blue-500 md:text-3xl">
            {name}
          </h1>
          <p className="text-xs md:text-base text-slate-600">
            Para más información y detalles de los ejercicios, dirigirse a la página de YouTube. Suscribirse y darle Like.
          </p>
          <div className="flex items-center justify-between">
            <span className="flex items-center text-2xl text-yellow-400">
              <AiFillStar></AiFillStar>
              <AiFillStar></AiFillStar>
              <AiFillStar></AiFillStar>
              <AiFillStar></AiFillStar>
              <AiFillStar></AiFillStar>
            </span>
          </div>

          <button
            className="text-white bg-red-500 px-4 py-2 rounded-md flex items-center"
            onClick={openYouTubePage}
          >
            <AiFillYoutube className="mr-2" />
            Ver en YouTube
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
