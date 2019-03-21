import styled from "styled-components";

export const OuterContainer = styled.div`
  display: flex;
  justify-content: center;
  border-radius: 1rem;
  margin-bottom: 5rem;
`;

export const Container = styled.div`
  /* box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.025); */
  background-color: #008DB9;

  display: flex;
  flex-direction: row;
  align-items: center;
  /* background-color: #f7f9f9; */
  color: #007599;
  justify-content: center;
  clip-path: polygon(100% -100%, 100% 82.26%, 0% 100%, 0% -17.38%);
    /* RIGHTWARDS = > TO 100 */
  /* DOWNWARDS  TO 100 */
  z-index: 0;
  align-items: baseline;
  height: 75vh;
  padding: 0 20rem;

`;

export const HeroTitleItem = styled.div`
  font-size: 4rem;
  align-self: center;
  font-weight: bold;
  margin-top: 2rem;
  color: white;
`;

export const HeroFormItem = styled.div`
    position: relative; /* Allows z-index to take affect */
    z-index: 2; /* Stacks it above the clipped layer, which has no position nor z-index and is at z-index 1 */
  /* margin-top: 8rem; */
  /* margin-bottom: 20rem; */
  /* border: 1px solid black; */
`;

export const HeroDropdown = styled.div``;

export const DropBtn = styled.button``;

export const DropDownContent = styled.div``;

export const HeroCTAbtn = styled.div`
  padding: 1.1rem;
  display: inline;
  border-radius: 0 20px 20px 0;
  background-color: #FF4C40;
  color: #fff;
`;

export const HeroStyled = styled.div`
  /* margin-bottom: 10rem; */
`;

export const Panel = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  padding: 1rem 7rem 2rem 7rem;
  border-radius: 1rem;
`;

export const HeroSubTitle = styled.div`
  align-self: center;
  font-size: 1.6rem;
  color: white;
  padding-bottom: 4rem;
`;

export const OfferBox = styled.span`
  border-radius: 1rem;
  color: #fff;
  /* background-color: #2e4057; */
  font-size: 1.6rem;
  padding: 2.7rem;
  border: 2px solid #fff;
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
  margin-top: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  justify-content: space-between;
`;

export const YoutubeContainer = styled.div``;

export const YoutubePanel = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  padding: 3rem 7rem 2rem 7rem;
  border-radius: 1rem;
  justify-content: center;
  z-index: 1;
`;
