import React from "react";
import { slide as Menu } from "react-burger-menu";

export const BurgerMenu = props => {
  return (
    <Menu {...props}>
      <a id="home" className="menu-item" href="/">
        Home
      </a>
      <p id="services" className="menu-item">
        About
      </p>
      <a id="services" className="menu-item" href="/services/deepclean">
        Deep Clean
      </a>
      <a id="services" className="menu-item" href="/services/domestic">
        Domestic
      </a>
      <a id="services" className="menu-item" href="/services/endoftenancy">
        End Of Tenancy
      </a>
      <a id="services" className="menu-item" href="/services/one-off">
        One-Off Clean
      </a>
      <a id="contact" className="menu-item" href="/contact">
        Contact
      </a>
      <a className="menu-item--small" href="">
        Settings
      </a>
    </Menu>
  );
};

export default BurgerMenu;
