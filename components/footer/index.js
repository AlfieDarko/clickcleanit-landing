import React from "react";
import {
  Container,
  LeftContainer,
  SocIcon,
  RightContainer,
  ItemColumn,
  ColTitle,
  ColLink
} from "./styled";

import * as Icon from "react-feather";

const Footer = () => {
  return (
    <Container>
      <LeftContainer>
        <SocIcon>
          <Icon.Facebook />
        </SocIcon>
        <SocIcon>
          <Icon.Twitter />
        </SocIcon>
        <SocIcon>
          <Icon.Instagram />
        </SocIcon>

        <SocIcon>
          <Icon.Linkedin />
        </SocIcon>
      </LeftContainer>

      <RightContainer>
        <ItemColumn>
          <ColTitle>Company</ColTitle>
          <ColLink>
            <a href="#">About Us</a>
          </ColLink>
          <ColLink>
            <a href="#">Testimonials</a>
          </ColLink>
        </ItemColumn>

        <ItemColumn>
          <ColTitle>Services</ColTitle>
          <ColLink>
            <a href="#">Corporate Cleaning</a>
          </ColLink>
          <ColLink>
            <a href="#">Domestic</a>
          </ColLink>
          <ColLink>
            <a href="#">Deep Clean</a>
          </ColLink>
          <ColLink>
            <a href="#">End Of Tenancy</a>
          </ColLink>
          <ColLink>
            <a href="#">Carpet Cleaning</a>
          </ColLink>
        </ItemColumn>

        <ItemColumn>
          <ColTitle>Support</ColTitle>
          <ColLink>
            <a href="#">Contact Us</a>
          </ColLink>
          <ColLink>
            <a href="#">FAQ's</a>
          </ColLink>
          <ColLink>
            <a href="#">Terms of Service</a>
          </ColLink>
          <ColLink>
            <a href="#">Privacy Policy</a>
          </ColLink>
        </ItemColumn>
      </RightContainer>
    </Container>
  );
};

export default Footer;
