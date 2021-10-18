import React, { useState, useRef } from 'react';
import { NAVBAR_ITEM } from '../constants';

const Navbar = (props) => {

    const [isShowNavbar, setIsShowNavbar] = useState(false);
    
    const toggleShowNavbar = () => {
        setIsShowNavbar(!isShowNavbar);
    }

    return (
        <div className='row main' style={isShowNavbar ? {width: '100%'} : {width: '0'}}>
            <div>
                <button onClick={toggleShowNavbar} style={{float: 'left'}}><i class="fas fa-bars" style={{color: 'black'}}></i></button>
                <ul  className='list' >
                    {NAVBAR_ITEM.map((item, index) => (<li key={index}>{item}</li>))}
                </ul>
            </div>
        </div>        
    );
}

export default Navbar;
