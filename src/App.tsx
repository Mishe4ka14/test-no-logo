import './App.css';
import Header from './components/header/header';
import MainSection from './components/mainSection/mainSection';
import AboutSection from './components/aboutSection/aboutSection';
import Footer from './components/footer/footer';

function App() {
  return (
    <div className="App">
      <Header />
      <MainSection/>
      <AboutSection />
      <Footer />
    </div>
  );
}

export default App;
