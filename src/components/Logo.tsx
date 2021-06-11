import React from "react";
import styled from "styled-components/macro";
import logoImage from "src/assets/images/logo.png";

interface LogoProps {
  size: string;
}

const LogoImage: React.FC<{ className?: string }> = ({ className }) => {
  return <img className={className} src={logoImage} alt="logo" />;
};

export const Logo = styled(LogoImage)<LogoProps>`
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  display: block;
  user-select: none;
`;
