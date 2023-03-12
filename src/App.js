import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Toggle from "react-toggle";
import { DarkModeSwitch } from 'react-toggle-dark-mode';

function App() {
  const [isDark,setIsDark] = useState(false);
  const toggleDarkMode = (checked) => {
    setIsDark(checked);
  }
  return (

    
    <div className="App">
      
          <header className={isDark ?  "App-header": "App-headerl"}>
          <h1 className={isDark?"head1":"linklight"}>COMPETITIVE IELTS</h1>
          <DarkModeSwitch
      style={{ marginBottom: '2rem'}}
      checked={isDark}
      onChange={toggleDarkMode}
      size={50}
    />
      <div className="notice">
      <span className={isDark?"signupnotice":"linklight"}> Welcome to Competitive IELTS .</span> Here you are going to practice IELTS . Though this is common around the internet but we are introducing a leaderboard which 
            will show you real time competition all over the world. so that you realize that in which position are you in. You will see your ranking. Our machine learning model
            model will recommend you to what to revise & what to avoid.<br/><span className={isDark?"signupnotice":"linklight"}> You just need to sign up → and purchase a membership.</span> And you are free to explore IELTS world fully customized on you.
            <h1 className={isDark?"head1":"linklight"}>Wish you good luck !</h1>
      </div>
     
            <a
              className={isDark?"App-link":"linkl"}
              href="https://www.ielts.org/"
              target="_blank"
              rel="noopener noreferrer"
            > 
              IELTS Registration
            </a>
          </header>
      
    </div>
  );
}

export default App;
