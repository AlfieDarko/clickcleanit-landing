import React from "react";
import { Icon } from "semantic-ui-react";

import {
  Container,
  IconBlockWrapper,
  IconItem,
  IconHeadlineItem,
  IconCopyItem,
  TitleItem
} from "./styled";
const ForthHero = () => {
  return (
    <>
      <Container>
        <TitleItem>Title</TitleItem>
      </Container>
      <Container>
        <TitleItem>Title</TitleItem>
        <TitleItem>Title</TitleItem>
      </Container>
      <Container>
        <TitleItem>Title</TitleItem>
        <TitleItem>Title</TitleItem>
      </Container>
    </>
  );
};

export default ForthHero;
