import "./App.css";

// App.jsx
import Header from './components/Layout/Header';
import Home from './pages/Home';
import Footer from './components/Layout/Footer';

// App Starts here...
const App = () => {
  return (
    //Layout of the website
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
