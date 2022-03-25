import './App.css';
import Footer from './components/Layout/Footer/Footer';
import Header from './components/Layout/Header/Header';

import Main from './Views/Main/Main';

function App() {
  return (
    <div className="App" >
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;