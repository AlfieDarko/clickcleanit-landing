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
  Title
} from "./styled";
import CTA from "../buttons/CTA";
const WhyChooseUs = () => {
  return (
    <Container>
      <TitleContainer>
        <Title>Why Choose ClickCleanit?</Title>
        <SubTitle>loremipsum loremipsum</SubTitle>
      </TitleContainer>
      <Wrapper>
        <TitleItem>Save your energy for other things</TitleItem>
        <ParagraphItem>
          <p>
            The last thing on our mind when we come home from a hard day's work
            is using the little time left to do the cleaning.
          </p>
          <p>
            That's we are dedicated to giving you the cleanest home possible so
            you can relax and concentrate on the more important things in life.
          </p>
        </ParagraphItem>
      </Wrapper>
      <SexyLinebreak />
      <Wrapper>
        <TitleItem>Create more spare time for yourself</TitleItem>

        <ParagraphItem>
          <p>
            Why spend your time cleaning when you can hire us to do twice as
            much — in half the time?
          </p>

          <p>
            By choosing ClickCleanit, we leave you with more time, more energy,
            and you get the joy of returning to an impeccable home again.
          </p>

          <p>
            You’re not only getting back the home you first moved into — but you
            are creating a
            <b> safe, clean environment for you & your family to thrive in</b>.
          </p>
        </ParagraphItem>
      </Wrapper>
      <SexyLinebreak />

      <Wrapper>
        <TitleItem>Let Us Do Your Dirty Work Today</TitleItem>
        <ParagraphItem>
          <p>
            Cleaning your home can be a daunting & tiring task. <br />
            How much time do we really have to clean after coming back home,
            cooking and wining down from a hard days work?
          </p>

          <p>
            By choosing us, you get to keep your hands clean while we keep your
            home clean. It's a win/win situation.
          </p>
        </ParagraphItem>
      </Wrapper>
      <SexyLinebreak />

      <LastWrapper>
        <ParagraphItem>
          <p>
            Come home to a house that’s been tidied, polished and smells
            wonderfully fresh. Book our house cleaning services and make your
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
