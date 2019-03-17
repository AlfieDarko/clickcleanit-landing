import React from "react";
import { Star } from "react-feather";
import { Container, ProofCol, ProofText, ProofLogo, ProofRow } from "./styled";
const SocialProof = () => {
  return (
    <>
      <Container>
        <ProofCol>
          <ProofText>Tried & Tested</ProofText>
          <ProofLogo>
            We have helped hundreds get the clean home they deserve.
          </ProofLogo>
        </ProofCol>

        <ProofCol>
          <ProofText>
            The average customer rated our service <b>5 stars</b> on TrustPilot!
          </ProofText>
          <ProofLogo>
            <Star color="gold" />
            <Star color="gold" />
            <Star color="gold" />
            <Star color="gold" />
            <Star color="gold" />
          </ProofLogo>
        </ProofCol>

        <ProofCol>
          <ProofText>
            "My firm counts the ClickCleanIt guys as their own team members!"
          </ProofText>
          <ProofLogo>- Moley Robotics</ProofLogo>
        </ProofCol>
      </Container>
    </>
  );
};

export default SocialProof;
