import './App.css';
import Header from './components/layout/Header';
import Nav from './components/layout/Nav';
import Main from './components/layout/Main';
import Footer from './components/layout/Footer';

import Home from './components/pages/Home';

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
