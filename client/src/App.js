import styled from '@emotion/styled';

const StyledApp = styled.div`
  font-size: ${(props) => props.theme.fontSizes.base};
`;

const Header = styled.header`
  color: ${(props) => {
    console.log(props);
    return props.theme.colors.mainMiddleLight;
  }};
  font-size: ${(props) => props.theme.fontSizes.xxxxl};
`;

function App() {
  return (
    <StyledApp>
      <Header className="App-header">헤더입니다.</Header>
      <main>안녕하세요 메인입니다.</main>
      <footer>푸터입니다.</footer>
    </StyledApp>
  );
}

export default App;
