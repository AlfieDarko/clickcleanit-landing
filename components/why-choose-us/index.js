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
  MiddleColumn,
  ParagraphItemMid,
  LastParagraphItem
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
          <img src="/static/stock/chilling.jpg" />
        </Column>

        <ParagraphItem>
          <TitleItem>Save your energy for other things</TitleItem>
          <p>
            Modern day living is <b>hard</b>. It's like there are a million
            things we need to do but there's simply not enough time. Things can
            get really exhausting.
          </p>
          <p>
            We want to help you get the time to relax and concentrate on the
            more important things in life by keeping your home fresh and clean
            so you don't have to.
          </p>
        </ParagraphItem>
      </Wrapper>
      <SexyLinebreak />

      <Wrapper>
        <ParagraphItemMid>
          <TitleItem>Get your time-freedom back</TitleItem>
          <p>
            Why spend your time cleaning when you can hire us to do twice as
            much — in half the time?
          </p>
          <p>
            By choosing ClickCleanit, we leave you with more time, more energy,
            and you get the joy of returning to an immaculate & tidy home again.
          </p>
        </ParagraphItemMid>
        <MiddleColumn>
          <img src="/static/stock/couples.jpg" />
        </MiddleColumn>
      </Wrapper>
      <SexyLinebreak />

      <Wrapper>
        <Column>
          <img src="/static/stock/happy-man.jpg" />
        </Column>
        <ParagraphItem>
          <TitleItem>Clean Home, Happy Heart</TitleItem>

          <p>
            An unclean home robs you of your health and peace of mind. It's one
            of the first signs that something is wrong.
          </p>

          <p>
            By choosing us, we will get our hands dirty for you. Regain that
            brand new feeling when you first moved in. Let us help make your
            home a source of happiness again!
          </p>
        </ParagraphItem>
      </Wrapper>
      <SexyLinebreak />

      <LastWrapper>
        <LastParagraphItem>
          <p>
            Come home to a house that’s been tidied, polished and smells
            absolutely wonderful. <br />
            Book our house cleaning services and make your life simpler and
            easier.
          </p>

          <div>
            <b>You work too hard, you deserve this.</b>
          </div>
          <CTA>Book Now!</CTA>
        </LastParagraphItem>
      </LastWrapper>
    </Container>
  );
};

export default WhyChooseUs;
