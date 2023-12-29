import React, { useState } from "react";
import Logo from "../assets/images/bannerimg/uno.png";
import { NavLink } from "react-router-dom";
import { BsCartFill, BsCaretDownFill } from "react-icons/bs";
import { AiFillHome } from "react-icons/ai";
import { useShop } from "../context/shop-context";

const Header = () => {
  const { cartItem, products } = useShop();

  const favoriteCount =
    products.length > 0
      ? products.filter((item) => item.isFavorite === true).length
      : 0;

  const cartItemCount = cartItem.length;

  return (
    <header className="fixed top-0 w-full z-50 py-3 md:py-[15px] bg-[#393646] text-white">
      <div className="flex items-center justify-between page-container">
        {/* logo */}
        <NavLink
          className="flex items-center gap-3 font-bold text-blue-500"
          to="/"
        >
          <div className="w-[40px] md:w-[50px]">
            <img className="rounded-full" src={Logo} alt="logo-img" />
          </div>
          <span className="uppercase md:text-2xl">Emir Vargas</span>
        </NavLink>

        {/* menu */}
        <ul className="flex items-center gap-5">
          <li className="hidden md:flex">
            <NavLink
              className="flex items-center gap-2 text-lg font-medium uppercase"
              to="/"
            >
              <AiFillHome></AiFillHome>
              <span>Pagina Principal</span>
            </NavLink>
          </li>
         
          
        </ul>
      </div>
    </header>
  );
};

export default Header;
