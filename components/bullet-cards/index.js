import React from "react";
// import { Icon } from "semantic-ui-react";
import { Clock, CreditCard } from "react-feather";
import {
  Container,
  Title,
  ContentContainer,
  TitleContainer,
  ContentCard,
  ContentColumn,
  IconWrapper,
  ParagraphWrapper,
  SubTitle,
  BulletTitle,
  CTAContainer
} from "./styled";
import ClickHere from "../buttons/ClickHere";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const BulletCards = () => {
  return (
    <Container>
      <TitleContainer>
        <Title>Your Home Is Our Priority</Title>
        <SubTitle>
          You are making the best choice for your home by allowing us to take
          care of your home
        </SubTitle>
      </TitleContainer>

      <ContentContainer>
        <ContentColumn>
          <ContentCard>
            <IconWrapper>
              <FontAwesomeIcon icon="clock" size="6x" />
            </IconWrapper>
            <BulletTitle>Get Your Time Back</BulletTitle>
            <ParagraphWrapper>
              <p>
                ClickCleanit helps you live smarter, giving you time to focus on
                what’s most important to you.
              </p>
            </ParagraphWrapper>
          </ContentCard>

          <ContentCard>
            <IconWrapper>
              <FontAwesomeIcon icon="handshake" size="6x" />
            </IconWrapper>
            <BulletTitle>The Unbreakable Guarantee</BulletTitle>
            <ParagraphWrapper>
              <p>
                The service isn't complete until you are happy. That is our
                unbreakable company guarantee and we stand by this.
              </p>
            </ParagraphWrapper>
          </ContentCard>
        </ContentColumn>

        <ContentColumn>
          <ContentCard>
            <IconWrapper>
              <FontAwesomeIcon icon="clipboard-check" size="6x" />
            </IconWrapper>
            <BulletTitle>Honest & reliable cleaners</BulletTitle>
            <ParagraphWrapper>
              <p>
                Our fully vetted and comprehensively insured cleaners means that
                your home will always be in safe hands with us.
              </p>
            </ParagraphWrapper>
          </ContentCard>

          <ContentCard>
            <IconWrapper>
              <FontAwesomeIcon icon="comment" size="6x" />
            </IconWrapper>
            <BulletTitle>Online Chat</BulletTitle>
            <ParagraphWrapper>
              <p>
                Ask us question or make order changes on the fly by using our
                speedy online chat. You don't have to wait for an email or
                callback!
              </p>
            </ParagraphWrapper>
          </ContentCard>
        </ContentColumn>

        <ContentColumn>
          <ContentCard>
            <IconWrapper>
              <FontAwesomeIcon icon="glasses" size="6x" />
            </IconWrapper>
            <BulletTitle>Transparent Pricing</BulletTitle>
            <ParagraphWrapper>
              <p>
                What you see is what you pay. You won't find any hidden charges
                with us.
              </p>
            </ParagraphWrapper>
          </ContentCard>

          <ContentCard>
            <IconWrapper>
              <FontAwesomeIcon icon="stopwatch" size="6x" />
            </IconWrapper>
            <BulletTitle>Quick & Easy</BulletTitle>
            <ParagraphWrapper>
              <p>
                Our conveinient booking system reminds you the day & time your
                clean is due so you don't forget!
              </p>
            </ParagraphWrapper>
          </ContentCard>
        </ContentColumn>
      </ContentContainer>
      <CTAContainer>
        <ClickHere>Tell Me More!</ClickHere>
      </CTAContainer>
    </Container>
  );
};

export default BulletCards;
