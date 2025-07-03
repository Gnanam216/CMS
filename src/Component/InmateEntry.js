




function InmateEntry() {
    return (
        <div>
            <table style={{ border: '1px solid black', width: '750px', height: '600px', marginLeft: '20px' }}>
                <tr>
                    <td><label>SPN</label></td>
                    <td><input type="text" /></td>
                </tr>
                <tr>
                    <td><label>Name</label></td>
                    <td>
                        <div style={{ display: 'flex', gap: '1px', alignItems: 'center', marginTop: '0px' }}>
                            <input type="text" style={{ width: '25px' }} />
                            <input type="text" style={{ width: '100px' }} />
                            <input type="text" />
                            <input type="text" />
                            <input type="text" style={{ width: '100px' }} />
                            <input type="text" style={{ width: '100px' }} />
                            <img
                                src="/Images/search.png"
                                alt="Search"
                                style={{ width: '24px', height: '24px', cursor: 'pointer' }}
                            />
                        </div>
                    </td>


                </tr>
            </table>
        </div>
    )
}
export default InmateEntry;