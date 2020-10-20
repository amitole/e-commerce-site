import React from "react";
import HeaderLogin from "./haederLogin";
import { AiOutlineShoppingCart } from "react-icons/ai";

const HeaderRight = () => {
  return (
    <div className="header__right">
      <AiOutlineShoppingCart className="header__right--cart" />
      <HeaderLogin />
    </div>
  );
};

export default HeaderRight;
