import React from 'react';

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
  return (
            <>
             <h3 className='d-flex justify-content-start my-4 p-4 '>Dashboard</h3>
         
              <div className='col-12 d-flex justify-content-space-evenly p-2 gap-2 my-4'>
              <input className='col-3' type="text" class="form-control" placeholder="Batch No."
               aria-describedby="basic-addon2"/>
               <input className='col-3' type="text" class="form-control" placeholder="Name"
               aria-describedby="basic-addon2"/>
              <input className='col-3' type="text" class="form-control" placeholder="Designation"
               aria-describedby="basic-addon2"/>
              <button className="btn btn-success text-white">Search</button>
              </div>
              <br></br>
             <div className='col-12 d-flex justify-content-center flex-wrap gap-4 '>
             {
              obj.map((el)=>{
                return(
                <>
                 <div className="card border border-white" style={{width: '18rem'}}>
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