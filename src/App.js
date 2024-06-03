import styled, { createGlobalStyle } from 'styled-components'
import EuropeCityList from './Components/Europe/EuropeCityList';
import TurkiyeMap from './Components/TurkiyeMap';
import TurkiyeCity from './Components/TurkiyeMap/TurkiyeCity';
const GlobalStyle = createGlobalStyle`
*{
  padding: 0;
  margin: 0;
  box-sizing:border-box;
}
body{
  font-size: 62.5%;
  background-color: #192a56;
  font-family: 'Noto Sans', sans-serif;}
`
const MainContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`
const App = () => {

  return (
    <>
      <MainContainer>
        <EuropeCityList />
        <TurkiyeCity />
        <TurkiyeMap />
      </MainContainer>
      <GlobalStyle />
    </>
  );
}

export default App;
