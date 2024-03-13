import hlogo from './holberton-logo.jpg';
import './App.css';
import { getFullYear, getFooterCopy } from './utils';

function App() {
  const handleLabelClick = (event) => {
    const inputId = event.target.htmlFor;
    document.getElementById(inputId).focus();
  }

  return (
    <div className="App">
      <div className="App-header">
        <img src={hlogo} className="App-logo" alt="holberton logo" />
        <h1>School dashboard</h1>
      </div>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
        <div className="Login-input">
          <label htmlFor="email" onClick={handleLabelClick}>Email:</label>
          <input type="email" id="email"/>
          <label htmlFor="password" onClick={handleLabelClick}>Password:</label>
          <input type="passwrod" id="password"/>
          <button type="button">OK</button>
        </div>
      </div>
      <div className="App-footer">
        <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
      </div>
    </div>
  );
}

export default App;
