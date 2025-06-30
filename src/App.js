import { useNavigate } from 'react-router-dom';
import './App.css';

function App() {

const navigate= useNavigate();
const booking_entry =()=>{
  navigate('/Booking_entry')
}
  return (
    <div><h1 style={{color:'white', textAlign:'center', paddingTop:'100px'}}>Welcome to CMS</h1>
    <div>
    <button onClick={booking_entry}>Booking Entry</button>
   </div>
    </div>
   
  );
  
}

export default App;
