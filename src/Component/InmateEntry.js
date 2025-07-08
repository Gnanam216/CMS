import './InmateEntry.css'




function InmateEntry() {
    return (
        // <div style={{ padding: '20px' }}>
        //     <table style={{ border: '1px solid black', width: '750px', height: '600px', marginLeft: '5px' }}>
        //         <tbody>
        //             <tr>
        //                 <td><label>SPN</label></td>
        //                 <td><input type="text" /></td>
        //             </tr>
        //             <tr>
        //                 <td><div style={{ marginTop: '15px' }}><label>Name</label></div></td>
        //                 <td>
        //                     <div style={{ display: 'flex', alignItems: 'center', marginTop: '0px', gap: '0px' }}>
        //                         <div>
        //                             <label>ID</label><br />
        //                             <input type="text" style={{ width: '25px' }} />
        //                         </div>
        //                         <div>
        //                             <label>Last</label><br />
        //                             <input type="text" style={{ width: '100px' }} />
        //                         </div>
        //                         <div>
        //                             <label>First</label><br />
        //                             <input type="text" />
        //                         </div>
        //                         <div>
        //                             <label>Middle</label><br />
        //                             <input type="text" />
        //                         </div>
        //                         <div style={{ marginLeft: '0px' }}>
        //                             <label>Suffix</label><br />
        //                             <input type="text" style={{ width: '100px' }} />
        //                         </div>
        //                     </div>
        //                 </td>
        //                 </tr>
        //                 <tr>
        //                     <td style={{marginLeft:'100px'}}>CMS Booking#</td>
        //                     <td><input type="text"></input></td>
        //                     <td>Sex/Race</td>
        //                     <td><label >N/A N/A</label></td>
        //                     <td>Inmate Type</td>
        //                     <td><td><label>N/A N/A</label></td></td>
        //                 </tr>
        //                 <tr>
        //                     <td>Assigned Cell</td>
        //                     <td>N/A N/A</td>
        //                     <td>DOB</td>
        //                     <td>N/A N/A</td>
        //                     <td>Confine Reasons</td>
        //                     <td>N/A N/A</td>
        //                 </tr>
        //                 <tr>
        //                     <td>Current Location</td>
        //                     <td>N/A N/A</td>
        //                     <td>Physical</td>
        //                     <td>N/A N/A</td>
        //                     <td>Sentance Status</td>
        //                     <td>N/A N/A</td>
        //                 </tr>

        //         </tbody>
        //     </table>

        // </div>
        <>
            <div>

            </div>

            <div className='container'>
                <div><label>SPN</label></div>
                <div style={{ marginRight: '450px' }}><input type="text" /></div>
                <div style={{ marginTop: '15px' }}><label>Name</label></div>
                <div><div style={{ display: 'flex', alignItems: 'center', marginTop: '0px', gap: '0px' }}>
                    <div>
                        <label>ID</label><br />
                        <input type="text" style={{ width: '25px' }} />
                    </div>
                    <div>
                        <label>Last</label><br />
                        <input type="text" style={{ width: '100px' }} />
                    </div>
                    <div>
                        <label>First</label><br />
                        <input type="text" />
                    </div>
                    <div>
                        <label>Middle</label><br />
                        <input type="text" />
                    </div>
                    <div style={{ marginLeft: '0px' }}>
                        <label>Suffix</label><br />
                        <input type="text" style={{ width: '100px' }} />
                    </div>
                </div></div>

                <div><label>CMS Booking#</label></div>
                <div style={{ marginRight: '450px' }}> <input type="text" /></div>
                <div><label>Sex/Race</label></div>
                <div style={{ marginRight: '450px' }}><label>N/A N/A</label></div>
                <div><label>Inmate Type</label></div>
                <div style={{ marginRight: '450px' }}><label>N/A N/A</label></div>
                <div><label>Assigned Cell</label></div>
                <div style={{ marginRight: '450px' }}><label>N/A N/A</label></div>
                <div><label>DOB</label></div>
                <div style={{ marginRight: '450px' }}><label>N/A N/A</label></div>
                <div><label>Confine Reason</label></div>
                <div style={{ marginRight: '450px' }}><label>N/A N/A</label></div>
                <div><label>Current Loc</label></div>
                <div style={{ marginRight: '450px' }}><label>N/A N/A</label></div>
                <div><label>Physical</label></div>
                <div style={{ marginRight: '450px' }}><label>N/A N/A</label></div>
                <div><label>Sentence Status</label></div>
                <div style={{ marginRight: '450px' }}><label>N/A N/A</label></div>
                <div><label>Jail Alert</label></div>
                <div></div>
            </div>

        </>
    )
}
export default InmateEntry;