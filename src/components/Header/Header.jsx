import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import Clock from "../Clock/Clock";

function Header() {
  return (
    <>
      <div className="header">
        <Link to={"/"}>
          <button>Header</button>
        </Link>
        <Link to={"/login"}>
          <PermIdentityIcon/>
        </Link>
        <Link to={"/end"}>
         <button>END</button>
        </Link>
        <Clock/>
      </div>
    </>
  );
}

export default Header;
