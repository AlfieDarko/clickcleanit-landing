import styled from "styled-components";
import { spacing, font, color, maxMedia } from "../designSystem";

export const OuterContainer = styled.div`
  display: flex;
  justify-content: center;
  border-radius: 1rem;
  margin-bottom: ${spacing.M}rem;
  padding: 0 ${spacing.XXXL}rem ${spacing.L}rem ${spacing.XXXL}rem;

  ${maxMedia.mobileLarge`
    padding: 0;
  `}

  ${maxMedia.tablet`
    padding: 0;
  `}

   ${maxMedia.tabletLarge`
    padding: 0;
  `}
`;

export const Container = styled.div`
  background-color: ${color.primaryCol};
  display: flex;
  flex-direction: row;
  align-items: center;
  color: ${color.primaryCol};
  justify-content: center;
  /* clip-path: polygon(100% -100%, 100% 82.26%, 0% 100%, 0% -17.38%); */
  /* RIGHTWARDS = > TO 100 */
  /* DOWNWARDS  TO 100 */
  z-index: 0;
  align-items: baseline;
  /* height: 70vh; */
  padding: 0 ${spacing.XXXL};
`;

export const HeroTitleItem = styled.div`
  font-size: ${font.XXL}rem;
  align-self: center;
  font-weight: bold;
  margin-top: ${spacing.S}rem;
  color: white;
`;

export const HeroFormItem = styled.div`
  position: relative; /* Allows z-index to take affect */
  z-index: 2; /* Stacks it above the clipped layer, which has no position nor z-index and is at z-index 1 */
  /* margin-top: 8rem; */
  /* margin-bottom: 20rem; */
  /* border: 1px solid black; */
  div {
    justify-content: center;
    display: flex;
  }

  ${maxMedia.mobileLarge`
    div > {
      display: inherit;

    }
  `}

  ${maxMedia.tablet`
    display: grid;
    margin: 1rem;
  `}
`;

export const HeroStyled = styled.div`
  /* margin-bottom: 10rem; */
`;

export const HeroDropdown = styled.div``;

export const DropBtn = styled.button``;

export const DropDownContent = styled.div``;

export const HeroCTAbtn = styled.div`
  padding: ${spacing.XXS}rem;
  display: inline;
  border-radius: 0 20px 20px 0;
  background-color: ${color.heroCTAbtn};
  color: #fff;

  ${maxMedia.mobileLarge`
    display: inherit;
    margin: 3rem 0 0 0;
    text-align: center;
  `}

  ${maxMedia.tablet`
    margin: 1rem;
  `}
`;

export const Panel = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  padding: 1rem ${spacing.L}rem 2rem ${spacing.L}rem;
  border-radius: 1rem;
  ${maxMedia.mobileLarge`
    padding: 1rem;
  `}
`;

export const HeroSubTitle = styled.div`
  align-self: center;
  font-size: ${font.M};
  color: ${color.heroSubTitleText};
  padding-bottom: ${spacing.M}rem;
`;

export const OfferBox = styled.span`
  border-radius: 1rem;
  color: ${props => props.selected ? `${color.primaryCol}` : "white"};
  background: ${props => props.selected ? "white" : "inherit"};
  font-size: ${font.M}rem;
  padding: ${spacing.S}rem;
  border: 2px solid #fff;
  transition: all 0.2s ease-in 0s;

  :hover {
    background: white;
    color: ${color.primaryCol};
    cursor: pointer;
  }
`;

export const OfferBoxContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const OfferBoxOffer = styled.div`
  padding: 0;
  align-self: center;
  color: white;
`;

export const OfferBoxRow = styled.div`
  margin-top: ${spacing.S}rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  justify-content: space-between;

  ${maxMedia.mobileLarge`
    flex-wrap: wrap;
    padding: 2rem;
  `}
`;

export const YoutubeContainer = styled.div``;

export const YoutubePanel = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: ${spacing.XXS}rem;
  justify-content: center;
  z-index: 1;
  overflow: hidden;
  width: 40%;
  img {
    max-width: 100%;
  }
  ${maxMedia.mobileLarge`
    display:none;
  `}

  ${maxMedia.tablet`
    display:none;
  `}
`;
