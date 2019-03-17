import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  background: #f7f9f9;
  justify-content: center;
  padding: 3rem 8rem 3rem 8rem;
  background: linear-gradient(
    to right,
    #bbd2c5,
    #536976
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  color: #283044;
  border: 1px black solid;
  /* box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.025); */
`;

export const ProofCol = styled.div`
  margin: 0 7rem 0 7rem;
  display: flex;
  flex-direction: column;
  align-content: center;
`;

export const ProofRow = styled.div`
  display: flex;
`;

export const ProofText = styled.div`
  font-size: 1.3rem;
`;

export const ProofLogo = styled.div`
  display: flex;
  justify-content: center;
`;
