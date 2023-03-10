import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import JSONDATA from '../MOCK_DATA.json'
const DashboardStudent = () => {
    const [search,setSearch]=useState("");
  
    return (
        <>
          <h3 className='col-12 d-flex justify-content-start p-2'>Doctor</h3>
                <span className='d-flex flex-flow-wrap float-left m-4'>Show: <br></br>
                <input className='mx-4' type="number" placeholder='12'/> <br></br>
                <input className='mx-4 gap-4' type="text" placeholder='Search' onChange={(e)=>setSearch(e.target.value)}/>
                <br></br>   <Link  className="btn btn-success" to='/addnew'>Add New</Link>            
                </span>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Batch No.</th>
                        <th scope="col">Location</th>
                        <th scope="col">Experience</th>
                        <th scope="col">Mobile No.</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        JSONDATA.filter(val=>{
                            return search.toLowerCase()==="" ? val :
                            val.name.toLowerCase().slice(0-4).includes(search.toLowerCase())

                            }).slice(0-12).map((el) => {
                            return (
                                <>
                                    <tr className='active' key={el.mobile.toString()+1}>
                                        <td >{el.name}</td>
                                        <td>{el.batch}</td>
                                        <td>{el.location}</td>
                                        <td>{el.experience} year</td>
                                        <td>{el.mobile}3</td>
                                    </tr>
                                </>
                            )
                        })
                    }
                </tbody>
            </table>

        </>
    )
}

 export default DashboardStudent