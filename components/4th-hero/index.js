import React from "react";
import { Icon } from "semantic-ui-react";

import { Container, Title, ContentContainer, TitleContainer } from "./styled";
const ForthHero = () => {
  return (
    <Container>
      <TitleContainer>
        <Title>
          <span>Your Home Is Our Priority</span>
        </Title>
      </TitleContainer>

      <ContentContainer>
        <div>
          <div>
            <div>Icon</div> <div>Paragraph</div>
          </div>
          <div>
            <div>Icon</div> <div>Paragraph</div>
          </div>
        </div>
        <div>
          <div>
            <div>Icon</div> <div>Paragraph</div>
          </div>
          <div>
            <div>Icon</div> <div>Paragraph</div>
          </div>
        </div>
      </ContentContainer>
    </Container>
  );
};

export default ForthHero;
