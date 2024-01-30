import Styled, { keyframes } from "styled-components";

const loader = keyframes`
  0%,
  80%,
  100% {
    box-shadow: 0 2.5em 0 -1.3em;
  }
  40% {
    box-shadow: 0 2.5em 0 0;
  }
`;
const Container = Styled.div<{ show?: boolean }>`
  display:${(props) => (props.show ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  margin: 0;
  width: 100%;
  height: 100vh;
  z-index: 9999;
  transition: all 1.5s;
  background: rgba(32, 35, 41, 0.8);

  .loader,
.loader:before,
.loader:after {
  border-radius: 50%;
  width: 2.5rem;
  height: 2.5rem;
  animation: ${loader} 1.5s infinite ease-in-out;
}
.loader {
  color: var(--secondary-color);
  font-size: 1.3rem;
  position: absolute;
  animation-delay: -0.16s;
}
.loader:before,
.loader:after {
  content: "";
  position: absolute;
}
.loader:before {
  left: -3.5rem;
  animation-delay: -0.32s;
}
.loader:after {
  left: 3.5rem;
}
`;

const LoaderUI = ({ show }: { show: boolean }) => {
  return (
    <Container show={show}>
      <div className="loader"> </div>
    </Container>
  );
};

export { LoaderUI };
