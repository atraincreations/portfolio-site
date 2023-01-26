import Social from './components/buttons/socials.component';
import Resume from './components/resume-img/resume.component';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='social-container'>
        <Social />
      </div>
      <Resume />
    </div>
  );
}

export default App;
