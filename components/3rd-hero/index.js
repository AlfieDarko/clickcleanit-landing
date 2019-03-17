import React from "react";
import {
  Container,
  IconBlockWrapper,
  IconItem,
  IconHeadlineItem,
  IconCopyItem,
  Title,
  CardWrapper
} from "./styled";
import { Icon } from "semantic-ui-react";
import { Calendar, Coffee, Smile } from "react-feather";
const ThirdHero = () => {
  return (
    <Container>
      <Title>
        <span>HOW CLICKCLEANIT WORKS</span>
      </Title>

      <CardWrapper>
        <IconBlockWrapper>
          <IconItem>
            <img src="../../static/010-event.png" />
          </IconItem>
          <IconHeadlineItem>Book</IconHeadlineItem>
          <IconCopyItem>
            Select the date and time you’d like your professional to show up.
          </IconCopyItem>
        </IconBlockWrapper>
        <IconBlockWrapper>
          <IconItem>
            <img src="../../static/images/003-broom.png" />
          </IconItem>
          <IconHeadlineItem>Clean</IconHeadlineItem>
          <IconCopyItem>
            A certified cleaner comes over and cleans your place.
          </IconCopyItem>
        </IconBlockWrapper>
        <IconBlockWrapper>
          <IconItem>
            <img src="../../static/042-winner.png" />
          </IconItem>
          <IconHeadlineItem>Freedom</IconHeadlineItem>
          <IconCopyItem>
            Sit back and relax. Enjoy your sparkling home!
          </IconCopyItem>
        </IconBlockWrapper>
      </CardWrapper>
    </Container>
  );
};

export default ThirdHero;
