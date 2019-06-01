import {
  ContentCard,
  IconWrapper,
  ParagraphWrapper,
  BulletTitle
} from "./styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const BulletCard = props => (
  <ContentCard>
    <IconWrapper>
      <FontAwesomeIcon icon={props.icon} size={props.size} />
    </IconWrapper>
    <BulletTitle>{props.title}</BulletTitle>
    <ParagraphWrapper>
      <p>{props.subtitle}</p>
    </ParagraphWrapper>
  </ContentCard>
);
