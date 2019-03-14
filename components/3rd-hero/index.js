import React from "react";
import {
  Container,
  IconBlockWrapper,
  IconItem,
  IconHeadlineItem,
  IconCopyItem
} from "./styled";
import { Icon } from "semantic-ui-react";
const ThirdHero = () => {
  return (
    <Container>
      <IconBlockWrapper>
        <IconItem>[[Insert Icon]]</IconItem>
        <IconHeadlineItem>[[Insert Headline]]</IconHeadlineItem>
        <IconCopyItem>[[Insert Copy]]</IconCopyItem>
      </IconBlockWrapper>
      <IconBlockWrapper>
        <IconItem>[[Insert Icon]]</IconItem>
        <IconHeadlineItem>[[Insert Headline]]</IconHeadlineItem>
        <IconCopyItem>[[Insert Copy]]</IconCopyItem>
      </IconBlockWrapper>
      <IconBlockWrapper>
        <IconItem>[[Insert Icon]]</IconItem>
        <IconHeadlineItem>[[Insert Headline]]</IconHeadlineItem>
        <IconCopyItem>[[Insert Copy]]</IconCopyItem>
      </IconBlockWrapper>
    </Container>
  );
};

export default ThirdHero;
