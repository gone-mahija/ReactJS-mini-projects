import React from 'react';
import './App.css';

function App() {
  const name = 'Mahija Gone';
  const role='FrontEnd Learner';
  const location ='Warangal';
  const age=23;
  const goal='Learn React and Redux';

  function handleClick() {
    alert(`Keep going ${name}`);
  }

  return (
    <div className="card">
      <h1>{name}</h1>
      <p>{role}</p>
      <p>{location}</p>
      <p>{age}</p>
      <p>{goal}</p>

      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default App;
