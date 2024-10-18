import './App.css';
import Header from './components/header/header';
import MainSection from './components/mainSection/mainSection';
import AboutSection from './components/aboutSection/aboutSection';
import Footer from './components/footer/footer';
import { YMaps } from '@pbe/react-yandex-maps';

function App() {
  return (
    <YMaps query={{ apikey: 'd8c0d9b7-4aef-400b-8400-fff2ff8bfb21' }}>
      <div className="App">
        <Header />
        <MainSection/>
        <AboutSection />
        <Footer />
      </div>
    </YMaps>
  );
}

export default App;
