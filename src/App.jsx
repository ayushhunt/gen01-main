import "./App.css";

// App.jsx
import Header from './components/Layout/Header';
import Home from './pages/Home';
import Footer from './components/Layout/Footer';

const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <main className="main">
        <Home />
      </main>
      <Footer className="footer"/>
    </div>
  );
};

export default App;
