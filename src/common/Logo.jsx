import React from "react";
import { Image } from "react-bootstrap";
import logo from "../assets/png/logo.png";

const Logo = ({ small = true, noText }) => {
  return <Image src={logo} height={60} width={"100%"} className="p-0 ms-3" />;
};

export default Logo;
