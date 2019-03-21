import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  background-color: white;
  color: #007599;
  padding: 8rem;
  flex-direction: column;
  padding:  0 20rem 8rem 20rem
  `;

export const TitleItem = styled.div`
  margin: 4rem;
`;

export const IconBlockWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 1rem;
  box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.025);
  width: 25%;
`;
export const ParagraphItem = styled.div``;

export const IconItem = styled.div`
  display: flex;
  justify-content: center;
  img {
    align-self: end;
    display: block;
    max-width: 60%;
    max-height: 60%;
  }
  /* margin: 4rem; */
`;

export const IconHeadlineItem = styled.div`
  align-self: center;
  font-size: 3.2rem;
  margin: 4rem;
`;

export const IconCopyItem = styled.div`
  align-self: center;
  font-size: 1.6rem;
  margin: 4rem;
`;

export const Title = styled.div`
  padding: 6rem;
  display: flex;
  align-self: center;

  span {
    font-weight: bold;
    font-size: 3.2rem;
    color: #007599;
  }
`;

export const CardWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;
