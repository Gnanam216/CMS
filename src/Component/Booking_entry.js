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
        <button className='tabbutton' onClick={() => setactivet('basic_tab')}>Basic</button>
        <button className='tabbutton' onClick={() => setactivet('adv_tab')}>Advanced</button>
        <button className='tabbutton' onClick={() => setactivet('qa_ta')}>QA Form</button>
      </div>
      <div className='controls'>

        {activetab === 'basic_tab' && (
          <>
            
              <div style={{ height: '650px', width: '400px', border: '2px solid black', margin: '20px' }}>
                <table>
                  <tbody>
                    <tr>
                      <td></td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div style={{ height: '650px', width: '400px', border: '2px solid black', margin: '20px' }}>
                <table>
                  <tbody>
                    <tr>
                      <td></td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div style={{ height: '650px', width: '400px', border: '2px solid black', margin: '20px' }}>
                <table>
                  <tbody>
                    <tr>
                      <td></td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
              </div>
           


          </>
        )}



      </div>

    </div>
  );
}
export default BookingEntry;