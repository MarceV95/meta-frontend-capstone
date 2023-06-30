import './App.css';
import Header from './layout/Header';
import Nav from './layout/Nav';
import Main from './layout/Main';
import Footer from './layout/Footer';

import Home from './pages/Home';

function App() {
  return (
    <>
      <Header>
        <Nav />
      </Header>
      <Main>
        <Home />
      </Main>
      <Footer />
    </>
  );
}

export default App;
