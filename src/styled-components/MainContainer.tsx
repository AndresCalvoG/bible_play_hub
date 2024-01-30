import Styled from "styled-components";

export const MainContainer = Styled.main`
  width: 100vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 768px){
    padding-bottom: 4rem;
    background-color: var(--primary-color-light);
  }
`;
