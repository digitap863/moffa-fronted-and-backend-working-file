import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import image from "../../assets/img/logo/PAKK.png";

const FooterCopyright = ({ footerLogo, spaceBottomClass, colorClass }) => {
  return (
    <div
      className={`copyright ${spaceBottomClass ? spaceBottomClass : ""} ${
        colorClass ? colorClass : ""
      }`}
    >
      <div className="footer-logo">
        <Link to={process.env.PUBLIC_URL + "/"}>
          <img alt="" src={process.env.PUBLIC_URL + image} />
        </Link>
      </div>
      <p>
      CopyRight © 2022 Thepaaki
       {/* <span ><a href="https://tapclone.co.in/" target="_blank" style={{color:"orange"}}>Tapclone</a></span> */}
        <a href="/" rel="noopener noreferrer" target="_blank">
         
        </a>
        <br /> All Rights Reserved
      </p>
      <div>

      </div>
    </div>
  );
};

FooterCopyright.propTypes = {
  footerLogo: PropTypes.string,
  spaceBottomClass: PropTypes.string,
  colorClass: PropTypes.string,
};

export default FooterCopyright;
