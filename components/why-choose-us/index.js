import React from "react";
import {
  Container,
  TitleItem,
  ParagraphItem,
  Wrapper,
  SexyLinebreak,
  LastWrapper,
  TitleContainer,
  SubTitle,
  Title,
  Column,
  MiddleColumn
} from "./styled";
import CTA from "../buttons/CTA";
const WhyChooseUs = () => {
  return (
    <Container>
      <TitleContainer>
        <Title>Why Choose ClickCleanit?</Title>
        <SubTitle>Here is what we do for thousands of people like you</SubTitle>
      </TitleContainer>
      <Wrapper>
        <Column>
          <img src="/static/images/chilling.jpg" />
        </Column>

        <ParagraphItem>
          <TitleItem>Save your energy for other things</TitleItem>
          <p>
            Tired of trying to do a million and one things to do in 24 hours?
          </p>
          <p>
            We want to help you get the time to relax and concentrate on the
            more important things in life by keeping your home fresh and clean
            so you don't have to.{" "}
          </p>
        </ParagraphItem>
      </Wrapper>
      <SexyLinebreak />

      <Wrapper>
        <ParagraphItem>
          <TitleItem>Get your time-freedom back</TitleItem>
          <p>
            Why spend your time cleaning when you can hire us to do twice as
            much — in half the time?
          </p>
          <p>
            By choosing ClickCleanit, we leave you with more time, more energy,
            and you get the joy of returning to an immaculate & tidy home again.
          </p>
        </ParagraphItem>
        <MiddleColumn>
          <img src="/static/images/couples.jpg" />
        </MiddleColumn>
      </Wrapper>
      <SexyLinebreak />

      <Wrapper>
        <Column>
          <img src="/static/images/happy-man.jpg" />
        </Column>
        <ParagraphItem>
          <TitleItem>Clean Home, Happy Heart</TitleItem>

          <p>
            An unclean home robs you of your health and peace of mind. It's one
            of the first signs that something is wrong.
          </p>

          <p>
            By choosing us, we will get our hands dirty for you. Your family &
            your guests will feel so impressed when they step foot in your
            everfresh home. Let us help make your home a source of happiness!
          </p>
        </ParagraphItem>
      </Wrapper>
      <SexyLinebreak />

      <LastWrapper>
        <ParagraphItem>
          <p>
            Come home to a house that’s been tidied, polished and smells
            absolutely wonderful. Book our house cleaning services and make your
            life simpler and easier.
          </p>

          <div>
            <b>You work too hard, you deserve this.</b>
          </div>
          <CTA>Book Now!</CTA>
        </ParagraphItem>
      </LastWrapper>
    </Container>
  );
};

export default WhyChooseUs;
