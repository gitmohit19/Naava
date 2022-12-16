import React from 'react';
import CardHeader from 'react-bootstrap/esm/CardHeader';
import {  Menu } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import {  Route, Routes } from 'react-router-dom';
import { Approval } from './Approval';
import { Contact } from './Contact';
import Dashboard  from './Dashboard';
import { Members } from './Members';

 const SidebarComp = (props) => {


  return (
            <>
           <div className='col-12'  style={{ display: 'flex', height: '100vh' }}>
               
                <aside className='bg-success text-white col-2 '>
                    <CardHeader className='d-flex justify-content-center align-items-center my-2'  >
                       <img className='mx-2 my-2 rounded' src='../img/img2.png' alt='logo' style={{width:'50px',alignItems:'center' }}/>
                       <img className='my-2 rounded' src='../img/img1.png' style={{width:'50px',alignItems:'center',height:'30px' }} alt='logo'/>
                    </CardHeader>
                    <hr className='p-1 row mx-md-5'/>
                    <header className='d-flex justify-content-center'>
                        <h5>{props.name} <br></br><br></br>{props.role}</h5>
                    </header>
                    <hr className='p-1 row mx-md-5'/>
                    <Menu className='' >
                    <Link to="/dashboard" style={{color:'white' ,textDecoration:'none' }}>Dashboard</Link>
                    <br></br><br></br><br></br>
                    <Link to="/approval" style={{color:'white' ,textDecoration:'none'}}>Approval</Link>
                    <br></br><br></br><br></br>
                    <Link to="/contact" style={{color:'white' ,textDecoration:'none'}}>Contact us</Link>
                    <br></br><br></br><br></br>
                    <Link to="/member" style={{color:'white' ,textDecoration:'none'}}>Members</Link>

                    </Menu>
                </aside>
                <div className='col-10'>
                <Routes>
                    <Route path='/dashboard' element={<Dashboard/>}></Route>
                    <Route path='/approval' element={<Approval/>}></Route>
                    <Route path='/contact' element={<Contact/>}></Route>
                    <Route path='/member' element={<Members/>}></Route>

                </Routes>
                </div>
              
           </div>
            </>
    )
}
export default SidebarComp;