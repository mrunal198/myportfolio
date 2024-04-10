import './App.css';
import { Outlet } from 'react-router-dom';
import {React, useRef} from 'react';
import ethimg from './ethereum.png'
import solimg from './solidity.png';
import Ganacheimg from './ganache.png';
import truffleimg from './truffle.png'
import Reactimg from './react.png'
function Skills(){
    const skillsRef = useRef(null);
    return(
        <div className='skills'>
            <div ref={skillsRef}>
                <h1>Skills</h1>
                <div className='skillsbox-main'>
                <div className='skillsbox' >Ethereum<img src={ethimg}/></div>
                <div className='skillsbox1'>Solidity <img src={solimg}/></div>
                <div className='skillsbox2'>Ganache <img src={Ganacheimg}/></div>
                <div className='skillsbox3'>truffle <img src={truffleimg}/></div>
                <div className='skillsbox4'>React <img src={Reactimg}/></div>
                </div>
            </div>
        <nav>
            {/* Navigation links */}
        </nav>
        <Outlet />
        </div>
    )
}

 export default Skills;