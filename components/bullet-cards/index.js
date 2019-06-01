import React from "react";
import {
  Container,
  Title,
  ContentContainer,
  TitleContainer,
  ContentColumn,
  SubTitle,
  CTAContainer
} from "./styled";
import ClickHere from "../buttons/ClickHere";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BulletCard } from "./bulletCard";

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
          <BulletCard
            title="Get Your Time Back"
            size="6x"
            subtitle="ClickCleanit helps you live smarter, giving you time to focus on what’s most important to you."
            icon="clock"
          />

          <BulletCard
            title="The Unbreakable Guarantee"
            size="6x"
            subtitle="The service isn't complete until you are happy. That is our
            unbreakable company guarantee and we stand by this."
            icon="handshake"
          />
        </ContentColumn>

        <ContentColumn>
          <BulletCard
            title="Honest & reliable cleaners"
            size="6x"
            subtitle="Our fully vetted and comprehensively insured cleaners means that
            your home will always be in safe hands with us."
            icon="clipboard-check"
          />

          <BulletCard
            title="Online Chat"
            size="6x"
            subtitle="Ask us question or make order changes on the fly by using our
            speedy online chat. You don't have to wait for an email or
            callback!"
            icon="comment"
          />
        </ContentColumn>

        <ContentColumn>
          <BulletCard
            title="Transparent Pricing"
            size="6x"
            subtitle="What you see is what you pay. You won't find any hidden charges
            with us."
            icon="glasses"
          />
          <BulletCard
            title="Quick & Easy"
            size="6x"
            subtitle="Our conveinient booking system reminds you the day & time your
            clean is due so you don't forget!"
            icon="stopwatch"
          />{" "}
        </ContentColumn>
      </ContentContainer>
      <CTAContainer>
        <ClickHere>Tell Me More!</ClickHere>
      </CTAContainer>
    </Container>
  );
};

export default BulletCards;
