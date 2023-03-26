import React from "react";
import {NavLink} from 'react-router-dom'
//import Homemainbar from "../Homemainbar/Homemainbar";
//import Homemainbar from "../Homemainbar/Homemainbar";
import '../Homemainbar/Homemainbar.css'

import './Leftsidebar.css'

const Leftsidebar=()=>{
    

    return(
        
        <div className="leftsidebar">
            
        <nav className="side-nav">
        <NavLink to='/' className="side-nav-link" activeClassName="active">
        <p>Home</p>
        </NavLink>
        <div className="side-nav-div">
        <div><p>Public</p></div>
        <NavLink to='/Questions' className="side-nav-link" activeClassName="active">
        <p style={{paddingLeft:"10px"}}>Questions</p>
        </NavLink>
        <NavLink to='/Tags' className="side-nav-link" activeClassName="active">
        <p>Tags</p>
        </NavLink>
        <NavLink to='/Users' className="side-nav-link" activeClassName="active">
        <p>Users</p>
        </NavLink>
        
        
        </div>
    
        </nav>

       
        
    </div>
    
         
 

    
    );

    
}
export default Leftsidebar