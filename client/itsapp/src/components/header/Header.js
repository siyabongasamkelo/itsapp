import React from "react";
import { HeaderStyles } from "../Header.styled";
import UserHeadrCard from "./UserHeadrCard";

const Header = () => {
  return (
    <HeaderStyles>
      <UserHeadrCard />
    </HeaderStyles>
  );
};

export default Header;
