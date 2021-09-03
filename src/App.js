import styled from 'styled-components';
import Header from './Layout/Header';
import Router from './Routes/Router';
import Footer from './Layout/Footer';

function App() {
  return (
        <Layout>
          <Header/>
            <Router />
          <Footer/>
        </Layout>
  );
}

export default App;

const Layout = styled.div`
  margin : 0 auto;
  flex-flow: row wrap;
`