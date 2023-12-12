import React from 'react'
import Agenda from './Agenda/agenda-component.js'
import Navbar from './Navbar/navbar.js'

function App() {
    return (
        <div className="App">
            <div className="content">
                <Navbar />
                <Agenda />
            </div>
            
        </div>
        
    );
}

export default App;
