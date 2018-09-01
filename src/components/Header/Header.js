import React from 'react';
import {StyledHeader,StyledLogo,StyledLogoImage} from './HeaderStyle'

function Header({ number, brandCode }) {
  return (
    <StyledHeader>
      <StyledLogo>
        <StyledLogoImage src={require(`../../assets/images/${brandCode}/logo.svg`)} alt="Logo" />
      </StyledLogo>
    </StyledHeader>
  );
}

export default Header;

