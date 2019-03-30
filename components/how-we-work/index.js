import React from "react";
import {
  Container,
  IconBlockWrapper,
  IconItem,
  IconHeadlineItem,
  IconCopyItem,
  Title,
  CardWrapper,
  SubTitle,
  CTAContainer
} from "./styled";
import CTA from "../buttons/CTA";
const HowWeWork = () => {
  return (
    <Container>
      <Title>
        <div>How ClickCleanit Works</div>
        <SubTitle>
          See how quick and easy it is to get your home back to it's former
          glory.
        </SubTitle>
      </Title>

      <CardWrapper>
        <IconBlockWrapper>
          <IconItem>
            <img src="/static/stock/serious-female-student-using-laptop-working-difficult-projec-serious-female-student-businesswoman-freelancer-using-laptop-busy-136907118.jpg" />
          </IconItem>
          <IconHeadlineItem>Book</IconHeadlineItem>
          <IconCopyItem>
            Select the date and time you’d like your professional to show up.
          </IconCopyItem>
        </IconBlockWrapper>
        <IconBlockWrapper>
          <IconItem>
            <img src="/static/stock/smiling-cleaning-lady-smiling-cleaning-lady-green-uniform-yellow-rubber-gloves-work-114114560.jpg" />
          </IconItem>
          <IconHeadlineItem>Clean</IconHeadlineItem>
          <IconCopyItem>
            Your allocated certified cleaner comes over and cleans your home
            spotless.
          </IconCopyItem>
        </IconBlockWrapper>
        <IconBlockWrapper>
          <IconItem>
            <img src="/static/stock/diverse-family-spend-free-time-home-using-laptop-multi-ethnic-young-married-couple-little-adorable-daughter-sitting-sofa-130565812.jpg" />
          </IconItem>
          <IconHeadlineItem>Freedom</IconHeadlineItem>
          <IconCopyItem>
            Sit back, relax & enjoy your new sparkling home. You deserve it.
          </IconCopyItem>
        </IconBlockWrapper>
      </CardWrapper>
      <CTAContainer>
        Are you ready to transform your living space?
        <CTA>Book Now!</CTA>
      </CTAContainer>
    </Container>
  );
};

export default HowWeWork;
