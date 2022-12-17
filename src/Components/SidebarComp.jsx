import React from 'react';
import CardHeader from 'react-bootstrap/esm/CardHeader';
import {  Menu } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import {  Route, Routes } from 'react-router-dom';
import { AddNew } from './AddNew';
import { Approval } from './Approval';
import { Contact } from './Contact';
import Dashboard  from './Dashboard';
import DashboardStudent from './DashboardStudent';
import { Members } from './Members';
import DropdowmComp from './DropdowmComp';

 const SidebarComp = (props) => {
    
      
  return (
            <>
            <div className="col-12 d-flex">
               <div className="col-3">
                <aside className='bg-success text-white col-2 ' style={{width:'100%',height:'100vh'}}>
                    <CardHeader className='d-flex justify-content-center align-items-center'  >
                       <img className='my-2 rounded' src='../img/img2.png' alt='logo' style={{width:'50px',alignItems:'center' }}/>
                       <img className='my-2 rounded' src='../img/img1.png' style={{width:'50px',alignItems:'center',height:'30px' }} alt='logo'/>
                    </CardHeader>
                   
                    <hr className='p-1 row mx-md-5'/>
                         <DropdowmComp/>   
                         <br></br><br></br><br></br>                  
                    <hr className='p-1 row mx-md-5'/>
                    
                     

                    <Menu className='' >
                    <Link to="/approval" style={{color:'white' ,textDecoration:'none'}}>Approval</Link>
                    <br></br><br></br><br></br>
                    <Link to="/contact" style={{color:'white' ,textDecoration:'none'}}>Contact us</Link>
                    <br></br><br></br><br></br>
                    <Link to="/member" style={{color:'white' ,textDecoration:'none'}}>Members</Link>
                    <br></br><br></br><br></br>
                    </Menu>
                </aside>
                </div>
                <div className='col-9'>
                <Routes>
                    <Route path='/dashboard' element={<Dashboard/>}></Route>
                    <Route path='/approval' element={<Approval/>}></Route>
                    <Route path='/contact' element={<Contact/>}></Route>
                    <Route path='/member' element={<Members/>}></Route>
                    <Route path='/student' element={<DashboardStudent />}></Route>
                    <Route path='/addnew' element={<AddNew/>}></Route>
                </Routes>
                </div>
                </div>
           
            </>
    )
}
export default SidebarComp;