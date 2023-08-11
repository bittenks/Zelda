import './App.css'
import  Navbar  from './Components/Navbar/Navbar';
import  Header  from './Components/Header/Header';
import './assets/Fonts/HyliaSerif.ttf';
import  Games  from './Components/Games/Games';
import Footer from './Components/Footer/Footer';

function App() {

  return (
    <>
    <Navbar/>
    <div className='Header'>
    <Header/>
    </div>
      <Games/>
      <Footer/>
    </>
  )
}

export default App
