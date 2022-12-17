import React,{useState} from 'react';
import JASONDATA from '../MOCK_DATA.json'
 const Dashboard = () => {
     const obj=[{
        numberOfClient:'Doctors',
        roleNo: 1000
     },{
      numberOfClient:'Request Pending',
      roleNo: 6
     },{
      numberOfClient:'Lawyers',
        roleNo: 1000
     },{
      numberOfClient:'CA',
        roleNo: 100
     },{
      numberOfClient:'Doctors',
        roleNo: 100
     },{
      numberOfClient:'Total Registered Students',
        roleNo: 1000
     }]
     const [searchComp,setSearchComp]=useState(false);
     const [batch,setBatch]=useState(0); 

  return (
            <>
             <h3 className='col-12 my-4 p-4 d-flex justify-content-flex-start '>Dashboard</h3>
         
              <div className='col-12 d-flex justify-content-space-evenly p-2 gap-2 my-4'>
              <input className='col-3' type="text" class="form-control" placeholder="Batch No."
                onChange={(e)=>setBatch(e.target.value)} aria-describedby="basic-addon2"/>
               <input className='col-3' type="text" class="form-control" placeholder="Name"
               aria-describedby="basic-addon2"/>
              <input className='col-3' type="text" class="form-control" placeholder="Designation"
               onChange={(e)=>setSearchComp(e.target.value)} aria-describedby="basic-addon2"/>
              <button className="btn btn-success text-white" >Search</button>
              </div>
              <br></br>
             <div className='col-12 d-flex justify-content-center flex-wrap gap-4 '>
               <tbody>
             {
                     !searchComp &&  JASONDATA.filter(val=>{
                            return searchComp.toLowerCase()==="" ? val :
                            val.name.toLowerCase().includes(searchComp.toLowerCase())

                            }).slice(0-13).map((el) => {
                            return (
                                <>
                                    <tr className='active' key={el.mobile.toString()+1}>
                                        <td scope="row">{el.name}</td>
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
             {
              obj.filter((el)=>{
               return searchComp.toLowerCase()===""|| batch==='' ? el :
               el.numberOfClient.toLowerCase().includes(searchComp.toLowerCase())

              }).map((el)=>{
                return(
                <>
                 <div className="card border border-white" key={el.roleNo.toString+1} style={{width: '18rem'}}>
                <div className='col-12 d-flex justify-content-center rounded bg-success p-2 text-dark bg-opacity-10'>
                  <img className='col-4' src='../img/user.png' alt='student'/>
                <div className="col-8 card-body ">
                    <h5 className="card-title text-success">{el.roleNo}+</h5>
                    <h6 className="card-subtitle mb-2 text-black">{el.numberOfClient}</h6>
                </div>
                </div>
             </div>
                </>
              )})
             }
            </div>
            </>

    )
}
export default Dashboard