import Appliacation from './components/Application/Application';
import Skills from './components/Skills/Skills';
import Count from './components/counter/Counter';
import './styles/App.css'
import AppProviders from './providers/AppProviders';
import MuiMode from "./components/MUI/MuiMode";

const App = () => {
  return (
    <AppProviders>
      <div className='App'>
        <MuiMode />
        {/* <Appliacation />
        <Skills skills={["HTML", "CSS", "JS", "TS", "React"]} />
        <Count /> */}
      </div>
    </AppProviders>
  )
}

export default App
