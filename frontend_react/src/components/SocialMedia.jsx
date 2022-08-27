import React from "react";
import { BsLinkedin, BsInstagram } from "react-icons/bs";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a href="www.linkedin.com/in/eduardo-montoya-b44390217">
          <BsLinkedin />
        </a>
      </div>
      <div>
        <a href="https://www.instagram.com/ed.montoya_/">
          <BsInstagram />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
