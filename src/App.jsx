import { useState } from "react";
import "./App.css";

function App() {

  let [password, setPassword] = useState("");
  let [counter, setCounter] = useState(6);
  let [uppercase, setUppercase] = useState(false);
  let [lowercase, setLowercase] = useState(false);
  let [isNumber, setIsNumber] = useState(false);
  let [isSymbol, setIsSymbol] = useState(false);
  let [theme, setTheme] = useState('light');

  const toggleTheme = (e) => {
    e.preventDefault();
    if (theme === 'light'){
      setTheme('dark');
    }

    if (theme === 'dark') {
      setTheme('light');
    }
    
    
  };

  function generatePassword (e) {
    e.preventDefault();
    let password = "";
    let charset = "";
    if (uppercase) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (lowercase) charset += "abcdefghijklmnopqrstuvwxyz";
    if (isNumber) charset += "0123456789";
    if (isSymbol) charset += "!@#$%^&*";

    for (let i = 0; i < counter; i++) {
      password += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    setPassword(password);
  };

  const copyPassword = (e) => {
    e.preventDefault();
    const textarea = document.createElement("textarea");
    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
  };
  
  const addCounter = (e) => {
    e.preventDefault();
    if (counter < 20) {
      counter = counter + 1;
    }
    setCounter(counter);
  };

  const decreaseCounter = (e) => {
    e.preventDefault();
    if (counter > 6) {
      counter = counter - 1;
    }
    setCounter(counter);
  };


  return ( 
  <div className={`app ${theme}`}>
    <div className="generator">
    <div className="theme-switch" >
            <button className="btn" onClick={toggleTheme}>Enable Dark Mode</button>
        </div>
      <h2 className="generator-title">
        Password Generator
      </h2>
      <h4 className="password">{password}</h4>

      <form className="generator_form">
      <div className="generator-form-controls">
        <div className="generator-form-control">
          <label htmlFor="uppercase">UpperCase</label>
          <input checked= {uppercase} onChange={(e) => setUppercase(!uppercase)} type="checkbox" id="uppercase" name="uppercase" />
        </div>
        <div className="generator-form-control">
          <label htmlFor="lowercase">LowerCase</label>
          <input checked= {lowercase} onChange={(e) => setLowercase(!lowercase)} type="checkbox" id="lowercase" name="lowercase" />
        </div>
        <div className="generator-form-control">
          <label htmlFor="numbers">Numbers</label>
          <input checked= {isNumber} onChange={(e) => setIsNumber(!isNumber)} type="checkbox" id="numbers" name="numbers" />
        </div>
        <div className="generator-form-control">
          <label htmlFor="symbols">Symbols</label>
          <input checked= {isSymbol} onChange={(e) => setIsSymbol(!isSymbol)} type="checkbox" id="symbols" name="symbols" />
        </div>

        <div className="generator-length">
          <h2 className="generator-length-title">Password Length</h2>
          <div className="generator-length-counter">
            <button onClick={decreaseCounter}>-</button>
            <span>{ counter }</span>
            <button onClick={addCounter }>+</button>
          </div>
        </div>

        <div className="generator-form-actions">
          <button onClick={ generatePassword } className="btn generate-btn">Generate Password</button>
          <button onClick={ copyPassword } className="btn copy-btn">Copy Password</button>
        </div>
      </div>
    </form>
    </div>
  </div>
  );
}

export default App;