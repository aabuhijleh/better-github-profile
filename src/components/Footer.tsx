import React from "react";
import logo from "src/assets/images/logo.png";

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div>© Abdurrahman Abu-Hijleh 2021</div>
      <div>
        <img className="logo" src={logo} alt="logo" width="24" height="24" />
      </div>
      <div>
        Created with{" "}
        <a href="https://github.com/aabuhijleh/github-personal-website-generator">
          GitHub Personal Website Generator
        </a>
      </div>
    </footer>
  );
};
