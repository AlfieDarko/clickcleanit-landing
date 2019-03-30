import React from "react";
import {
  Container,
  Title,
  TitleContainer,
  ContentCardsContainer,
  ContentCard,
  SubTitle,
  TestimonialCardsContainer,
  TestimonialsContainer,
  CTAContainer,
  ProofContainer,
  TitleContainer2
} from "./styled";
import {
  ProofCol,
  ProofText,
  ProofLogo,
  ProofRow
} from "../socialproof-hero/styled";

import { Star } from "react-feather";

import { Card, Icon } from "semantic-ui-react";
import CTA from "../buttons/CTA";

const Testimonials = () => {
  return (
    <>
      <Container>
        <TitleContainer>
          <Title>You Are In Good Company!</Title>
        </TitleContainer>
        <SubTitle>
          Here are a few businesses that trust us with their property and
          commercial premises.
        </SubTitle>
        <ContentCardsContainer>
          <ContentCard>
            <img src="/static/Logos/blueprint-estate-agents.png" />
          </ContentCard>
          <ContentCard>
            <img src="/static/Logos/daviddanielslogo.png" />
          </ContentCard>
          <ContentCard>
            <img src="/static/Logos/madleyproperties.png" />
          </ContentCard>
          <ContentCard>
            <img src="/static/Logos/logo-large-website111.webp" />
          </ContentCard>
        </ContentCardsContainer>

        <ContentCardsContainer>
          <ContentCard>
            <img src="/static/Logos/moleyrobotics.jpg" />
          </ContentCard>
          <ContentCard>
            <img src="/static/Logos/huddletonsproperty.png" />
          </ContentCard>
          <ContentCard>
            <img src="/static/Logos/rozayclub.png" />
          </ContentCard>
        </ContentCardsContainer>
      </Container>

      <TestimonialsContainer>
        <TitleContainer2>
          <Title>Look what our customers say about us!</Title>
        </TitleContainer2>
        <SubTitle>
          We pride ourselves on customer service and the end result, leaving you
          with a home you can be proud of.
        </SubTitle>

        <TestimonialCardsContainer>
          <Card>
            <Card.Content header="Yasmin" extra />
            <Card.Content meta="Customer" extra />
            <Card.Content
              description="' 
            Fantastic service. Lovely, professional, polite team. Would highly recommend.
          Thanks again guys!.' "
            />
            <Card.Content extra>
              <Star color="gold" />
              <Star color="gold" />
              <Star color="gold" />
              <Star color="gold" />
              <Star color="gold" />
            </Card.Content>
          </Card>

          <Card>
            <Card.Content header="Marlon" extra />
            <Card.Content meta="Customer" extra />
            <Card.Content
              description=" 'Were very helpful when making the initial booking and accommodating when rescheduled twice.
          The clean was very good and was happy with the re-clean gaurantee too. I have already recommended this company to friends.' "
              extra
            />
            <Card.Content extra>
              <Star color="gold" />
              <Star color="gold" />
              <Star color="gold" />
              <Star color="gold" />
              <Star color="gold" />
            </Card.Content>
          </Card>

          <Card>
            <Card.Content header="Chica" extra />
            <Card.Content meta="Customer" extra />
            <Card.Content description=" 'Amazing customer service from all employees including the booking agent and cleaner. My end of tenancy clean was absolutely immaculate, great value for money! I highly recommend this company!' " />
            <Card.Content extra>
              <Star color="gold" />
              <Star color="gold" />
              <Star color="gold" />
              <Star color="gold" />
              <Star color="gold" />
            </Card.Content>
          </Card>
        </TestimonialCardsContainer>
        <TestimonialCardsContainer>
          <Card>
            <Card.Content header="Nada" extra />
            <Card.Content meta="Customer" extra />
            <Card.Content description=" 'Safe to say that I am super grateful for the service they delivered. From the admins, Zaik and Luke - who set up an arrangement that was convenient for me & appeased my worries, AND were flexible enough to change my booking last minute - to the cleaning itself, everything was very well executed' " />
            <Card.Content extra>
              <Star color="gold" />
              <Star color="gold" />
              <Star color="gold" />
              <Star color="gold" />
              <Star color="gold" />
            </Card.Content>
          </Card>

          <Card>
            <Card.Content header="Ginta" extra />
            <Card.Content meta="Moley Robotics" extra />
            <Card.Content description=" 'The best team we ever worked with! Professional, funny & great at whatever you will request them to do! My firm counts the ClickCleanIt guys as their own team members!'" />
            <Card.Content extra>
              <Star color="gold" />
              <Star color="gold" />
              <Star color="gold" />
              <Star color="gold" />
              <Star color="gold" />
            </Card.Content>
          </Card>

          <Card>
            <Card.Content header="Harry" extra />
            <Card.Content meta="Customer" extra />
            <Card.Content description="  'Great service. Had my apartment looking absolutely spotless and even removed some old furniture for free. Will be using again some time in the future'  " />
            <Card.Content extra>
              <Star color="gold" />
              <Star color="gold" />
              <Star color="gold" />
              <Star color="gold" />
              <Star color="gold" />
            </Card.Content>
          </Card>
        </TestimonialCardsContainer>

        <ProofContainer>
          <ProofCol>
            <ProofText>
              The average customer rated our service <b>5 stars</b> on
              TrustPilot!
            </ProofText>
            <ProofLogo>
              <Star color="gold" />
              <Star color="gold" />
              <Star color="gold" />
              <Star color="gold" />
              <Star color="gold" />
            </ProofLogo>
          </ProofCol>
        </ProofContainer>
      </TestimonialsContainer>
    </>
  );
};

export default Testimonials;
