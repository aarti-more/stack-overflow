import React,{useEffect}from "react";
import {Link , useNavigate} from 'react-router-dom'
import logo from '../../assets/stackoverflowicon.png';
import searchlogo from '../../assets/searchlogo.png';
import Avatar from '../../components/Avatar/Avatar'
import '../../components/Navbar/Navbar.css'
import { useSelector,useDispatch } from 'react-redux';
import { setCurrentUser } from "../../actions/currentUser";
import decode from 'jwt-decode'


//import {Route} from 'react-router-dom';

const Navbar=()=>{
    const navigate=useNavigate()
    const dispatch=useDispatch()
    var user=useSelector((state)=>(state.currentUserReducer))
    
    const handleLogout=()=>{
        dispatch({type:'LOGOUT'})  
        navigate('/')
        dispatch(setCurrentUser(null))      

    }

    useEffect(()=>{
        const token=user?.token
        if(token)
        {
         const decodedToken=decode(token)  
         if(decodedToken.exp*1000<new Date().getTime()) 
         {
            handleLogout()
         }
        }
        dispatch(setCurrentUser(JSON.parse(localStorage.getItem('profile'))))
    },[dispatch])// eslint-disable-line react-hooks/exhaustive-deps

    
    return(
        <nav className="main-nav">
   <div className="Navbar">
       
       <Link to='/' className="nav-item"><img src={logo} alt="logo" width='100' className="stacklogo"/></Link>
       <Link to='/About' className="nav-item nav-btn">About</Link>
       <Link to='/Products' className="nav-item nav-btn">Products</Link>
       <Link to='/For Teams' className="nav-item nav-btn">For Teams</Link>
       
       <form>
        <input type="text" placeholder="search"/>
        <img src={searchlogo} alt="searchlogo" width='18' className="searchlogo"/>


        </form>
    {user === null ? <Link to="/Auth" className='nav-item nav-link'>Log in</Link>:
    <>
    <Avatar backgroundColor="#009dff" px="10px" py="20px" fontSize="20px"  borderRadius="50%" cursor="pointer"><Link to ={`/Users/${user?.result?._id}`} style={{color:"white" ,textDecoration:"none"}}>{user.result.name.charAt(0).toUpperCase()}</Link></Avatar>
    <button className="nav-item nav-link" onClick={handleLogout}>Log Out</button>
    </>
    }
    </div>
    </nav>
    )
}

export default Navbar
