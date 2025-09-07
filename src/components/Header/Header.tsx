import React from "react";
import styles from "./Header.module.scss"; 

const Header: React.FC = () => {
  return (
    <header className={'bg-zinc-500 h-12'} >
      <ul>
        <li>
            Ecom
        </li>
      </ul>
    </header>
  );
};

export default Header;
