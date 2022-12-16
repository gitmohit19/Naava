import React from 'react';

 const Dashboard = () => {
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
             <div class="card border border-white" style={{width: '18rem'}}>
                <div className='col-12 d-flex justify-content-center rounded bg-success p-2 text-dark bg-opacity-10'>
                  <img className='col-4' src='../img/user.png' alt='student'/>
                <div class="col-8 card-body ">
                    <h5 class="card-title text-success">1000+</h5>
                    <h6 class="card-subtitle mb-2 text-black">Total Registered Students</h6>
                </div>
                </div>
             </div>
             <div class="card border border-white rounded bg-success p-2 text-dark bg-opacity-10" style={{width: '18rem'}}>
                <div className='col-12 d-flex justify-content-center'>
                  <img className='col-4' src='../img/user.png' alt='student'/>
                <div class="col-8 card-body">
                    <h5 class="card-title text-success">6</h5>
                    <h6 class="card-subtitle mb-2 text-black">Request Pending</h6>
                </div>
                </div>
             </div>
             <div class="card border border-white bg-success rounded p-2 text-dark bg-opacity-10 " style={{width: '18rem'}}>
                <div className='col-12 d-flex justify-content-center'>
                  <img className='col-4' src='../img/user.png' alt='student'/>
                <div class="col-8 card-body">
                    <h5 class="card-title text-success">500+</h5>
                    <h6 class="card-subtitle mb-2 text-black">CA</h6>
                </div>
                </div>
             </div>
             <div class="card border border-white bg-success rounded p-2 text-dark bg-opacity-10 " style={{width: '18rem'}}>
                <div className='col-12 d-flex justify-content-center'>
                  <img className='col-4' src='../img/user.png' alt='student'/>
                <div class="col-8 card-body">
                    <h5 class="card-title text-success">100+</h5>
                    <h6 class="card-subtitle mb-2 text-black">Lawyers</h6>
                </div>
                </div>
             </div>
             <div class="card border border-white bg-success rounded p-2 text-dark bg-opacity-10" style={{width: '18rem'}}>
                <div className='col-12 d-flex justify-content-center'>
                  <img className='col-4' src='../img/user.png' alt='student'/>
                <div class="col-8 card-body">
                    <h5 class="card-title text-success">100+</h5>
                    <h6 class="card-subtitle mb-2 text-black">Doctors</h6>
                </div>
                </div>
             </div>
             <div class="card border border-white bg-success rounded p-2 text-dark bg-opacity-10" style={{width: '18rem'}}>
                <div className='col-12 d-flex justify-content-center'>
                  <img className='col-4' src='../img/user.png' alt='student'/>
                <div class="col-8 card-body">
                    <h5 class="card-title text-success">100+</h5>
                    <h6 class="card-subtitle mb-2 text-black"> Doctors</h6>
                </div>
                </div>
             </div>
             
             </div>

            </>

    )
}
export default Dashboard