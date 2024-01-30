import Styled from "styled-components";

const Container = Styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 2rem;
`;
const Title = Styled.h1`
  font-size: 3rem;
`;
const Board = Styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid white;
`;
const Card = Styled.article`
  width: 95%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid white;

  & >p{
    font-size: 2rem;
    padding: 1rem 2rem;
    margin-bottom: 1rem;
    border-bottom: 1px solid white;
  }
`;
const Answers = Styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-gap: 1rem;
  padding: 1rem;

  & > div{
    width: 80%;
    height: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: center;
    justify-self: center;
    font-size: 1.6rem;
    border-radius: 3rem;
    border: 1px solid white;

    &:hover{
      cursor: pointer;
      background-color: var(--secondary-color);
      color: var(--primary-color);
    }
  }
`;

const Trivia = () => {
  return (
    <Container>
      <Title>Trivia biblica</Title>
      <Board>
        <Card>
          <p>Quien fue el profeta que hizo descender fuego del cielo?</p>
          <Answers>
            <div>Elias</div>
            <div>Eliseo</div>
            <div>Noe</div>
            <div>Moises</div>
          </Answers>
        </Card>
      </Board>
    </Container>
  );
};

export default Trivia;
