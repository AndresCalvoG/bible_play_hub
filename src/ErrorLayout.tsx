import Styled from "styled-components";

const Container = Styled.section`
  width: 100%;
  display: flex;
  flex-direction:column;
  align-items: center;
  margin: 2rem 0 0 0;
  padding: 1rem 4rem;
  border: 1px solid black;
  & > p{
    margin-bottom: 1rem;
    font-size: 1.6rem;
    span{
      font-weight: bold;
    }
  }
`;

const ErrorLayout = ({ error }: { error?: any }) => {
  return (
    <Container>
      <h1>Upps.. Algo salio mal</h1>
      <p>
        <span>Fecha:</span>
        {` ${new Date().toString()}`}
      </p>
      <p>
        <span>Descripcion:</span>
        {` ${error.message}`}
      </p>
      <p>
        Posible error de carga, intenta recargar la app ó limpiar la memoria
        cache y recargar nuevamente la app, si el error continua.
      </p>
      <p>Contacta a soporte tecnico</p>
      <p>support@manager.com</p>
    </Container>
  );
};

export { ErrorLayout };
