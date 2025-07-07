import logo from './logo.svg';
import './App.css';
import TeamMember from './TeamMember';

function App() {
  return (
    <div className="app-container">
      <h2 className='app-heading'>Meet our Team</h2>

      <div className='card-wrapper'>
        <TeamMember name='Mahija' role='Front-end Developer' location='Warangal' />
        <TeamMember name='Sai' role='VLSI Designer' location='Hyderabad' />
        <TeamMember name='Sweety' role='Full-stack Developer' location='Bangalore' />
        <TeamMember />

      </div>
    </div>
  );
}

export default App;
