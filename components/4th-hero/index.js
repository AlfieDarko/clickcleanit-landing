import React from "react";
// import { Icon } from "semantic-ui-react";
import { Clock, CreditCard } from "react-feather";
import { Container, Title, ContentContainer, TitleContainer, ContentCard, ContentColumn } from "./styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const ForthHero = () => {
  return (
    <Container>
      <TitleContainer>
        <Title>
          <span>Your Home Is Our Priority</span>
        </Title>
      </TitleContainer>

      <ContentContainer>

        <ContentColumn>
          <ContentCard>
            <div>
              <FontAwesomeIcon icon="clock" size="6x" />
            </div>{" "}
            <div>
              <p>
                ClickCleanit helps you live smarter, giving you time to focus on
                what’s most important.
              </p>
            </div>
          </ContentCard>
          <ContentCard>
            <div>
              <FontAwesomeIcon icon="handshake" size="6x" />
            </div>
            <div>
              <p>The service isn't complete until you are happy. That is our company guarantee and we stand by this.</p>
            </div>
          </ContentCard>
        </ContentColumn>


        <ContentColumn>
          <ContentCard>
            <div>
              <FontAwesomeIcon icon="clipboard-check" size="6x" />
            </div>
            <div>
              <p>
                We rigorously vet all of our Cleaners, who undergo identity
                checks as well as in-person interviews.
              </p>
            </div>
          </ContentCard>
          <ContentCard>
            <div>
              <FontAwesomeIcon icon="comment" size="6x" />
            </div>
            <div>
              Online communication makes it easy for you to stay in touch with your Cleaners.
            </div>
          </ContentCard>
        </ContentColumn>

      </ContentContainer>
    </Container>
  );
};

export default ForthHero;
