import { useState } from 'react';
import '../App.css';
import { useNavigate } from 'react-router-dom';

function BookingEntry() {
  const navigate = useNavigate();
  const Back = () => {
    navigate('/')
  }
  const [activetab, setactivet] = useState('basic_tab');
  return (
    <div className='container'>
      {/* <h2 style={{ color: 'white', textAlign: 'center' }}>Booking Entry Page</h2> */}
      <div className='action-buttons' >
        <button className='button'>Facility</button>
        <button className='button'>Pay Bond</button>
        <button className='button'>Release</button>
        <button className='button'>Classify</button>
        <button className='button'>Risk Assessment</button>
        <button className='button'>Work Release</button>
        <button className='button'>Add New</button>
        <button className='button'>Reset</button>
        <button className='button'>Back</button>
        <button className='button'>Search</button>
        <button className='button' onClick={Back} >Back</button>
      </div>
      <div className='tab-buttons'>
        <button className='button' onClick={() => setactivet('basic_tab')}>Basic</button>
        <button className='button' onClick={() => setactivet('adv_tab')}>Advanced</button>
        <button className='button' onClick={() => setactivet('qa_ta')}>QA Form</button>
      </div>
      <div className='controls'>
        
        {activetab === 'adv_tab' && (
          <>
           <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', marginTop: '20px' }}>

           <div style={{ display: 'flex', alignItems: 'center', padding:'5px' }}>
         <label style={{ color: 'white', width: '80px' }}>Juris:</label>
         <select style={{ flex: 1, padding: '5px' }}>
           <option value="">Select</option>
           <option value="male">Phoenix-C</option>
           <option value="female">Phoenix-US</option>
           <option value="other">Other</option>
         </select>
       </div>
           <div style={{ display: 'flex', alignItems: 'center', padding:'5px' }}>
             <label style={{ color: 'white', width: '80px' }}>Name:</label>
             <input type="text" value="Madhan" style={{ flex: 1, padding: '5px' }} />
           </div>
         
           
           <div style={{ display: 'flex', alignItems: 'center',padding:'5px' }}>
             <label style={{ color: 'white', width: '80px' }}>SPN:</label>
             <input type="number" value="23" style={{ flex: 1, padding: '5px' }} />
           </div>
          
         </div>
        
       </>
          )}
          
         

      </div>

    </div>
  );
}
export default BookingEntry;