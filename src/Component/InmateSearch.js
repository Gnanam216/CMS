import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './InmateSearch.css';
function InmateSearch() {

    const [activetab, setactivet] = useState('basic_tab');
    const navigate = useNavigate();
    const Inmate_Entry = () => {
        navigate('/InmateEntry')
    }
    const back_click = () => {
        navigate('/InmateSearch')
    }
    return (
        <div>
            <div>
                <table style={{ marginLeft: '780px' }}>
                    <tr>
                        <td><button className='button'>Facility</button></td>
                        <td><button className='button'>Pay Bond</button></td>
                        <td><button className='button'>Release</button></td>
                        <td><button className='button'>Classify</button></td>
                        <td><button className='button'>Risk Assessment</button></td>
                        <td><button className='button'>Work Release</button></td>
                        <td><button className='button' onClick={Inmate_Entry}>Add New</button></td>
                        <td><button className='button'>Reset</button></td>
                        <td><button className='button'>Back</button></td>
                        <td><button className='button'>Search</button></td>
                        <td><button className='button' onClick={back_click}>Back</button></td>
                    </tr>
                </table>
            </div>
            <div>
                <table style={{ marginLeft: '100px' }}>
                    <tr>

                        <button className='tabbutton' onClick={() => setactivet('basic_tab')}>Basic</button>
                        <button className='tabbutton' onClick={() => setactivet('adv_tab')}>Advanced</button>
                        <button className='tabbutton' onClick={() => setactivet('qa_ta')}>QA Form</button>

                    </tr>
                </table>
            </div>
            {activetab === 'basic_tab' && (
                <>
                    <div
                        style={{
                            border: '2px solid black',
                            height: '700px',
                            width: '1800px',
                            marginLeft: '100px',
                            display: 'flex',         // ✅ Make child elements flow horizontally
                            gap: '50px',             // ✅ Optional: spacing between tables
                            alignItems: 'flex-start', // Optional: align tables to the top
                        }}
                    >
                        <table
                            style={{

                                width: '500px',
                                height: '650px',
                                marginTop: '20px',
                                marginLeft: '80px'
                            }}
                        >
                            <tbody>
                                <tr>
                                    <td> <label className='label'>Juris</label></td>
                                    <td><select className="Dropdown">
                                        <option value="">Select</option>
                                        <option value="1">Phoenix-C</option>
                                        <option value="2">Phoenix-US</option>
                                        <option value="3">Other</option>
                                    </select></td>
                                </tr>
                                <tr>
                                    <td><label className='label'>Name</label></td>
                                    <td><input className='textbox' type="text" value="Madhan" /></td>
                                </tr>
                                <tr>
                                    <td><label className='label'>SPN</label></td>
                                    <td> <input className='textbox' type="text" value="23" /></td>
                                </tr>
                                <tr>
                                    <td><label className='label'>Sex</label></td>
                                    <td><select className='Dropdown'>
                                        <option>--</option>
                                        <option value="M">Male</option>
                                        <option value="FM">Female</option>
                                    </select></td>
                                </tr>
                                <tr>
                                    <td><label className='label'>Date Type</label></td>
                                    <td><select className="Dropdown">
                                        <option>--</option>
                                        <option value="M">Booking Date</option>
                                        <option value="FM">Court Date</option>
                                        <option value="M">Release Date</option>
                                        <option value="FM">Huber Date</option>
                                    </select></td>
                                </tr>
                                <tr>
                                    <td><label className='label'>Booking Status</label></td>
                                    <td><select id="fruits" name="fruits" multiple size="5" style={{ width: '200px', padding: '8px', overflowY: 'auto' }}>
                                        <option>Active-In</option>
                                        <option>Active-Out</option>
                                        <option>In-Progress</option>
                                        <option>Day release</option>
                                        <option>Escaped Close</option>
                                        <option></option>
                                    </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td><label className='label'>Charge Class</label></td>
                                    <td><select className="Dropdown">
                                        <option>--</option>
                                        <option value="M">Booking Date</option>
                                        <option value="FM">Court Date</option>
                                        <option value="M">Release Date</option>
                                        <option value="FM">Huber Date</option>
                                    </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td><label className='label'>Charge Disposition</label></td>
                                    <td><select className="Dropdown">
                                        <option>--</option>
                                        <option value="M">Booking Date</option>
                                        <option value="FM">Court Date</option>
                                        <option value="M">Release Date</option>
                                        <option value="FM">Huber Date</option>
                                    </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td><label className='label'>Detainer Type</label></td>
                                    <td><select className="Dropdown">
                                        <option>--</option>
                                        <option value="M">Booking Date</option>
                                        <option value="FM">Court Date</option>
                                        <option value="M">Release Date</option>
                                        <option value="FM">Huber Date</option>
                                    </select></td>
                                </tr>
                                <tr>
                                    <td><label className='label'>Bond Type</label></td>
                                    <td><select className="Dropdown">
                                        <option>--</option>
                                        <option value="M">Booking Date</option>
                                        <option value="FM">Court Date</option>
                                        <option value="M">Release Date</option>
                                        <option value="FM">Huber Date</option>
                                    </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td><label className='label'>Classification</label></td>
                                    <td><select className="Dropdown">
                                        <option>--</option>
                                        <option value="M">Booking Date</option>
                                        <option value="FM">Court Date</option>
                                        <option value="M">Release Date</option>
                                        <option value="FM">Huber Date</option>
                                    </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td><label className='label'>To Be Release In Days</label></td>
                                    <td><input className='textbox' type="text" value="" /></td>
                                </tr>
                            </tbody>
                        </table>

                        <table
                            style={{

                                width: '500px',
                                height: '650px',
                                marginTop: '20px',
                                marginLeft: '20px'
                            }}
                        >
                            <tbody>
                                <tr>
                                    <td><label className='label'>CMS Booking #</label></td>
                                    <td><input className='textbox' type="text" value="" /></td>
                                </tr>
                                <tr>
                                    <td><label className='label'>Race</label></td>
                                    <td><select className="Dropdown">
                                        <option>--</option>
                                        <option value="M">Booking Date</option>
                                        <option value="FM">Court Date</option>
                                        <option value="M">Release Date</option>
                                        <option value="FM">Huber Date</option>
                                    </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td><label className='label'>From</label></td>
                                    <td>
                                        <div style={{ display: 'flex', gap: '5px', marginTop: '8px' }}>
                                            <input type='date' />
                                            <input type='time' style={{ width: '75px' }} />
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td><label className='label'>Building</label></td>
                                    <td><select className="Dropdown">
                                        <option>--</option>
                                        <option value="M">Booking Date</option>
                                        <option value="FM">Court Date</option>
                                        <option value="M">Release Date</option>
                                        <option value="FM">Huber Date</option>
                                    </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td><label className='label'>Floor</label></td>
                                    <td><select id="fruits" name="fruits" multiple size="5" style={{ width: '200px', padding: '8px', overflowY: 'auto' }}>
                                        <option>Active-In</option>
                                        <option>Active-Out</option>
                                        <option>In-Progress</option>
                                        <option>Day release</option>
                                        <option>Escaped Close</option>
                                        <option></option>
                                    </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td><label className='label'>Cell</label></td>
                                    <td><input className='textbox' type="text" value="" /></td>
                                </tr>
                                <tr>
                                    <td><label className='label'>Assigned Cell</label></td>
                                    <td><input className='textbox' type="text" value="" /></td>
                                </tr>
                                <tr>
                                    <td><label className='label'>Inmate Type</label></td>
                                    <td><select className="Dropdown">
                                        <option>--</option>
                                        <option value="M">Booking Date</option>
                                        <option value="FM">Court Date</option>
                                        <option value="M">Release Date</option>
                                        <option value="FM">Huber Date</option>
                                    </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td><label className='label'>Confine Reason</label></td>
                                    <td><select className="Dropdown">
                                        <option>--</option>
                                        <option value="M">Booking Date</option>
                                        <option value="FM">Court Date</option>
                                        <option value="M">Release Date</option>
                                        <option value="FM">Huber Date</option>
                                    </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td><label className='label'>Sentance Status</label></td>
                                    <td><select className="Dropdown">
                                        <option>--</option>
                                        <option value="M">Booking Date</option>
                                        <option value="FM">Court Date</option>
                                        <option value="M">Release Date</option>
                                        <option value="FM">Huber Date</option>
                                    </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td><label className='label'>Sort By</label></td>
                                    <td><select className="Dropdown">
                                        <option>--</option>
                                        <option value="M">Booking Date</option>
                                        <option value="FM">Court Date</option>
                                        <option value="M">Release Date</option>
                                        <option value="FM">Huber Date</option>
                                    </select>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <table
                            style={{

                                width: '500px',
                                height: '650px',
                                marginTop: '20px',
                                marginLeft: '20px'
                            }}
                        >
                            <tbody>
                                <tr>
                                    <td><label className='label'>CountyNo</label></td>
                                    <td><input className='textbox' type="text" value="" /></td>
                                </tr>
                                <tr>
                                    <td><label className='label'>DOB</label></td>
                                    <td><input type='date'></input></td>
                                </tr>
                                <tr>
                                    <td><label className='label'>To</label></td>
                                    <td>
                                        <div style={{ display: 'flex', gap: '5px', marginTop: '8px' }}>
                                            <input type='date' />
                                            <input type='time' style={{ width: '75px' }} />
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td><label className='label'>Jacket#</label></td>
                                    <td><input className='textbox' type="text" value="" /></td>
                                </tr>
                                <tr>
                                    <td><label className='label'>Pod</label></td>
                                    <td><select id="fruits" name="fruits" multiple size="5" style={{ width: '200px', padding: '8px', overflowY: 'auto' }}>
                                        <option>Active-In</option>
                                        <option>Active-Out</option>
                                        <option>In-Progress</option>
                                        <option>Day release</option>
                                        <option>Escaped Close</option>
                                        <option></option>
                                    </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td><label className='label'>Jail Alert</label></td>
                                    <td><select id="fruits" name="fruits" multiple size="5" style={{ width: '200px', padding: '8px', overflowY: 'auto' }}>
                                        <option>Active-In</option>
                                        <option>Active-Out</option>
                                        <option>In-Progress</option>
                                        <option>Day release</option>
                                        <option>Escaped Close</option>
                                        <option></option>
                                    </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td><label className='label'>Document Type</label></td>
                                    <td><select className="Dropdown">
                                        <option>--</option>
                                        <option value="M">Booking Date</option>
                                        <option value="FM">Court Date</option>
                                        <option value="M">Release Date</option>
                                        <option value="FM">Huber Date</option>
                                    </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td><label className='label'>Special Needs Type</label></td>
                                    <td><select className="Dropdown">
                                        <option>--</option>
                                        <option value="M">Booking Date</option>
                                        <option value="FM">Court Date</option>
                                        <option value="M">Release Date</option>
                                        <option value="FM">Huber Date</option>
                                    </select>
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                    </div>
                    <div
                        style={{

                            height: '100px',
                            width: '1800px',
                            marginLeft: '100px',
                            display: 'flex',
                            gap: '50px',
                            alignItems: 'flex-start',
                        }}
                    >
                        <table >
                            <tbody>

                                <tr >
                                    <td ><label className="checkbox-label">
                                        <input type="checkbox" className="styled-checkbox" />
                                        Dispo Upadate Pending
                                    </label></td>
                                    <td><label className="checkbox-label">
                                        <input type="checkbox" className="styled-checkbox" />
                                        Eligible for Work Release
                                    </label></td>
                                    <td><label className="checkbox-label">
                                        <input type="checkbox" className="styled-checkbox" />
                                        Include All Buildings
                                    </label></td>

                                </tr>
                                <tr>
                                    <td ><label className="checkbox-label">
                                        <input type="checkbox" className="styled-checkbox" />
                                        Include Closed Bookings
                                    </label></td>
                                    <td><label className="checkbox-label">
                                        <input type="checkbox" className="styled-checkbox" />
                                        Eligible for STS
                                    </label></td>
                                    <td><label className="checkbox-label">
                                        <input type="checkbox" className="styled-checkbox" />
                                        Ready for Release
                                    </label></td>


                                </tr>
                                <tr>
                                    <td><label className="checkbox-label">
                                        <input type="checkbox" className="styled-checkbox" />
                                        Active Detainers Only
                                    </label></td>
                                    <td><label className="checkbox-label">
                                        <input type="checkbox" className="styled-checkbox" />
                                        J-Name Records Only
                                    </label></td>
                                    <td><label className="checkbox-label">
                                        <input type="checkbox" className="styled-checkbox" />
                                        Include Progress Bart
                                    </label></td>
                                </tr>
                                <tr>
                                    <td><label className="checkbox-label">
                                        <input type="checkbox" className="styled-checkbox" />
                                        Intake Cells Only
                                    </label></td>
                                    <td><label className="checkbox-label">
                                        <input type="checkbox" className="styled-checkbox" />
                                        Dna Required?
                                    </label></td>
                                </tr>



                            </tbody>
                        </table>

                    </div>
                </>
            )}
        </div>
    );
}
export default InmateSearch;