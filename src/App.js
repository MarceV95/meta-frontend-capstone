import './App.css';

import Header from './layout/Header';
import Nav from './layout/Nav';
import Footer from './layout/Footer';
import Main from './layout/Main';

function App() {
  return (
    <>
      <Header>
        <Nav />
      </Header>
      <Main/>
      <Footer />
    </>
  );
}

export default App;
