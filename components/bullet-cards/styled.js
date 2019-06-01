import styled from "styled-components";
import { spacing, font, color, maxMedia } from "components/designSystem";

// background: #7b9a9a;
// color: #d7e1e1;

export const Container = styled.div`
  background: ${color.bulletCardContainerBG};
  display: flex;
  padding: ${spacing.L}rem;
  background: ${color.bulletContainerBG};
  color: ${color.bulletCardTitleColor};
  justify-content: center;
  flex-direction: column;
  align-content: center;
  padding: 0 ${spacing.XXXL}rem ${spacing.XL}rem ${spacing.XXXL}rem;

  ${maxMedia.mobileLarge`
    width: 100%;
    padding: 0;
    margin-bottom: 3.2rem;
  `}
  ${maxMedia.tablet`
    padding: 0;
  `}
  ${maxMedia.tabletLarge`
    padding: 0;
   `}
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: ${spacing.L}rem;
`;

export const Title = styled.div`
  justify-content: center;
  font-size: ${font.XXL}rem;
  align-self: center;
  ${maxMedia.mobileLarge`
    text-align: center;
  `}
`;

export const SubTitle = styled.p`
  align-self: center;
  ${maxMedia.mobileLarge`
    margin-top: 1.6rem;
    text-align: center;
  `}
`;

export const ContentContainer = styled.div`
  justify-content: space-around;
  display: flex;
  ${maxMedia.mobileLarge`
    flex-wrap: wrap;
    display: contents;
    align-content: center;
    display: flex;
    flex-direction: column;  
  `}
`;

export const ContentCard = styled.div`
  color: ${color.bulletCardTextColor};
  background: ${color.bulletCardBG};
  padding: ${spacing.M}rem;
  margin: ${spacing.S}rem;
  border-radius: 1rem;
  width: 70%;
  text-align: center;

  ${maxMedia.mobileLarge`
    width: 365px;
  `}

  :hover {
    animation-name: wiggle;
    animation-duration: 1000ms;
    animation-iteration-count: 1;
    animation-timing-function: ease-in-out;

    /* For shitty browsers */
    -webkit-animation-name: wiggle;
    -ms-animation-name: wiggle;
    -ms-animation-duration: 1000ms;
    -webkit-animation-duration: 1000ms;
    -webkit-animation-iteration-count: 1;
    -ms-animation-iteration-count: 1;
    -webkit-animation-timing-function: ease-in-out;
    -ms-animation-timing-function: ease-in-out;
  }

  @-webkit-keyframes wiggle {
    0% {
      -webkit-transform: rotate(5deg);
    }
    25% {
      -webkit-transform: rotate(-5deg);
    }
    50% {
      -webkit-transform: rotate(20deg);
    }
    75% {
      -webkit-transform: rotate(-5deg);
    }
    100% {
      -webkit-transform: rotate(0deg);
    }
  }

  @-ms-keyframes wiggle {
    0% {
      -ms-transform: rotate(1deg);
    }
    25% {
      -ms-transform: rotate(-1deg);
    }
    50% {
      -ms-transform: rotate(1.5deg);
    }
    75% {
      -ms-transform: rotate(-5deg);
    }
    100% {
      -ms-transform: rotate(0deg);
    }
  }

  @keyframes wiggle {
    0% {
      transform: rotate(10deg);
    }
    25% {
      transform: rotate(-10deg);
    }
    50% {
      transform: rotate(20deg);
    }
    75% {
      transform: rotate(-5deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
`;

export const ContentColumn = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  max-width: 35%;
`;

export const IconWrapper = styled.div`
  display: flex;
  font-size: ${spacing.XXS}rem;
  justify-content: center;
`;

export const ParagraphWrapper = styled.div`
  display: flex;
  justify-content: center;

  p {
    text-align: center;
  }
`;

export const BulletTitle = styled.span`
  display: inline-block;
  font-weight: bold;
  margin: ${spacing.XXS}rem;
`;

export const CTAContainer = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
`;
