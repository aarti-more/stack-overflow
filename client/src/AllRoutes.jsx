import React from "react";
import {Routes, Route} from 'react-router-dom';
import Home from './Pages/Home/Home';
import Auth from './Pages/Auth/Auth';
import Questions from './Pages/Questions/Questions'
import AskQuestion from './Pages/AskQuestion/AskQuestion'
import DisplayQuestion from "./Pages/Questions/DisplayQuestion";
import Tags from './Pages/Tags/Tags'
import Users from './Pages/Users/Users'
import UsersProfile from "./Pages/UsersProfile/UsersProfile";
const AllRoutes =()=>{
    return(
        <div>
            
            <Routes>
            <Route  path='/' element={<Home/>} ></Route>
            <Route  path='/Auth' element={<Auth/>} ></Route>
            <Route  path='/Questions' element={<Questions/>}></Route>
            <Route   path='/AskQuestion' element={<AskQuestion/>}></Route>
            <Route   path='/Question/:id' element={<DisplayQuestion/>}></Route>
            <Route  path='/Tags' element={<Tags/>}></Route>
            <Route path='/Users' element={<Users/>}></Route>
            <Route path='/Users/:id' element={<UsersProfile/>}></Route>
            </Routes>
            
        
        </div>
    );
}
export default AllRoutes