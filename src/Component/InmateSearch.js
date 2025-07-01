function inmateSearch() {
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
                        <td><button className='button'>Add New</button></td>
                        <td><button className='button'>Reset</button></td>
                        <td><button className='button'>Back</button></td>
                        <td><button className='button'>Search</button></td>
                        <td><button className='button'>Back</button></td>
                    </tr>
                </table>
            </div>
            <div>
                <table style={{ marginLeft: '100px' }}>
                    <tr>

                        <td><button className='tabbutton'>Basic</button></td>
                        <td><button className='tabbutton'>Advanced</button></td>
                        <td> <button className='tabbutton'>QA Form</button></td>

                    </tr>
                </table>
            </div>
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
                        border: '2px solid green',
                        width: '450px',
                        height: '650px',
                        marginTop: '20px',
                        marginLeft:'20px'
                    }}
                >
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>2</td>
                            <td>3</td>
                        </tr>
                    </tbody>
                </table>

                <table
                    style={{
                        border: '2px solid green',
                        width: '450px',
                        height: '650px',
                        marginTop: '20px',
                        marginLeft:'20px'
                    }}
                >
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>2</td>
                            <td>3</td>
                        </tr>
                    </tbody>
                </table>
                 <table
                    style={{
                        border: '2px solid green',
                        width: '450px',
                        height: '650px',
                        marginTop: '20px',
                        marginLeft:'20px'
                    }}
                >
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>2</td>
                            <td>3</td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
    );
}
export default inmateSearch;