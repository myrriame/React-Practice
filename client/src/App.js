
import './App.css';
import NavBar from './Components/Nav'
import History from './Components/History'
import Process from './Components/Process'
import Video from './Components/Video'
import Need from './Components/Need'
import Stories from './Components/Stories'
import Program from './Components/Program'
import Resource from './Components/Resource'
import Footer from './Components/Footer'
function App() {
  return (
    <div className="App">
      <NavBar />
      <Video />
      <History />
      <Process />
      <Need />
      <Stories />
      <Program />
      <Resource />
      <Footer />
    </div>
  );
}

export default App;
